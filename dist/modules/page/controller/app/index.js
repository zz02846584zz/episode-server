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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppPageInfoController = void 0;
const core_1 = require("@cool-midway/core");
const core_2 = require("@midwayjs/core");
const entity_1 = require("../../entity");
const app_1 = require("../../service/app");
/**
 * 描述
 */
let AppPageInfoController = class AppPageInfoController extends core_1.BaseController {
    async articleNew(param) {
        return this.ok(await this.appPageService.info(param.id));
    }
};
exports.AppPageInfoController = AppPageInfoController;
__decorate([
    (0, core_2.Inject)(),
    __metadata("design:type", app_1.AppPageService)
], AppPageInfoController.prototype, "appPageService", void 0);
__decorate([
    (0, core_2.Post)('/info', { summary: '新增' }),
    __param(0, (0, core_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppPageInfoController.prototype, "articleNew", null);
exports.AppPageInfoController = AppPageInfoController = __decorate([
    (0, core_1.CoolController)({
        api: ['list'],
        entity: entity_1.PageEntity,
        service: app_1.AppPageService,
    })
], AppPageInfoController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wYWdlL2NvbnRyb2xsZXIvYXBwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUFtRTtBQUNuRSx5Q0FBb0Q7QUFDcEQseUNBQTBDO0FBQzFDLDJDQUFtRDtBQUVuRDs7R0FFRztBQU1JLElBQU0scUJBQXFCLEdBQTNCLE1BQU0scUJBQXNCLFNBQVEscUJBQWM7SUFLakQsQUFBTixLQUFLLENBQUMsVUFBVSxDQUFTLEtBQUs7UUFDNUIsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztDQUNGLENBQUE7QUFSWSxzREFBcUI7QUFFaEM7SUFEQyxJQUFBLGFBQU0sR0FBRTs4QkFDTyxvQkFBYzs2REFBQztBQUd6QjtJQURMLElBQUEsV0FBSSxFQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNmLFdBQUEsSUFBQSxXQUFJLEdBQUUsQ0FBQTs7Ozt1REFFdkI7Z0NBUFUscUJBQXFCO0lBTGpDLElBQUEscUJBQWMsRUFBQztRQUNkLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNiLE1BQU0sRUFBRSxtQkFBVTtRQUNsQixPQUFPLEVBQUUsb0JBQWM7S0FDeEIsQ0FBQztHQUNXLHFCQUFxQixDQVFqQyJ9