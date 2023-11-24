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
const core_1 = require("@cool-midway/core");
const decorator_1 = require("@midwayjs/decorator");
const db_1 = require("../service/db");
/**
 * 应用事件
 */
let AppEvent = class AppEvent {
    async onDBInit() {
        this.initEntity();
    }
    async initEntity() {
        const cloudDBService = await this.app
            .getApplicationContext()
            .getAsync(db_1.CloudDBService);
        cloudDBService.initEntity();
    }
};
exports.AppEvent = AppEvent;
__decorate([
    (0, decorator_1.App)(),
    __metadata("design:type", Object)
], AppEvent.prototype, "app", void 0);
__decorate([
    (0, core_1.Event)('onDBInit'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppEvent.prototype, "onDBInit", null);
exports.AppEvent = AppEvent = __decorate([
    (0, core_1.CoolEvent)()
], AppEvent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvY2xvdWQvZXZlbnQvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLDRDQUFxRDtBQUNyRCxtREFBMEM7QUFDMUMsc0NBQStDO0FBRS9DOztHQUVHO0FBRUksSUFBTSxRQUFRLEdBQWQsTUFBTSxRQUFRO0lBS2IsQUFBTixLQUFLLENBQUMsUUFBUTtRQUNaLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsS0FBSyxDQUFDLFVBQVU7UUFDZCxNQUFNLGNBQWMsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHO2FBQ2xDLHFCQUFxQixFQUFFO2FBQ3ZCLFFBQVEsQ0FBQyxtQkFBYyxDQUFDLENBQUM7UUFDNUIsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzlCLENBQUM7Q0FDRixDQUFBO0FBZlksNEJBQVE7QUFFbkI7SUFEQyxJQUFBLGVBQUcsR0FBRTs7cUNBQ2tCO0FBR2xCO0lBREwsSUFBQSxZQUFLLEVBQUMsVUFBVSxDQUFDOzs7O3dDQUdqQjttQkFQVSxRQUFRO0lBRHBCLElBQUEsZ0JBQVMsR0FBRTtHQUNDLFFBQVEsQ0FlcEIifQ==