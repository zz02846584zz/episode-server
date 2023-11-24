import { CloudReq } from '@cool-midway/cloud';
import { BaseEntity } from '@cool-midway/core';
/**
 * 云函数日志
 */
export declare class CloudFuncLogEntity extends BaseEntity {
    infoId: number;
    request: CloudReq;
    result: string;
    type: number;
    error: string;
    time: number;
}
