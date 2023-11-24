import { CoolUrlTagData } from '@cool-midway/core';
import { IMiddleware } from '@midwayjs/core';
import { Context, NextFunction } from '@midwayjs/koa';
/**
 * 用户
 */
export declare class UserMiddleware implements IMiddleware<Context, NextFunction> {
    coolConfig: any;
    coolUrlTagData: CoolUrlTagData;
    jwtConfig: any;
    protected ignoreUrls: any[];
    resolve(): (ctx: Context, next: NextFunction) => Promise<void>;
}
