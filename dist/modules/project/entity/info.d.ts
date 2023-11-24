import { BaseEntity } from '@cool-midway/core';
/**
 * 描述
 */
export declare class ProjectInfoEntity extends BaseEntity {
    projectId: number;
    locale: string;
    title: string;
    intro: string;
    seoTitle: string;
    seoDescription: string;
}
