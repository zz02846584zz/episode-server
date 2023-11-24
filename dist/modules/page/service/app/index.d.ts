import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { PageEntity } from '../../entity';
import { PageInfoEntity } from '../../entity/info';
import { MemberInfoEntity } from './../../../member/entity/info';
/**
 * 描述
 */
export declare class AppPageService extends BaseService {
    pageEntity: Repository<PageEntity>;
    pageInfoEntity: Repository<PageInfoEntity>;
    memberInfoEntity: Repository<MemberInfoEntity>;
    ctx: any;
    list(): Promise<any>;
    info(id: any): Promise<any>;
}
