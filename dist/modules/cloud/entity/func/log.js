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
exports.CloudFuncLogEntity = void 0;
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("typeorm");
/**
 * 云函数日志
 */
let CloudFuncLogEntity = class CloudFuncLogEntity extends core_1.BaseEntity {
};
exports.CloudFuncLogEntity = CloudFuncLogEntity;
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ comment: '云函数ID' }),
    __metadata("design:type", Number)
], CloudFuncLogEntity.prototype, "infoId", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '请求', type: 'json', nullable: true }),
    __metadata("design:type", Object)
], CloudFuncLogEntity.prototype, "request", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '结果', type: 'json', nullable: true }),
    __metadata("design:type", String)
], CloudFuncLogEntity.prototype, "result", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '类型 0-失败 1-成功', default: 1, type: 'tinyint' }),
    __metadata("design:type", Number)
], CloudFuncLogEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '异常信息', nullable: true, type: 'text' }),
    __metadata("design:type", String)
], CloudFuncLogEntity.prototype, "error", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '耗时(毫秒)', default: 0 }),
    __metadata("design:type", Number)
], CloudFuncLogEntity.prototype, "time", void 0);
exports.CloudFuncLogEntity = CloudFuncLogEntity = __decorate([
    (0, typeorm_1.Entity)('cloud_func_log')
], CloudFuncLogEntity);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvY2xvdWQvZW50aXR5L2Z1bmMvbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLDRDQUErQztBQUMvQyxxQ0FBZ0Q7QUFFaEQ7O0dBRUc7QUFFSSxJQUFNLGtCQUFrQixHQUF4QixNQUFNLGtCQUFtQixTQUFRLGlCQUFVO0NBbUJqRCxDQUFBO0FBbkJZLGdEQUFrQjtBQUc3QjtJQUZDLElBQUEsZUFBSyxHQUFFO0lBQ1AsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDOztrREFDZDtBQUdmO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7bURBQ3RDO0FBR2xCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7a0RBQ3pDO0FBR2Y7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDOztnREFDcEQ7QUFHYjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7O2lEQUM1QztBQUdkO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7O2dEQUM3Qjs2QkFsQkYsa0JBQWtCO0lBRDlCLElBQUEsZ0JBQU0sRUFBQyxnQkFBZ0IsQ0FBQztHQUNaLGtCQUFrQixDQW1COUIifQ==