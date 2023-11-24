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
exports.AppUserInfoController = void 0;
const core_1 = require("@cool-midway/core");
const core_2 = require("@midwayjs/core");
const info_1 = require("../../service/info");
const info_2 = require("../../entity/info");
/**
 * 用户信息
 */
let AppUserInfoController = class AppUserInfoController extends core_1.BaseController {
    async person() {
        return this.ok(await this.userInfoService.person(this.ctx.user.id));
    }
    async updatePerson(body) {
        return this.ok(await this.userInfoService.updatePerson(this.ctx.user.id, body));
    }
};
exports.AppUserInfoController = AppUserInfoController;
__decorate([
    (0, core_2.Inject)(),
    __metadata("design:type", Object)
], AppUserInfoController.prototype, "ctx", void 0);
__decorate([
    (0, core_2.Inject)(),
    __metadata("design:type", info_1.UserInfoService)
], AppUserInfoController.prototype, "userInfoService", void 0);
__decorate([
    (0, core_2.Get)('/person', { summary: '获取用户信息' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppUserInfoController.prototype, "person", null);
__decorate([
    (0, core_2.Post)('/updatePerson', { summary: '更新用户信息' }),
    __param(0, (0, core_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppUserInfoController.prototype, "updatePerson", null);
exports.AppUserInfoController = AppUserInfoController = __decorate([
    (0, core_1.CoolController)({
        api: [],
        entity: info_2.UserInfoEntity,
    })
], AppUserInfoController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXIvY29udHJvbGxlci9hcHAvaW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBbUU7QUFDbkUseUNBQXlEO0FBQ3pELDZDQUFxRDtBQUNyRCw0Q0FBbUQ7QUFFbkQ7O0dBRUc7QUFLSSxJQUFNLHFCQUFxQixHQUEzQixNQUFNLHFCQUFzQixTQUFRLHFCQUFjO0lBUWpELEFBQU4sS0FBSyxDQUFDLE1BQU07UUFDVixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFHSyxBQUFOLEtBQUssQ0FBQyxZQUFZLENBQVMsSUFBSTtRQUM3QixPQUFPLElBQUksQ0FBQyxFQUFFLENBQ1osTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQ2hFLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQWxCWSxzREFBcUI7QUFFaEM7SUFEQyxJQUFBLGFBQU0sR0FBRTs7a0RBQ0w7QUFHSjtJQURDLElBQUEsYUFBTSxHQUFFOzhCQUNRLHNCQUFlOzhEQUFDO0FBRzNCO0lBREwsSUFBQSxVQUFHLEVBQUMsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDOzs7O21EQUdyQztBQUdLO0lBREwsSUFBQSxXQUFJLEVBQUMsZUFBZSxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLFdBQUEsSUFBQSxXQUFJLEdBQUUsQ0FBQTs7Ozt5REFJekI7Z0NBakJVLHFCQUFxQjtJQUpqQyxJQUFBLHFCQUFjLEVBQUM7UUFDZCxHQUFHLEVBQUUsRUFBRTtRQUNQLE1BQU0sRUFBRSxxQkFBYztLQUN2QixDQUFDO0dBQ1cscUJBQXFCLENBa0JqQyJ9