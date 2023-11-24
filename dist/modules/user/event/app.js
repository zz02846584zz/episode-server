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
exports.UserAppEvent = void 0;
const core_1 = require("@cool-midway/core");
const core_2 = require("@midwayjs/core");
const fs = require("fs");
const path = require("path");
const uuid_1 = require("uuid");
/**
 * 修改jwt.secret
 */
let UserAppEvent = class UserAppEvent {
    async onServerReady() {
        if (this.config.user.jwt.secret == 'cool-app-xxxxxx') {
            const filePath = path.join(this.app.getBaseDir(), 'modules', 'user', 'config.ts');
            // 替换文件内容
            let fileData = fs.readFileSync(filePath, 'utf8');
            const secret = (0, uuid_1.v1)().replace(/-/g, '');
            this.config.user.jwt.secret = secret;
            fs.writeFileSync(filePath, fileData.replace('cool-app-xxxxxx', secret));
            this.coreLogger.info('\x1B[36m [cool:module:user] midwayjs cool module user auto modify jwt.secret\x1B[0m');
        }
    }
};
exports.UserAppEvent = UserAppEvent;
__decorate([
    (0, core_2.Logger)(),
    __metadata("design:type", Object)
], UserAppEvent.prototype, "coreLogger", void 0);
__decorate([
    (0, core_2.Config)('module'),
    __metadata("design:type", Object)
], UserAppEvent.prototype, "config", void 0);
__decorate([
    (0, core_2.App)(),
    __metadata("design:type", Object)
], UserAppEvent.prototype, "app", void 0);
__decorate([
    (0, core_1.Event)('onServerReady'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserAppEvent.prototype, "onServerReady", null);
exports.UserAppEvent = UserAppEvent = __decorate([
    (0, core_1.CoolEvent)()
], UserAppEvent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlci9ldmVudC9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNENBQXFEO0FBQ3JELHlDQUE4RDtBQUU5RCx5QkFBeUI7QUFDekIsNkJBQTZCO0FBQzdCLCtCQUFrQztBQUVsQzs7R0FFRztBQUVJLElBQU0sWUFBWSxHQUFsQixNQUFNLFlBQVk7SUFXakIsQUFBTixLQUFLLENBQUMsYUFBYTtRQUNqQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksaUJBQWlCLEVBQUU7WUFDcEQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFDckIsU0FBUyxFQUNULE1BQU0sRUFDTixXQUFXLENBQ1osQ0FBQztZQUNGLFNBQVM7WUFDVCxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNqRCxNQUFNLE1BQU0sR0FBRyxJQUFBLFNBQUksR0FBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUNsQixxRkFBcUYsQ0FDdEYsQ0FBQztTQUNIO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUE3Qlksb0NBQVk7QUFFdkI7SUFEQyxJQUFBLGFBQU0sR0FBRTs7Z0RBQ1c7QUFHcEI7SUFEQyxJQUFBLGFBQU0sRUFBQyxRQUFRLENBQUM7OzRDQUNWO0FBR1A7SUFEQyxJQUFBLFVBQUcsR0FBRTs7eUNBQ3FCO0FBR3JCO0lBREwsSUFBQSxZQUFLLEVBQUMsZUFBZSxDQUFDOzs7O2lEQWtCdEI7dUJBNUJVLFlBQVk7SUFEeEIsSUFBQSxnQkFBUyxHQUFFO0dBQ0MsWUFBWSxDQTZCeEIifQ==