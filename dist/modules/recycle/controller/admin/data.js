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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRecycleDataController = void 0;
const user_1 = require("./../../../base/entity/sys/user");
const data_1 = require("./../../entity/data");
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const data_2 = require("../../service/data");
/**
 * 数据回收
 */
let AdminRecycleDataController = class AdminRecycleDataController extends core_1.BaseController {
    async restore(ids) {
        await this.recycleDataService.restore(ids);
        return this.ok();
    }
};
exports.AdminRecycleDataController = AdminRecycleDataController;
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", data_2.RecycleDataService)
], AdminRecycleDataController.prototype, "recycleDataService", void 0);
__decorate([
    (0, decorator_1.Post)('/restore', { summary: '恢复数据' }),
    __param(0, (0, decorator_1.Body)('ids')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], AdminRecycleDataController.prototype, "restore", null);
exports.AdminRecycleDataController = AdminRecycleDataController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        api: ['info', 'page'],
        entity: data_1.RecycleDataEntity,
        pageQueryOp: {
            keyWordLikeFields: ['b.name', 'a.url'],
            select: ['a.*', 'b.name as userName'],
            join: [
                {
                    entity: user_1.BaseSysUserEntity,
                    alias: 'b',
                    condition: 'a.userId = b.id',
                },
            ],
        },
    })
], AdminRecycleDataController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3JlY3ljbGUvY29udHJvbGxlci9hZG1pbi9kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFvRTtBQUNwRSw4Q0FBd0Q7QUFDeEQsbURBQWtFO0FBQ2xFLDRDQUFtRTtBQUNuRSw2Q0FBd0Q7QUFFeEQ7O0dBRUc7QUFpQkksSUFBTSwwQkFBMEIsR0FBaEMsTUFBTSwwQkFBMkIsU0FBUSxxQkFBYztJQUt0RCxBQUFOLEtBQUssQ0FBQyxPQUFPLENBQWMsR0FBYTtRQUN0QyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0MsT0FBTyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDbkIsQ0FBQztDQUNGLENBQUE7QUFUWSxnRUFBMEI7QUFFckM7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OEJBQ1cseUJBQWtCO3NFQUFDO0FBR2pDO0lBREwsSUFBQSxnQkFBSSxFQUFDLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUN2QixXQUFBLElBQUEsZ0JBQUksRUFBQyxLQUFLLENBQUMsQ0FBQTs7Ozt5REFHekI7cUNBUlUsMEJBQTBCO0lBaEJ0QyxJQUFBLG1CQUFPLEdBQUU7SUFDVCxJQUFBLHFCQUFjLEVBQUM7UUFDZCxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3JCLE1BQU0sRUFBRSx3QkFBaUI7UUFDekIsV0FBVyxFQUFFO1lBQ1gsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO1lBQ3RDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxvQkFBb0IsQ0FBQztZQUNyQyxJQUFJLEVBQUU7Z0JBQ0o7b0JBQ0UsTUFBTSxFQUFFLHdCQUFpQjtvQkFDekIsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsU0FBUyxFQUFFLGlCQUFpQjtpQkFDN0I7YUFDRjtTQUNGO0tBQ0YsQ0FBQztHQUNXLDBCQUEwQixDQVN0QyJ9