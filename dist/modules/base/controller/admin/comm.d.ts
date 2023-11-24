import { BaseController } from '@cool-midway/core';
import { BaseSysUserEntity } from '../../entity/sys/user';
import { BaseSysLoginService } from '../../service/sys/login';
import { BaseSysPermsService } from '../../service/sys/perms';
import { BaseSysUserService } from '../../service/sys/user';
import { Context } from '@midwayjs/koa';
import { CoolFile } from '@cool-midway/file';
/**
 * Base 通用接口 一般写不需要权限过滤的接口
 */
export declare class BaseCommController extends BaseController {
    baseSysUserService: BaseSysUserService;
    baseSysPermsService: BaseSysPermsService;
    baseSysLoginService: BaseSysLoginService;
    ctx: Context;
    coolFile: CoolFile;
    /**
     * 获得个人信息
     */
    person(): Promise<{
        code: number;
        message: string;
    }>;
    /**
     * 修改个人信息
     */
    personUpdate(user: BaseSysUserEntity): Promise<{
        code: number;
        message: string;
    }>;
    /**
     * 权限菜单
     */
    permmenu(): Promise<{
        code: number;
        message: string;
    }>;
    /**
     * 文件上传
     */
    upload(): Promise<{
        code: number;
        message: string;
    }>;
    /**
     * 文件上传模式，本地或者云存储
     */
    uploadMode(): Promise<{
        code: number;
        message: string;
    }>;
    /**
     * 退出
     */
    logout(): Promise<{
        code: number;
        message: string;
    }>;
}
