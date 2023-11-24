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
exports.UserLoginService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("@midwayjs/typeorm");
const typeorm_2 = require("typeorm");
const info_1 = require("../entity/info");
const wx_1 = require("./wx");
const jwt = require("jsonwebtoken");
const wx_2 = require("../entity/wx");
const file_1 = require("@cool-midway/file");
const login_1 = require("../../base/service/sys/login");
const sms_1 = require("./sms");
const uuid_1 = require("uuid");
/**
 * 登录
 */
let UserLoginService = class UserLoginService extends core_1.BaseService {
    /**
     * 发送手机验证码
     * @param phone
     * @param captchaId
     * @param code
     */
    async smsCode(phone, captchaId, code) {
        // 1、检查图片验证码  2、发送短信验证码
        const check = await this.baseSysLoginService.captchaCheck(captchaId, code);
        if (!check) {
            throw new core_1.CoolCommException('图片验证码错误');
        }
        await this.userSmsService.sendSms(phone);
    }
    /**
     *  手机登录
     * @param phone
     * @param smsCode
     */
    async phone(phone, smsCode) {
        // 1、检查短信验证码  2、登录
        const check = await this.userSmsService.checkCode(phone, smsCode);
        if (check) {
            let user = await this.userInfoEntity.findOneBy({ phone });
            if (!user) {
                user = {
                    phone,
                    unionid: phone,
                    loginType: 2,
                    nickName: phone.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2'),
                };
                await this.userInfoEntity.insert(user);
            }
            return this.token({ id: user.id });
        }
        else {
            throw new core_1.CoolCommException('验证码错误');
        }
    }
    /**
     * 公众号登录
     * @param code
     */
    async mp(code) {
        let wxUserInfo = await this.userWxService.mpUserInfo(code);
        if (wxUserInfo) {
            delete wxUserInfo.privilege;
            wxUserInfo = await this.saveWxInfo({
                openid: wxUserInfo.openid,
                unionid: wxUserInfo.unionid,
                avatarUrl: wxUserInfo.headimgurl,
                nickName: wxUserInfo.nickname,
                gender: wxUserInfo.sex,
                city: wxUserInfo.city,
                province: wxUserInfo.province,
                country: wxUserInfo.country,
            }, 1);
            return this.wxLoginToken(wxUserInfo);
        }
        else {
            throw new Error('微信登录失败');
        }
    }
    /**
     * 保存微信信息
     * @param wxUserInfo
     * @param type
     * @returns
     */
    async saveWxInfo(wxUserInfo, type) {
        const find = { openid: wxUserInfo.openid };
        let wxInfo = await this.userWxEntity.findOneBy(find);
        if (wxInfo) {
            wxUserInfo.id = wxInfo.id;
        }
        await this.userWxEntity.save({
            ...wxUserInfo,
            type,
        });
        return wxUserInfo;
    }
    /**
     * 小程序登录
     * @param code
     * @param encryptedData
     * @param iv
     */
    async mini(code, encryptedData, iv) {
        let wxUserInfo = await this.userWxService.miniUserInfo(code, encryptedData, iv);
        if (wxUserInfo) {
            // 保存
            wxUserInfo = await this.saveWxInfo(wxUserInfo, 0);
            return await this.wxLoginToken(wxUserInfo);
        }
    }
    /**
     * 微信登录 获得token
     * @param wxUserInfo 微信用户信息
     * @returns
     */
    async wxLoginToken(wxUserInfo) {
        const unionid = wxUserInfo.unionid ? wxUserInfo.unionid : wxUserInfo.openid;
        let userInfo = await this.userInfoEntity.findOneBy({ unionid });
        if (!userInfo) {
            const avatarUrl = await this.file.downAndUpload(wxUserInfo.avatarUrl, (0, uuid_1.v1)() + '.png');
            userInfo = {
                unionid,
                nickName: wxUserInfo.nickName,
                avatarUrl,
                gender: wxUserInfo.gender,
            };
            await this.userInfoEntity.insert(userInfo);
        }
        return this.token({ id: userInfo.id });
    }
    /**
     * 刷新token
     * @param refreshToken
     */
    async refreshToken(refreshToken) {
        try {
            const info = jwt.verify(refreshToken, this.jwtConfig.secret);
            if (!info['isRefresh']) {
                throw new core_1.CoolCommException('token类型非refreshToken');
            }
            const userInfo = await this.userInfoEntity.findOneBy({
                id: info['id'],
            });
            return this.token({ id: userInfo.id });
        }
        catch (e) {
            throw new core_1.CoolCommException('刷新token失败，请检查refreshToken是否正确或过期');
        }
    }
    /**
     * 获得token
     * @param info
     * @returns
     */
    async token(info) {
        const { expire, refreshExpire } = this.jwtConfig;
        return {
            expire,
            token: await this.generateToken(info),
            refreshExpire,
            refreshToken: await this.generateToken(info, true),
        };
    }
    /**
     * 生成token
     * @param tokenInfo 信息
     * @param roleIds 角色集合
     */
    async generateToken(info, isRefresh = false) {
        const { expire, refreshExpire, secret } = this.jwtConfig;
        const tokenInfo = {
            isRefresh,
            ...info,
        };
        return jwt.sign(tokenInfo, secret, {
            expiresIn: isRefresh ? refreshExpire : expire,
        });
    }
};
exports.UserLoginService = UserLoginService;
__decorate([
    (0, typeorm_1.InjectEntityModel)(info_1.UserInfoEntity),
    __metadata("design:type", typeorm_2.Repository)
], UserLoginService.prototype, "userInfoEntity", void 0);
__decorate([
    (0, typeorm_1.InjectEntityModel)(wx_2.UserWxEntity),
    __metadata("design:type", typeorm_2.Repository)
], UserLoginService.prototype, "userWxEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", wx_1.UserWxService)
], UserLoginService.prototype, "userWxService", void 0);
__decorate([
    (0, decorator_1.Config)('module.user.jwt'),
    __metadata("design:type", Object)
], UserLoginService.prototype, "jwtConfig", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", login_1.BaseSysLoginService)
], UserLoginService.prototype, "baseSysLoginService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", file_1.CoolFile)
], UserLoginService.prototype, "file", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", sms_1.UserSmsService)
], UserLoginService.prototype, "userSmsService", void 0);
exports.UserLoginService = UserLoginService = __decorate([
    (0, decorator_1.Provide)()
], UserLoginService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2VyL3NlcnZpY2UvbG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThEO0FBQzlELDRDQUFtRTtBQUNuRSwrQ0FBc0Q7QUFDdEQscUNBQXFDO0FBQ3JDLHlDQUFnRDtBQUNoRCw2QkFBcUM7QUFDckMsb0NBQW9DO0FBQ3BDLHFDQUE0QztBQUM1Qyw0Q0FBNkM7QUFDN0Msd0RBQW1FO0FBQ25FLCtCQUF1QztBQUN2QywrQkFBa0M7QUFFbEM7O0dBRUc7QUFFSSxJQUFNLGdCQUFnQixHQUF0QixNQUFNLGdCQUFpQixTQUFRLGtCQUFXO0lBc0IvQzs7Ozs7T0FLRztJQUNILEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJO1FBQ2xDLHVCQUF1QjtRQUN2QixNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixNQUFNLElBQUksd0JBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDeEM7UUFDRCxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTztRQUN4QixrQkFBa0I7UUFDbEIsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbEUsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLElBQUksR0FBUSxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMs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