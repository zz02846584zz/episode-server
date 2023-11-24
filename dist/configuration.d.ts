import * as koa from '@midwayjs/koa';
export declare class ContainerLifeCycle {
    app: koa.Application;
    config: any;
    onReady(): Promise<void>;
}
