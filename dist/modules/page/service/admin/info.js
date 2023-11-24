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
exports.AdminPageInfoService = void 0;
const core_1 = require("@cool-midway/core");
const decorator_1 = require("@midwayjs/decorator");
const typeorm_1 = require("@midwayjs/typeorm");
const typeorm_2 = require("typeorm");
const entity_1 = require("../../entity");
const info_1 = require("../../entity/info");
/**
 * 描述
 */
let AdminPageInfoService = class AdminPageInfoService extends core_1.BaseService {
    /**
     * 新增
     * @param article
     */
    async add(param) {
        const { en, tw, ...pageParam } = param;
        const pageId = await this.pageEntity.save(pageParam);
        await this.pageInfoEntity.save({ pageId, locale: 'en', ...en });
        await this.pageInfoEntity.save({ pageId, locale: 'zh-Hant', ...tw });
        return { pageId };
    }
    /**
     * 更新
     * @param param
     */
    async update(param) {
        await this.pageInfoEntity.save({
            ...param,
        });
        return param.id;
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
          page a
      WHERE 1 = 1
          ${this.setSql(keyWord, 'and (a.name LIKE ?)', [`%${keyWord}%`])}
      GROUP BY a.id
    `;
        return await this.sqlRenderPage(sql, query);
    }
    /**
     * 分頁
     * @param query
     */
    async list(param) {
        const { locale } = param;
        const sql = `
      SELECT
          a.*
      FROM
          page_info a
      WHERE 1 = 1
        ${this.setSql(locale, 'and (a.locale LIKE ?)', [`%${locale}%`])}
      GROUP BY a.id
    `;
        return await this.nativeQuery(sql);
    }
    /**
     * 取得內容
     * @param query
     */
    async info(id) {
        const page = await this.pageEntity.findOneBy({ id: id });
        const pageInfoEn = await this.pageInfoEntity.findOneBy({
            pageId: id,
            locale: 'en',
        });
        const pageInfoTw = await this.pageInfoEntity.findOneBy({
            pageId: id,
            locale: 'zh-Hant',
        });
        return {
            id: page.id,
            name: page.name,
            en: pageInfoEn,
            tw: pageInfoTw,
        };
    }
};
exports.AdminPageInfoService = AdminPageInfoService;
__decorate([
    (0, typeorm_1.InjectEntityModel)(entity_1.PageEntity),
    __metadata("design:type", typeorm_2.Repository)
], AdminPageInfoService.prototype, "pageEntity", void 0);
__decorate([
    (0, typeorm_1.InjectEntityModel)(info_1.PageInfoEntity),
    __metadata("design:type", typeorm_2.Repository)
], AdminPageInfoService.prototype, "pageInfoEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], AdminPageInfoService.prototype, "ctx", void 0);
exports.AdminPageInfoService = AdminPageInfoService = __decorate([
    (0, decorator_1.Provide)()
], AdminPageInfoService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3BhZ2Uvc2VydmljZS9hZG1pbi9pbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDRDQUFnRDtBQUNoRCxtREFBc0Q7QUFDdEQsK0NBQXNEO0FBQ3RELHFDQUFxQztBQUNyQyx5Q0FBMEM7QUFDMUMsNENBQW1EO0FBRW5EOztHQUVHO0FBRUksSUFBTSxvQkFBb0IsR0FBMUIsTUFBTSxvQkFBcUIsU0FBUSxrQkFBVztJQVVuRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQVU7UUFDbEIsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxTQUFTLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDdkMsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRCxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFckUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7UUFDaEIsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUM3QixHQUFHLEtBQUs7U0FDVCxDQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSztRQUNkLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFFMUIsTUFBTSxHQUFHLEdBQUc7Ozs7OztZQU1KLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLENBQUMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDOztLQUVwRSxDQUFDO1FBRUYsT0FBTyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUs7UUFDZCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLE1BQU0sR0FBRyxHQUFHOzs7Ozs7VUFNTixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSx1QkFBdUIsRUFBRSxDQUFDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQzs7S0FFbEUsQ0FBQztRQUNGLE9BQU8sTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDWCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekQsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztZQUNyRCxNQUFNLEVBQUUsRUFBRTtZQUNWLE1BQU0sRUFBRSxJQUFJO1NBQ2IsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztZQUNyRCxNQUFNLEVBQUUsRUFBRTtZQUNWLE1BQU0sRUFBRSxTQUFTO1NBQ2xCLENBQUMsQ0FBQztRQUNILE9BQU87WUFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixFQUFFLEVBQUUsVUFBVTtZQUNkLEVBQUUsRUFBRSxVQUFVO1NBQ2YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBN0ZZLG9EQUFvQjtBQUUvQjtJQURDLElBQUEsMkJBQWlCLEVBQUMsbUJBQVUsQ0FBQzs4QkFDbEIsb0JBQVU7d0RBQWE7QUFHbkM7SUFEQyxJQUFBLDJCQUFpQixFQUFDLHFCQUFjLENBQUM7OEJBQ2xCLG9CQUFVOzREQUFpQjtBQUczQztJQURDLElBQUEsa0JBQU0sR0FBRTs7aURBQ0w7K0JBUk8sb0JBQW9CO0lBRGhDLElBQUEsbUJBQU8sR0FBRTtHQUNHLG9CQUFvQixDQTZGaEMifQ==