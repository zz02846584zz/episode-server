import { CoolMqttServe } from '@cool-midway/iot';
import { IotMessageEntity } from './../entity/message';
import { BaseService, CoolIotConfig } from '@cool-midway/core';
import { Repository } from 'typeorm';
/**
 * MQTT
 */
export declare class IotMqttService extends BaseService {
    iotMessageEntity: Repository<IotMessageEntity>;
    coolIotConfig: CoolIotConfig;
    coolMqttServe: CoolMqttServe;
    /**
     * 配置信息
     */
    config(): Promise<{
        port: number;
    }>;
    /**
     * 推送消息
     * @param uniqueId 设备唯一ID
     * @param data 推送数据
     */
    publish(uniqueId: string, data: string): Promise<void>;
}
