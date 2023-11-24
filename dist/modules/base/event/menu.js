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
exports.BaseMenuEvent = void 0;
const core_1 = require("@cool-midway/core");
const menu_1 = require("../service/sys/menu");
const core_2 = require("@midwayjs/core");
/**
 * 导入菜单
 */
let BaseMenuEvent = class BaseMenuEvent {
    async onMenuImport(module, data) {
        await this.baseSysMenuService.import(data);
        this.coreLogger.info('\x1B[36m [cool:module:base] midwayjs cool module base import [' +
            module +
            '] module menu success \x1B[0m');
    }
};
exports.BaseMenuEvent = BaseMenuEvent;
__decorate([
    (0, core_2.Inject)(),
    __metadata("design:type", menu_1.BaseSysMenuService)
], BaseMenuEvent.prototype, "baseSysMenuService", void 0);
__decorate([
    (0, core_2.Logger)(),
    __metadata("design:type", Object)
], BaseMenuEvent.prototype, "coreLogger", void 0);
__decorate([
    (0, core_1.Event)('onMenuImport'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BaseMenuEvent.prototype, "onMenuImport", null);
exports.BaseMenuEvent = BaseMenuEvent = __decorate([
    (0, core_1.CoolEvent)()
], BaseMenuEvent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2Jhc2UvZXZlbnQvbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBcUQ7QUFDckQsOENBQXlEO0FBQ3pELHlDQUF5RDtBQUV6RDs7R0FFRztBQUVJLElBQU0sYUFBYSxHQUFuQixNQUFNLGFBQWE7SUFRbEIsQUFBTixLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJO1FBQzdCLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDbEIsZ0VBQWdFO1lBQzlELE1BQU07WUFDTiwrQkFBK0IsQ0FDbEMsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBaEJZLHNDQUFhO0FBRXhCO0lBREMsSUFBQSxhQUFNLEdBQUU7OEJBQ1cseUJBQWtCO3lEQUFDO0FBR3ZDO0lBREMsSUFBQSxhQUFNLEdBQUU7O2lEQUNXO0FBR2Q7SUFETCxJQUFBLFlBQUssRUFBQyxjQUFjLENBQUM7Ozs7aURBUXJCO3dCQWZVLGFBQWE7SUFEekIsSUFBQSxnQkFBUyxHQUFFO0dBQ0MsYUFBYSxDQWdCekIifQ==