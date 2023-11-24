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
exports.UserCommController = void 0;
const core_1 = require("@cool-midway/core");
const core_2 = require("@midwayjs/core");
const wx_1 = require("../../service/wx");
/**
 * 通用
 */
let UserCommController = class UserCommController extends core_1.BaseController {
    async getWxMpConfig(url) {
        const a = await this.userWxService.getWxMpConfig(url);
        return this.ok(a);
    }
};
exports.UserCommController = UserCommController;
__decorate([
    (0, core_2.Inject)(),
    __metadata("design:type", wx_1.UserWxService)
], UserCommController.prototype, "userWxService", void 0);
__decorate([
    (0, core_1.CoolTag)(core_1.TagTypes.IGNORE_TOKEN),
    (0, core_2.Get)('/wxMpConfig', { summary: '获取微信公众号配置' }),
    __param(0, (0, core_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserCommController.prototype, "getWxMpConfig", null);
exports.UserCommController = UserCommController = __decorate([
    (0, core_1.CoolUrlTag)(),
    (0, core_1.CoolController)()
], UserCommController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXIvY29udHJvbGxlci9hcHAvY29tbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FNMkI7QUFDM0IseUNBQW9EO0FBQ3BELHlDQUFpRDtBQUVqRDs7R0FFRztBQUdJLElBQU0sa0JBQWtCLEdBQXhCLE1BQU0sa0JBQW1CLFNBQVEscUJBQWM7SUFNdkMsQUFBTixLQUFLLENBQUMsYUFBYSxDQUFVLEdBQVc7UUFDN0MsTUFBTSxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0RCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQztDQUNGLENBQUE7QUFWWSxnREFBa0I7QUFFN0I7SUFEQyxJQUFBLGFBQU0sR0FBRTs4QkFDTSxrQkFBYTt5REFBQztBQUloQjtJQUZaLElBQUEsY0FBTyxFQUFDLGVBQVEsQ0FBQyxZQUFZLENBQUM7SUFDOUIsSUFBQSxVQUFHLEVBQUMsYUFBYSxFQUFFLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxDQUFDO0lBQ2pCLFdBQUEsSUFBQSxZQUFLLEdBQUUsQ0FBQTs7Ozt1REFHbEM7NkJBVFUsa0JBQWtCO0lBRjlCLElBQUEsaUJBQVUsR0FBRTtJQUNaLElBQUEscUJBQWMsR0FBRTtHQUNKLGtCQUFrQixDQVU5QiJ9