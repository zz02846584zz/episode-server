import { BaseController } from '@cool-midway/core';
import { AppMemberService } from '../../service/app';
/**
 * 描述
 */
export declare class AppMemberController extends BaseController {
    appMemberService: AppMemberService;
    articleNew(): Promise<{
        code: number;
        message: string;
    }>;
}
