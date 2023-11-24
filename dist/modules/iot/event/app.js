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
exports.AppEvent = void 0;
const core_1 = require("@midwayjs/core");
const core_2 = require("@cool-midway/core");
const device_1 = require("../service/device");
/**
 * 应用事件
 */
let AppEvent = class AppEvent {
    async onServerReady() {
        // 重置设备状态
        await this.iotDeviceService.resetStatus();
    }
};
exports.AppEvent = AppEvent;
__decorate([
    (0, core_1.Inject)(),
    __metadata("design:type", device_1.IotDeviceService)
], AppEvent.prototype, "iotDeviceService", void 0);
__decorate([
    (0, core_2.Event)('onServerReady'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppEvent.prototype, "onServerReady", null);
exports.AppEvent = AppEvent = __decorate([
    (0, core_2.CoolEvent)()
], AppEvent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvaW90L2V2ZW50L2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBd0M7QUFDeEMsNENBQXFEO0FBQ3JELDhDQUFxRDtBQUVyRDs7R0FFRztBQUVJLElBQU0sUUFBUSxHQUFkLE1BQU0sUUFBUTtJQUtiLEFBQU4sS0FBSyxDQUFDLGFBQWE7UUFDakIsU0FBUztRQUNULE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzVDLENBQUM7Q0FDRixDQUFBO0FBVFksNEJBQVE7QUFFbkI7SUFEQyxJQUFBLGFBQU0sR0FBRTs4QkFDUyx5QkFBZ0I7a0RBQUM7QUFHN0I7SUFETCxJQUFBLFlBQUssRUFBQyxlQUFlLENBQUM7Ozs7NkNBSXRCO21CQVJVLFFBQVE7SUFEcEIsSUFBQSxnQkFBUyxHQUFFO0dBQ0MsUUFBUSxDQVNwQiJ9