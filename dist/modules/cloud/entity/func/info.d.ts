import { BaseEntity } from '@cool-midway/core';
/**
 * 云函数
 */
export declare class CloudFuncInfoEntity extends BaseEntity {
    name: string;
    readme: string;
    content: string;
    status: number;
}
