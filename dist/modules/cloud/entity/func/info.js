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
exports.CloudFuncInfoEntity = void 0;
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("typeorm");
/**
 * 云函数
 */
let CloudFuncInfoEntity = class CloudFuncInfoEntity extends core_1.BaseEntity {
};
exports.CloudFuncInfoEntity = CloudFuncInfoEntity;
__decorate([
    (0, typeorm_1.Column)({ comment: '名称' }),
    __metadata("design:type", String)
], CloudFuncInfoEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '说明', nullable: true }),
    __metadata("design:type", String)
], CloudFuncInfoEntity.prototype, "readme", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '内容', type: 'text' }),
    __metadata("design:type", String)
], CloudFuncInfoEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '状态 0-禁用 1-启用', default: 1 }),
    __metadata("design:type", Number)
], CloudFuncInfoEntity.prototype, "status", void 0);
exports.CloudFuncInfoEntity = CloudFuncInfoEntity = __decorate([
    (0, typeorm_1.Entity)('cloud_func_info')
], CloudFuncInfoEntity);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2Nsb3VkL2VudGl0eS9mdW5jL2luZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNENBQStDO0FBQy9DLHFDQUF5QztBQUV6Qzs7R0FFRztBQUVJLElBQU0sbUJBQW1CLEdBQXpCLE1BQU0sbUJBQW9CLFNBQVEsaUJBQVU7Q0FZbEQsQ0FBQTtBQVpZLGtEQUFtQjtBQUU5QjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7aURBQ2I7QUFHYjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzttREFDM0I7QUFHZjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDOztvREFDeEI7QUFHaEI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQzs7bURBQ2pDOzhCQVhKLG1CQUFtQjtJQUQvQixJQUFBLGdCQUFNLEVBQUMsaUJBQWlCLENBQUM7R0FDYixtQkFBbUIsQ0FZL0IifQ==