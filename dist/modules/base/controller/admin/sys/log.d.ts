import { BaseController } from '@cool-midway/core';
import { BaseSysConfService } from '../../../service/sys/conf';
import { BaseSysLogService } from '../../../service/sys/log';
/**
 * 系统日志
 */
export declare class BaseSysLogController extends BaseController {
    baseSysLogService: BaseSysLogService;
    baseSysConfService: BaseSysConfService;
    /**
     * 清空日志
     */
    clear(): Promise<{
        code: number;
        message: string;
    }>;
    /**
     * 设置日志保存时间
     */
    setKeep(value: number): Promise<{
        code: number;
        message: string;
    }>;
    /**
     * 获得日志保存时间
     */
    getKeep(): Promise<{
        code: number;
        message: string;
    }>;
}
