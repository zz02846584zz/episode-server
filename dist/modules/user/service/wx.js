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
exports.UserWxService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const axios_1 = require("axios");
const crypto = require("crypto");
const uuid_1 = require("uuid");
const moment = require("moment");
/**
 * 微信
 */
let UserWxService = class UserWxService extends core_1.BaseService {
    /**
     * 获得微信配置
     * @param appId
     * @param appSecret
     * @param url 当前网页的URL，不包含#及其后面部分(必须是调用JS接口页面的完整URL)
     */
    async getWxMpConfig(url) {
        const token = await this.getWxToken();
        const ticket = await axios_1.default.get('https://api.weixin.qq.com/cgi-bin/ticket/getticket', {
            params: {
                access_token: token.access_token,
                type: 'jsapi',
            },
        });
        const { appid } = this.config.wx.mp;
        // 返回结果集
        const result = {
            timestamp: parseInt(moment().valueOf() / 1000 + ''),
            nonceStr: (0, uuid_1.v1)(),
            appId: appid,
            signature: '',
        };
        const signArr = [];
        signArr.push('jsapi_ticket=' + ticket.data.ticket);
        signArr.push('noncestr=' + result.nonceStr);
        signArr.push('timestamp=' + result.timestamp);
        signArr.push('url=' + decodeURI(url));
        // 敏感信息加密处理
        result.signature = crypto
            .createHash('sha1')
            .update(signArr.join('&'))
            .digest('hex')
            .toUpperCase();
        return result;
    }
    /**
     * 获得公众号用户信息
     * @param code
     */
    async mpUserInfo(code) {
        const token = await this.openOrMpToken(code, this.config.wx.mp);
        return await this.openOrMpUserInfo(token);
    }
    /**
     * 获得微信token 不用code
     * @param appid
     * @param secret
     */
    async getWxToken(type = 'mp') {
        //@ts-ignore
        const conf = this.config.wx[type];
        const result = await axios_1.default.get('https://api.weixin.qq.com/cgi-bin/token', {
            params: {
                grant_type: 'client_credential',
                appid: conf.appid,
                secret: conf.secret,
            },
        });
        return result.data;
    }
    /**
     * 获得用户信息
     * @param token
     */
    async openOrMpUserInfo(token) {
        return await axios_1.default
            .get('https://api.weixin.qq.com/sns/userinfo', {
            params: {
                access_token: token.access_token,
                openid: token.openid,
                lang: 'zh_CN',
            },
        })
            .then(res => {
            return res.data;
        });
    }
    /**
     * 获得token嗯
     * @param code
     * @param conf
     */
    async openOrMpToken(code, conf) {
        const result = await axios_1.default.get('https://api.weixin.qq.com/sns/oauth2/access_token', {
            params: {
                appid: conf.appid,
                secret: conf.secret,
                code,
                grant_type: 'authorization_code',
            },
        });
        return result.data;
    }
    /**
     * 获得小程序session
     * @param code 微信code
     * @param conf 配置
     */
    async miniSession(code) {
        const { appid, secret } = this.config.wx.mini;
        const result = await axios_1.default.get('https://api.weixin.qq.com/sns/jscode2session', {
            params: {
                appid,
                secret,
                js_code: code,
                grant_type: 'authorization_code',
            },
        });
        return result.data;
    }
    /**
     * 获得小程序用户信息
     * @param code
     * @param encryptedData
     * @param iv
     */
    async miniUserInfo(code, encryptedData, iv) {
        const session = await this.miniSession(code);
        if (session.errcode) {
            throw new core_1.CoolCommException('登录失败，请重试');
        }
        const info = await this.miniDecryptData(encryptedData, iv, session.session_key);
        if (info) {
            delete info['watermark'];
            return {
                ...info,
                openid: session['openid'],
                unionid: session['unionid'],
            };
        }
        return null;
    }
    /**
     * 获得小程序手机
     * @param code
     * @param encryptedData
     * @param iv
     */
    async miniPhone(code, encryptedData, iv) {
        const session = await this.miniSession(code);
        if (session.errcode) {
            throw new core_1.CoolCommException('获取手机号失败，请刷新重试');
        }
        return await this.miniDecryptData(encryptedData, iv, session.session_key);
    }
    /**
     * 小程序信息解密
     * @param encryptedData
     * @param iv
     * @param sessionKey
     */
    async miniDecryptData(encryptedData, iv, sessionKey) {
        sessionKey = Buffer.from(sessionKey, 'base64');
        encryptedData = Buffer.from(encryptedData, 'base64');
        iv = Buffer.from(iv, 'base64');
        try {
            // 解密
            const decipher = crypto.createDecipheriv('aes-128-cbc', sessionKey, iv);
            // 设置自动 padding 为 true，删除填充补位
            decipher.setAutoPadding(true);
            // @ts-ignore
            let decoded = decipher.update(encryptedData, 'binary', 'utf8');
            // @ts-ignore
            decoded += decipher.final('utf8');
            // @ts-ignore
            decoded = JSON.parse(decoded);
            return decoded;
        }
        catch (err) {
            throw new core_1.CoolCommException('获得信息失败');
        }
    }
};
exports.UserWxService = UserWxService;
__decorate([
    (0, decorator_1.Config)('module.user'),
    __metadata("design:type", Object)
], UserWxService.prototype, "config", void 0);
__decorate([
    (0, core_1.CoolCache)(3600),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserWxService.prototype, "getWxToken", null);
exports.UserWxService = UserWxService = __decorate([
    (0, decorator_1.Provide)()
], UserWxService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2VyL3NlcnZpY2Uvd3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXNEO0FBQ3RELDRDQUE4RTtBQUM5RSxpQ0FBMEI7QUFDMUIsaUNBQWlDO0FBQ2pDLCtCQUFrQztBQUNsQyxpQ0FBaUM7QUFFakM7O0dBRUc7QUFFSSxJQUFNLGFBQWEsR0FBbkIsTUFBTSxhQUFjLFNBQVEsa0JBQVc7SUFJNUM7Ozs7O09BS0c7SUFDSSxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQVc7UUFDcEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxlQUFLLENBQUMsR0FBRyxDQUM1QixvREFBb0QsRUFDcEQ7WUFDRSxNQUFNLEVBQUU7Z0JBQ04sWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO2dCQUNoQyxJQUFJLEVBQUUsT0FBTzthQUNkO1NBQ0YsQ0FDRixDQUFDO1FBQ0YsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNwQyxRQUFRO1FBQ1IsTUFBTSxNQUFNLEdBQUc7WUFDYixTQUFTLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7WUFDbkQsUUFBUSxFQUFFLElBQUEsU0FBSSxHQUFFO1lBQ2hCLEtBQUssRUFBRSxLQUFLO1lBQ1osU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO1FBQ0YsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFX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