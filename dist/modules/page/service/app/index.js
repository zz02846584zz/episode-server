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
exports.AppPageService = void 0;
const core_1 = require("@cool-midway/core");
const decorator_1 = require("@midwayjs/decorator");
const typeorm_1 = require("@midwayjs/typeorm");
const typeorm_2 = require("typeorm");
const entity_1 = require("../../entity");
const info_1 = require("../../entity/info");
const info_2 = require("./../../../member/entity/info");
/**
 * 描述
 */
let AppPageService = class AppPageService extends core_1.BaseService {
    async list() {
        const pages = await this.nativeQuery(`
        SELECT
            a.*
        FROM
            page a
        GROUP BY a.id
    `);
        for (const page of pages) {
            const en = await this.pageInfoEntity.findOneBy({
                pageId: page.id,
                locale: 'en',
            });
            const tw = await this.pageInfoEntity.findOneBy({
                pageId: page.id,
                locale: 'zh-Hant',
            });
            en.metaData = JSON.parse(en.metaData);
            tw.metaData = JSON.parse(tw.metaData);
            delete page.createTime;
            delete page.updateTime;
            delete en.id;
            delete en.pageId;
            delete en.createTime;
            delete en.updateTime;
            delete en.locale;
            delete tw.id;
            delete tw.pageId;
            delete tw.createTime;
            delete tw.updateTime;
            delete tw.locale;
            page.en = en;
            page['zh-Hant'] = tw;
        }
        return pages;
    }
    async info(id) {
        const page = await this.pageEntity.findOneBy({ id });
        const en = await this.pageInfoEntity.findOneBy({
            pageId: page.id,
            locale: 'en',
        });
        const tw = await this.pageInfoEntity.findOneBy({
            pageId: page.id,
            locale: 'zh-Hant',
        });
        en.metaData = JSON.parse(en.metaData);
        tw.metaData = JSON.parse(tw.metaData);
        delete page.createTime;
        delete page.updateTime;
        delete en.id;
        delete en.pageId;
        delete en.createTime;
        delete en.updateTime;
        delete en.locale;
        delete tw.id;
        delete tw.pageId;
        delete tw.createTime;
        delete tw.updateTime;
        delete tw.locale;
        return {
            ...page,
            en: en,
            'zh-Hant': tw,
        };
    }
};
exports.AppPageService = AppPageService;
__decorate([
    (0, typeorm_1.InjectEntityModel)(entity_1.PageEntity),
    __metadata("design:type", typeorm_2.Repository)
], AppPageService.prototype, "pageEntity", void 0);
__decorate([
    (0, typeorm_1.InjectEntityModel)(info_1.PageInfoEntity),
    __metadata("design:type", typeorm_2.Repository)
], AppPageService.prototype, "pageInfoEntity", void 0);
__decorate([
    (0, typeorm_1.InjectEntityModel)(info_2.MemberInfoEntity),
    __metadata("design:type", typeorm_2.Repository)
], AppPageService.prototype, "memberInfoEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], AppPageService.prototype, "ctx", void 0);
exports.AppPageService = AppPageService = __decorate([
    (0, decorator_1.Provide)()
], AppPageService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wYWdlL3NlcnZpY2UvYXBwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDRDQUFnRDtBQUNoRCxtREFBc0Q7QUFDdEQsK0NBQXNEO0FBQ3RELHFDQUFxQztBQUNyQyx5Q0FBMEM7QUFDMUMsNENBQW1EO0FBQ25ELHdEQUFpRTtBQUVqRTs7R0FFRztBQUVJLElBQU0sY0FBYyxHQUFwQixNQUFNLGNBQWUsU0FBUSxrQkFBVztJQWE3QyxLQUFLLENBQUMsSUFBSTtRQUNSLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQzs7Ozs7O0tBTXBDLENBQUMsQ0FBQztRQUVILEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFO1lBQ3hCLE1BQU0sRUFBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7Z0JBQzdDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFDZixNQUFNLEVBQUUsSUFBSTthQUNiLENBQUMsQ0FBQztZQUNILE1BQU0sRUFBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7Z0JBQzdDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFDZixNQUFNLEVBQUUsU0FBUzthQUNsQixDQUFDLENBQUM7WUFDSCxFQUFFLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFdEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUV2QixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFD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