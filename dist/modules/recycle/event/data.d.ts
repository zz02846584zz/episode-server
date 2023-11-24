import { RecycleDataService } from '../service/data';
/**
 * 接受数据事件
 */
export declare class RecycleDataEvent {
    recycleDataService: RecycleDataService;
    /**
     * 数据被删除
     * @param params
     */
    softDelete(params: any): Promise<void>;
}
