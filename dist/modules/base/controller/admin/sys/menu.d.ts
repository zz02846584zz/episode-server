import { BaseController } from '@cool-midway/core';
import { BaseSysMenuService } from '../../../service/sys/menu';
/**
 * 菜单
 */
export declare class BaseSysMenuController extends BaseController {
    baseSysMenuService: BaseSysMenuService;
    parse(entity: string, controller: string, module: string): Promise<{
        code: number;
        message: string;
    }>;
    create(body: any): Promise<{
        code: number;
        message: string;
    }>;
    export(ids: number[]): Promise<{
        code: number;
        message: string;
    }>;
    import(menus: any[]): Promise<{
        code: number;
        message: string;
    }>;
}
