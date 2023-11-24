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
exports.AppProjectController = void 0;
const core_1 = require("@cool-midway/core");
const core_2 = require("@midwayjs/core");
const entity_1 = require("../../entity");
const app_1 = require("../../service/app");
/**
 * 描述
 */
let AppProjectController = class AppProjectController extends core_1.BaseController {
    async articleNew(param) {
        return this.ok(await this.appProjectService.info(param.slug));
    }
};
exports.AppProjectController = AppProjectController;
__decorate([
    (0, core_2.Inject)(),
    __metadata("design:type", app_1.AppProjectService)
], AppProjectController.prototype, "appProjectService", void 0);
__decorate([
    (0, core_2.Post)('/info', { summary: '新增' }),
    __param(0, (0, core_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppProjectController.prototype, "articleNew", null);
exports.AppProjectController = AppProjectController = __decorate([
    (0, core_1.CoolController)({
        api: ['list'],
        entity: entity_1.ProjectEntity,
        service: app_1.AppProjectService,
    })
], AppProjectController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9qZWN0L2NvbnRyb2xsZXIvYXBwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUFtRTtBQUNuRSx5Q0FBb0Q7QUFDcEQseUNBQTZDO0FBQzdDLDJDQUFzRDtBQUV0RDs7R0FFRztBQU1JLElBQU0sb0JBQW9CLEdBQTFCLE1BQU0sb0JBQXFCLFNBQVEscUJBQWM7SUFLaEQsQUFBTixLQUFLLENBQUMsVUFBVSxDQUFTLEtBQUs7UUFDNUIsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0NBQ0YsQ0FBQTtBQVJZLG9EQUFvQjtBQUUvQjtJQURDLElBQUEsYUFBTSxHQUFFOzhCQUNVLHVCQUFpQjsrREFBQztBQUcvQjtJQURMLElBQUEsV0FBSSxFQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNmLFdBQUEsSUFBQSxXQUFJLEdBQUUsQ0FBQTs7OztzREFFdkI7K0JBUFUsb0JBQW9CO0lBTGhDLElBQUEscUJBQWMsRUFBQztRQUNkLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNiLE1BQU0sRUFBRSxzQkFBYTtRQUNyQixPQUFPLEVBQUUsdUJBQWlCO0tBQzNCLENBQUM7R0FDVyxvQkFBb0IsQ0FRaEMifQ==