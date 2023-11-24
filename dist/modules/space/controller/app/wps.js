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
exports.AppSpaceWpsController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const wps_1 = require("../../service/wps");
/**
 * wps回调
 */
let AppSpaceWpsController = class AppSpaceWpsController extends core_1.BaseController {
    async files(file_id) {
        return await this.spaceWpsService.getFiles(file_id);
    }
    async download(file_id) {
        return await this.spaceWpsService.download(file_id);
    }
    async permission(file_id) {
        return await this.spaceWpsService.permission(file_id);
    }
    async upload(file_id, files) {
        return await this.spaceWpsService.upload(file_id, files);
    }
    async uploadPrepare(file_id) {
        return await this.spaceWpsService.uploadPrepare(file_id);
    }
    async uploadAddress(file_id, body) {
        return await this.spaceWpsService.uploadAddress(file_id, body);
    }
    async uploadComplete(file_id, body) {
        return await this.spaceWpsService.uploadComplete(file_id, body);
    }
    async users(user_ids) {
        return await this.spaceWpsService.users(user_ids);
    }
};
exports.AppSpaceWpsController = AppSpaceWpsController;
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", wps_1.SpaceWpsService)
], AppSpaceWpsController.prototype, "spaceWpsService", void 0);
__decorate([
    (0, decorator_1.Get)('/v3/3rd/files/:file_id', { summary: '获取文件信息' }),
    __param(0, (0, decorator_1.Param)('file_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppSpaceWpsController.prototype, "files", null);
__decorate([
    (0, decorator_1.Get)('/v3/3rd/files/:file_id/download', { summary: '获取文件下载地址' }),
    __param(0, (0, decorator_1.Param)('file_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppSpaceWpsController.prototype, "download", null);
__decorate([
    (0, decorator_1.Get)('/v3/3rd/files/:file_id/permission', { summary: '获取文档用户权限' }),
    __param(0, (0, decorator_1.Param)('file_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppSpaceWpsController.prototype, "permission", null);
__decorate([
    (0, decorator_1.Post)('/v3/3rd/files/:file_id/upload', { summary: '文件上传' }),
    __param(0, (0, decorator_1.Param)('file_id')),
    __param(1, (0, decorator_1.Files)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppSpaceWpsController.prototype, "upload", null);
__decorate([
    (0, decorator_1.Get)('/v3/3rd/files/:file_id/upload/prepare', { summary: '准备上传阶段' }),
    __param(0, (0, decorator_1.Param)('file_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppSpaceWpsController.prototype, "uploadPrepare", null);
__decorate([
    (0, decorator_1.Post)('/v3/3rd/files/:file_id/upload/address', { summary: '获取上传地址' }),
    __param(0, (0, decorator_1.Param)('file_id')),
    __param(1, (0, decorator_1.Body)(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppSpaceWpsController.prototype, "uploadAddress", null);
__decorate([
    (0, decorator_1.Post)('/v3/3rd/files/:file_id/upload/complete', {
        summary: '上传完成后，回调通知上传结果',
    }),
    __param(0, (0, decorator_1.Param)('file_id')),
    __param(1, (0, decorator_1.Body)(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppSpaceWpsController.prototype, "uploadComplete", null);
__decorate([
    (0, decorator_1.Get)('/v3/3rd/users', { summary: '用户信息' }),
    __param(0, (0, decorator_1.Query)('user_ids')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], AppSpaceWpsController.prototype, "users", null);
exports.AppSpaceWpsController = AppSpaceWpsController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)('/wps')
], AppSpaceWpsController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3BzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvc3BhY2UvY29udHJvbGxlci9hcHAvd3BzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQVU2QjtBQUM3Qiw0Q0FBbUU7QUFDbkUsMkNBQW9EO0FBRXBEOztHQUVHO0FBR0ksSUFBTSxxQkFBcUIsR0FBM0IsTUFBTSxxQkFBc0IsU0FBUSxxQkFBYztJQUtqRCxBQUFOLEtBQUssQ0FBQyxLQUFLLENBQW1CLE9BQWU7UUFDM0MsT0FBTyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFHSyxBQUFOLEtBQUssQ0FBQyxRQUFRLENBQW1CLE9BQWU7UUFDOUMsT0FBTyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFHSyxBQUFOLEtBQUssQ0FBQyxVQUFVLENBQW1CLE9BQWU7UUFDaEQsT0FBTyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFHSyxBQUFOLEtBQUssQ0FBQyxNQUFNLENBQW1CLE9BQWUsRUFBVyxLQUFLO1FBQzVELE9BQU8sTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUdLLEFBQU4sS0FBSyxDQUFDLGFBQWEsQ0FBbUIsT0FBZTtRQUNuRCxPQUFPLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUdLLEFBQU4sS0FBSyxDQUFDLGFBQWEsQ0FBbUIsT0FBZSxFQUFhLElBQUk7UUFDcEUsT0FBTyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFD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