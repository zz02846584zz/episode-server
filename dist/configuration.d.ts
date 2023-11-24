import * as koa from '@midwayjs/koa';
import { ILogger } from '@midwayjs/logger';
export declare class ContainerLifeCycle {
    app: koa.Application;
    logger: ILogger;
    config: any;
    onReady(): Promise<void>;
}
