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
exports.RecycleDataService = void 0;
const data_1 = require("./../entity/data");
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("@midwayjs/typeorm");
const typeorm_2 = require("typeorm");
const _ = require("lodash");
const moment = require("moment");
const conf_1 = require("../../base/service/sys/conf");
/**
 * 数据回收
 */
let RecycleDataService = class RecycleDataService extends core_1.BaseService {
    /**
     * 恢复数据
     * @param ids
     */
    async restore(ids) {
        for (const id of ids) {
            const info = await this.recycleDataEntity.findOneBy({ id });
            if (!info) {
                continue;
            }
            let entityModel = this.typeORMDataSourceManager
                .getDataSource(info.entityInfo.dataSourceName)
                .getRepository(info.entityInfo.entity);
            await entityModel.save(info.data);
            await this.recycleDataEntity.delete(id);
        }
    }
    /**
     * 记录数据
     * @param params
     */
    async record(params) {
        var _a;
        const { ctx, data, entity } = params;
        const dataSourceName = this.typeORMDataSourceManager.getDataSourceNameByModel(entity.target);
        const url = ctx === null || ctx === void 0 ? void 0 : ctx.url;
        await this.recycleDataEntity.save({
            entityInfo: {
                dataSourceName,
                entity: entity.target.name,
            },
            url,
            params: (ctx === null || ctx === void 0 ? void 0 : ctx.req.method) === 'GET' ? ctx === null || ctx === void 0 ? void 0 : ctx.request.query : ctx === null || ctx === void 0 ? void 0 : ctx.request.body,
            data,
            count: data.length,
            userId: _.startsWith(url, '/admin/') ? ctx === null || ctx === void 0 ? void 0 : ctx.admin.userId : (_a = ctx === null || ctx === void 0 ? void 0 : ctx.user) === null || _a === void 0 ? void 0 : _a.id,
        });
    }
    /**
     * 日志
     * @param isAll 是否清除全部
     */
    async clear(isAll) {
        if (isAll) {
            await this.recycleDataEntity.clear();
            return;
        }
        const keepDay = await this.baseSysConfService.getValue('recycleKeep');
        if (keepDay) {
            const beforeDate = `${moment()
                .add(-keepDay, 'days')
                .format('YYYY-MM-DD')} 00:00:00`;
            await this.recycleDataEntity
                .createQueryBuilder()
                .delete()
                .where('createTime < :createTime', { createTime: beforeDate })
                .execute();
        }
        else {
            await this.recycleDataEntity.clear();
        }
    }
};
exports.RecycleDataService = RecycleDataService;
__decorate([
    (0, typeorm_1.InjectEntityModel)(data_1.RecycleDataEntity),
    __metadata("design:type", typeorm_2.Repository)
], RecycleDataService.prototype, "recycleDataEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", typeorm_1.TypeORMDataSourceManager)
], RecycleDataService.prototype, "typeORMDataSourceManager", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", conf_1.BaseSysConfService)
], RecycleDataService.prototype, "baseSysConfService", void 0);
exports.RecycleDataService = RecycleDataService = __decorate([
    (0, decorator_1.Provide)(),
    (0, decorator_1.Scope)(decorator_1.ScopeEnum.Request, { allowDowngrade: true })
], RecycleDataService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3JlY3ljbGUvc2VydmljZS9kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFxRDtBQUNyRCxtREFBd0U7QUFDeEUsNENBQWdEO0FBQ2hELCtDQUFnRjtBQUNoRixxQ0FBcUM7QUFDckMsNEJBQTRCO0FBQzVCLGlDQUFpQztBQUNqQyxzREFBaUU7QUFFakU7O0dBRUc7QUFHSSxJQUFNLGtCQUFrQixHQUF4QixNQUFNLGtCQUFtQixTQUFRLGtCQUFXO0lBVWpEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBYTtRQUN6QixLQUFLLE1BQU0sRUFBRSxJQUFJLEdBQUcsRUFBRTtZQUNwQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1QsU0FBUzthQUNWO1lBQ0QsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLHdCQUF3QjtpQkFDNUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDO2lCQUM3QyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QyxNQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU07O1FBQ2pCLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQztRQUNyQyxNQUFNLGNBQWMsR0FDbEIs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