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
            locale: 'zh-Hant',
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