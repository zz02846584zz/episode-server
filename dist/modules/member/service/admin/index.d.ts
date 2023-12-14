import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { MemberEntity } from '../../entity';
import { MemberInfoEntity } from '../../entity/info';
/**
 * 描述
 */
export declare class AdminMemberService extends BaseService {
    memberEntity: Repository<MemberEntity>;
    memberInfoEntity: Repository<MemberInfoEntity>;
    ctx: any;
    /**
     * 新增
     * @param article
     */
    add(param: any): Promise<{
        member: any;
        en: any;
        'zh-Hant': any;
    }>;
    /**
     * 更新
     * @param param
     */
    update(param: any): Promise<any>;
    edit(param: any): Promise<{
        member: import("typeorm").UpdateResult;
        info: {
            en: any;
            'zh-Hant': any;
        };
    }>;
    /**
     * 刪除
     * @param param
     */
    delete(ids: any): Promise<void>;
    /**
     * 分頁
     * @param query
     */
    page(query: any): Promise<{
        list: any;
        pagination: {
            page: number;
            size: number;
            total: number;
        };
    }>;
    /**
     * 取得內容
     * @param query
     */
    info(id: any): Promise<{
        member: {
            id: any;
            name: string;
            avatar: string;
        };
        info: {
            en: MemberInfoEntity;
            'zh-Hant': MemberInfoEntity;
        };
    }>;
}
