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
exports.AdminMemberService = void 0;
const core_1 = require("@cool-midway/core");
const decorator_1 = require("@midwayjs/decorator");
const typeorm_1 = require("@midwayjs/typeorm");
const typeorm_2 = require("typeorm");
const entity_1 = require("../../entity");
const info_1 = require("../../entity/info");
/**
 * 描述
 */
let AdminMemberService = class AdminMemberService extends core_1.BaseService {
    /**
     * 新增
     * @param article
     */
    async add(param) {
        const { member: memberParam, info: infoParam } = param;
        const member = await this.memberEntity.save(memberParam);
        const infoEn = infoParam['en'];
        const infoZhHant = infoParam['zh-Hant'];
        const memberInfoEn = await this.memberInfoEntity.save({
            memberId: member.id,
            ...infoEn,
            locale: 'en',
        });
        const memberInfoZhHant = await this.memberInfoEntity.save({
            memberId: member.id,
            ...infoZhHant,
            locale: 'zh-Hant',
        });
        return {
            member,
            en: memberInfoEn,
            'zh-Hant': memberInfoZhHant,
        };
    }
    /**
     * 更新
     * @param param
     */
    async update(param) {
        const { member: memberParam, info: infoParam } = param;
        const member = await this.memberEntity.save(memberParam);
        const infoEn = infoParam['en'];
        const infoZhHant = infoParam['zh-Hant'];
        await this.memberInfoEntity.save({
            id: member.id,
            ...infoEn,
            locale: 'en',
        });
        await this.memberInfoEntity.save({
            id: member.id,
            ...infoZhHant,
            locale: 'zh-Hant',
        });
        return member.id;
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
                    this.memberEntity.delete({ id }),
                    this.memberInfoEntity.delete({ memberId: id }),
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
          member a
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
        const member = await this.memberEntity.findOneBy({ id: id });
        const memberInfoEn = await this.memberInfoEntity.findBy({
            memberId: id,
            locale: 'en',
        });
        const memberInfoTw = await this.memberInfoEntity.findBy({
            memberId: id,
            locale: 'zh-Hant',
        });
        return {
            id,
            name: member.name,
            en: memberInfoEn,
            tw: memberInfoTw,
        };
    }
};
exports.AdminMemberService = AdminMemberService;
__decorate([
    (0, typeorm_1.InjectEntityModel)(entity_1.MemberEntity),
    __metadata("design:type", typeorm_2.Repository)
], AdminMemberService.prototype, "memberEntity", void 0);
__decorate([
    (0, typeorm_1.InjectEntityModel)(info_1.MemberInfoEntity),
    __metadata("design:type", typeorm_2.Repository)
], AdminMemberService.prototype, "memberInfoEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], AdminMemberService.prototype, "ctx", void 0);
exports.AdminMemberService = AdminMemberService = __decorate([
    (0, decorator_1.Provide)()
], AdminMemberService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9tZW1iZXIvc2VydmljZS9hZG1pbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBZ0Q7QUFDaEQsbURBQXNEO0FBQ3RELCtDQUFzRDtBQUN0RCxxQ0FBcUM7QUFDckMseUNBQTRDO0FBQzVDLDRDQUFxRDtBQUVyRDs7R0FFRztBQUVJLElBQU0sa0JBQWtCLEdBQXhCLE1BQU0sa0JBQW1CLFNBQVEsa0JBQVc7SUFVakQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFVO1FBQ2xCLE1BQU0sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDdkQsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6RCxNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sWUFBWSxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQztZQUNwRCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsR0FBRyxNQUFNO1lBQ1QsTUFBTSxFQUFFLElBQUk7U0FDYixDQUFDLENBQUM7UUFDSCxNQUFNLGdCQUFnQixHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQztZQUN4RCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsR0FBRyxVQUFVO1lBQ2IsTUFBTSxFQUFFLFNBQVM7U0FDbEIsQ0FBQyxDQUFDO1FBRUgsT0FBTztZQUNMLE1BQU07WUFDTixFQUFFLEVBQUUsWUFBWTtZQUNoQixTQUFTLEVB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