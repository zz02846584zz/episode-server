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
exports.WelcomeController = void 0;
const decorator_1 = require("@midwayjs/decorator");
/**
 * 欢迎界面
 */
let WelcomeController = class WelcomeController {
    async welcome() {
        await this.ctx.render('welcome', {
            text: 'HELLO COOL-ADMIN v7.0 一个项目用COOL就够了！！！',
        });
    }
};
exports.WelcomeController = WelcomeController;
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], WelcomeController.prototype, "ctx", void 0);
__decorate([
    (0, decorator_1.App)(),
    __metadata("design:type", Object)
], WelcomeController.prototype, "app", void 0);
__decorate([
    (0, decorator_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WelcomeController.prototype, "welcome", null);
exports.WelcomeController = WelcomeController = __decorate([
    (0, decorator_1.Controller)('/')
], WelcomeController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy93ZWxjb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFtRTtBQUduRTs7R0FFRztBQUVJLElBQU0saUJBQWlCLEdBQXZCLE1BQU0saUJBQWlCO0lBUWYsQUFBTixLQUFLLENBQUMsT0FBTztRQUNsQixNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUMvQixJQUFJLEVBQUUsdUNBQXVDO1NBQzlDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBO0FBYlksOENBQWlCO0FBRTVCO0lBREMsSUFBQSxrQkFBTSxHQUFFOzs4Q0FDSTtBQUdiO0lBREMsSUFBQSxlQUFHLEdBQUU7OzhDQUNXO0FBR0o7SUFEWixJQUFBLGVBQUcsRUFBQyxHQUFHLENBQUM7Ozs7Z0RBS1I7NEJBWlUsaUJBQWlCO0lBRDdCLElBQUEsc0JBQVUsRUFBQyxHQUFHLENBQUM7R0FDSCxpQkFBaUIsQ0FhN0IifQ==