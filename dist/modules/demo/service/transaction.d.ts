import { BaseService } from '@cool-midway/core';
import { QueryRunner } from 'typeorm';
/**
 * 操作事务
 */
export declare class DemoTransactionService extends BaseService {
    /**
     * 事务操作
     */
    add(param: any, queryRunner?: QueryRunner): Promise<{
        id: any;
    }>;
}
