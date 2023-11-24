import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { MemberEntity } from '../../entity';
import { MemberInfoEntity } from '../../entity/info';
/**
 * 描述
 */
export declare class AppMemberService extends BaseService {
    memberEntity: Repository<MemberEntity>;
    memberInfoEntity: Repository<MemberInfoEntity>;
    list(): Promise<any>;
}
