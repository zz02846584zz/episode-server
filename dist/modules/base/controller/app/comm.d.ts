import { BaseController, CoolEps } from '@cool-midway/core';
import { Context } from '@midwayjs/koa';
import { CoolFile } from '@cool-midway/file';
import { BaseSysParamService } from '../../service/sys/param';
/**
 * 不需要登录的后台接口
 */
export declare class BaseAppCommController extends BaseController {
    coolFile: CoolFile;
    ctx: Context;
    allowKeys: string[];
    eps: CoolEps;
    baseSysParamService: BaseSysParamService;
    param(key: string): Promise<{
        code: number;
        message: string;
    }>;
    /**
     * 实体信息与路径
     * @returns
     */
    getEps(): Promise<{
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
}
