import { BaseController } from '@cool-midway/core';
import { DemoRpcService } from '../../service/rpc';
/**
 * 远程RPC调用
 */
export declare class AppDemoRpcController extends BaseController {
    demoRpcService: DemoRpcService;
    call(): Promise<{
        code: number;
        message: string;
    }>;
    event(): Promise<{
        code: number;
        message: string;
    }>;
    transaction(): Promise<{
        code: number;
        message: string;
    }>;
}
