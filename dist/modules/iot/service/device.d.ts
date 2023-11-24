import { IotDeviceEntity } from './../entity/device';
import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
/**
 * 设备
 */
export declare class IotDeviceService extends BaseService {
    iotDeviceEntity: Repository<IotDeviceEntity>;
    /**
     * 注册设备
     * @param uniqueId
     * @param clientId
     */
    register(uniqueId: string, clientId: string): Promise<void>;
    /**
     * 重置所有设备状态
     */
    resetStatus(): Promise<void>;
    /**
     * 改变设备状态
     * @param uniqueId
     * @param status
     */
    changeStatus(uniqueId: string, status: number): Promise<void>;
}
