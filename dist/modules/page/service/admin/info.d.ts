import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { PageEntity } from '../../entity';
import { PageInfoEntity } from '../../entity/info';
/**
 * 描述
 */
export declare class AdminPageInfoService extends BaseService {
    pageEntity: Repository<PageEntity>;
    pageInfoEntity: Repository<PageInfoEntity>;
    ctx: any;
    /**
     * 新增
     * @param article
     */
    add(param: any): Promise<{
        pageId: any;
    }>;
    /**
     * 更新
     * @param param
     */
    update(param: any): Promise<any>;
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
     * 分頁
     * @param query
     */
    list(param: any): Promise<any>;
    /**
     * 取得內容
     * @param query
     */
    info(id: any): Promise<{
        id: number;
        name: string;
        en: PageInfoEntity;
        tw: PageInfoEntity;
    }>;
}
