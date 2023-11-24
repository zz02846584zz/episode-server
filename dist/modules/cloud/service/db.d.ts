import { CloudDBEntity } from './../entity/db';
import { BaseService, CoolConfig } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { CoolCloudDb } from '@cool-midway/cloud';
/**
 * 云数据库
 */
export declare class CloudDBService extends BaseService {
    cloudDBEntity: Repository<CloudDBEntity>;
    coolCloudDb: CoolCloudDb;
    coolConfig: CoolConfig;
    /**
     * 数据
     * @param id
     * @param method
     * @param params
     * @returns
     */
    data(id: any, method: any, params?: any): Promise<{
        id: any;
        list?: undefined;
        pagination?: undefined;
    } | {
        list: any[];
        pagination: {
            page: number;
            size: number;
            total: number;
        };
        id?: undefined;
    }>;
    /**
     * 获得数据操作实例
     * @param className
     */
    getRepository(className: string): Promise<Repository<any>>;
    /**
     * 新增
     * @param param
     * @returns
     */
    addOrUpdate(param: any, type: any): Promise<void>;
    /**
     * 初始化
     */
    initEntity(): Promise<void>;
    modifyAfter(): Promise<void>;
}
