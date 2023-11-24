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
exports.UserSmsService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const cache_1 = require("@midwayjs/cache");
const sms_1 = require("@cool-midway/sms");
/**
 * 描述
 */
let UserSmsService = class UserSmsService extends core_1.BaseService {
    /**
     * 发送验证码
     * @param phone
     */
    async sendSms(phone) {
        try {
            const code = await this.coolSms.sendCode(phone);
            this.cacheManager.set(`sms:${phone}`, code, this.config.timeout);
        }
        catch (error) {
            throw new core_1.CoolCommException('发送过于频繁，请稍后再试');
        }
    }
    /**
     * 验证验证码
     * @param phone
     * @param code
     * @returns
     */
    async checkCode(phone, code) {
        const cacheCode = await this.cacheManager.get(`sms:${phone}`);
        if (cacheCode == code) {
            return true;
        }
        return false;
    }
};
exports.UserSmsService = UserSmsService;
__decorate([
    (0, decorator_1.Config)('module.user.sms'),
    __metadata("design:type", Object)
], UserSmsService.prototype, "config", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", cache_1.CacheManager)
], UserSmsService.prototype, "cacheManager", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", sms_1.CoolSms)
], UserSmsService.prototype, "coolSms", void 0);
exports.UserSmsService = UserSmsService = __decorate([
    (0, decorator_1.Provide)()
], UserSmsService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlci9zZXJ2aWNlL3Ntcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEQ7QUFDOUQsNENBQW1FO0FBRW5FLDJDQUErQztBQUMvQywwQ0FBMkM7QUFFM0M7O0dBRUc7QUFFSSxJQUFNLGNBQWMsR0FBcEIsTUFBTSxjQUFlLFNBQVEsa0JBQVc7SUFXN0M7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLO1FBQ2pCLElBQUk7WUFDRixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE9BQU8sS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEU7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE1BQU0sSUFBSSx3QkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUk7UUFDekIsTUFBTSxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDOUQsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Q0FDRixDQUFBO0FBckNZLHdDQUFjO0FBR3pCO0lBREMsSUFBQSxrQkFBTSxFQUFDLGlCQUFpQixDQUFDOzs4Q0FDbkI7QUFHUDtJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDSyxvQkFBWTtvREFBQztBQUczQjtJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDQSxhQUFPOytDQUFDO3lCQVROLGNBQWM7SUFEMUIsSUFBQSxtQkFBTyxHQUFFO0dBQ0csY0FBYyxDQXFDMUIifQ==