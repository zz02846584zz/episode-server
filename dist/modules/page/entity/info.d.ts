import { BaseEntity } from '@cool-midway/core';
/**
 * 描述
 */
export declare class PageInfoEntity extends BaseEntity {
    pageId: number;
    title: string;
    description: string;
    locale: string;
    metaData: string;
}
