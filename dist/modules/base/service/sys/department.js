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
exports.BaseSysDepartmentService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("@midwayjs/typeorm");
const typeorm_2 = require("typeorm");
const department_1 = require("../../entity/sys/department");
const _ = require("lodash");
const role_department_1 = require("../../entity/sys/role_department");
const perms_1 = require("./perms");
/**
 * 描述
 */
let BaseSysDepartmentService = class BaseSysDepartmentService extends core_1.BaseService {
    /**
     * 获得部门菜单
     */
    async list() {
        // 部门权限
        const permsDepartmentArr = await this.baseSysPermsService.departmentIds(this.ctx.admin.userId);
        // 过滤部门权限
        const find = this.baseSysDepartmentEntity.createQueryBuilder();
        if (this.ctx.admin.username !== 'admin')
            find.andWhere('id in (:ids)', {
                ids: !_.isEmpty(permsDepartmentArr) ? permsDepartmentArr : [null],
            });
        find.addOrderBy('orderNum', 'ASC');
        const departments = await find.getMany();
        if (!_.isEmpty(departments)) {
            departments.forEach(e => {
                const parentMenu = departments.filter(m => {
                    e.parentId = parseInt(e.parentId + '');
                    if (e.parentId == m.id) {
                        return m.name;
                    }
                });
                if (!_.isEmpty(parentMenu)) {
                    e.parentName = parentMenu[0].name;
                }
            });
        }
        return departments;
    }
    /**
     * 根据多个ID获得部门权限信息
     * @param {[]} roleIds 数组
     * @param isAdmin 是否超管
     */
    async getByRoleIds(roleIds, isAdmin) {
        if (!_.isEmpty(roleIds)) {
            if (isAdmin) {
                const result = await this.baseSysDepartmentEntity.find();
                return result.map(e => {
                    return e.id;
                });
            }
            const result = await this.baseSysRoleDepartmentEntity
                .createQueryBuilder()
                .where('roleId in (:roleIds)', { roleIds })
                .getMany();
            if (!_.isEmpty(result)) {
                return _.uniq(result.map(e => {
                    return e.departmentId;
                }));
            }
        }
        return [];
    }
    /**
     * 部门排序
     * @param params
     */
    async order(params) {
        for (const e of params) {
            await this.baseSysDepartmentEntity.update(e.id, e);
        }
    }
    /**
     * 删除
     */
    async delete(ids) {
        const { deleteUser } = this.ctx.request.body;
        await super.delete(ids);
        if (deleteUser) {
            await this.nativeQuery('delete from base_sys_user where departmentId in (?)', [ids]);
        }
        else {
            const topDepartment = await this.baseSysDepartmentEntity
                .createQueryBuilder()
                .where('parentId is null')
                .getOne();
            if (topDepartment) {
                await this.nativeQuery('update base_sys_user a set a.departmentId = ? where a.departmentId in (?)', [topDepartment.id, ids]);
            }
        }
    }
};
exports.BaseSysDepartmentService = BaseSysDepartmentService;
__decorate([
    (0, typeorm_1.InjectEntityModel)(department_1.BaseSysDepartmentEntity),
    __metadata("design:type", typeorm_2.Repository)
], BaseSysDepartmentService.prototype, "baseSysDepartmentEntity", void 0);
__decorate([
    (0, typeorm_1.InjectEntityModel)(role_department_1.BaseSysRoleDepartmentEntity),
    __metadata("design:type", typeorm_2.Repository)
], BaseSysDepartmentService.prototype, "baseSysRoleDepartmentEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", perms_1.BaseSysPermsService)
], BaseSysDepartmentService.prototype, "baseSysPermsService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], BaseSysDepartmentService.prototype, "ctx", void 0);
exports.BaseSysDepartmentService = BaseSysDepartmentService = __decorate([
    (0, decorator_1.Provide)()
], BaseSysDepartmentService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwYXJ0bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2Jhc2Uvc2VydmljZS9zeXMvZGVwYXJ0bWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBc0Q7QUFDdEQsNENBQWdEO0FBQ2hELCtDQUFzRDtBQUN0RCxxQ0FBcUM7QUFDckMsNERBQXNFO0FBQ3RFLDRCQUE0QjtBQUM1QixzRUFBK0U7QUFDL0UsbUNBQThDO0FBRTlDOztHQUVHO0FBRUksSUFBTSx3QkFBd0IsR0FBOUIsTUFBTSx3QkFBeUIsU0FBUSxrQkFBVztJQWF2RDs7T0FFRztJQUNILEtBQUssQ0FBQyxJQUFJO1FBQ1IsT0FBTztRQUNQLE1BQU0sa0JBQWtCLEdBQUcsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUNyRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQ3RCLENBQUM7UUFFRixTQUFTO1FBQ1QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDL0QsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEtBQUssT0FBTztZQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRTtnQkFDNUIsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7YUFDbEUsQ0FBQyxDQUFDO1FBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkMsTUFBTSxXQUFXLEdBQThCLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXBFLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxF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