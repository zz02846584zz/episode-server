import { CommonSchedule } from '@midwayjs/decorator';
import { BaseSysLogService } from '../service/sys/log';
/**
 * 日志定时任务
 */
export declare class BaseLogSchedule implements CommonSchedule {
    baseSysLogService: BaseSysLogService;
    exec(): Promise<void>;
}
