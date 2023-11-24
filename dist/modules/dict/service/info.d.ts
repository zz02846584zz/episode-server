import { DictTypeEntity } from './../entity/type';
import { DictInfoEntity } from './../entity/info';
import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
/**
 * 字典信息
 */
export declare class DictInfoService extends BaseService {
    dictInfoEntity: Repository<DictInfoEntity>;
    dictTypeEntity: Repository<DictTypeEntity>;
    /**
     * 获得字典数据
     * @param types
     */
    data(types: string[]): Promise<{}>;
    /**
     * 获得字典值
     * @param infoId
     * @returns
     */
    value(infoId: number): Promise<string>;
    /**
     * 获得字典值
     * @param infoId
     * @returns
     */
    values(infoIds: number[]): Promise<string[]>;
    /**
     * 修改之后
     * @param data
     * @param type
     */
    modifyAfter(data: any, type: 'delete' | 'update' | 'add'): Promise<void>;
    /**
     * 删除子字典
     * @param id
     */
    private delChildDict;
}
