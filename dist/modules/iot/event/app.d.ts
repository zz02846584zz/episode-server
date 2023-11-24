import { IotDeviceService } from '../service/device';
/**
 * 应用事件
 */
export declare class AppEvent {
    iotDeviceService: IotDeviceService;
    onServerReady(): Promise<void>;
}
