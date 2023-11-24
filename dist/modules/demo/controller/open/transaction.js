"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDemoTransactionController = void 0;
const goods_1 = require("../../entity/goods");
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const transaction_1 = require("../../service/transaction");
/**
 * 事务
 */
let AppDemoTransactionController = class AppDemoTransactionController extends core_1.BaseController {
};
exports.AppDemoTransactionController = AppDemoTransactionController;
exports.AppDemoTransactionController = AppDemoTransactionController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'info', 'list', 'page'],
        entity: goods_1.DemoGoodsEntity,
        service: transaction_1.DemoTransactionService,
    })
], AppDemoTransactionController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9kZW1vL2NvbnRyb2xsZXIvb3Blbi90cmFuc2FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw4Q0FBcUQ7QUFDckQsbURBQThDO0FBQzlDLDRDQUFtRTtBQUNuRSwyREFBbUU7QUFFbkU7O0dBRUc7QUFPSSxJQUFNLDRCQUE0QixHQUFsQyxNQUFNLDRCQUE2QixTQUFRLHFCQUFjO0NBQUcsQ0FBQTtBQUF0RCxvRUFBNEI7dUNBQTVCLDRCQUE0QjtJQU54QyxJQUFBLG1CQUFPLEdBQUU7SUFDVCxJQUFBLHFCQUFjLEVBQUM7UUFDZCxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUN4RCxNQUFNLEVBQUUsdUJBQWU7UUFDdkIsT0FBTyxFQUFFLG9DQUFzQjtLQUNoQyxDQUFDO0dBQ1csNEJBQTRCLENBQTBCIn0=