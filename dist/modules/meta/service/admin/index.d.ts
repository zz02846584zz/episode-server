import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { MetaEntity } from './../../entity/index';
/**
 * 描述
 */
export declare class AdminMetaService extends BaseService {
    metaEntity: Repository<MetaEntity>;
}
