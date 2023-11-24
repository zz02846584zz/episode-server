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
exports.AppDemoEventController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
/**
 * 事件
 */
let AppDemoEventController = class AppDemoEventController extends core_1.BaseController {
    async send() {
        await this.coolEventManager.emit('demo', { a: 1 }, 1);
        return this.ok();
    }
};
exports.AppDemoEventController = AppDemoEventController;
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", core_1.CoolEventManager)
], AppDemoEventController.prototype, "coolEventManager", void 0);
__decorate([
    (0, decorator_1.Post)('/send'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppDemoEventController.prototype, "send", null);
exports.AppDemoEventController = AppDemoEventController = __decorate([
    (0, core_1.CoolController)()
], AppDemoEventController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9kZW1vL2NvbnRyb2xsZXIvb3Blbi9ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBbUQ7QUFDbkQsNENBSTJCO0FBRTNCOztHQUVHO0FBRUksSUFBTSxzQkFBc0IsR0FBNUIsTUFBTSxzQkFBdUIsU0FBUSxxQkFBYztJQUtsRCxBQUFOLEtBQUssQ0FBQyxJQUFJO1FBQ1IsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RCxPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNuQixDQUFDO0NBQ0YsQ0FBQTtBQVRZLHdEQUFzQjtBQUVqQztJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDUyx1QkFBZ0I7Z0VBQUM7QUFHN0I7SUFETCxJQUFBLGdCQUFJLEVBQUMsT0FBTyxDQUFDOzs7O2tEQUliO2lDQVJVLHNCQUFzQjtJQURsQyxJQUFBLHFCQUFjLEdBQUU7R0FDSixzQkFBc0IsQ0FTbEMifQ==