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
exports.AppProjectService = void 0;
const core_1 = require("@cool-midway/core");
const decorator_1 = require("@midwayjs/decorator");
const typeorm_1 = require("@midwayjs/typeorm");
const _ = require("lodash");
const typeorm_2 = require("typeorm");
const entity_1 = require("../../entity");
const info_1 = require("../../entity/info");
/**
 * 描述
 */
let AppProjectService = class AppProjectService extends core_1.BaseService {
    /**
     * 列表
     */
    async list() {
        const projects = await this.nativeQuery(`
        SELECT
            a.*
        FROM
            project a
        GROUP BY a.id
        ORDER BY publishTime DESC
    `);
        for (const project of projects) {
            const en = await this.projectInfoEntity.findOneBy({
                projectId: project.id,
                locale: 'en',
            });
            const tw = await this.projectInfoEntity.findOneBy({
                projectId: project.id,
                locale: 'zh-Hant',
            });
            project.en = en;
            project['zh-Hant'] = tw;
        }
        return projects;
    }
    /**
     * 取得內容
     * @param query
     */
    async info(slug) {
        const project = await this.projectEntity.findOneBy({ slug });
        if (_.isEmpty(project))
            throw new core_1.CoolCommException('404 NOT FOUND');
        const projectInfoEn = await this.projectInfoEntity.findOneBy({
            projectId: project.id,
            locale: 'en',
        });
        const projectInfoTw = await this.projectInfoEntity.findOneBy({
            projectId: project.id,
            locale: 'zh-Hant',
        });
        return {
            ...project,
            en: projectInfoEn,
            'zh-Hant': projectInfoTw,
        };
    }
};
exports.AppProjectService = AppProjectService;
__decorate([
    (0, typeorm_1.InjectEntityModel)(entity_1.ProjectEntity),
    __metadata("design:type", typeorm_2.Repository)
], AppProjectService.prototype, "projectEntity", void 0);
__decorate([
    (0, typeorm_1.InjectEntityModel)(info_1.ProjectInfoEntity),
    __metadata("design:type", typeorm_2.Repository)
], AppProjectService.prototype, "projectInfoEntity", void 0);
exports.AppProjectService = AppProjectService = __decorate([
    (0, decorator_1.Provide)()
], AppProjectService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9qZWN0L3NlcnZpY2UvYXBwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDRDQUFtRTtBQUNuRSxtREFBOEM7QUFDOUMsK0NBQXNEO0FBQ3RELDRCQUE0QjtBQUM1QixxQ0FBcUM7QUFDckMseUNBQTZDO0FBQzdDLDRDQUFzRDtBQUV0RDs7R0FFRztBQUVJLElBQU0saUJBQWlCLEdBQXZCLE1BQU0saUJBQWtCLFNBQVEsa0JBQVc7SUFPaEQ7O09BRUc7SUFDSCxLQUFLLENBQUMsSUFBSTtRQUNSLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQzs7Ozs7OztLQU92QyxDQUFDLENBQUM7UUFFSCxLQUFLLE1BQU0sT0FBTyxJQUFJLFFBQVEsRUFBRTtZQUM5QixNQUFNLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7Z0JBQ2hELFNBQVMsRUFBRSxPQUFPLENBQUMsRUFBRTtnQkFDckIsTUFBTSxFQUFFLElBQUk7YUFDYixDQUFDLENBQUM7WUFDSCxNQUFNLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7Z0JBQ2hELFNBQVMsRUFBRSxPQUFPLENBQUMsRUFBRTtnQkFDckIsTUFBTSxFQUFFLFNBQVM7YUFDbEIsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDaEIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUN6QjtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUk7UUFDYixNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQUUsTUFBTSxJQUFJLHdCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXJFLE1BQU0sYUFBYSxHQUFHLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQztZQUMzRCxTQUFTLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDckIsTUFBTSxFQUFFLElBQUk7U0FDYixDQUFDLENBQUM7UUFDSCxNQUFNLGFBQWEsR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7WUFDM0QsU0FBUyxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQ3JCLE1BQU0sRUFBRSxTQUFTO1NBQ2xCLENBQUMsQ0FBQztRQUVILE9BQU87WUFDTCxHQUFHLE9BQU87WUFDVixFQUFFLEVBQUUsYUFBYTtZQUNqQixTQUFTLEVBQUUsYUFBYTtTQUN6QixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUEzRFksOENBQWlCO0FBRTVCO0lBREMsSUFBQSwyQkFBaUIsRUFBQyxzQkFBYSxDQUFDOzhCQUNsQixvQkFBVTt3REFBZ0I7QUFHekM7SUFEQyxJQUFBLDJCQUFpQixFQUFDLHdCQUFpQixDQUFDOzhCQUNsQixvQkFBVTs0REFBb0I7NEJBTHRDLGlCQUFpQjtJQUQ3QixJQUFBLG1CQUFPLEdBQUU7R0FDRyxpQkFBaUIsQ0EyRDdCIn0=