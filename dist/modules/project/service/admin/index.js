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
exports.AdminProjectService = void 0;
const core_1 = require("@cool-midway/core");
const decorator_1 = require("@midwayjs/decorator");
const typeorm_1 = require("@midwayjs/typeorm");
const typeorm_2 = require("typeorm");
const entity_1 = require("../../entity");
const info_1 = require("../../entity/info");
/**
 * 描述
 */
let AdminProjectService = class AdminProjectService extends core_1.BaseService {
    /**
     * 新增
     * @param article
     */
    async add(param) {
        const { project: projectParam, info: infoParam } = param;
        if (projectParam.publish && !projectParam.publishTime) {
            projectParam.publishTime = this.getToday();
        }
        const project = await this.projectEntity.save(projectParam);
        const projectInfoEn = await this.projectInfoEntity.save({
            projectId: project.id,
            locale: 'en',
            ...infoParam['en'],
        });
        const projectInfoZhHant = await this.projectInfoEntity.save({
            projectId: project.id,
            locale: 'en',
            ...infoParam['zh-Hant'],
        });
        return {
            project,
            en: projectInfoEn,
            'zh-Hant': projectInfoZhHant,
        };
    }
    /**
     * 更新
     * @param param
     */
    async update(param) {
        const project = await this.projectEntity.findOneBy({ id: param.id });
        if ('publish' in param) {
            if (param.publish && !project.publishTime && !param.publishTime) {
                param.publishTime = this.getToday();
            }
        }
        return await this.projectEntity.save(param);
    }
    async edit(param) {
        const { project: projectParam, info: infoParam } = param;
        const exist = await this.projectEntity.findOneBy({ id: projectParam.id });
        if (param.publish && !exist.publishTime && !param.publishTime) {
            param.publishTime = this.getToday();
        }
        const project = await this.projectEntity.save(projectParam);
        const projectInfoEn = await this.projectInfoEntity.save({
            projectId: project.id,
            locale: 'en',
            ...infoParam['en'],
        });
        const projectInfoZhHant = await this.projectInfoEntity.save({
            projectId: project.id,
            locale: 'en',
            ...infoParam['zh-Hant'],
        });
        return {
            project,
            en: projectInfoEn,
            'zh-Hant': projectInfoZhHant,
        };
    }
    /**
     * 刪除
     * @param param
     */
    async delete(ids) {
        let idArr;
        if (ids instanceof Array) {
            idArr = ids;
        }
        else {
            idArr = ids.split(',');
        }
        for (const id of idArr) {
            try {
                const deleteArr = [
                    this.projectEntity.delete({ id }),
                    this.projectInfoEntity.delete({ projectId: id }),
                ];
                Promise.all(deleteArr);
            }
            catch (err) {
                console.error(err);
            }
        }
    }
    /**
     * 分頁
     * @param query
     */
    async page(query) {
        const { keyWord } = query;
        const sql = `
      SELECT
        a.*
      FROM
          project a
      WHERE 1 = 1
          ${this.setSql(keyWord, 'and (a.name LIKE ?)', [`%${keyWord}%`])}
      GROUP BY a.id
    `;
        return await this.sqlRenderPage(sql, query);
    }
    /**
     * 取得內容
     * @param query
     */
    async info(id) {
        const project = await this.projectEntity.findOneBy({ id: id });
        const projectInfoEn = await this.projectInfoEntity.findOneBy({
            projectId: id,
            locale: 'en',
        });
        const projectInfoTw = await this.projectInfoEntity.findOneBy({
            projectId: id,
            locale: 'zh-Hant',
        });
        delete project.createTime;
        delete project.updateTime;
        return {
            project,
            info: {
                en: projectInfoEn,
                'zh-Hant': projectInfoTw,
            },
        };
    }
    getToday() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        const hhmmss = today.toTimeString().split(' ')[0];
        return `${yyyy}-${mm}-${dd} ${hhmmss}`;
    }
};
exports.AdminProjectService = AdminProjectService;
__decorate([
    (0, typeorm_1.InjectEntityModel)(entity_1.ProjectEntity),
    __metadata("design:type", typeorm_2.Repository)
], AdminProjectService.prototype, "projectEntity", void 0);
__decorate([
    (0, typeorm_1.InjectEntityModel)(info_1.ProjectInfoEntity),
    __metadata("design:type", typeorm_2.Repository)
], AdminProjectService.prototype, "projectInfoEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], AdminProjectService.prototype, "ctx", void 0);
exports.AdminProjectService = AdminProjectService = __decorate([
    (0, decorator_1.Provide)()
], AdminProjectService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9qZWN0L3NlcnZpY2UvYWRtaW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNENBQWdEO0FBQ2hELG1EQUFzRDtBQUN0RCwrQ0FBc0Q7QUFDdEQscUNBQXFDO0FBQ3JDLHlDQUE2QztBQUM3Qyw0Q0FBc0Q7QUFFdEQ7O0dBRUc7QUFFSSxJQUFNLG1CQUFtQixHQUF6QixNQUFNLG1CQUFvQixTQUFRLGtCQUFXO0lBVWxEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBVTtRQUNsQixNQUFNLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBRXpELElBQUksWUFBWSxDQUFDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUU7WUFDckQsWUFBWSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDNUM7UUFFRCxNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzVELE1BQU0sYUFBYSxHQUFHLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQztZQUN0RCxTQUFTLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDckIsTUFBTSxFQUFFLElBQUk7WUFDWixHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7U0FDbkIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7WUFDMUQsU0FBUyxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQ3JCLE1BQU0sRUFBRSxJQUFJO1lBQ1osR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDO1NBQ3hCLENBQUMsQ0FBQztR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