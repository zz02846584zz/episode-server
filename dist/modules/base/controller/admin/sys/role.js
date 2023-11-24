"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseSysRoleController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const role_1 = require("../../../entity/sys/role");
const role_2 = require("../../../service/sys/role");
/**
 * 系统角色
 */
let BaseSysRoleController = class BaseSysRoleController extends core_1.BaseController {
};
exports.BaseSysRoleController = BaseSysRoleController;
exports.BaseSysRoleController = BaseSysRoleController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'info', 'list', 'page'],
        entity: role_1.BaseSysRoleEntity,
        service: role_2.BaseSysRoleService,
        // 新增的时候插入当前用户ID
        insertParam: async (ctx) => {
            return {
                userId: ctx.admin.userId,
            };
        },
        pageQueryOp: {
            keyWordLikeFields: ['name', 'label'],
            where: async (ctx) => {
                const { userId, roleIds, username } = ctx.admin;
                return [
                    // 超级管理员的角色不展示
                    ['label != :label', { label: 'admin' }],
                    // 如果不是超管，只能看到自己新建的或者自己有的角色
                    [
                        '(userId=:userId or id in (:roleIds))',
                        { userId, roleIds },
                        username !== 'admin',
                    ],
                ];
            },
        },
    })
], BaseSysRoleController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2Jhc2UvY29udHJvbGxlci9hZG1pbi9zeXMvcm9sZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsNENBQW1FO0FBRW5FLG1EQUE2RDtBQUM3RCxvREFBK0Q7QUFFL0Q7O0dBRUc7QUE2QkksSUFBTSxxQkFBcUIsR0FBM0IsTUFBTSxxQkFBc0IsU0FBUSxxQkFBYztDQUFHLENBQUE7QUFBL0Msc0RBQXFCO2dDQUFyQixxQkFBcUI7SUE1QmpDLElBQUEsbUJBQU8sR0FBRTtJQUNULElBQUEscUJBQWMsRUFBQztRQUNkLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3hELE1BQU0sRUFBRSx3QkFBaUI7UUFDekIsT0FBTyxFQUFFLHlCQUFrQjtRQUMzQixnQkFBZ0I7UUFDaEIsV0FBVyxFQUFFLEtBQUssRUFBRSxHQUFZLEVBQUUsRUFBRTtZQUNsQyxPQUFPO2dCQUNMLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU07YUFDekIsQ0FBQztRQUNKLENBQUM7UUFDRCxXQUFXLEVBQUU7WUFDWCxpQkFBaUIsRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUM7WUFDcEMsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFZLEVBQUUsRUFBRTtnQkFDNUIsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDaEQsT0FBTztvQkFDTCxjQUFjO29CQUNkLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUM7b0JBQ3ZDLDJCQUEyQjtvQkFDM0I7d0JBQ0Usc0NBQXNDO3dCQUN0QyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUU7d0JBQ25CLFFBQVEsS0FBSyxPQUFPO3FCQUNyQjtpQkFDRixDQUFDO1lBQ0osQ0FBQztTQUNGO0tBQ0YsQ0FBQztHQUNXLHFCQUFxQixDQUEwQiJ9