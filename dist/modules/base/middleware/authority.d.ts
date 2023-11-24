import { NextFunction, Context } from '@midwayjs/koa';
import { IMiddleware, IMidwayApplication } from '@midwayjs/core';
import { CacheManager } from '@midwayjs/cache';
/**
 * 权限校验
 */
export declare class BaseAuthorityMiddleware implements IMiddleware<Context, NextFunction> {
    prefix: any;
    jwtConfig: any;
    cacheManager: CacheManager;
    app: IMidwayApplication;
    resolve(): (ctx: Context, next: NextFunction) => Promise<void>;
}
