import { BaseCoolQueue } from '@cool-midway/task';
import { IMidwayApplication } from '@midwayjs/core';
/**
 * 单例队列，cluster 或 集群模式下 只会有一个实例消费数据
 */
export declare class DemoSingleQueue extends BaseCoolQueue {
    app: IMidwayApplication;
    data(job: any, done: any): Promise<void>;
}
