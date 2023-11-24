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
exports.BaseAppSpaceInfoController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const info_1 = require("../../entity/info");
const info_2 = require("../../service/info");
/**
 * 图片空间信息
 */
let BaseAppSpaceInfoController = class BaseAppSpaceInfoController extends core_1.BaseController {
    async getConfig() {
        return this.ok({ appId: this.config.appId });
    }
};
exports.BaseAppSpaceInfoController = BaseAppSpaceInfoController;
__decorate([
    (0, decorator_1.Config)('module.space.wps'),
    __metadata("design:type", Object)
], BaseAppSpaceInfoController.prototype, "config", void 0);
__decorate([
    (0, decorator_1.Get)('/getConfig', { summary: '获得WPS配置' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BaseAppSpaceInfoController.prototype, "getConfig", null);
exports.BaseAppSpaceInfoController = BaseAppSpaceInfoController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'info', 'list', 'page'],
        entity: info_1.SpaceInfoEntity,
        service: info_2.SpaceInfoService,
        pageQueryOp: {
            fieldEq: ['type', 'classifyId'],
        },
    })
], BaseAppSpaceInfoController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3NwYWNlL2NvbnRyb2xsZXIvYWRtaW4vaW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBMkQ7QUFDM0QsNENBQW1FO0FBQ25FLDRDQUFvRDtBQUNwRCw2Q0FBc0Q7QUFFdEQ7O0dBRUc7QUFVSSxJQUFNLDBCQUEwQixHQUFoQyxNQUFNLDBCQUEyQixTQUFRLHFCQUFjO0lBS3RELEFBQU4sS0FBSyxDQUFDLFNBQVM7UUFDYixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDRixDQUFBO0FBUlksZ0VBQTBCO0FBRXJDO0lBREMsSUFBQSxrQkFBTSxFQUFDLGtCQUFrQixDQUFDOzswREFDcEI7QUFHRDtJQURMLElBQUEsZUFBRyxFQUFDLFlBQVksRUFBRSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQzs7OzsyREFHekM7cUNBUFUsMEJBQTBCO0lBVHRDLElBQUEsbUJBQU8sR0FBRTtJQUNULElBQUEscUJBQWMsRUFBQztRQUNkLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3hELE1BQU0sRUFBRSxzQkFBZTtRQUN2QixPQUFPLEVBQUUsdUJBQWdCO1FBQ3pCLFdBQVcsRUFBRTtZQUNYLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUM7U0FDaEM7S0FDRixDQUFDO0dBQ1csMEJBQTBCLENBUXRDIn0=