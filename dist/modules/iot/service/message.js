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
exports.IotMessageService = void 0;
const message_1 = require("./../entity/message");
const device_1 = require("./../entity/device");
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("@midwayjs/typeorm");
const typeorm_2 = require("typeorm");
const core_2 = require("@midwayjs/core");
/**
 * 消息
 */
let IotMessageService = class IotMessageService extends core_1.BaseService {
    /**
     * 记录消息
     * @param uniqueId 设备唯一ID
     * @param data 数据
     * @param type 类型 0-推送 1-接收
     */
    async record(uniqueId, data, type) {
        const device = await this.iotDeviceEntity.findOneBy({ uniqueId });
        if (device) {
            await this.iotMessageEntity.insert({ deviceId: device.id, data, type });
        }
    }
};
exports.IotMessageService = IotMessageService;
__decorate([
    (0, typeorm_1.InjectEntityModel)(device_1.IotDeviceEntity),
    __metadata("design:type", typeorm_2.Repository)
], IotMessageService.prototype, "iotDeviceEntity", void 0);
__decorate([
    (0, typeorm_1.InjectEntityModel)(message_1.IotMessageEntity),
    __metadata("design:type", typeorm_2.Repository)
], IotMessageService.prototype, "iotMessageEntity", void 0);
exports.IotMessageService = IotMessageService = __decorate([
    (0, core_2.Provide)(),
    (0, core_2.Singleton)()
], IotMessageService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2lvdC9zZXJ2aWNlL21lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsaURBQXVEO0FBQ3ZELCtDQUFxRDtBQUNyRCw0Q0FBZ0Q7QUFDaEQsK0NBQXNEO0FBQ3RELHFDQUFxQztBQUNyQyx5Q0FBb0Q7QUFFcEQ7O0dBRUc7QUFHSSxJQUFNLGlCQUFpQixHQUF2QixNQUFNLGlCQUFrQixTQUFRLGtCQUFXO0lBT2hEOzs7OztPQUtHO0lBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFnQixFQUFFLElBQVksRUFBRSxJQUFZO1FBQ3ZELE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLElBQUksTUFBTSxFQUFFO1lBQ1YsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDekU7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQW5CWSw4Q0FBaUI7QUFFNUI7SUFEQyxJQUFBLDJCQUFpQixFQUFDLHdCQUFlLENBQUM7OEJBQ2xCLG9CQUFVOzBEQUFrQjtBQUc3QztJQURDLElBQUEsMkJBQWlCLEVBQUMsMEJBQWdCLENBQUM7OEJBQ2xCLG9CQUFVOzJEQUFtQjs0QkFMcEMsaUJBQWlCO0lBRjdCLElBQUEsY0FBTyxHQUFFO0lBQ1QsSUFBQSxnQkFBUyxHQUFFO0dBQ0MsaUJBQWlCLENBbUI3QiJ9