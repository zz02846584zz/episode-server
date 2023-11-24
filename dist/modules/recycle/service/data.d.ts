import { RecycleDataEntity } from './../entity/data';
import { BaseService } from '@cool-midway/core';
import { TypeORMDataSourceManager } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { BaseSysConfService } from '../../base/service/sys/conf';
/**
 * 数据回收
 */
export declare class RecycleDataService extends BaseService {
    recycleDataEntity: Repository<RecycleDataEntity>;
    typeORMDataSourceManager: TypeORMDataSourceManager;
    baseSysConfService: BaseSysConfService;
    /**
     * 恢复数据
     * @param ids
     */
    restore(ids: number[]): Promise<void>;
    /**
     * 记录数据
     * @param params
     */
    record(params: any): Promise<void>;
    /**
     * 日志
     * @param isAll 是否清除全部
     */
    clear(isAll?: any): Promise<void>;
}
