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
exports.IotMqttService = void 0;
const iot_1 = require("@cool-midway/iot");
const message_1 = require("./../entity/message");
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("@midwayjs/typeorm");
const typeorm_2 = require("typeorm");
/**
 * MQTT
 */
let IotMqttService = class IotMqttService extends core_1.BaseService {
    /**
     * 配置信息
     */
    async config() {
        return {
            port: this.coolIotConfig.port,
        };
    }
    /**
     * 推送消息
     * @param uniqueId 设备唯一ID
     * @param data 推送数据
     */
    async publish(uniqueId, data) {
        await this.coolMqttServe.publish(uniqueId, data, {
            properties: {
                contentType: 'push',
            },
        });
    }
};
exports.IotMqttService = IotMqttService;
__decorate([
    (0, typeorm_1.InjectEntityModel)(message_1.IotMessageEntity),
    __metadata("design:type", typeorm_2.Repository)
], IotMqttService.prototype, "iotMessageEntity", void 0);
__decorate([
    (0, decorator_1.Config)('cool.iot'),
    __metadata("design:type", Object)
], IotMqttService.prototype, "coolIotConfig", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", iot_1.CoolMqttServe)
], IotMqttService.prototype, "coolMqttServe", void 0);
exports.IotMqttService = IotMqttService = __decorate([
    (0, decorator_1.Provide)()
], IotMqttService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXF0dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2lvdC9zZXJ2aWNlL21xdHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMENBQWlEO0FBQ2pELGlEQUF1RDtBQUN2RCxtREFBOEQ7QUFDOUQsNENBQStEO0FBQy9ELCtDQUFzRDtBQUN0RCxxQ0FBcUM7QUFFckM7O0dBRUc7QUFFSSxJQUFNLGNBQWMsR0FBcEIsTUFBTSxjQUFlLFNBQVEsa0JBQVc7SUFVN0M7O09BRUc7SUFDSCxLQUFLLENBQUMsTUFBTTtRQUNWLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJO1NBQzlCLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBZ0IsRUFBRSxJQUFZO1FBQzFDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRTtZQUMvQyxVQUFVLEVBQUU7Z0JBQ1YsV0FBVyxFQUFFLE1BQU07YUFDcEI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTtBQS9CWSx3Q0FBYztBQUV6QjtJQURDLElBQUEsMkJBQWlCLEVBQUMsMEJBQWdCLENBQUM7OEJBQ2xCLG9CQUFVO3dEQUFtQjtBQUcvQztJQURDLElBQUEsa0JBQU0sRUFBQyxVQUFVLENBQUM7O3FEQUNVO0FBRzdCO0lBREMsSUFBQSxrQkFBTSxHQUFFOzhCQUNNLG1CQUFhO3FEQUFDO3lCQVJsQixjQUFjO0lBRDFCLElBQUEsbUJBQU8sR0FBRTtHQUNHLGNBQWMsQ0ErQjFCIn0=