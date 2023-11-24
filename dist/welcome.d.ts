import { Context, Application } from '@midwayjs/koa';
/**
 * 欢迎界面
 */
export declare class WelcomeController {
    ctx: Context;
    app: Application;
    welcome(): Promise<void>;
}
