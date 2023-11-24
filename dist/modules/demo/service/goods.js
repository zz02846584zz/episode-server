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
exports.DemoGoodsService = void 0;
const goods_1 = require("./../entity/goods");
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("@midwayjs/typeorm");
const typeorm_2 = require("typeorm");
/**
 * 商品示例
 */
let DemoGoodsService = class DemoGoodsService extends core_1.BaseService {
    /**
     * 执行sql分页
     */
    async sqlPage(query) {
        return this.sqlRenderPage('select * from demo_goods ORDER BY id ASC', query, false);
    }
    /**
     * 执行entity分页
     */
    async entityPage(query) {
        const find = this.demoGoodsEntity.createQueryBuilder();
        return this.entityRenderPage(find, query);
    }
};
exports.DemoGoodsService = DemoGoodsService;
__decorate([
    (0, typeorm_1.InjectEntityModel)(goods_1.DemoGoodsEntity),
    __metadata("design:type", typeorm_2.Repository)
], DemoGoodsService.prototype, "demoGoodsEntity", void 0);
exports.DemoGoodsService = DemoGoodsService = __decorate([
    (0, decorator_1.Provide)()
], DemoGoodsService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9kZW1vL3NlcnZpY2UvZ29vZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQW9EO0FBQ3BELG1EQUE4QztBQUM5Qyw0Q0FBZ0Q7QUFDaEQsK0NBQXNEO0FBQ3RELHFDQUFxQztBQUVyQzs7R0FFRztBQUVJLElBQU0sZ0JBQWdCLEdBQXRCLE1BQU0sZ0JBQWlCLFNBQVEsa0JBQVc7SUFJL0M7O09BRUc7SUFDSCxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUs7UUFDakIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUN2QiwwQ0FBMEMsRUFDMUMsS0FBSyxFQUNMLEtBQUssQ0FDTixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLO1FBQ3BCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUN2RCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGLENBQUE7QUF0QlksNENBQWdCO0FBRTNCO0lBREMsSUFBQSwyQkFBaUIsRUFBQyx1QkFBZSxDQUFDOzhCQUNsQixvQkFBVTt5REFBa0I7MkJBRmxDLGdCQUFnQjtJQUQ1QixJQUFBLG1CQUFPLEdBQUU7R0FDRyxnQkFBZ0IsQ0FzQjVCIn0=