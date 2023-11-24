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
exports.BaseSysUserService = void 0;
const core_1 = require("@cool-midway/core");
const cache_1 = require("@midwayjs/cache");
const decorator_1 = require("@midwayjs/decorator");
const typeorm_1 = require("@midwayjs/typeorm");
const _ = require("lodash");
const md5 = require("md5");
const typeorm_2 = require("typeorm");
const department_1 = require("../../entity/sys/department");
const user_1 = require("../../entity/sys/user");
const user_role_1 = require("../../entity/sys/user_role");
const perms_1 = require("./perms");
/**
 * 系統用戶
 */
let BaseSysUserService = class BaseSysUserService extends core_1.BaseService {
    /**
     * 分頁查詢
     * @param query
     */
    async page(query) {
        const { keyWord, status, departmentIds = [] } = query;
        const permsDepartmentArr = await this.baseSysPermsService.departmentIds(this.ctx.admin.userId); // 部門權限
        const sql = `
        SELECT
            a.id,a.name,a.nickName,a.headImg,a.email,a.remark,a.status,a.createTime,a.updateTime,a.username,a.phone,a.departmentId,
            GROUP_CONCAT(c.name) AS roleName,
            d.name as departmentName
        FROM
            base_sys_user a
            LEFT JOIN base_sys_user_role b ON a.id = b.userId
            LEFT JOIN base_sys_role c ON b.roleId = c.id
            LEFT JOIN base_sys_department d on a.departmentId = d.id
        WHERE 1 = 1
            ${this.setSql(!_.isEmpty(departmentIds), 'and a.departmentId in (?)', [departmentIds])}
            ${this.setSql(status, 'and a.status = ?', [status])}
            ${this.setSql(keyWord, 'and (a.name LIKE ? or a.username LIKE ?)', [
            `%${keyWord}%`,
            `%${keyWord}%`,
        ])}
            ${this.setSql(true, 'and a.username != ?', ['admin'])}
            ${this.setSql(this.ctx.admin.username !== 'admin', 'and a.departmentId in (?)', [!_.isEmpty(permsDepartmentArr) ? permsDepartmentArr : [null]])}
        GROUP BY a.id
        `;
        return this.sqlRenderPage(sql, query);
    }
    /**
     * 移動部門
     * @param departmentId
     * @param userIds
     */
    async move(departmentId, userIds) {
        await this.baseSysUserEntity
            .createQueryBuilder()
            .update()
            .set({ departmentId })
            .where('id in (:userIds)', { userIds })
            .execute();
    }
    /**
     * 獲得個人信息
     */
    async person() {
        var _a;
        const info = await this.baseSysUserEntity.findOneBy({
            id: (_a = this.ctx.admin) === null || _a === void 0 ? void 0 : _a.userId,
        });
        info === null || info === void 0 ? true : delete info.password;
        return info;
    }
    /**
     * 更新用戶角色關係
     * @param user
     */
    async updateUserRole(user) {
        if (_.isEmpty(user.roleIdList)) {
            return;
        }
        if (user.username === 'admin') {
            throw new core_1.CoolCommException('非法操作~');
        }
        await this.baseSysUserRoleEntity.delete({ userId: user.id });
        if (user.roleIdList) {
            for (const roleId of user.roleIdList) {
                await this.baseSysUserRoleEntity.save({ userId: user.id, roleId });
            }
        }
        await this.baseSysPermsService.refreshPerms(user.id);
    }
    /**
     * 新增
     * @param param
     */
    async add(param) {
        const exists = await this.baseSysUserEntity.findOneBy({
            username: param.username,
        });
        if (!_.isEmpty(exists)) {
            throw new core_1.CoolCommException('用戶名已經存在~');
        }
        param.password = md5(param.password);
        await this.baseSysUserEntity.save(param);
        await this.updateUserRole(param);
        return param.id;
    }
    /**
     * 根據ID獲得信息
     * @param id
     */
    async info(id) {
        const info = await this.baseSysUserEntity.findOneBy({ id });
        const userRoles = await this.nativeQuery('select a.roleId from base_sys_user_role a where a.userId = ?', [id]);
        const department = await this.baseSysDepartmentEntity.findOneBy({
            id: info.departmentId,
        });
        if (info) {
            delete info.password;
            if (userRoles) {
                info.roleIdList = userRoles.map(e => {
                    return parseInt(e.roleId);
                });
            }
        }
        delete info.password;
        if (department) {
            info.departmentName = department.name;
        }
        return info;
    }
    /**
     * 修改個人信息
     * @param param
     */
    async personUpdate(param) {
        param.id = this.ctx.admin.userId;
        if (!_.isEmpty(param.password)) {
            param.password = md5(param.password);
            const oldPassword = md5(param.oldPassword);
            const userInfo = await this.baseSysUserEntity.findOneBy({ id: param.id });
            if (!userInfo) {
                throw new core_1.CoolCommException('用戶不存在');
            }
            if (oldPassword !== userInfo.password) {
                throw new core_1.CoolCommException('原密碼錯誤');
            }
            param.passwordV = userInfo.passwordV + 1;
            await this.cacheManager.set(`admin:passwordVersion:${param.id}`, param.passwordV);
        }
        else {
            delete param.password;
        }
        await this.baseSysUserEntity.save(param);
    }
    /**
     * 修改
     * @param param 數據
     */
    async update(param) {
        if (param.id && param.username === 'admin') {
            throw new core_1.CoolCommException('非法操作~');
        }
        if (!_.isEmpty(param.password)) {
            param.password = md5(param.password);
            const userInfo = await this.baseSysUserEntity.findOneBy({ id: param.id });
            if (!userInfo) {
                throw new core_1.CoolCommException('用戶不存在');
            }
            param.passwordV = userInfo.passwordV + 1;
            await this.cacheManager.set(`admin:passwordVersion:${param.id}`, param.passwordV);
        }
        else {
            delete param.password;
        }
        if (param.status === 0) {
            await this.forbidden(param.id);
        }
        await this.baseSysUserEntity.save(param);
        await this.updateUserRole(param);
    }
    /**
     * 禁用用戶
     * @param userId
     */
    async forbidden(userId) {
        await this.cacheManager.del(`admin:token:${userId}`);
    }
};
exports.BaseSysUserService = BaseSysUserService;
__decorate([
    (0, typeorm_1.InjectEntityModel)(user_1.BaseSysUserEntity),
    __metadata("design:type", typeorm_2.Repository)
], BaseSysUserService.prototype, "baseSysUserEntity", void 0);
__decorate([
    (0, typeorm_1.InjectEntityModel)(user_role_1.BaseSysUserRoleEntity),
    __metadata("design:type", typeorm_2.Repository)
], BaseSysUserService.prototype, "baseSysUserRoleEntity", void 0);
__decorate([
    (0, typeorm_1.InjectEntityModel)(department_1.BaseSysDepartmentEntity),
    __metadata("design:type", typeorm_2.Repository)
], BaseSysUserService.prototype, "baseSysDepartmentEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", cache_1.CacheManager)
], BaseSysUserService.prototype, "cacheManager", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", perms_1.BaseSysPermsService)
], BaseSysUserService.prototype, "baseSysPermsService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], BaseSysUserService.prototype, "ctx", void 0);
exports.BaseSysUserService = BaseSysUserService = __decorate([
    (0, decorator_1.Provide)()
], BaseSysUserService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2Jhc2Uvc2VydmljZS9zeXMvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBbUU7QUFDbkUsMkNBQStDO0FBQy9DLG1EQUFzRDtBQUN0RCwrQ0FBc0Q7QUFDdEQsNEJBQTRCO0FBQzVCLDJCQUEyQjtBQUMzQixxQ0FBcUM7QUFDckMsNERBQXNFO0FBQ3RFLGdEQUEwRDtBQUMxRCwwREFBbUU7QUFDbkUsbUNBQThDO0FBRTlDOztHQUVHO0FBRUksSUFBTSxrQkFBa0IsR0FBeEIsTUFBTSxrQkFBbUIsU0FBUSxrQkFBVztJQW1CakQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLO1FBQ2QsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxHQUFHLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUN0RCxNQUFNLGtCQUFrQixHQUFHLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FDckUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUN0QixDQUFDLENBQUMsT0FBTztRQUNWLE1BQU0sR0FBRyxHQUFHOzs7Ozs7Ozs7OztjQVdGLElBQUksQ0FBQyxNQUFNLENBQ25CLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFDekIsMkJBQTJCLEVBQzNCLENBQUMsYUFBYSxDQUFDLENBQ2hCO2NBQ1MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztjQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSwwQ0FBMEMsRUFBRTtZQUN6RSxJQUFJLE9BQU8sR0FBRztZQUNkLElBQUksT0FBTyxHQUFHO1NBQ2YsQ0FBQztjQUNRLElBQUksQ0FBQyxNQUFNLENBQUMs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