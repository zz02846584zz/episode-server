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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminIotMqttController = void 0;
const mqtt_1 = require("./../../service/mqtt");
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
/**
 * MQTT相关
 */
let AdminIotMqttController = class AdminIotMqttController extends core_1.BaseController {
    async config() {
        return this.ok(await this.iotMqttService.config());
    }
    async publish(uniqueId, data) {
        await this.iotMqttService.publish(uniqueId, data);
        return this.ok();
    }
};
exports.AdminIotMqttController = AdminIotMqttController;
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", mqtt_1.IotMqttService)
], AdminIotMqttController.prototype, "iotMqttService", void 0);
__decorate([
    (0, decorator_1.Get)('/config', { summary: 'MQTT配置信息' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminIotMqttController.prototype, "config", null);
__decorate([
    (0, decorator_1.Post)('/publish', { summary: '推送消息' }),
    __param(0, (0, decorator_1.Body)('uniqueId')),
    __param(1, (0, decorator_1.Body)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AdminIotMqttController.prototype, "publish", null);
exports.AdminIotMqttController = AdminIotMqttController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)()
], AdminIotMqttController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXF0dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2lvdC9jb250cm9sbGVyL2FkbWluL21xdHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQXNEO0FBQ3RELG1EQUF1RTtBQUN2RSw0Q0FBbUU7QUFFbkU7O0dBRUc7QUFHSSxJQUFNLHNCQUFzQixHQUE1QixNQUFNLHNCQUF1QixTQUFRLHFCQUFjO0lBS2xELEFBQU4sS0FBSyxDQUFDLE1BQU07UUFDVixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUdLLEFBQU4sS0FBSyxDQUFDLE9BQU8sQ0FDTyxRQUFnQixFQUNwQixJQUFZO1FBRTFCLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xELE9BQU8sSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ25CLENBQUM7Q0FDRixDQUFBO0FBakJZLHdEQUFzQjtBQUVqQztJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDTyxxQkFBYzs4REFBQztBQUd6QjtJQURMLElBQUEsZUFBRyxFQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQzs7OztvREFHdkM7QUFHSztJQURMLElBQUEsZ0JBQUksRUFBQyxVQUFVLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFFbkMsV0FBQSxJQUFBLGdCQUFJLEVBQUMsVUFBVSxDQUFDLENBQUE7SUFDaEIsV0FBQSxJQUFBLGdCQUFJLEVBQUMsTUFBTSxDQUFDLENBQUE7Ozs7cURBSWQ7aUNBaEJVLHNCQUFzQjtJQUZsQyxJQUFBLG1CQUFPLEdBQUU7SUFDVCxJQUFBLHFCQUFjLEdBQUU7R0FDSixzQkFBc0IsQ0FpQmxDIn0=