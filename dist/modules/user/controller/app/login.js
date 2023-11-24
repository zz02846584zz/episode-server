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
exports.AppUserLoginController = void 0;
const core_1 = require("@cool-midway/core");
const core_2 = require("@midwayjs/core");
const login_1 = require("../../service/login");
const login_2 = require("../../../base/service/sys/login");
/**
 * 登录
 */
let AppUserLoginController = class AppUserLoginController extends core_1.BaseController {
    async mini(body) {
        const { code, encryptedData, iv } = body;
        return this.ok(await this.userLoginService.mini(code, encryptedData, iv));
    }
    async mp(code) {
        return this.ok(await this.userLoginService.mp(code));
    }
    async phone(phone, smsCode) {
        return this.ok(await this.userLoginService.phone(phone, smsCode));
    }
    async captcha(type, width, height, color) {
        return this.ok(await this.baseSysLoginService.captcha(type, width, height, color));
    }
    async smsCode(phone, captchaId, code) {
        return this.ok(await this.userLoginService.smsCode(phone, captchaId, code));
    }
    async refreshToken(refreshToken) {
        return this.ok(await this.userLoginService.refreshToken(refreshToken));
    }
};
exports.AppUserLoginController = AppUserLoginController;
__decorate([
    (0, core_2.Inject)(),
    __metadata("design:type", login_1.UserLoginService)
], AppUserLoginController.prototype, "userLoginService", void 0);
__decorate([
    (0, core_2.Inject)(),
    __metadata("design:type", login_2.BaseSysLoginService)
], AppUserLoginController.prototype, "baseSysLoginService", void 0);
__decorate([
    (0, core_1.CoolTag)(core_1.TagTypes.IGNORE_TOKEN),
    (0, core_2.Post)('/mini', { summary: '小程序登录' }),
    __param(0, (0, core_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppUserLoginController.prototype, "mini", null);
__decorate([
    (0, core_1.CoolTag)(core_1.TagTypes.IGNORE_TOKEN),
    (0, core_2.Post)('/mp', { summary: '公众号登录' }),
    __param(0, (0, core_2.Body)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppUserLoginController.prototype, "mp", null);
__decorate([
    (0, core_1.CoolTag)(core_1.TagTypes.IGNORE_TOKEN),
    (0, core_2.Post)('/phone', { summary: '手机号登录' }),
    __param(0, (0, core_2.Body)('phone')),
    __param(1, (0, core_2.Body)('smsCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AppUserLoginController.prototype, "phone", null);
__decorate([
    (0, core_1.CoolTag)(core_1.TagTypes.IGNORE_TOKEN),
    (0, core_2.Get)('/captcha', { summary: '图片验证码' }),
    __param(0, (0, core_2.Query)('type')),
    __param(1, (0, core_2.Query)('width')),
    __param(2, (0, core_2.Query)('height')),
    __param(3, (0, core_2.Query)('color')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, String]),
    __metadata("design:returntype", Promise)
], AppUserLoginController.prototype, "captcha", null);
__decorate([
    (0, core_1.CoolTag)(core_1.TagTypes.IGNORE_TOKEN),
    (0, core_2.Post)('/smsCode', { summary: '验证码' }),
    __param(0, (0, core_2.Body)('phone')),
    __param(1, (0, core_2.Body)('captchaId')),
    __param(2, (0, core_2.Body)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AppUserLoginController.prototype, "smsCode", null);
__decorate([
    (0, core_1.CoolTag)(core_1.TagTypes.IGNORE_TOKEN),
    (0, core_2.Post)('/refreshToken', { summary: '刷新token' }),
    __param(0, (0, core_2.Body)('refreshToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppUserLoginController.prototype, "refreshToken", null);
exports.AppUserLoginController = AppUserLoginController = __decorate([
    (0, core_1.CoolUrlTag)(),
    (0, core_1.CoolController)()
], AppUserLoginController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2VyL2NvbnRyb2xsZXIvYXBwL2xvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQU0yQjtBQUMzQix5Q0FBZ0U7QUFDaEUsK0NBQXVEO0FBQ3ZELDJEQUFzRTtBQUV0RTs7R0FFRztBQUdJLElBQU0sc0JBQXNCLEdBQTVCLE1BQU0sc0JBQXVCLFNBQVEscUJBQWM7SUFTbEQsQUFBTixLQUFLLENBQUMsSUFBSSxDQUFTLElBQUk7UUFDckIsTUFBTSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFJSyxBQUFOLEtBQUssQ0FBQyxFQUFFLENBQWUsSUFBWTtRQUNqQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUlLLEFBQU4sS0FBSyxDQUFDLEtBQUssQ0FBZ0IsS0FBYSxFQUFtQixPQUFlO1FBQ3hFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUlLLEFBQU4sS0FBSyxDQUFDLE9BQU8sQ0FDSSxJQUFZLEVBQ1gsS0FBYSxFQUNaLE1BQWMsRUFDZixLQUFhO1FBRTdCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FDWixNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENB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