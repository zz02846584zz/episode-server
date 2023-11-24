import { BaseEntity } from '@cool-midway/core';
/**
 * 描述
 */
export declare class ProjectEntity extends BaseEntity {
    name: string;
    slug: string;
    video: string;
    cover: string;
    isFeature: boolean;
    publish: boolean;
    publishTime: Date;
}
