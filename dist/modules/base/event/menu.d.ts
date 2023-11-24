import { BaseSysMenuService } from '../service/sys/menu';
import { ILogger } from '@midwayjs/core';
/**
 * 导入菜单
 */
export declare class BaseMenuEvent {
    baseSysMenuService: BaseSysMenuService;
    coreLogger: ILogger;
    onMenuImport(module: any, data: any): Promise<void>;
}
