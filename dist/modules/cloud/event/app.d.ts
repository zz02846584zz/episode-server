import { IMidwayApplication } from '@midwayjs/core';
/**
 * 应用事件
 */
export declare class AppEvent {
    app: IMidwayApplication;
    onDBInit(): Promise<void>;
    initEntity(): Promise<void>;
}
