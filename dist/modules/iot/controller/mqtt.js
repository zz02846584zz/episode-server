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
exports.IotMqttController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const iot_1 = require("@cool-midway/iot");
/**
 * MQTT
 */
let IotMqttController = class IotMqttController extends core_1.BaseController {
    async publish() {
        await this.coolMqttServe.publish('presence', 'hello');
        return this.ok();
    }
};
exports.IotMqttController = IotMqttController;
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", iot_1.CoolMqttServe)
], IotMqttController.prototype, "coolMqttServe", void 0);
__decorate([
    (0, decorator_1.Get)('/publish'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IotMqttController.prototype, "publish", null);
exports.IotMqttController = IotMqttController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)()
], IotMqttController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXF0dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2lvdC9jb250cm9sbGVyL21xdHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQTJEO0FBQzNELDRDQUFtRTtBQUNuRSwwQ0FBaUQ7QUFFakQ7O0dBRUc7QUFHSSxJQUFNLGlCQUFpQixHQUF2QixNQUFNLGlCQUFrQixTQUFRLHFCQUFjO0lBSzdDLEFBQU4sS0FBSyxDQUFDLE9BQU87UUFDWCxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0RCxPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNuQixDQUFDO0NBQ0YsQ0FBQTtBQVRZLDhDQUFpQjtBQUU1QjtJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDTSxtQkFBYTt3REFBQztBQUd2QjtJQURMLElBQUEsZUFBRyxFQUFDLFVBQVUsQ0FBQzs7OztnREFJZjs0QkFSVSxpQkFBaUI7SUFGN0IsSUFBQSxtQkFBTyxHQUFFO0lBQ1QsSUFBQSxxQkFBYyxHQUFFO0dBQ0osaUJBQWlCLENBUzdCIn0=