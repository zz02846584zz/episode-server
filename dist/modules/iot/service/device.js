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
exports.IotDeviceService = void 0;
const device_1 = require("./../entity/device");
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("@midwayjs/typeorm");
const typeorm_2 = require("typeorm");
/**
 * 设备
 */
let IotDeviceService = class IotDeviceService extends core_1.BaseService {
    /**
     * 注册设备
     * @param uniqueId
     * @param clientId
     */
    async register(uniqueId, clientId) {
        const info = await this.iotDeviceEntity.findOneBy({ uniqueId });
        if (info) {
            await this.iotDeviceEntity.update({ uniqueId }, { status: 1, clientId });
        }
        else {
            // await this.iotDeviceEntity.insert({ uniqueId, clientId, status: 1 });
        }
    }
    /**
     * 重置所有设备状态
     */
    async resetStatus() {
        await this.iotDeviceEntity
            .createQueryBuilder()
            .update()
            .set({ status: 0 })
            .execute();
    }
    /**
     * 改变设备状态
     * @param uniqueId
     * @param status
     */
    async changeStatus(uniqueId, status) {
        await this.iotDeviceEntity.update({ uniqueId }, { status });
    }
};
exports.IotDeviceService = IotDeviceService;
__decorate([
    (0, typeorm_1.InjectEntityModel)(device_1.IotDeviceEntity),
    __metadata("design:type", typeorm_2.Repository)
], IotDeviceService.prototype, "iotDeviceEntity", void 0);
exports.IotDeviceService = IotDeviceService = __decorate([
    (0, decorator_1.Provide)(),
    (0, decorator_1.Scope)(decorator_1.ScopeEnum.Request, { allowDowngrade: true })
], IotDeviceService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvaW90L3NlcnZpY2UvZGV2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLCtDQUFxRDtBQUNyRCxtREFBZ0U7QUFDaEUsNENBQWdEO0FBQ2hELCtDQUFzRDtBQUN0RCxxQ0FBcUM7QUFFckM7O0dBRUc7QUFHSSxJQUFNLGdCQUFnQixHQUF0QixNQUFNLGdCQUFpQixTQUFRLGtCQUFXO0lBSS9DOzs7O09BSUc7SUFDSCxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQWdCLEVBQUUsUUFBZ0I7UUFDL0MsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDaEUsSUFBSSxJQUFJLEVBQUU7WUFDUixNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDMUU7YUFBTTtZQUNMLHdFQUF3RTtTQUN6RTtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUssQ0FBQyxXQUFXO1FBQ2YsTUFBTSxJQUFJLENBQUMsZUFBZTthQUN2QixrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDbEIsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBZ0IsRUFBRSxNQUFjO1FBQ2pELE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQztDQUNGLENBQUE7QUFyQ1ksNENBQWdCO0FBRTNCO0lBREMsSUFBQSwyQkFBaUIsRUFBQyx3QkFBZSxDQUFDOzhCQUNsQixvQkFBVTt5REFBa0I7MkJBRmxDLGdCQUFnQjtJQUY1QixJQUFBLG1CQUFPLEdBQUU7SUFDVCxJQUFBLGlCQUFLLEVBQUMscUJBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUM7R0FDdEMsZ0JBQWdCLENBcUM1QiJ9