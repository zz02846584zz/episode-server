import { BaseEntity } from '@cool-midway/core';
/**
 * 商品模块-商品信息
 */
export declare class DemoGoodsEntity extends BaseEntity {
    title: string;
    price: number;
    description: string;
    mainImage: string;
    exampleImages: string[];
    stock: number;
}
