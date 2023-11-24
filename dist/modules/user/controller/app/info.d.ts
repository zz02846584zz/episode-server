import { BaseController } from '@cool-midway/core';
import { UserInfoService } from '../../service/info';
/**
 * 用户信息
 */
export declare class AppUserInfoController extends BaseController {
    ctx: any;
    userInfoService: UserInfoService;
    person(): Promise<{
        code: number;
        message: string;
    }>;
    updatePerson(body: any): Promise<{
        code: number;
        message: string;
    }>;
}
