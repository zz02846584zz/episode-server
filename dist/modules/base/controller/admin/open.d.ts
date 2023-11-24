import { BaseController, CoolEps } from '@cool-midway/core';
import { LoginDTO } from '../../dto/login';
import { BaseSysLoginService } from '../../service/sys/login';
import { BaseSysParamService } from '../../service/sys/param';
import { Context } from '@midwayjs/koa';
/**
 * 不需要登录的后台接口
 */
export declare class BaseOpenController extends BaseController {
    baseSysLoginService: BaseSysLoginService;
    baseSysParamService: BaseSysParamService;
    ctx: Context;
    eps: CoolEps;
    /**
     * 实体信息与路径
     * @returns
     */
    getEps(): Promise<{
        code: number;
        message: string;
    }>;
    /**
     * 根据配置参数key获得网页内容(富文本)
     */
    htmlByKey(key: string): Promise<void>;
    /**
     * 登录
     * @param login
     */
    login(login: LoginDTO): Promise<{
        code: number;
        message: string;
    }>;
    /**
     * 获得验证码
     */
    captcha(type: string, width: number, height: number, color: string): Promise<{
        code: number;
        message: string;
    }>;
    /**
     * 刷新token
     */
    refreshToken(refreshToken: string): Promise<{
        code: number;
        message: string;
    }>;
}
