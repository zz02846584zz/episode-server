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
exports.AdminCloudFuncInfoController = void 0;
const func_1 = require("./../../../service/func");
const info_1 = require("../../../entity/func/info");
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
/**
 * 云函数
 */
let AdminCloudFuncInfoController = class AdminCloudFuncInfoController extends core_1.BaseController {
    async invoke(req, id, content) {
        return this.ok(await this.cloudFuncService.invoke(req, id, content));
    }
};
exports.AdminCloudFuncInfoController = AdminCloudFuncInfoController;
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", func_1.CloudFuncService)
], AdminCloudFuncInfoController.prototype, "cloudFuncService", void 0);
__decorate([
    (0, decorator_1.Post)('/invoke', { summary: '调用云函数' }),
    __param(0, (0, decorator_1.Body)()),
    __param(1, (0, decorator_1.Body)('id')),
    __param(2, (0, decorator_1.Body)('content')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, String]),
    __metadata("design:returntype", Promise)
], AdminCloudFuncInfoController.prototype, "invoke", null);
exports.AdminCloudFuncInfoController = AdminCloudFuncInfoController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'info', 'list', 'page'],
        entity: info_1.CloudFuncInfoEntity,
        pageQueryOp: {
            keyWordLikeFields: ['name'],
            fieldEq: ['status'],
        },
    })
], AdminCloudFuncInfoController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2Nsb3VkL2NvbnRyb2xsZXIvYWRtaW4vZnVuYy9pbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUEyRDtBQUMzRCxvREFBZ0U7QUFDaEUsbURBQWtFO0FBQ2xFLDRDQUFtRTtBQUduRTs7R0FFRztBQVVJLElBQU0sNEJBQTRCLEdBQWxDLE1BQU0sNEJBQTZCLFNBQVEscUJBQWM7SUFLeEQsQUFBTixLQUFLLENBQUMsTUFBTSxDQUNGLEdBQWEsRUFDVCxFQUFVLEVBQ0wsT0FBZTtRQUVoQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0NBQ0YsQ0FBQTtBQVpZLG9FQUE0QjtBQUV2QztJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDUyx1QkFBZ0I7c0VBQUM7QUFHN0I7SUFETCxJQUFBLGdCQUFJLEVBQUMsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBRW5DLFdBQUEsSUFBQSxnQkFBSSxHQUFFLENBQUE7SUFDTixXQUFBLElBQUEsZ0JBQUksRUFBQyxJQUFJLENBQUMsQ0FBQTtJQUNWLFdBQUEsSUFBQSxnQkFBSSxFQUFDLFNBQVMsQ0FBQyxDQUFBOzs7OzBEQUdqQjt1Q0FYVSw0QkFBNEI7SUFUeEMsSUFBQSxtQkFBTyxHQUFFO0lBQ1QsSUFBQSxxQkFBYyxFQUFDO1FBQ2QsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDeEQsTUFBTSxFQUFFLDBCQUFtQjtRQUMzQixXQUFXLEVBQUU7WUFDWCxpQkFBaUIsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUMzQixPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7U0FDcEI7S0FDRixDQUFDO0dBQ1csNEJBQTRCLENBWXhDIn0=