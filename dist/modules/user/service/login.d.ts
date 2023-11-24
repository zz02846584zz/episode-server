import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { UserInfoEntity } from '../entity/info';
import { UserWxService } from './wx';
import { UserWxEntity } from '../entity/wx';
import { CoolFile } from '@cool-midway/file';
import { BaseSysLoginService } from '../../base/service/sys/login';
import { UserSmsService } from './sms';
/**
 * 登录
 */
export declare class UserLoginService extends BaseService {
    userInfoEntity: Repository<UserInfoEntity>;
    userWxEntity: Repository<UserWxEntity>;
    userWxService: UserWxService;
    jwtConfig: any;
    baseSysLoginService: BaseSysLoginService;
    file: CoolFile;
    userSmsService: UserSmsService;
    /**
     * 发送手机验证码
     * @param phone
     * @param captchaId
     * @param code
     */
    smsCode(phone: any, captchaId: any, code: any): Promise<void>;
    /**
     *  手机登录
     * @param phone
     * @param smsCode
     */
    phone(phone: any, smsCode: any): Promise<{
        expire: any;
        token: any;
        refreshExpire: any;
        refreshToken: any;
    }>;
    /**
     * 公众号登录
     * @param code
     */
    mp(code: string): Promise<{
        expire: any;
        token: any;
        refreshExpire: any;
        refreshToken: any;
    }>;
    /**
     * 保存微信信息
     * @param wxUserInfo
     * @param type
     * @returns
     */
    saveWxInfo(wxUserInfo: any, type: any): Promise<any>;
    /**
     * 小程序登录
     * @param code
     * @param encryptedData
     * @param iv
     */
    mini(code: any, encryptedData: any, iv: any): Promise<{
        expire: any;
        token: any;
        refreshExpire: any;
        refreshToken: any;
    }>;
    /**
     * 微信登录 获得token
     * @param wxUserInfo 微信用户信息
     * @returns
     */
    wxLoginToken(wxUserInfo: any): Promise<{
        expire: any;
        token: any;
        refreshExpire: any;
        refreshToken: any;
    }>;
    /**
     * 刷新token
     * @param refreshToken
     */
    refreshToken(refreshToken: any): Promise<{
        expire: any;
        token: any;
        refreshExpire: any;
        refreshToken: any;
    }>;
    /**
     * 获得token
     * @param info
     * @returns
     */
    token(info: any): Promise<{
        expire: any;
        token: any;
        refreshExpire: any;
        refreshToken: any;
    }>;
    /**
     * 生成token
     * @param tokenInfo 信息
     * @param roleIds 角色集合
     */
    generateToken(info: any, isRefresh?: boolean): Promise<any>;
}
