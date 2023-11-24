import { CommonSchedule } from '@midwayjs/decorator';
import { ILogger } from '@midwayjs/logger';
import { BaseSysLogService } from '../service/sys/log';
/**
 * 日志定时任务
 */
export declare class BaseLogSchedule implements CommonSchedule {
    baseSysLogService: BaseSysLogService;
    logger: ILogger;
    exec(): Promise<void>;
}
