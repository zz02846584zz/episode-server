import { CloudFuncService } from './../../../service/func';
import { BaseController } from '@cool-midway/core';
import { CloudReq } from '@cool-midway/cloud';
/**
 * 云函数
 */
export declare class AdminCloudFuncInfoController extends BaseController {
    cloudFuncService: CloudFuncService;
    invoke(req: CloudReq, id: number, content: string): Promise<{
        code: number;
        message: string;
    }>;
}
