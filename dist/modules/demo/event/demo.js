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
exports.DemoEvent = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
/**
 * 接收事件
 */
let DemoEvent = class DemoEvent {
    /**
     * 根据事件名接收事件
     * @param msg
     * @param a
     */
    async updatdemoeUser(msg, a) {
        console.log('收到消息', msg, a);
    }
};
exports.DemoEvent = DemoEvent;
__decorate([
    (0, core_1.Event)('demo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DemoEvent.prototype, "updatdemoeUser", null);
exports.DemoEvent = DemoEvent = __decorate([
    (0, decorator_1.Provide)(),
    (0, decorator_1.Scope)(decorator_1.ScopeEnum.Singleton),
    (0, core_1.CoolEvent)()
], DemoEvent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2RlbW8vZXZlbnQvZGVtby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBZ0U7QUFDaEUsNENBQXFEO0FBRXJEOztHQUVHO0FBSUksSUFBTSxTQUFTLEdBQWYsTUFBTSxTQUFTO0lBQ3BCOzs7O09BSUc7SUFFRyxBQUFOLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDRixDQUFBO0FBVlksOEJBQVM7QUFPZDtJQURMLElBQUEsWUFBSyxFQUFDLE1BQU0sQ0FBQzs7OzsrQ0FHYjtvQkFUVSxTQUFTO0lBSHJCLElBQUEsbUJBQU8sR0FBRTtJQUNULElBQUEsaUJBQUssRUFBQyxxQkFBUyxDQUFDLFNBQVMsQ0FBQztJQUMxQixJQUFBLGdCQUFTLEdBQUU7R0FDQyxTQUFTLENBVXJCIn0=