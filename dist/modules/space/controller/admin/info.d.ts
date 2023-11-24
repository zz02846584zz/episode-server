import { BaseController } from '@cool-midway/core';
/**
 * 图片空间信息
 */
export declare class BaseAppSpaceInfoController extends BaseController {
    config: any;
    getConfig(): Promise<{
        code: number;
        message: string;
    }>;
}
