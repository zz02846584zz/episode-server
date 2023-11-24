import { BaseController } from '@cool-midway/core';
import { AppPageService } from '../../service/app';
/**
 * 描述
 */
export declare class AppPageInfoController extends BaseController {
    appPageService: AppPageService;
    articleNew(param: any): Promise<{
        code: number;
        message: string;
    }>;
}
