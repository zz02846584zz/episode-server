import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { MetaEntity } from '../../entity';
/**
 * 描述
 */
export declare class AppMetaService extends BaseService {
    metaEntity: Repository<MetaEntity>;
}
