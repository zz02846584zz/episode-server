import { BaseEntity } from '@cool-midway/core';
/**
 * 文件空间信息
 */
export declare class SpaceInfoEntity extends BaseEntity {
    url: string;
    type: string;
    classifyId: number;
    fileId: string;
    name: string;
    size: number;
    version: number;
    key: string;
}
