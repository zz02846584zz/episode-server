import { BaseController } from '@cool-midway/core';
import { AdminProjectService } from '../../service/admin';
/**
 * 描述
 */
export declare class AdminProjectController extends BaseController {
    adminProjectService: AdminProjectService;
    edit(param: any): Promise<{
        code: number;
        message: string;
    }>;
}
