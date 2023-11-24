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
exports.BaseCommController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const user_1 = require("../../entity/sys/user");
const login_1 = require("../../service/sys/login");
const perms_1 = require("../../service/sys/perms");
const user_2 = require("../../service/sys/user");
const file_1 = require("@cool-midway/file");
/**
 * Base 通用接口 一般写不需要权限过滤的接口
 */
let BaseCommController = class BaseCommController extends core_1.BaseController {
    /**
     * 获得个人信息
     */
    async person() {
        return this.ok(await this.baseSysUserService.person());
    }
    /**
     * 修改个人信息
     */
    async personUpdate(user) {
        await this.baseSysUserService.personUpdate(user);
        return this.ok();
    }
    /**
     * 权限菜单
     */
    async permmenu() {
        return this.ok(await this.baseSysPermsService.permmenu(this.ctx.admin.roleIds));
    }
    /**
     * 文件上传
     */
    async upload() {
        return this.ok(await this.coolFile.upload(this.ctx));
    }
    /**
     * 文件上传模式，本地或者云存储
     */
    async uploadMode() {
        return this.ok(await this.coolFile.getMode());
    }
    /**
     * 退出
     */
    async logout() {
        await this.baseSysLoginService.logout();
        return this.ok();
    }
};
exports.BaseCommController = BaseCommController;
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", user_2.BaseSysUserService)
], BaseCommController.prototype, "baseSysUserService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", perms_1.BaseSysPermsService)
], BaseCommController.prototype, "baseSysPermsService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", login_1.BaseSysLoginService)
], BaseCommController.prototype, "baseSysLoginService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], BaseCommController.prototype, "ctx", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", file_1.CoolFile)
], BaseCommController.prototype, "coolFile", void 0);
__decorate([
    (0, decorator_1.Get)('/person', { summary: '个人信息' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BaseCommController.prototype, "person", null);
__decorate([
    (0, decorator_1.Post)('/personUpdate', { summary: '修改个人信息' }),
    __param(0, (0, decorator_1.Body)(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.BaseSysUserEntity]),
    __metadata("design:returntype", Promise)
], BaseCommController.prototype, "personUpdate", null);
__decorate([
    (0, decorator_1.Get)('/permmenu', { summary: '权限与菜单' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BaseCommController.prototype, "permmenu", null);
__decorate([
    (0, decorator_1.Post)('/upload', { summary: '文件上传' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BaseCommController.prototype, "upload", null);
__decorate([
    (0, decorator_1.Get)('/uploadMode', { summary: '文件上传模式' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BaseCommController.prototype, "uploadMode", null);
__decorate([
    (0, decorator_1.Post)('/logout', { summary: '退出' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BaseCommController.prototype, "logout", null);
exports.BaseCommController = BaseCommController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)()
], BaseCommController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2Jhc2UvY29udHJvbGxlci9hZG1pbi9jb21tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE0RTtBQUM1RSw0Q0FBbUU7QUFDbkUsZ0RBQTBEO0FBQzFELG1EQUE4RDtBQUM5RCxtREFBOEQ7QUFDOUQsaURBQTREO0FBRTVELDRDQUE2QztBQUU3Qzs7R0FFRztBQUdJLElBQU0sa0JBQWtCLEdBQXhCLE1BQU0sa0JBQW1CLFNBQVEscUJBQWM7SUFnQnBEOztPQUVHO0lBRUcsQUFBTixLQUFLLENBQUMsTUFBTTtRQUNWLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRDs7T0FFRztJQUVHLEFBQU4sS0FBSyxDQUFDLFlBQVksQ0FBWSxJQUF1QjtRQUNuRCxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsT0FBTyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVEOztPQUVHO0lBRUcsQUFBTixLQUFLLENBQUMsUUFBUTtRQUNaLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FDWixNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQ2hFLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFFRyxBQUFOLEtBQUssQ0FBQyxNQUFNO1FBQ1YsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVEOztPQUVHO0lBRUcsQUFBTixLQUFLLENBQUMsVUFBVTtRQUNkLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7O09BRUc7SUFFRyxBQUFOLEtBQUssQ0FBQyxNQUFNO1FBQ1YsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDeEMsT0FBTyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDbkIsQ0FBQztDQUNGLENBQUE7QUFuRVksZ0RBQWtCO0FBRTdCO0lBREMsSUFBQSxrQkFBTSxHQUFFOzhCQUNXLHlCQUFrQjs4REFBQztBQUd2QztJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDWSwyQkFBbUI7K0RBQUM7QUFHekM7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OEJBQ1ksMkJBQW1COytEQUFDO0FBR3pDO0lBREMsSUFBQSxrQkFBTSxHQUFFOzsrQ0FDSTtBQUdiO0lBREMsSUFBQSxrQkFBTSxHQUFFOzhCQUNDLGVBQVE7b0RBQUM7QUFNYjtJQURMLElBQUEsZUFBRyxFQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQzs7OztnREFHbkM7QUFNSztJQURMLElBQUEsZ0JBQUksRUFBQyxlQUFlLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7SUFDekIsV0FBQSxJQUFBLGdCQUFJLEVBQUMsZUFBRyxDQUFDLENBQUE7O3FDQUFPLHdCQUFpQjs7c0RBR3BEO0FBTUs7SUFETCxJQUFBLGVBQUcsRUFBQyxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7Ozs7a0RBS3RDO0FBTUs7SUFETCxJQUFBLGdCQUFJLEVBQUMsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDOzs7O2dEQUdwQztBQU1LO0lBREwsSUFBQSxlQUFHLEVBQUMsYUFBYSxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDOzs7O29EQUd6QztBQU1LO0lBREwsSUFBQSxnQkFBSSxFQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7OztnREFJbEM7NkJBbEVVLGtCQUFrQjtJQUY5QixJQUFBLG1CQUFPLEdBQUU7SUFDVCxJQUFBLHFCQUFjLEdBQUU7R0FDSixrQkFBa0IsQ0FtRTlCIn0=