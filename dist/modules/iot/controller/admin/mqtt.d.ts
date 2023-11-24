import { IotMqttService } from './../../service/mqtt';
import { BaseController } from '@cool-midway/core';
/**
 * MQTT相关
 */
export declare class AdminIotMqttController extends BaseController {
    iotMqttService: IotMqttService;
    config(): Promise<{
        code: number;
        message: string;
    }>;
    publish(uniqueId: string, data: string): Promise<{
        code: number;
        message: string;
    }>;
}
