"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminIotDeviceController = void 0;
const device_1 = require("./../../entity/device");
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
/**
 * 设备信息
 */
let AdminIotDeviceController = class AdminIotDeviceController extends core_1.BaseController {
};
exports.AdminIotDeviceController = AdminIotDeviceController;
exports.AdminIotDeviceController = AdminIotDeviceController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'info', 'list', 'page'],
        entity: device_1.IotDeviceEntity,
        pageQueryOp: {
            keyWordLikeFields: ['label', 'uniqueId'],
            fieldEq: ['status'],
        },
    })
], AdminIotDeviceController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvaW90L2NvbnRyb2xsZXIvYWRtaW4vZGV2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGtEQUF3RDtBQUN4RCxtREFBOEM7QUFDOUMsNENBQW1FO0FBRW5FOztHQUVHO0FBVUksSUFBTSx3QkFBd0IsR0FBOUIsTUFBTSx3QkFBeUIsU0FBUSxxQkFBYztDQUFHLENBQUE7QUFBbEQsNERBQXdCO21DQUF4Qix3QkFBd0I7SUFUcEMsSUFBQSxtQkFBTyxHQUFFO0lBQ1QsSUFBQSxxQkFBYyxFQUFDO1FBQ2QsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDeEQsTUFBTSxFQUFFLHdCQUFlO1FBQ3ZCLFdBQVcsRUFBRTtZQUNYLGlCQUFpQixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztZQUN4QyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7U0FDcEI7S0FDRixDQUFDO0dBQ1csd0JBQXdCLENBQTBCIn0=