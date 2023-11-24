"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCloudFuncLogController = void 0;
const log_1 = require("./../../../entity/func/log");
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
/**
 * 日志
 */
let AdminCloudFuncLogController = class AdminCloudFuncLogController extends core_1.BaseController {
};
exports.AdminCloudFuncLogController = AdminCloudFuncLogController;
exports.AdminCloudFuncLogController = AdminCloudFuncLogController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'info', 'list', 'page'],
        entity: log_1.CloudFuncLogEntity,
        pageQueryOp: {
            fieldEq: ['infoId'],
        },
    })
], AdminCloudFuncLogController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvY2xvdWQvY29udHJvbGxlci9hZG1pbi9mdW5jL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxvREFBZ0U7QUFDaEUsbURBQThDO0FBQzlDLDRDQUFtRTtBQUVuRTs7R0FFRztBQVNJLElBQU0sMkJBQTJCLEdBQWpDLE1BQU0sMkJBQTRCLFNBQVEscUJBQWM7Q0FBRyxDQUFBO0FBQXJELGtFQUEyQjtzQ0FBM0IsMkJBQTJCO0lBUnZDLElBQUEsbUJBQU8sR0FBRTtJQUNULElBQUEscUJBQWMsRUFBQztRQUNkLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3hELE1BQU0sRUFBRSx3QkFBa0I7UUFDMUIsV0FBVyxFQUFFO1lBQ1gsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1NBQ3BCO0tBQ0YsQ0FBQztHQUNXLDJCQUEyQixDQUEwQiJ9