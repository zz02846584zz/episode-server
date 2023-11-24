import { BaseService } from '@cool-midway/core';
/**
 * 微信
 */
export declare class UserWxService extends BaseService {
    config: any;
    /**
     * 获得微信配置
     * @param appId
     * @param appSecret
     * @param url 当前网页的URL，不包含#及其后面部分(必须是调用JS接口页面的完整URL)
     */
    getWxMpConfig(url: string): Promise<{
        timestamp: number;
        nonceStr: any;
        appId: any;
        signature: string;
    }>;
    /**
     * 获得公众号用户信息
     * @param code
     */
    mpUserInfo(code: any): Promise<any>;
    /**
     * 获得微信token 不用code
     * @param appid
     * @param secret
     */
    getWxToken(type?: string): Promise<any>;
    /**
     * 获得用户信息
     * @param token
     */
    openOrMpUserInfo(token: any): Promise<any>;
    /**
     * 获得token嗯
     * @param code
     * @param conf
     */
    openOrMpToken(code: any, conf: any): Promise<any>;
    /**
     * 获得小程序session
     * @param code 微信code
     * @param conf 配置
     */
    miniSession(code: any): Promise<any>;
    /**
     * 获得小程序用户信息
     * @param code
     * @param encryptedData
     * @param iv
     */
    miniUserInfo(code: any, encryptedData: any, iv: any): Promise<any>;
    /**
     * 获得小程序手机
     * @param code
     * @param encryptedData
     * @param iv
     */
    miniPhone(code: any, encryptedData: any, iv: any): Promise<string>;
    /**
     * 小程序信息解密
     * @param encryptedData
     * @param iv
     * @param sessionKey
     */
    miniDecryptData(encryptedData: any, iv: any, sessionKey: any): Promise<string>;
}
