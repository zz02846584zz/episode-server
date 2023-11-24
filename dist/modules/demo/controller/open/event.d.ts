import { BaseController, CoolEventManager } from '@cool-midway/core';
/**
 * 事件
 */
export declare class AppDemoEventController extends BaseController {
    coolEventManager: CoolEventManager;
    send(): Promise<{
        code: number;
        message: string;
    }>;
}
