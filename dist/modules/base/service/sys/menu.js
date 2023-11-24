"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseSysMenuService = void 0;
const core_1 = require("@midwayjs/core");
const decorator_1 = require("@midwayjs/decorator");
const core_2 = require("@cool-midway/core");
const typeorm_1 = require("@midwayjs/typeorm");
const typeorm_2 = require("typeorm");
const menu_1 = require("../../entity/sys/menu");
const _ = require("lodash");
const perms_1 = require("./perms");
const data_1 = require("./data");
// eslint-disable-next-line node/no-unpublished-import
const ts = require("typescript");
const fs = require("fs");
const pathUtil = require("path");
/**
 * 菜单
 */
let BaseSysMenuService = class BaseSysMenuService extends core_2.BaseService {
    /**
     * 获得所有菜单
     */
    async list() {
        const menus = await this.getMenus(this.ctx.admin.roleIds, this.ctx.admin.username === 'admin');
        if (!_.isEmpty(menus)) {
            menus.forEach(e => {
                const parentMenu = menus.filter(m => {
                    e.parentId = parseInt(e.parentId);
                    if (e.parentId == m.id) {
                        return m.name;
                    }
                });
                if (!_.isEmpty(parentMenu)) {
                    e.parentName = parentMenu[0].name;
                }
            });
        }
        return menus;
    }
    /**
     * 修改之后
     * @param param
     */
    async modifyAfter(param) {
        if (param.id) {
            await this.refreshPerms(param.id);
        }
    }
    /**
     * 根据角色获得权限信息
     * @param {[]} roleIds 数组
     */
    async getPerms(roleIds) {
        let perms = [];
        if (!_.isEmpty(roleIds)) {
            const result = await this.nativeQuery(`SELECT a.perms FROM base_sys_menu a ${this.setSql(!roleIds.includes('1'), 'JOIN base_sys_role_menu b on a.id = b.menuId AND b.roleId in (?)', [roleIds])}
            where 1=1 and a.perms is not NULL
            `, [roleIds]);
            if (result) {
                result.forEach(d => {
                    if (d.perms) {
                        perms = perms.concat(d.perms.split(','));
                    }
                });
            }
            perms = _.uniq(perms);
            perms = _.remove(perms, n => {
                return !_.isEmpty(n);
            });
        }
        return _.uniq(perms);
    }
    /**
     * 获得用户菜单信息
     * @param roleIds
     * @param isAdmin 是否是超管
     */
    async getMenus(roleIds, isAdmin) {
        return await this.nativeQuery(`
        SELECT
            a.*
        FROM
            base_sys_menu a
        ${this.setSql(!isAdmin, 'JOIN base_sys_role_menu b on a.id = b.menuId AND b.roleId in (?)', [roleIds])}
        GROUP BY a.id
        ORDER BY
            orderNum ASC`);
    }
    /**
     * 删除
     * @param ids
     */
    async delete(ids) {
        let idArr;
        if (ids instanceof Array) {
            idArr = ids;
        }
        else {
            idArr = ids.split(',');
        }
        for (const id of idArr) {
            await this.baseSysMenuEntity.delete({ id });
            await this.delChildMenu(id);
        }
    }
    /**
     * 删除子菜单
     * @param id
     */
    async delChildMenu(id) {
        await this.refreshPerms(id);
        const delMenu = await this.baseSysMenuEntity.findBy({ parentId: id });
        if (_.isEmpty(delMenu)) {
            return;
        }
        const delMenuIds = delMenu.map(e => {
            return e.id;
        });
        await this.baseSysMenuEntity.delete(delMenuIds);
        for (const menuId of delMenuIds) {
            await this.delChildMenu(menuId);
        }
    }
    /**
     * 更新权限
     * @param menuId
     */
    async refreshPerms(menuId) {
        const users = await this.nativeQuery('select b.userId from base_sys_role_menu a left join base_sys_user_role b on a.roleId = b.roleId where a.menuId = ? group by b.userId', [menuId]);
        // 刷新admin权限
        await this.baseSysPermsService.refreshPerms(1);
        if (!_.isEmpty(users)) {
            // 刷新其他权限
            for (const user of users) {
                await this.baseSysPermsService.refreshPerms(user.userId);
            }
        }
    }
    /**
     * 解析实体和Controller
     * @param entityString
     * @param controller
     * @param module
     */
    async parse(entityString, controller, module) {
        const tempDataSource = new data_1.TempDataSource({
            ...this.config.typeorm.dataSource.default,
            entities: [],
        });
        // 连接数据库
        await tempDataSource.initialize();
        const { newCode, className, oldTableName } = this.parseCode(entityString);
        const code = ts.transpile(`${newCode}
        tempDataSource.options.entities.push(${className})
        `, {
            emitDecoratorMetadata: true,
            module: ts.ModuleKind.CommonJS,
            target: ts.ScriptTarget.ES2018,
            removeComments: true,
            experimentalDecorators: true,
            noImplicitThis: true,
            noUnusedLocals: true,
            stripInternal: true,
            skipLibCheck: true,
            pretty: true,
            declaration: true,
            noImplicitAny: false,
        });
        eval(code);
        await tempDataSource.buildMetadatas();
        const meta = tempDataSource.getMetadata(className);
        const columnArr = meta.columns;
        await tempDataSource.destroy();
        const commColums = [];
        const columns = _.filter(columnArr.map(e => {
            return {
                propertyName: e.propertyName,
                type: typeof e.type == 'string' ? e.type : e.type.name.toLowerCase(),
                length: e.length,
                comment: e.comment,
                nullable: e.isNullable,
            };
        }), o => {
            if (['createTime', 'updateTime'].includes(o.propertyName)) {
                commColums.push(o);
            }
            return o && !['createTime', 'updateTime'].includes(o.propertyName);
        }).concat(commColums);
        if (!controller) {
            const tableNames = oldTableName.split('_');
            const fileName = tableNames[tableNames.length - 1];
            return {
                columns,
                className: className.replace('TEMP', ''),
                tableName: oldTableName,
                fileName,
                path: `/admin/${module}/${fileName}`,
            };
        }
        const fileName = await this.fileName(controller);
        return {
            columns,
            path: `/admin/${module}/${fileName}`,
        };
    }
    /**
     * 解析Entity类名
     * @param code
     * @returns
     */
    parseCode(code) {
        try {
            const oldClassName = code
                .match('class(.*)extends')[1]
                .replace(/\s*/g, '');
            const oldTableStart = code.indexOf('@Entity(');
            const oldTableEnd = code.indexOf(')');
            const oldTableName = code
                .substring(oldTableStart + 9, oldTableEnd - 1)
                .replace(/\s*/g, '')
                // eslint-disable-next-line no-useless-escape
                .replace(/\"/g, '')
                // eslint-disable-next-line no-useless-escape
                .replace(/\'/g, '');
            const className = `${oldClassName}TEMP`;
            return {
                newCode: code
                    .replace(oldClassName, className)
                    .replace(oldTableName, `func_${oldTableName}`),
                className,
                tableName: `func_${oldTableName}`,
                oldTableName,
            };
        }
        catch (err) {
            throw new core_2.CoolCommException('代码结构不正确，请检查');
        }
    }
    /**
     *  创建代码
     * @param body body
     */
    async create(body) {
        const { module, entity, controller, fileName } = body;
        const basePath = this.app.getBaseDir();
        // const fileName = await this.fileName(controller);
        // 生成Entity
        const entityPath = pathUtil.join(basePath, 'modules', module, 'entity', `${fileName}.ts`);
        // 生成Controller
        const controllerPath = pathUtil.join(basePath, 'modules', module, 'controller', 'admin', `${fileName}.ts`);
        this.createConfigFile(module);
        this.createFile(entityPath, entity);
        this.createFile(controllerPath, controller);
    }
    /**
     * 创建配置文件
     * @param module
     */
    async createConfigFile(module) {
        const basePath = this.app.getBaseDir();
        const configFilePath = pathUtil.join(basePath, 'modules', module, 'config.ts');
        if (!fs.existsSync(configFilePath)) {
            const data = `import { ModuleConfig } from '@cool-midway/core';

/**
 * 模块配置
 */
export default () => {
  return {
    // 模块名称
    name: 'xxx',
    // 模块描述
    description: 'xxx',
    // 中间件，只对本模块有效
    middlewares: [],
    // 中间件，全局有效
    globalMiddlewares: [],
    // 模块加载顺序，默认为0，值越大越优先加载
    order: 0,
  } as ModuleConfig;
};
`;
            await this.createFile(configFilePath, data);
        }
    }
    /**
     * 找到文件名
     * @param controller
     * @returns
     */
    async fileName(controller) {
        const regex = /import\s*{\s*\w+\s*}\s*from\s*'[^']*\/([\w-]+)';/;
        const match = regex.exec(controller);
        if (match && match.length > 1) {
            return match[1];
        }
        return null;
    }
    /**
     * 创建文件
     * @param filePath
     * @param content
     */
    async createFile(filePath, content) {
        const folderPath = pathUtil.dirname(filePath);
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }
        fs.writeFileSync(filePath, content);
    }
    /**
     * 导出菜单
     * @param ids
     * @returns
     */
    async export(ids) {
        const result = [];
        const menus = await this.baseSysMenuEntity.findBy({ id: (0, typeorm_2.In)(ids) });
        // 递归取出子菜单
        const getChildMenus = (parentId) => {
            const children = _.remove(menus, e => e.parentId == parentId);
            children.forEach(child => {
                child.childMenus = getChildMenus(child.id);
                // 删除不需要的字段
                delete child.id;
                delete child.createTime;
                delete child.updateTime;
                delete child.parentId;
            });
            return children;
        };
        // lodash取出父级菜单(parentId为 null)， 并从menus 删除
        const parentMenus = _.remove(menus, e => {
            return e.parentId == null;
        });
        // 对于每个父级菜单，获取它的子菜单
        parentMenus.forEach(parent => {
            parent.childMenus = getChildMenus(parent.id);
            // 删除不需要的字段
            delete parent.id;
            delete parent.createTime;
            delete parent.updateTime;
            delete parent.parentId;
            result.push(parent);
        });
        return result;
    }
    /**
     * 导入
     * @param menus
     */
    async import(menus) {
        // 递归保存子菜单
        const saveChildMenus = async (parentMenu, parentId) => {
            const children = parentMenu.childMenus || [];
            for (let child of children) {
                const childData = { ...child, parentId: parentId }; // 保持与数据库的parentId字段的一致性
                delete childData.childMenus; // 删除childMenus属性，因为我们不想将它保存到数据库中
                // 保存子菜单并获取其ID，以便为其子菜单设置parentId
                const savedChild = await this.baseSysMenuEntity.save(childData);
                if (!_.isEmpty(child.childMenus)) {
                    await saveChildMenus(child, savedChild.id);
                }
            }
        };
        for (let menu of menus) {
            const menuData = { ...menu };
            delete menuData.childMenus; // 删除childMenus属性，因为我们不想将它保存到数据库中
            // 保存主菜单并获取其ID
            const savedMenu = await this.baseSysMenuEntity.save(menuData);
            if (menu.childMenus && menu.childMenus.length > 0) {
                await saveChildMenus(menu, savedMenu.id);
            }
        }
    }
};
exports.BaseSysMenuService = BaseSysMenuService;
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], BaseSysMenuService.prototype, "ctx", void 0);
__decorate([
    (0, typeorm_1.InjectEntityModel)(menu_1.BaseSysMenuEntity),
    __metadata("design:type", typeorm_2.Repository)
], BaseSysMenuService.prototype, "baseSysMenuEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", perms_1.BaseSysPermsService)
], BaseSysMenuService.prototype, "baseSysPermsService", void 0);
__decorate([
    (0, decorator_1.Config)(decorator_1.ALL),
    __metadata("design:type", Object)
], BaseSysMenuService.prototype, "config", void 0);
__decorate([
    (0, core_1.App)(),
    __metadata("design:type", Object)
], BaseSysMenuService.prototype, "app", void 0);
exports.BaseSysMenuService = BaseSysMenuService = __decorate([
    (0, core_1.Scope)(core_1.ScopeEnum.Request, { allowDowngrade: true }),
    (0, decorator_1.Provide)()
], BaseSysMenuService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2Jhc2Uvc2VydmljZS9zeXMvbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBMkU7QUFDM0UsbURBQW1FO0FBQ25FLDRDQUFtRTtBQUNuRSwrQ0FBc0Q7QUFDdEQscUNBQXlDO0FBQ3pDLGdEQUEwRDtBQUMxRCw0QkFBNEI7QUFDNUIsbUNBQThDO0FBRTlDLGlDQUF3QztBQUN4QyxzREFBc0Q7QUFDdEQsaUNBQWlDO0FBQ2pDLHlCQUF5QjtBQUN6QixpQ0FBaUM7QUFFakM7O0dBRUc7QUFHSSxJQUFNLGtCQUFrQixHQUF4QixNQUFNLGtCQUFtQixTQUFRLGtCQUFXO0lBZ0JqRDs7T0FFRztJQUNILEtBQUssQ0FBQyxJQUFJO1FBQ1IsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsS0FBSyxPQUFPLENBQ3BDLENBQUM7UUFDRixJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNyQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNoQixNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNsQyxDQUFDLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFO3dCQUN0QixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7cUJBQ2Y7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQzFCLENBQUMsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztpQkFDbkM7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLO1FBQ3JCLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRTtZQUNaLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPO1FBQ3BCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3ZCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FDbkMsdUNBQXVDLElBQUksQ0FBQyxNQUFNLENBQ2hELENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFDdEIsa0VBQWtFLEVBQ2xFLENBQUMsT0FBTyxDQUFDLENBQ1Y7O2FBRUksRUFDTCxDQUFDLE9BQU8sQ0FBQyxDQUNWLENBQUM7WUFDRixJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNqQixJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUU7d0JBQ1gsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDMUM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUNELEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RCLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU87UUFDN0IsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUM7Ozs7O1VBS3hCLElBQUksQ0FBQyxNQUFNLENBQ1gsQ0FBQyxPQUFPLEVBQ1Isa0VBQWtFLEVBQ2xFLENBQUMsT0FBTyxDQUFDLENBQ1Y7Ozt5QkFHZ0IsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUc7UUFDZCxJQUFJLEtBQUssQ0FBQztRQUNWLElBQUksR0FBRyxZQUFZLEtBQUssRUFBRTtZQUN4QixLQUFLLEdBQUcsR0FBRyxDQUFDO1NBQ2I7YUFBTTtZQUNMLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsS0FBSyxNQUFNLEVBQUUsSUFBSSxLQUFLLEVBQUU7WUFDdEIsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM1QyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFO1FBQzNCLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QixNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdEIsT0FBTztTQUNSO1FBQ0QsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRCxLQUFLLE1BQU0sTUFBTSxJQUFJLFVBQVUsRUFBRTtZQUMvQixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNO1FBQ3ZCLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FDbEMsc0lBQXNJLEVBQ3RJLENBQUMsTUFBTSxDQUFDLENBQ1QsQ0FBQztRQUNGLFlBQVk7UUFDWixNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDckIsU0FBUztZQUNULEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFO2dCQUN4QixNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzFEO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQW9CLEVBQUUsVUFBa0IsRUFBRSxNQUFjO1FBQ2xFLE1BQU0sY0FBYyxHQUFHLElBQUkscUJBQWMsQ0FBQztZQUN4QyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1lBQ3pDLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQyxDQUFDO1FBQ0gsUUFBUTtRQUNSLE1BQU0sY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xDLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUUsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FDdkIsR0FBRyxPQUFPOytDQUMrQixTQUFTO1NBQy9DLEVBQ0g7WUFDRSxxQkFBcUIsRUFBRSxJQUFJO1lBQzNCLE1BQU0sRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVE7WUFDOUIsTUFBTSxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTTtZQUM5QixjQUFjLEVBQUUsSUFBSTtZQUNwQixzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLGFBQWEsRUFBRSxJQUFJO1lBQ25CLFlBQVksRUFBRSxJQUFJO1lBQ2xCLE1BQU0sRUFBRSxJQUFJO1lBQ1osV0FBVyxFQUFFLElBQUk7WUFDakIsYUFBYSxFQUFFLEtBQUs7U0FDckIsQ0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1gsTUFBTSxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEMsTUFBTSxJQUFJLEdBQUcsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQy9CLE1BQU0sY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRS9CLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUN0QixNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUN0QixTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLE9BQU87Z0JBQ0wsWUFBWSxFQUFFLENBQUMsQ0FBQyxZQUFZO2dCQUM1QixJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU07Z0JBQ2hCLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTztnQkFDbEIsUUFBUSxFQUFFLENBQUMsQ0FBQyxVQUFVO2FBQ3ZCLENBQUM7UUFDSixDQUFDLENBQUMsRUFDRixDQUFDLENBQUMsRUFBRTtZQUNGLElBQUksQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDekQsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQjtZQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNyRSxDQUFDLENBQ0YsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE1BQU0sVUFBVSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0MsTUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbkQsT0FBTztnQkFDTCxPQUFPO2dCQUNQLFNBQVMsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7Z0JBQ3hDLFNBQVMsRUFBRSxZQUFZO2dCQUN2QixRQUFRO2dCQUNSLElBQUksRUFBRSxVQUFVLE1BQU0sSUFBSSxRQUFRLEVBQUU7YUFDckMsQ0FBQztTQUNIO1FBQ0QsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELE9BQU87WUFDTCxPQUFPO1lBQ1AsSUFBSSxFQUFFLFVBQVUsTUFBTSxJQUFJLFFBQVEsRUFBRTtTQUNyQyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxTQUFTLENBQUMsSUFBWTtRQUNwQixJQUFJO1lBQ0YsTUFBTSxZQUFZLEdBQUcsSUFBSTtpQkFDdEIsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM1QixPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZCLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0MsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUV0QyxNQUFNLFlBQVksR0FBRyxJQUFJO2lCQUN0QixTQUFTLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRSxXQUFXLEdBQUcsQ0FBQyxDQUFDO2lCQUM3QyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztnQkFDcEIsNkNBQTZDO2lCQUM1QyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztnQkFDbkIsNkNBQTZDO2lCQUM1QyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3RCLE1BQU0sU0FBUyxHQUFHLEdBQUcsWUFBWSxNQUFNLENBQUM7WUFDeEMsT0FBTztnQkFDTCxPQUFPLEVBQUUsSUFBSTtxQkFDVixPQUFPLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQztxQkFDaEMsT0FBTyxDQUFDLFlBQVksRUFBRSxRQUFRLFlBQVksRUFBRSxDQUFDO2dCQUNoRCxTQUFTO2dCQUNULFNBQVMsRUFBRSxRQUFRLFlBQVksRUFBRTtnQkFDakMsWUFBWTthQUNiLENBQUM7U0FDSDtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osTUFBTSxJQUFJLHdCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSTtRQUNmLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDdEQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN2QyxvREFBb0Q7UUFDcEQsV0FBVztRQUNYLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQzlCLFFBQVEsRUFDUixTQUFTLEVBQ1QsTUFBTSxFQUNOLFFBQVEsRUFDUixHQUFHLFFBQVEsS0FBSyxDQUNqQixDQUFDO1FBQ0YsZUFBZTtRQUNmLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQ2xDLFFBQVEsRUFDUixTQUFTLEVBQ1QsTUFBTSxFQUNOLFlBQVksRUFDWixPQUFPLEVBQ1AsR0FBRyxRQUFRLEtBQUssQ0FDakIsQ0FBQztRQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQWM7UUFDbkMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN2QyxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUNsQyxRQUFRLEVBQ1IsU0FBUyxFQUNULE1BQU0sRUFDTixXQUFXLENBQ1osQ0FBQztRQUNGLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ2xDLE1BQU0sSUFBSSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBbUJsQixDQUFDO1lBQ0ksTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFrQjtRQUMvQixNQUFNLEtBQUssR0FBRyxrREFBa0QsQ0FBQztRQUNqRSxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXJDLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pCO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBZ0IsRUFBRSxPQUFlO1FBQ2hELE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDOUIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUMvQztRQUNELEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFhO1FBQ3hCLE1BQU0sTUFBTSxHQUFVLEVBQUUsQ0FBQztRQUN6QixNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBQSxZQUFFLEVBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRW5FLFVBQVU7UUFDVixNQUFNLGFBQWEsR0FBRyxDQUFDLFFBQWdCLEVBQVMsRUFBRTtZQUNoRCxNQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLENBQUM7WUFDOUQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDdkIsS0FBSyxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMzQyxXQUFXO2dCQUNYLE9BQU8sS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDaEIsT0FBTyxLQUFLLENBQUMsVUFBVSxDQUFDO2dCQUN4QixPQUFPLEtBQUssQ0FBQyxVQUFVLENBQUM7Z0JBQ3hCLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUMsQ0FBQztRQUVGLDJDQUEyQztRQUMzQyxNQUFNLFdBQVcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRTtZQUN0QyxPQUFPLENBQUMsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBRUgsbUJBQW1CO1FBQ25CLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDM0IsTUFBTSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzdDLFdBQVc7WUFDWCxPQUFPLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDakIsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ3pCLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUN6QixPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFFdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQVk7UUFDdkIsVUFBVTtRQUNWLE1BQU0sY0FBYyxHQUFHLEtBQUssRUFBRSxVQUFlLEVBQUUsUUFBdUIsRUFBRSxFQUFFO1lBQ3hFLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1lBQzdDLEtBQUssSUFBSSxLQUFLLElBQUksUUFBUSxFQUFFO2dCQUMxQixNQUFNLFNBQVMsR0FBRyxFQUFFLEdBQUcsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLHdCQUF3QjtnQkFDNUUsT0FBTyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsaUNBQWlDO2dCQUU5RCxnQ0FBZ0M7Z0JBQ2hDLE1BQU0sVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFaEUsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUNoQyxNQUFNLGNBQWMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUM1QzthQUNGO1FBQ0gsQ0FBQyxDQUFDO1FBRUYsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUU7WUFDdEIsTUFBTSxRQUFRLEdBQUcsRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDO1lBQzdCLE9BQU8sUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGlDQUFpQztZQUU3RCxjQUFjO1lBQ2QsTUFBTSxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTlELElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2pELE1BQU0sY0FBYyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDMUM7U0FDRjtJQUNILENBQUM7Q0FDRixDQUFBO0FBdmJZLGdEQUFrQjtBQUU3QjtJQURDLElBQUEsa0JBQU0sR0FBRTs7K0NBQ0k7QUFHYjtJQURDLElBQUEsMkJBQWlCLEVBQUMsd0JBQWlCLENBQUM7OEJBQ2xCLG9CQUFVOzZEQUFvQjtBQUdqRDtJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDWSwyQkFBbUI7K0RBQUM7QUFHekM7SUFEQyxJQUFBLGtCQUFNLEVBQUMsZUFBRyxDQUFDOztrREFDTDtBQUdQO0lBREMsSUFBQSxVQUFHLEdBQUU7OytDQUNrQjs2QkFkYixrQkFBa0I7SUFGOUIsSUFBQSxZQUFLLEVBQUMsZ0JBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDbEQsSUFBQSxtQkFBTyxHQUFFO0dBQ0csa0JBQWtCLENBdWI5QiJ9