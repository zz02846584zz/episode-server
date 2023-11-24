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
exports.AppDemoGoodsController = void 0;
const goods_1 = require("../../service/goods");
const goods_2 = require("../../entity/goods");
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("@midwayjs/typeorm");
const typeorm_2 = require("typeorm");
/**
 * 测试
 */
let AppDemoGoodsController = class AppDemoGoodsController extends core_1.BaseController {
    async sqlPage(query) {
        return this.ok(await this.demoGoodsService.sqlPage(query));
    }
    async entityPage(query) {
        return this.ok(await this.demoGoodsService.entityPage(query));
    }
};
exports.AppDemoGoodsController = AppDemoGoodsController;
__decorate([
    (0, typeorm_1.InjectEntityModel)(goods_2.DemoGoodsEntity),
    __metadata("design:type", typeorm_2.Repository)
], AppDemoGoodsController.prototype, "demoGoodsEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", goods_1.DemoGoodsService)
], AppDemoGoodsController.prototype, "demoGoodsService", void 0);
__decorate([
    (0, decorator_1.Post)('/sqlPage', { summary: 'sql分页查询' }),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppDemoGoodsController.prototype, "sqlPage", null);
__decorate([
    (0, decorator_1.Post)('/entityPage', { summary: 'entity分页查询' }),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppDemoGoodsController.prototype, "entityPage", null);
exports.AppDemoGoodsController = AppDemoGoodsController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'info', 'list', 'page'],
        entity: goods_2.DemoGoodsEntity,
        service: goods_1.DemoGoodsService,
    })
], AppDemoGoodsController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9kZW1vL2NvbnRyb2xsZXIvb3Blbi9nb29kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBdUQ7QUFDdkQsOENBQXFEO0FBQ3JELG1EQUFrRTtBQUNsRSw0Q0FBbUU7QUFDbkUsK0NBQXNEO0FBQ3RELHFDQUFxQztBQUVyQzs7R0FFRztBQU9JLElBQU0sc0JBQXNCLEdBQTVCLE1BQU0sc0JBQXVCLFNBQVEscUJBQWM7SUFRbEQsQUFBTixLQUFLLENBQUMsT0FBTyxDQUFTLEtBQUs7UUFDekIsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFHSyxBQUFOLEtBQUssQ0FBQyxVQUFVLENBQVMsS0FBSztRQUM1QixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztDQUNGLENBQUE7QUFoQlksd0RBQXNCO0FBRWpDO0lBREMsSUFBQSwyQkFBaUIsRUFBQyx1QkFBZSxDQUFDOzhCQUNsQixvQkFBVTsrREFBa0I7QUFHN0M7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OEJBQ1Msd0JBQWdCO2dFQUFDO0FBRzdCO0lBREwsSUFBQSxnQkFBSSxFQUFDLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQztJQUMxQixXQUFBLElBQUEsZ0JBQUksR0FBRSxDQUFBOzs7O3FEQUVwQjtBQUdLO0lBREwsSUFBQSxnQkFBSSxFQUFDLGFBQWEsRUFBRSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQztJQUM3QixXQUFBLElBQUEsZ0JBQUksR0FBRSxDQUFBOzs7O3dEQUV2QjtpQ0FmVSxzQkFBc0I7SUFObEMsSUFBQSxtQkFBTyxHQUFFO0lBQ1QsSUFBQSxxQkFBYyxFQUFDO1FBQ2QsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDeEQsTUFBTSxFQUFFLHVCQUFlO1FBQ3ZCLE9BQU8sRUFBRSx3QkFBZ0I7S0FDMUIsQ0FBQztHQUNXLHNCQUFzQixDQWdCbEMifQ==