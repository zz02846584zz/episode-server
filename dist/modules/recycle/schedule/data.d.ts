import { CommonSchedule } from '@midwayjs/decorator';
import { RecycleDataService } from '../service/data';
/**
 * 数据定时清除定时任务
 */
export declare class BaseRecycleSchedule implements CommonSchedule {
    recycleDataService: RecycleDataService;
    exec(): Promise<void>;
}
