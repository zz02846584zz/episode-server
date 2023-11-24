import { BaseEntity } from '@cool-midway/core';
/**
 * 数据回收站 软删除的时候数据会回收到该表
 */
export declare class RecycleDataEntity extends BaseEntity {
    entityInfo: {
        dataSourceName: string;
        entity: string;
    };
    userId: string;
    data: object[];
    url: string;
    params: string;
    count: number;
}
