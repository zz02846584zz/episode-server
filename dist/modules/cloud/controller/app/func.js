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
exports.AppCloudFuncController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
/**
 * 云函数
 */
let AppCloudFuncController = class AppCloudFuncController extends core_1.BaseController {
    async invoke(body) { }
};
exports.AppCloudFuncController = AppCloudFuncController;
__decorate([
    (0, decorator_1.Post)('/invoke', { summary: '调用云函数' }),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppCloudFuncController.prototype, "invoke", null);
exports.AppCloudFuncController = AppCloudFuncController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)()
], AppCloudFuncController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2Nsb3VkL2NvbnRyb2xsZXIvYXBwL2Z1bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQTBEO0FBQzFELDRDQUFtRTtBQUVuRTs7R0FFRztBQUdJLElBQU0sc0JBQXNCLEdBQTVCLE1BQU0sc0JBQXVCLFNBQVEscUJBQWM7SUFFbEQsQUFBTixLQUFLLENBQUMsTUFBTSxDQUFTLElBQUksSUFBRyxDQUFDO0NBQzlCLENBQUE7QUFIWSx3REFBc0I7QUFFM0I7SUFETCxJQUFBLGdCQUFJLEVBQUMsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLFdBQUEsSUFBQSxnQkFBSSxHQUFFLENBQUE7Ozs7b0RBQVM7aUNBRmxCLHNCQUFzQjtJQUZsQyxJQUFBLG1CQUFPLEdBQUU7SUFDVCxJQUFBLHFCQUFjLEdBQUU7R0FDSixzQkFBc0IsQ0FHbEMifQ==