import { IMidwayApplication } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { BaseSysMenuEntity } from '../../entity/sys/menu';
import { BaseSysPermsService } from './perms';
import { Context } from '@midwayjs/koa';
/**
 * 菜单
 */
export declare class BaseSysMenuService extends BaseService {
    ctx: Context;
    baseSysMenuEntity: Repository<BaseSysMenuEntity>;
    baseSysPermsService: BaseSysPermsService;
    config: any;
    app: IMidwayApplication;
    /**
     * 获得所有菜单
     */
    list(): Promise<any>;
    /**
     * 修改之后
     * @param param
     */
    modifyAfter(param: any): Promise<void>;
    /**
     * 根据角色获得权限信息
     * @param {[]} roleIds 数组
     */
    getPerms(roleIds: any): Promise<any>;
    /**
     * 获得用户菜单信息
     * @param roleIds
     * @param isAdmin 是否是超管
     */
    getMenus(roleIds: any, isAdmin: any): Promise<any>;
    /**
     * 删除
     * @param ids
     */
    delete(ids: any): Promise<void>;
    /**
     * 删除子菜单
     * @param id
     */
    private delChildMenu;
    /**
     * 更新权限
     * @param menuId
     */
    refreshPerms(menuId: any): Promise<void>;
    /**
     * 解析实体和Controller
     * @param entityString
     * @param controller
     * @param module
     */
    parse(entityString: string, controller: string, module: string): Promise<{
        columns: any;
        className: string;
        tableName: string;
        fileName: string;
        path: string;
    } | {
        columns: any;
        path: string;
        className?: undefined;
        tableName?: undefined;
        fileName?: undefined;
    }>;
    /**
     * 解析Entity类名
     * @param code
     * @returns
     */
    parseCode(code: string): {
        newCode: string;
        className: string;
        tableName: string;
        oldTableName: string;
    };
    /**
     *  创建代码
     * @param body body
     */
    create(body: any): Promise<void>;
    /**
     * 创建配置文件
     * @param module
     */
    createConfigFile(module: string): Promise<void>;
    /**
     * 找到文件名
     * @param controller
     * @returns
     */
    fileName(controller: string): Promise<string>;
    /**
     * 创建文件
     * @param filePath
     * @param content
     */
    createFile(filePath: string, content: string): Promise<void>;
    /**
     * 导出菜单
     * @param ids
     * @returns
     */
    export(ids: number[]): Promise<any[]>;
    /**
     * 导入
     * @param menus
     */
    import(menus: any[]): Promise<void>;
}
