import { BaseEntity } from '@cool-midway/core';
/**
 * 设备
 */
export declare class IotDeviceEntity extends BaseEntity {
    icon: string;
    name: string;
    uniqueId: string;
    status: number;
    clientId: string;
}
