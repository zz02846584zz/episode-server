"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IotMQTTEvent = void 0;
const message_1 = require("./../service/message");
const device_1 = require("./../service/device");
const core_1 = require("@midwayjs/core");
const iot_1 = require("@cool-midway/iot");
/**
 * 应用事件
 */
let IotMQTTEvent = class IotMQTTEvent {
    /**
     * 客户端连接
     * @param client
     */
    async client(client) {
        this.logger.info('mqtt client event clientId:', client.id);
    }
    /**
     * 发送消息
     * @param packet
     * @param client
     */
    async publish(packet, client) {
        var _a, _b;
        if (packet.cmd) {
            //   console.log(11);
            await this.iotMessageService.record(packet.topic, packet.payload.toString(), ((_a = packet.properties) === null || _a === void 0 ? void 0 : _a.contentType) == 'push' ? 0 : 1);
            if (!packet.topic.includes('@admin') &&
                ((_b = packet.properties) === null || _b === void 0 ? void 0 : _b.contentType) != 'push') {
                this.coolMqttServe.publish(`${packet.topic}@admin`, packet.payload.toString());
            }
        }
    }
    /**
     * 订阅事件 注册设备
     * @param subscriptions
     * @param client
     */
    async subscribe(subscriptions, client) {
        await this.iotDeviceService.register(subscriptions[0].topic, client.id);
    }
    /**
     * 取消订阅
     * @param subscriptions
     * @param client
     */
    async unsubscribe(subscriptions, client) {
        await this.iotDeviceService.changeStatus(subscriptions[0], 0);
    }
    /**
     * 断开连接
     * @param client
     */
    async clientDisconnect(client) {
        this.logger.info('mqtt clientDisconnect event clientId:', client.id);
    }
};
exports.IotMQTTEvent = IotMQTTEvent;
__decorate([
    (0, core_1.Inject)(),
    __metadata("design:type", device_1.IotDeviceService)
], IotMQTTEvent.prototype, "iotDeviceService", void 0);
__decorate([
    (0, core_1.Inject)(),
    __metadata("design:type", message_1.IotMessageService)
], IotMQTTEvent.prototype, "iotMessageService", void 0);
__decorate([
    (0, core_1.Inject)(),
    __metadata("design:type", Object)
], IotMQTTEvent.prototype, "logger", void 0);
__decorate([
    (0, core_1.Inject)(),
    __metadata("design:type", iot_1.CoolMqttServe)
], IotMQTTEvent.prototype, "coolMqttServe", void 0);
__decorate([
    (0, iot_1.CoolMqttEvent)('client'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IotMQTTEvent.prototype, "client", null);
__decorate([
    (0, iot_1.CoolMqttEvent)('publish'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], IotMQTTEvent.prototype, "publish", null);
__decorate([
    (0, iot_1.CoolMqttEvent)('subscribe'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], IotMQTTEvent.prototype, "subscribe", null);
__decorate([
    (0, iot_1.CoolMqttEvent)('unsubscribe'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], IotMQTTEvent.prototype, "unsubscribe", null);
__decorate([
    (0, iot_1.CoolMqttEvent)('clientDisconnect'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IotMQTTEvent.prototype, "clientDisconnect", null);
exports.IotMQTTEvent = IotMQTTEvent = __decorate([
    (0, iot_1.CoolMqtt)()
], IotMQTTEvent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXF0dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2lvdC9ldmVudC9tcXR0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLGtEQUF5RDtBQUN6RCxnREFBdUQ7QUFDdkQseUNBQWlEO0FBQ2pELDBDQUEwRTtBQUUxRTs7R0FFRztBQUVJLElBQU0sWUFBWSxHQUFsQixNQUFNLFlBQVk7SUFhdkI7OztPQUdHO0lBRUcsQUFBTixLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU07UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRDs7OztPQUlHO0lBRUcsQUFBTixLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNOztRQUMxQixJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7WUFDZCxxQkFBcUI7WUFDckIsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUNqQyxNQUFNLENBQUMsS0FBSyxFQUNaLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQ3pCLENBQUEsTUFBQSxNQUFNLENBQUMsVUFBVSwwQ0FBRSxXQUFXLEtBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDakQsQ0FBQztZQUNGLElBQ0UsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7Z0JBQ2hDLENBQUEsTUFBQSxNQUFNLENBQUMsVUFBVSwwQ0FBRSxXQUFXLEtBQUksTUFBTSxFQUN4QztnQkFDQSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FDeEIsR0FBRyxNQUFNLENBQUMsS0FBSyxRQUFRLEVBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQzFCLENBQUM7YUFDSDtTQUNGO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFFRyxBQUFOLEtBQUssQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLE1BQU07UUFDbkMsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRDs7OztPQUlHO0lBRUcsQUFBTixLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxNQUFNO1FBQ3JDLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVEOzs7T0FHRztJQUVHLEFBQU4sS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU07UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUNBQXVDLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Q0FDRixDQUFBO0FBNUVZLG9DQUFZO0FBRXZCO0lBREMsSUFBQSxhQUFNLEdBQUU7OEJBQ1MseUJBQWdCO3NEQUFDO0FBR25DO0lBREMsSUFBQSxhQUFNLEdBQUU7OEJBQ1UsMkJBQWlCO3VEQUFDO0FBR3JDO0lBREMsSUFBQSxhQUFNLEdBQUU7OzRDQUNPO0FBR2hCO0lBREMsSUFBQSxhQUFNLEdBQUU7OEJBQ00sbUJBQWE7bURBQUM7QUFPdkI7SUFETCxJQUFBLG1CQUFhLEVBQUMsUUFBUSxDQUFDOzs7OzBDQUd2QjtBQVFLO0lBREwsSUFBQSxtQkFBYSxFQUFDLFNBQVMsQ0FBQzs7OzsyQ0FtQnhCO0FBUUs7SUFETCxJQUFBLG1CQUFhLEVBQUMsV0FBVyxDQUFDOzs7OzZDQUcxQjtBQVFLO0lBREwsSUFBQSxtQkFBYSxFQUFDLGFBQWEsQ0FBQzs7OzsrQ0FHNUI7QUFPSztJQURMLElBQUEsbUJBQWEsRUFBQyxrQkFBa0IsQ0FBQzs7OztvREFHakM7dUJBM0VVLFlBQVk7SUFEeEIsSUFBQSxjQUFRLEdBQUU7R0FDRSxZQUFZLENBNEV4QiJ9