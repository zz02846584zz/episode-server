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
exports.UserInfoService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("@midwayjs/typeorm");
const typeorm_2 = require("typeorm");
const info_1 = require("../entity/info");
const file_1 = require("@cool-midway/file");
const uuid_1 = require("uuid");
/**
 * 用户信息
 */
let UserInfoService = class UserInfoService extends core_1.BaseService {
    /**
     * 获取用户信息
     * @param id
     * @returns
     */
    async person(id) {
        return await this.userInfoEntity.findOneBy({ id });
    }
    async updatePerson(id, param) {
        try {
            const info = await this.person(id);
            // 修改了头像要重新处理
            if (param.avatarUrl && info.avatarUrl != param.avatarUrl) {
                param.avatarUrl = await this.file.downAndUpload(param.avatarUrl, (0, uuid_1.v1)() + '.png');
            }
            return await this.userInfoEntity.update({ id }, param);
        }
        catch (err) {
            throw new core_1.CoolCommException('更新失败，参数错误或者手机号已存在');
        }
    }
};
exports.UserInfoService = UserInfoService;
__decorate([
    (0, typeorm_1.InjectEntityModel)(info_1.UserInfoEntity),
    __metadata("design:type", typeorm_2.Repository)
], UserInfoService.prototype, "userInfoEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", file_1.CoolFile)
], UserInfoService.prototype, "file", void 0);
exports.UserInfoService = UserInfoService = __decorate([
    (0, decorator_1.Provide)()
], UserInfoService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXIvc2VydmljZS9pbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFzRDtBQUN0RCw0Q0FBbUU7QUFDbkUsK0NBQXNEO0FBQ3RELHFDQUFxQztBQUNyQyx5Q0FBZ0Q7QUFDaEQsNENBQTZDO0FBQzdDLCtCQUFrQztBQUVsQzs7R0FFRztBQUVJLElBQU0sZUFBZSxHQUFyQixNQUFNLGVBQWdCLFNBQVEsa0JBQVc7SUFPOUM7Ozs7T0FJRztJQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNiLE9BQU8sTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLEtBQUs7UUFDMUIsSUFBSTtZQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNuQyxhQUFhO1lBQ2IsSUFBSSxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLFNBQVMsRUFBRTtnQkFDeEQsS0FBSyxDQUFDLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUM3QyxLQUFLLENBQUMsU0FBUyxFQUNmLElBQUEsU0FBSSxHQUFFLEdBQUcsTUFBTSxDQUNoQixDQUFDO2FBQ0g7WUFDRCxPQUFPLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN4RDtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osTUFBTSxJQUFJLHdCQUFpQixDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQS9CWSwwQ0FBZTtBQUUxQjtJQURDLElBQUEsMkJBQWlCLEVBQUMscUJBQWMsQ0FBQzs4QkFDbEIsb0JBQVU7dURBQWlCO0FBRzNDO0lBREMsSUFBQSxrQkFBTSxHQUFFOzhCQUNILGVBQVE7NkNBQUM7MEJBTEosZUFBZTtJQUQzQixJQUFBLG1CQUFPLEdBQUU7R0FDRyxlQUFlLENBK0IzQiJ9