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
exports.BaseDepartmentController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const department_1 = require("../../../entity/sys/department");
const department_2 = require("../../../service/sys/department");
/**
 * 部门
 */
let BaseDepartmentController = class BaseDepartmentController extends core_1.BaseController {
    /**
     * 部门排序
     */
    async order(params) {
        await this.baseDepartmentService.order(params);
        return this.ok();
    }
};
exports.BaseDepartmentController = BaseDepartmentController;
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", department_2.BaseSysDepartmentService)
], BaseDepartmentController.prototype, "baseDepartmentService", void 0);
__decorate([
    (0, decorator_1.Post)('/order', { summary: '排序' }),
    __param(0, (0, decorator_1.Body)(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BaseDepartmentController.prototype, "order", null);
exports.BaseDepartmentController = BaseDepartmentController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'list'],
        entity: department_1.BaseSysDepartmentEntity,
        service: department_2.BaseSysDepartmentService,
    })
], BaseDepartmentController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwYXJ0bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2Jhc2UvY29udHJvbGxlci9hZG1pbi9zeXMvZGVwYXJ0bWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBdUU7QUFDdkUsNENBQW1FO0FBQ25FLCtEQUF5RTtBQUN6RSxnRUFBMkU7QUFFM0U7O0dBRUc7QUFPSSxJQUFNLHdCQUF3QixHQUE5QixNQUFNLHdCQUF5QixTQUFRLHFCQUFjO0lBSTFEOztPQUVHO0lBRUcsQUFBTixLQUFLLENBQUMsS0FBSyxDQUFZLE1BQVc7UUFDaEMsTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLE9BQU8sSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ25CLENBQUM7Q0FDRixDQUFBO0FBWlksNERBQXdCO0FBRW5DO0lBREMsSUFBQSxrQkFBTSxHQUFFOzhCQUNjLHFDQUF3Qjt1RUFBQztBQU0xQztJQURMLElBQUEsZ0JBQUksRUFBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDckIsV0FBQSxJQUFBLGdCQUFJLEVBQUMsZUFBRyxDQUFDLENBQUE7Ozs7cURBR3JCO21DQVhVLHdCQUF3QjtJQU5wQyxJQUFBLG1CQUFPLEdBQUU7SUFDVCxJQUFBLHFCQUFjLEVBQUM7UUFDZCxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUM7UUFDeEMsTUFBTSxFQUFFLG9DQUF1QjtRQUMvQixPQUFPLEVBQUUscUNBQXdCO0tBQ2xDLENBQUM7R0FDVyx3QkFBd0IsQ0FZcEMifQ==