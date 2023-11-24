import { IotMessageEntity } from './../entity/message';
import { IotDeviceEntity } from './../entity/device';
import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
/**
 * 消息
 */
export declare class IotMessageService extends BaseService {
    iotDeviceEntity: Repository<IotDeviceEntity>;
    iotMessageEntity: Repository<IotMessageEntity>;
    /**
     * 记录消息
     * @param uniqueId 设备唯一ID
     * @param data 数据
     * @param type 类型 0-推送 1-接收
     */
    record(uniqueId: string, data: string, type: number): Promise<void>;
}
