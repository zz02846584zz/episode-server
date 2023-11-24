import { CommonSchedule } from '@midwayjs/decorator';
import { ILogger } from '@midwayjs/logger';
import { RecycleDataService } from '../service/data';
/**
 * 数据定时清除定时任务
 */
export declare class BaseRecycleSchedule implements CommonSchedule {
    recycleDataService: RecycleDataService;
    logger: ILogger;
    exec(): Promise<void>;
}
