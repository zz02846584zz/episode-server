import { CloudDBService } from './../../service/db';
import { BaseController } from '@cool-midway/core';
/**
 * 云数据库
 */
export declare class CloudDBController extends BaseController {
    cloudDBService: CloudDBService;
    initEntity(): Promise<{
        code: number;
        message: string;
    }>;
    data(body: any): Promise<{
        code: number;
        message: string;
    }>;
}
