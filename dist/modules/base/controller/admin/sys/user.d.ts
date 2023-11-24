import { BaseController } from '@cool-midway/core';
import { BaseSysUserService } from '../../../service/sys/user';
/**
 * 系统用户
 */
export declare class BaseSysUserController extends BaseController {
    baseSysUserService: BaseSysUserService;
    /**
     * 移动部门
     */
    move(departmentId: number, userIds: []): Promise<{
        code: number;
        message: string;
    }>;
}
