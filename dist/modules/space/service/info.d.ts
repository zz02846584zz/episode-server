import { SpaceInfoEntity } from './../entity/info';
import { BaseService, CoolFileConfig } from '@cool-midway/core';
import { Repository } from 'typeorm';
/**
 * 文件信息
 */
export declare class SpaceInfoService extends BaseService {
    spaceInfoEntity: Repository<SpaceInfoEntity>;
    config: CoolFileConfig;
    /**
     * 新增
     */
    add(param: any): Promise<Object>;
}
