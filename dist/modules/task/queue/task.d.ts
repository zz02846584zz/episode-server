import { BaseCoolQueue } from '@cool-midway/task';
import { TaskInfoService } from '../service/info';
import { IMidwayApplication } from '@midwayjs/core';
/**
 * 任务
 */
export declare abstract class TaskInfoQueue extends BaseCoolQueue {
    app: IMidwayApplication;
    taskInfoService: TaskInfoService;
    data(job: any, done: any): Promise<void>;
}
