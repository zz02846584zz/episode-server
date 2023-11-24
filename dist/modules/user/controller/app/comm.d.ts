import { BaseController } from '@cool-midway/core';
import { UserWxService } from '../../service/wx';
/**
 * 通用
 */
export declare class UserCommController extends BaseController {
    userWxService: UserWxService;
    getWxMpConfig(url: string): Promise<{
        code: number;
        message: string;
    }>;
}
