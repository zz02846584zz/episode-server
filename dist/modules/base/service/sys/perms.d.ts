import { BaseService } from '@cool-midway/core';
import { BaseSysMenuService } from './menu';
import { BaseSysRoleService } from './role';
import { BaseSysDepartmentService } from './department';
import { Context } from '@midwayjs/koa';
import { CacheManager } from '@midwayjs/cache';
import { BaseSysRoleEntity } from '../../entity/sys/role';
import { Repository } from 'typeorm';
/**
 * 权限
 */
export declare class BaseSysPermsService extends BaseService {
    cacheManager: CacheManager;
    baseSysMenuService: BaseSysMenuService;
    baseSysRoleService: BaseSysRoleService;
    baseSysDepartmentService: BaseSysDepartmentService;
    baseSysRoleEntity: Repository<BaseSysRoleEntity>;
    ctx: Context;
    base: any;
    /**
     * 刷新权限
     * @param userId 用户ID
     */
    refreshPerms(userId: any): Promise<void>;
    /**
     * 根据角色判断是不是超管
     * @param roleIds
     */
    isAdmin(roleIds: number[]): Promise<boolean>;
    /**
     * 获得权限菜单
     * @param roleIds
     */
    permmenu(roleIds: number[]): Promise<{
        perms: any;
        menus: any;
    }>;
    /**
     * 根据用户ID获得部门权限
     * @param userId
     * @return 部门ID数组
     */
    departmentIds(userId: number): Promise<any>;
}
