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
exports.RecycleDataEntity = void 0;
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("typeorm");
/**
 * 数据回收站 软删除的时候数据会回收到该表
 */
let RecycleDataEntity = class RecycleDataEntity extends core_1.BaseEntity {
};
exports.RecycleDataEntity = RecycleDataEntity;
__decorate([
    (0, typeorm_1.Column)({ comment: '表', type: 'json' }),
    __metadata("design:type", Object)
], RecycleDataEntity.prototype, "entityInfo", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ comment: '操作人', nullable: true }),
    __metadata("design:type", String)
], RecycleDataEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '被删除的数据', type: 'json' }),
    __metadata("design:type", Array)
], RecycleDataEntity.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '请求的接口', nullable: true }),
    __metadata("design:type", String)
], RecycleDataEntity.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '请求参数', nullable: true, type: 'json' }),
    __metadata("design:type", String)
], RecycleDataEntity.prototype, "params", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '删除数据条数', default: 1 }),
    __metadata("design:type", Number)
], RecycleDataEntity.prototype, "count", void 0);
exports.RecycleDataEntity = RecycleDataEntity = __decorate([
    (0, typeorm_1.Entity)('recycle_data')
], RecycleDataEntity);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3JlY3ljbGUvZW50aXR5L2RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNENBQStDO0FBQy9DLHFDQUFnRDtBQUVoRDs7R0FFRztBQUVJLElBQU0saUJBQWlCLEdBQXZCLE1BQU0saUJBQWtCLFNBQVEsaUJBQVU7Q0F3QmhELENBQUE7QUF4QlksOENBQWlCO0FBRTVCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7O3FEQU1yQztBQUlGO0lBRkMsSUFBQSxlQUFLLEdBQUU7SUFDUCxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7aURBQzVCO0FBR2Y7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs7K0NBQzdCO0FBR2Y7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7OENBQ2pDO0FBR1o7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDOztpREFDM0M7QUFHZjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDOztnREFDNUI7NEJBdkJILGlCQUFpQjtJQUQ3QixJQUFBLGdCQUFNLEVBQUMsY0FBYyxDQUFDO0dBQ1YsaUJBQWlCLENBd0I3QiJ9