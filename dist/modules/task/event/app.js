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
const info_1 = require("./../service/info");
const core_2 = require("@cool-midway/core");
/**
 * 应用事件
 */
let AppEvent = class AppEvent {
    async onServerReady() {
        this.taskInfoService.initTask();
    }
};
exports.AppEvent = AppEvent;
__decorate([
    (0, core_1.Inject)(),
    __metadata("design:type", info_1.TaskInfoService)
], AppEvent.prototype, "taskInfoService", void 0);
__decorate([
    (0, core_2.Event)('onServerReady'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppEvent.prototype, "onServerReady", null);
exports.AppEvent = AppEvent = __decorate([
    (0, core_2.CoolEvent)()
], AppEvent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdGFzay9ldmVudC9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBQ3hDLDRDQUFvRDtBQUNwRCw0Q0FBcUQ7QUFFckQ7O0dBRUc7QUFFSSxJQUFNLFFBQVEsR0FBZCxNQUFNLFFBQVE7SUFLYixBQUFOLEtBQUssQ0FBQyxhQUFhO1FBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEMsQ0FBQztDQUNGLENBQUE7QUFSWSw0QkFBUTtBQUVuQjtJQURDLElBQUEsYUFBTSxHQUFFOzhCQUNRLHNCQUFlO2lEQUFDO0FBRzNCO0lBREwsSUFBQSxZQUFLLEVBQUMsZUFBZSxDQUFDOzs7OzZDQUd0QjttQkFQVSxRQUFRO0lBRHBCLElBQUEsZ0JBQVMsR0FBRTtHQUNDLFFBQVEsQ0FRcEIifQ==