import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { PageEntity } from '../../entity';
import { PageInfoEntity } from '../../entity/info';
/**
 * 描述
 */
export declare class AdminPageService extends BaseService {
    pageEntity: Repository<PageEntity>;
    pageInfoEntity: Repository<PageInfoEntity>;
    ctx: any;
    /**
     * 新增
     * @param article
     */
    add(param: any): Promise<{
        name: any;
        format: any;
    } & PageEntity>;
    /**
     * 更新
     * @param param
     */
    update(param: any): Promise<any>;
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
    info(id: any): Promise<PageEntity>;
}
