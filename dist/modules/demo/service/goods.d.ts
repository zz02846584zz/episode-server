import { DemoGoodsEntity } from './../entity/goods';
import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
/**
 * 商品示例
 */
export declare class DemoGoodsService extends BaseService {
    demoGoodsEntity: Repository<DemoGoodsEntity>;
    /**
     * 执行sql分页
     */
    sqlPage(query: any): Promise<{
        list: any;
        pagination: {
            page: number;
            size: number;
            total: number;
        };
    }>;
    /**
     * 执行entity分页
     */
    entityPage(query: any): Promise<{
        list: any[];
        pagination: {
            page: number;
            size: number;
            total: number;
        };
    }>;
}
