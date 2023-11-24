import { BaseController } from '@cool-midway/core';
import { AppProjectService } from '../../service/app';
/**
 * 描述
 */
export declare class AppProjectController extends BaseController {
    appProjectService: AppProjectService;
    articleNew(param: any): Promise<{
        code: number;
        message: string;
    }>;
}
