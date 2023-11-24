import { BaseEntity } from '@cool-midway/core';
/**
 * 云数据库
 */
export declare class CloudDBEntity extends BaseEntity {
    name: string;
    readme: string;
    content: string;
    className: string;
    tableName: string;
    status: number;
}
