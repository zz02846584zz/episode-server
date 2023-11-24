import { DemoGoodsService } from '../../service/goods';
import { DemoGoodsEntity } from '../../entity/goods';
import { BaseController } from '@cool-midway/core';
import { Repository } from 'typeorm';
/**
 * 测试
 */
export declare class AppDemoGoodsController extends BaseController {
    demoGoodsEntity: Repository<DemoGoodsEntity>;
    demoGoodsService: DemoGoodsService;
    sqlPage(query: any): Promise<{
        code: number;
        message: string;
    }>;
    entityPage(query: any): Promise<{
        code: number;
        message: string;
    }>;
}
