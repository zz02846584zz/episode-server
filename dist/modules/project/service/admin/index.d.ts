import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { ProjectEntity } from '../../entity';
import { ProjectInfoEntity } from '../../entity/info';
/**
 * 描述
 */
export declare class AdminProjectService extends BaseService {
    projectEntity: Repository<ProjectEntity>;
    projectInfoEntity: Repository<ProjectInfoEntity>;
    ctx: any;
    /**
     * 新增
     * @param article
     */
    add(param: any): Promise<{
        project: any;
        en: any;
        'zh-Hant': any;
    }>;
    /**
     * 更新
     * @param param
     */
    update(param: any): Promise<any>;
    edit(param: any): Promise<{
        project: any;
        en: any;
        'zh-Hant': any;
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
        project: ProjectEntity;
        info: {
            en: ProjectInfoEntity;
            'zh-Hant': ProjectInfoEntity;
        };
    }>;
    getToday(): string;
}
