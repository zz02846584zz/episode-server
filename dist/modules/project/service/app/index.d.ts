import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { ProjectEntity } from '../../entity';
import { ProjectInfoEntity } from '../../entity/info';
/**
 * 描述
 */
export declare class AppProjectService extends BaseService {
    projectEntity: Repository<ProjectEntity>;
    projectInfoEntity: Repository<ProjectInfoEntity>;
    /**
     * 列表
     */
    list(): Promise<any>;
    /**
     * 取得內容
     * @param query
     */
    info(slug: any): Promise<{
        en: ProjectInfoEntity;
        'zh-Hant': ProjectInfoEntity;
        name: string;
        slug: string;
        video: string;
        cover: string;
        isFeature: boolean;
        publish: boolean;
        publishTime: Date;
        id: number;
        createTime: Date;
        updateTime: Date;
    }>;
}
