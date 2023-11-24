import { BaseController } from '@cool-midway/core';
import { UserLoginService } from '../../service/login';
import { BaseSysLoginService } from '../../../base/service/sys/login';
/**
 * 登录
 */
export declare class AppUserLoginController extends BaseController {
    userLoginService: UserLoginService;
    baseSysLoginService: BaseSysLoginService;
    mini(body: any): Promise<{
        code: number;
        message: string;
    }>;
    mp(code: string): Promise<{
        code: number;
        message: string;
    }>;
    phone(phone: string, smsCode: string): Promise<{
        code: number;
        message: string;
    }>;
    captcha(type: string, width: number, height: number, color: string): Promise<{
        code: number;
        message: string;
    }>;
    smsCode(phone: string, captchaId: string, code: string): Promise<{
        code: number;
        message: string;
    }>;
    refreshToken(refreshToken: any): Promise<{
        code: number;
        message: string;
    }>;
}
