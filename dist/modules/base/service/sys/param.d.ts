import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { BaseSysParamEntity } from '../../entity/sys/param';
import { CacheManager } from '@midwayjs/cache';
/**
 * 参数配置
 */
export declare class BaseSysParamService extends BaseService {
    baseSysParamEntity: Repository<BaseSysParamEntity>;
    cacheManager: CacheManager;
    /**
     * 根据key获得对应的参数
     * @param key
     */
    dataByKey(key: any): Promise<any>;
    /**
     * 根据key获得对应的网页数据
     * @param key
     */
    htmlByKey(key: any): Promise<string>;
    /**
     * 添加或者修改
     * @param param
     */
    addOrUpdate(param: any, type: any): Promise<void>;
    /**
     * 重新初始化缓存
     */
    modifyAfter(): Promise<void>;
}
