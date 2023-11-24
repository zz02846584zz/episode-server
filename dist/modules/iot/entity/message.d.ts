import { BaseEntity } from '@cool-midway/core';
/**
 * 设备消息
 */
export declare class IotMessageEntity extends BaseEntity {
    deviceId: number;
    data: string;
    type: number;
}
