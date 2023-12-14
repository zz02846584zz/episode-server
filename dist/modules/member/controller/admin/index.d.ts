import { BaseController } from '@cool-midway/core';
import { AdminMemberService } from '../../service/admin';
/**
 * 描述
 */
export declare class AdminMemberController extends BaseController {
    adminMemberService: AdminMemberService;
    edit(param: any): Promise<{
        code: number;
        message: string;
    }>;
}
