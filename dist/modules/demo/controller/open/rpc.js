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
exports.AppDemoRpcController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const rpc_1 = require("../../service/rpc");
/**
 * 远程RPC调用
 */
let AppDemoRpcController = class AppDemoRpcController extends core_1.BaseController {
    async call() {
        return this.ok(await this.demoRpcService.call());
    }
    async event() {
        await this.demoRpcService.event();
        return this.ok();
    }
    async transaction() {
        await this.demoRpcService.transaction({ a: 1 });
        return this.ok();
    }
};
exports.AppDemoRpcController = AppDemoRpcController;
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", rpc_1.DemoRpcService)
], AppDemoRpcController.prototype, "demoRpcService", void 0);
__decorate([
    (0, decorator_1.Get)('/call', { summary: '远程调用' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppDemoRpcController.prototype, "call", null);
__decorate([
    (0, decorator_1.Get)('/event', { summary: '集群事件' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppDemoRpcController.prototype, "event", null);
__decorate([
    (0, decorator_1.Get)('/transaction', { summary: '分布式事务' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppDemoRpcController.prototype, "transaction", null);
exports.AppDemoRpcController = AppDemoRpcController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)()
], AppDemoRpcController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnBjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvZGVtby9jb250cm9sbGVyL29wZW4vcnBjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUEyRDtBQUMzRCw0Q0FBbUU7QUFDbkUsMkNBQW1EO0FBRW5EOztHQUVHO0FBR0ksSUFBTSxvQkFBb0IsR0FBMUIsTUFBTSxvQkFBcUIsU0FBUSxxQkFBYztJQUtoRCxBQUFOLEtBQUssQ0FBQyxJQUFJO1FBQ1IsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFHSyxBQUFOLEtBQUssQ0FBQyxLQUFLO1FBQ1QsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFHSyxBQUFOLEtBQUssQ0FBQyxXQUFXO1FBQ2YsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ25CLENBQUM7Q0FDRixDQUFBO0FBcEJZLG9EQUFvQjtBQUUvQjtJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDTyxvQkFBYzs0REFBQztBQUd6QjtJQURMLElBQUEsZUFBRyxFQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQzs7OztnREFHakM7QUFHSztJQURMLElBQUEsZUFBRyxFQUFDLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQzs7OztpREFJbEM7QUFHSztJQURMLElBQUEsZUFBRyxFQUFDLGNBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzs7Ozt1REFJekM7K0JBbkJVLG9CQUFvQjtJQUZoQyxJQUFBLG1CQUFPLEdBQUU7SUFDVCxJQUFBLHFCQUFjLEdBQUU7R0FDSixvQkFBb0IsQ0FvQmhDIn0=