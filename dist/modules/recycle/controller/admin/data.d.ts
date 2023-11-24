import { BaseController } from '@cool-midway/core';
import { RecycleDataService } from '../../service/data';
/**
 * 数据回收
 */
export declare class AdminRecycleDataController extends BaseController {
    recycleDataService: RecycleDataService;
    restore(ids: number[]): Promise<{
        code: number;
        message: string;
    }>;
}
