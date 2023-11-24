import { ILogger } from '@midwayjs/core';
import { IMidwayKoaApplication } from '@midwayjs/koa';
/**
 * 修改jwt.secret
 */
export declare class BaseAppEvent {
    coreLogger: ILogger;
    config: any;
    app: IMidwayKoaApplication;
    onServerReady(): Promise<void>;
}
