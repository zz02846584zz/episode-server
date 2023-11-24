import { BaseController } from '@cool-midway/core';
import { CoolMqttServe } from '@cool-midway/iot';
/**
 * MQTT
 */
export declare class IotMqttController extends BaseController {
    coolMqttServe: CoolMqttServe;
    publish(): Promise<{
        code: number;
        message: string;
    }>;
}
