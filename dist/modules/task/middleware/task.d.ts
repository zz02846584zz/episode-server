import { IMiddleware } from '@midwayjs/core';
import { Context, NextFunction } from '@midwayjs/koa';
import { TaskInfoQueue } from '../queue/task';
/**
 * 任务中间件
 */
export declare class TaskMiddleware implements IMiddleware<Context, NextFunction> {
    taskInfoQueue: TaskInfoQueue;
    resolve(): (ctx: Context, next: NextFunction) => Promise<void>;
}
