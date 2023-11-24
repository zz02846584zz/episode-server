import { IMidwayApplication } from '@midwayjs/core';
import { BaseRpcService, CoolRpc } from '@cool-midway/rpc';
import { QueryRunner } from 'typeorm';
export declare class DemoRpcService extends BaseRpcService {
    app: IMidwayApplication;
    rpc: CoolRpc;
    /**
     * 远程调用
     * @returns
     */
    call(): Promise<unknown>;
    /**
     * 集群事件
     */
    event(): Promise<void>;
    info(params: any): Promise<any>;
    getUser(): Promise<{
        uid: string;
        username: string;
        phone: string;
        email: string;
    }>;
    transaction(params: any, rpcTransactionId?: any, queryRunner?: QueryRunner): Promise<void>;
}
