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
exports.AppMemberService = void 0;
const core_1 = require("@cool-midway/core");
const decorator_1 = require("@midwayjs/decorator");
const typeorm_1 = require("@midwayjs/typeorm");
const typeorm_2 = require("typeorm");
const entity_1 = require("../../entity");
const info_1 = require("../../entity/info");
/**
 * 描述
 */
let AppMemberService = class AppMemberService extends core_1.BaseService {
    async list() {
        const members = await this.nativeQuery(`
        SELECT
            a.*
        FROM
            member a
        GROUP BY a.id
    `);
        for (const member of members) {
            const en = await this.memberInfoEntity.findOneBy({
                memberId: member.id,
                locale: 'en',
            });
            const tw = await this.memberInfoEntity.findOneBy({
                memberId: member.id,
                locale: 'zh-Hant',
            });
            delete member.id;
            delete member.createTime;
            delete member.updateTime;
            delete en.id;
            delete en.memberId;
            delete en.createTime;
            delete en.updateTime;
            delete en.locale;
            delete tw.id;
            delete tw.memberId;
            delete tw.createTime;
            delete tw.updateTime;
            delete tw.locale;
            member.en = en;
            member['zh-Hant'] = tw;
        }
        return members;
    }
};
exports.AppMemberService = AppMemberService;
__decorate([
    (0, typeorm_1.InjectEntityModel)(entity_1.MemberEntity),
    __metadata("design:type", typeorm_2.Repository)
], AppMemberService.prototype, "memberEntity", void 0);
__decorate([
    (0, typeorm_1.InjectEntityModel)(info_1.MemberInfoEntity),
    __metadata("design:type", typeorm_2.Repository)
], AppMemberService.prototype, "memberInfoEntity", void 0);
exports.AppMemberService = AppMemberService = __decorate([
    (0, decorator_1.Provide)()
], AppMemberService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9tZW1iZXIvc2VydmljZS9hcHAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNENBQWdEO0FBQ2hELG1EQUE4QztBQUM5QywrQ0FBc0Q7QUFDdEQscUNBQXFDO0FBQ3JDLHlDQUE0QztBQUM1Qyw0Q0FBcUQ7QUFFckQ7O0dBRUc7QUFFSSxJQUFNLGdCQUFnQixHQUF0QixNQUFNLGdCQUFpQixTQUFRLGtCQUFXO0lBTy9DLEtBQUssQ0FBQyxJQUFJO1FBQ1IsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDOzs7Ozs7S0FNdEMsQ0FBQyxDQUFDO1FBRUgsS0FBSyxNQUFNLE1BQU0sSUFBSSxPQUFPLEVBQUU7WUFDNUIsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO2dCQUMvQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7Z0JBQ25CLE1BQU0sRUFBRSxJQUFJO2FBQ2IsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO2dCQUMvQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7Z0JBQ25CLE1BQU0sRUFBRSxTQUFTO2FBQ2xCLENBQUMsQ0FBQztZQUVILE9BQU8sTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUNqQixPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDekIsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBRXpCLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNiLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNuQixPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDckIsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ3JCLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUVqQixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDYixPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDbkIsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ3JCLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNyQixPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFFakIsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDZixNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3hCO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUNGLENBQUE7QUFoRFksNENBQWdCO0FBRTNCO0lBREMsSUFBQSwyQkFBaUIsRUFBQyxxQkFBWSxDQUFDOzhCQUNsQixvQkFBVTtzREFBZTtBQUd2QztJQURDLElBQUEsMkJBQWlCLEVBQUMsdUJBQWdCLENBQUM7OEJBQ2xCLG9CQUFVOzBEQUFtQjsyQkFMcEMsZ0JBQWdCO0lBRDVCLElBQUEsbUJBQU8sR0FBRTtHQUNHLGdCQUFnQixDQWdENUIifQ==