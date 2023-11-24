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
exports.SpaceWpsService = void 0;
const type_1 = require("./../entity/type");
const info_1 = require("./../entity/info");
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("@midwayjs/typeorm");
const typeorm_2 = require("typeorm");
const _ = require("lodash");
const user_1 = require("../../base/service/sys/user");
const moment = require("moment");
const fs = require("fs");
const cache_1 = require("@midwayjs/cache");
const jwt = require("jsonwebtoken");
const user_2 = require("../../base/entity/sys/user");
const file_1 = require("@cool-midway/file");
/**
 * 使用wps在线文档
 */
let SpaceWpsService = class SpaceWpsService extends core_1.BaseService {
    /**
     * 根据filedId获取数据库文件信息
     * @param fileId
     */
    async getFileInfo(fileId) {
        return await this.spaceInfoEntity.findOneBy({
            fileId,
        });
    }
    /**
     * 校验文档权限
     */
    async verifyUser() {
        const token = this.ctx.request.header['x-weboffice-token'];
        let tokenData;
        try {
            tokenData = jwt.verify(token, this.jwtConfig.jwt.secret);
        }
        catch (err) { }
        let userInfo;
        if (tokenData) {
            userInfo = await this.baseSysUserEntity.findOneBy({
                id: tokenData.userId,
            });
        }
        if (_.isEmpty(userInfo)) {
            throw new Error('用户不存在');
        }
        return userInfo;
    }
    /**
     * 获得文件信息
     * @param file_id
     */
    async getFiles(file_id) {
        const userInfo = await this.verifyUser();
        const fileInfo = await this.getFileInfo(file_id);
        if (_.isEmpty(fileInfo)) {
            return {
                code: '40004',
                msg: '文档不存在',
            };
        }
        return {
            code: 0,
            data: {
                id: fileInfo.fileId,
                name: fileInfo.name,
                version: fileInfo.version,
                size: fileInfo.size,
                create_time: moment(fileInfo.createTime).valueOf(),
                modify_time: moment(fileInfo.updateTime).valueOf(),
                creator_id: String(userInfo.id),
                modifier_id: String(userInfo.id),
                attrs: { _w_third_file_id: fileInfo.fileId },
            },
        };
    }
    /**
     * 获取文件下载地址
     * @param file_id
     * @returns
     */
    async download(file_id) {
        await this.verifyUser();
        const fileInfo = await this.getFileInfo(file_id);
        return {
            code: 0,
            data: {
                url: fileInfo.url,
            },
        };
    }
    /**
     * 获取文档用户权限
     * @param file_id
     * @returns
     */
    async permission(file_id) {
        const userInfo = await this.verifyUser();
        return {
            code: 0,
            data: {
                user_id: String(userInfo.id),
                read: 1,
                update: 1,
                download: 1,
                rename: 0,
                history: 0,
                copy: 1,
                print: 1,
                saveas: 1,
                comment: 1,
            },
        };
    }
    /**
     * 文件上传
     * @param file_id
     * @param files
     * @param body
     * @returns
     */
    async upload(file_id, files) {
        const userInfo = await this.verifyUser();
        const fileInfo = await this.getFileInfo(file_id);
        const data = files[0].data;
        const stat = fs.statSync(data);
        await this.coolFile.uploadWithKey(files[0], fileInfo.key);
        fileInfo.version++;
        fileInfo.size = stat.size;
        await this.spaceInfoEntity.save(fileInfo);
        return {
            code: 0,
            data: {
                id: fileInfo.fileId,
                name: fileInfo.name,
                version: fileInfo.version,
                size: fileInfo.size,
                create_time: moment(fileInfo.createTime).valueOf(),
                modify_time: moment(fileInfo.updateTime).valueOf(),
                creator_id: String(userInfo.id),
                modifier_id: String(userInfo.id),
            },
        };
    }
    /**
     * 用户信息
     * @param user_ids
     * @returns
     */
    async users(user_ids) {
        const userInfos = await this.baseSysUserEntity.find({
            where: {
                id: (0, typeorm_2.In)(user_ids),
            },
        });
        return {
            code: 0,
            data: userInfos.map(userInfo => {
                return {
                    id: String(userInfo.id),
                    name: userInfo.name,
                    avatar_url: userInfo.headImg,
                };
            }),
        };
    }
    /**
     * 准备上传阶段
     * @param file_id
     * @returns
     */
    async uploadPrepare(file_id) {
        console.log('准备上传阶段:' + file_id);
        return {
            code: 0,
            data: {
                digest_types: ['sha1'],
            },
            msg: '',
        };
    }
    /**
     * 获取上传地址
     * @param file_id
     * @param body
     * @returns
     */
    async uploadAddress(file_id, body) {
        console.log('获取上传地址:' + file_id);
        console.log(body);
        const fileInfo = await this.getFileInfo(file_id);
        const uploadRes = await this.coolFile.downAndUpload(body.url, fileInfo.name);
        if (!uploadRes) {
            return {
                code: '41001',
                msg: '文件未正确上传',
            };
        }
        return {
            code: 0,
            data: {
                method: 'PUT',
                url: uploadRes,
            },
            msg: '',
        };
    }
    /**
     * 上传完成后，回调通知上传结果
     * @param file_id
     * @param body
     * @returns
     */
    async uploadComplete(file_id, body) {
        console.log('上传完成后，回调通知上传结果:' + file_id);
        console.log(body);
        const userInfo = await this.baseSysUserService.person();
        const fileInfo = await this.getFileInfo(file_id);
        return {
            code: 0,
            data: {
                id: fileInfo.fileId,
                name: fileInfo.name,
                version: fileInfo.version,
                size: fileInfo.size,
                create_time: moment(fileInfo.createTime).valueOf(),
                modify_time: moment(fileInfo.updateTime).valueOf(),
                creator_id: String(userInfo.id),
                modifier_id: String(userInfo.id),
            },
        };
    }
};
exports.SpaceWpsService = SpaceWpsService;
__decorate([
    (0, typeorm_1.InjectEntityModel)(info_1.SpaceInfoEntity),
    __metadata("design:type", typeorm_2.Repository)
], SpaceWpsService.prototype, "spaceInfoEntity", void 0);
__decorate([
    (0, typeorm_1.InjectEntityModel)(type_1.SpaceTypeEntity),
    __metadata("design:type", typeorm_2.Repository)
], SpaceWpsService.prototype, "spaceTypeEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", user_1.BaseSysUserService)
], SpaceWpsService.prototype, "baseSysUserService", void 0);
__decorate([
    (0, typeorm_1.InjectEntityModel)(user_2.BaseSysUserEntity),
    __metadata("design:type", typeorm_2.Repository)
], SpaceWpsService.prototype, "baseSysUserEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], SpaceWpsService.prototype, "ctx", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", file_1.CoolFile)
], SpaceWpsService.prototype, "coolFile", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", cache_1.CacheManager)
], SpaceWpsService.prototype, "cacheManager", void 0);
__decorate([
    (0, decorator_1.Config)('module.base'),
    __metadata("design:type", Object)
], SpaceWpsService.prototype, "jwtConfig", void 0);
exports.SpaceWpsService = SpaceWpsService = __decorate([
    (0, decorator_1.Provide)()
], SpaceWpsService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3BzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvc3BhY2Uvc2VydmljZS93cHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW1EO0FBQ25ELDJDQUFtRDtBQUNuRCxtREFBOEQ7QUFDOUQsNENBQWdEO0FBQ2hELCtDQUFzRDtBQUN0RCxxQ0FBeUM7QUFDekMsNEJBQTRCO0FBQzVCLHNEQUFpRTtBQUNqRSxpQ0FBaUM7QUFDakMseUJBQXlCO0FBQ3pCLDJDQUErQztBQUMvQyxvQ0FBb0M7QUFDcEMscURBQStEO0FBQy9ELDRDQUE2QztBQUU3Qzs7R0FFRztBQUVJLElBQU0sZUFBZSxHQUFyQixNQUFNLGVBQWdCLFNBQVEsa0JBQVc7SUF5QjlDOzs7T0FHRztJQUNILEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7WUFDMUMsTUFBTTtTQUNQLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUssQ0FBQyxVQUFVO1FBQ2QsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDM0QsSUFBSSxTQUFTLENBQUM7UUFDZCxJQUFJO1lBQ0YsU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzFEO1FBQUMsT0FBTyxHQUFHLEVBQUUsR0FBRTtRQUNoQixJQUFJLFFBQVEsQ0FBQztRQUNiLElBQUksU0FBUyxFQUFFO1lBQ2IsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQztnQkFDaEQsRUFBRSxFQUFFLFNBQVMsQ0FBQyxNQUFNO2FBQ3JCLENBQUMsQ0FB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