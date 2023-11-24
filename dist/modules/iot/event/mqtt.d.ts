import { IotMessageService } from './../service/message';
import { IotDeviceService } from './../service/device';
import { ILogger } from '@midwayjs/core';
import { CoolMqttServe } from '@cool-midway/iot';
/**
 * 应用事件
 */
export declare class IotMQTTEvent {
    iotDeviceService: IotDeviceService;
    iotMessageService: IotMessageService;
    logger: ILogger;
    coolMqttServe: CoolMqttServe;
    /**
     * 客户端连接
     * @param client
     */
    client(client: any): Promise<void>;
    /**
     * 发送消息
     * @param packet
     * @param client
     */
    publish(packet: any, client: any): Promise<void>;
    /**
     * 订阅事件 注册设备
     * @param subscriptions
     * @param client
     */
    subscribe(subscriptions: any, client: any): Promise<void>;
    /**
     * 取消订阅
     * @param subscriptions
     * @param client
     */
    unsubscribe(subscriptions: any, client: any): Promise<void>;
    /**
     * 断开连接
     * @param client
     */
    clientDisconnect(client: any): Promise<void>;
}
