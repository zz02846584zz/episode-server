import { BaseEntity } from '@cool-midway/core';
/**
 * 字典信息
 */
export declare class DictInfoEntity extends BaseEntity {
    typeId: number;
    name: string;
    value: string;
    orderNum: number;
    remark: string;
    parentId: number;
}
