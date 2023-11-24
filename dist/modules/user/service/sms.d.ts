import { BaseService } from '@cool-midway/core';
import { CacheManager } from '@midwayjs/cache';
import { CoolSms } from '@cool-midway/sms';
/**
 * 描述
 */
export declare class UserSmsService extends BaseService {
    config: any;
    cacheManager: CacheManager;
    coolSms: CoolSms;
    /**
     * 发送验证码
     * @param phone
     */
    sendSms(phone: any): Promise<void>;
    /**
     * 验证验证码
     * @param phone
     * @param code
     * @returns
     */
    checkCode(phone: any, code: any): Promise<boolean>;
}
