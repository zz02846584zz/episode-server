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
    async edit(param) {
        const { member: memberParam, info: infoParam } = param;
        const member = await this.memberEntity.update(memberParam.id, memberParam);
        const memberInfoEn = await this.memberInfoEntity.save({
            memberId: memberParam.id,
            locale: 'en',
            ...infoParam['en'],
        });
        const memberInfoZhHant = await this.memberInfoEntity.save({
            memberId: memberParam.id,
            locale: 'zh-Hant',
            ...infoParam['zh-Hant'],
        });
        return {
            member,
            info: {
                en: memberInfoEn,
                'zh-Hant': memberInfoZhHant,
            },
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
        const memberInfoEn = await this.memberInfoEntity.findOneBy({
            memberId: id,
            locale: 'en',
        });
        const memberInfoZhHant = await this.memberInfoEntity.findOneBy({
            memberId: id,
            locale: 'zh-Hant',
        });
        return {
            member: {
                id,
                name: member.name,
                avatar: member.avatar,
            },
            info: {
                en: memberInfoEn,
                'zh-Hant': memberInfoZhHant,
            },
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