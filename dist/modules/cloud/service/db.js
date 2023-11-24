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
exports.CloudDBService = void 0;
const cloud_1 = require("@cool-midway/cloud");
const core_1 = require("@cool-midway/core");
const core_2 = require("@midwayjs/core");
const decorator_1 = require("@midwayjs/decorator");
const typeorm_1 = require("@midwayjs/typeorm");
const _ = require("lodash");
const typeorm_2 = require("typeorm");
const db_1 = require("./../entity/db");
/**
 * 雲數據庫
 */
let CloudDBService = class CloudDBService extends core_1.BaseService {
    /**
     * 數據
     * @param id
     * @param method
     * @param params
     * @returns
     */
    async data(id, method, params = {}) {
        const db = await this.cloudDBEntity.findOneBy({ id });
        const repository = await this.getRepository(db === null || db === void 0 ? void 0 : db.className);
        if (method == 'add' || method == 'update') {
            await repository.save(params);
            return {
                id: params.id,
            };
        }
        if (method == 'delete') {
            await repository.delete(params.ids);
        }
        if (method == 'clear') {
            await repository.clear();
        }
        if (method == 'page') {
            const { page = 1, size = this.coolConfig.crud.pageSize } = params;
            const find = repository
                .createQueryBuilder()
                .offset((page - 1) * size)
                .limit(size)
                .orderBy('createTime', 'DESC');
            return {
                list: await find.getMany(),
                pagination: {
                    page: parseInt(page),
                    size: parseInt(size),
                    total: await find.getCount(),
                },
            };
        }
    }
    /**
     * 獲得數據操作實例
     * @param className
     */
    async getRepository(className) {
        const info = await this.cloudDBEntity.findOneBy({
            className,
        });
        if (!info) {
            throw new core_1.CoolCommException('雲數據表不存在');
        }
        return await this.coolCloudDb.getRepository(info.className);
    }
    /**
     * 新增
     * @param param
     * @returns
     */
    async addOrUpdate(param, type) {
        const { tableName, className } = this.coolCloudDb.parseCode(param.content);
        // 更新
        if (param.id) {
            const old = await this.cloudDBEntity.findOneBy({ id: param.id });
            if (tableName != old.tableName) {
                const check = await this.cloudDBEntity.findOneBy({ tableName });
                if (check) {
                    throw new core_1.CoolCommException('已存在相同的表名');
                }
            }
            if (className != old.className) {
                const checkClass = await this.cloudDBEntity.findOneBy({ className });
                if (checkClass) {
                    throw new core_1.CoolCommException('已存在相同的類名');
                }
            }
        }
        else {
            const check = await this.cloudDBEntity.findOneBy({ tableName });
            if (check) {
                throw new core_1.CoolCommException('已存在相同的表名');
            }
            const checkClass = await this.cloudDBEntity.findOneBy({ className });
            if (checkClass) {
                throw new core_1.CoolCommException('已存在相同的類名');
            }
        }
        await super.addOrUpdate({
            ...param,
            tableName,
            className: className.replace('CLOUD', ''),
        }, type);
    }
    /**
     * 初始化
     */
    async initEntity() {
        const tables = await this.cloudDBEntity.findBy({ status: 1 });
        const tableNames = [];
        for (const table of tables) {
            const parseData = this.coolCloudDb.parseCode(table.content);
            tableNames.push(parseData.tableName);
            await this.coolCloudDb.createTable(table.content, true);
        }
        // 所有云函數表
        const { database } = this.coolCloudDb.coolDataSource.options;
        const allTables = (await this.coolCloudDb.coolDataSource.query(`SELECT table_name from information_schema.columns where table_schema like '${database}' and table_name like 'func_%' group by table_name`)).map(e => {
            return e.TABLE_NAME || e.table_name;
        });
        // 需要刪除的雲函數表
        const deleteTables = allTables.filter(e => {
            return !tableNames.includes(e);
        });
        if (!_.isEmpty(deleteTables)) {
            await this.coolCloudDb.coolDataSource.query(`drop table ${deleteTables.join(',')}`);
        }
    }
    async modifyAfter() {
        await this.initEntity();
    }
};
exports.CloudDBService = CloudDBService;
__decorate([
    (0, typeorm_1.InjectEntityModel)(db_1.CloudDBEntity),
    __metadata("design:type", typeorm_2.Repository)
], CloudDBService.prototype, "cloudDBEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", cloud_1.CoolCloudDb)
], CloudDBService.prototype, "coolCloudDb", void 0);
__decorate([
    (0, core_2.Config)('cool'),
    __metadata("design:type", Object)
], CloudDBService.prototype, "coolConfig", void 0);
exports.CloudDBService = CloudDBService = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_2.Singleton)()
], CloudDBService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9jbG91ZC9zZXJ2aWNlL2RiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDhDQUFpRDtBQUNqRCw0Q0FBK0U7QUFDL0UseUNBQW1EO0FBQ25ELG1EQUFzRDtBQUN0RCwrQ0FBc0Q7QUFDdEQsNEJBQTRCO0FBQzVCLHFDQUFxQztBQUNyQyx1Q0FBK0M7QUFFL0M7O0dBRUc7QUFHSSxJQUFNLGNBQWMsR0FBcEIsTUFBTSxjQUFlLFNBQVEsa0JBQVc7SUFVN0M7Ozs7OztPQU1HO0lBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQWMsRUFBRTtRQUNyQyxNQUFNLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0RCxNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxhQUFGLEVBQUUsdUJBQUYsRUFBRSxDQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzNELElBQUksTUFBTSxJQUFJLEtBQUssSUFBSSxNQUFNLElBQUksUUFBUSxFQUFFO1lBQ3pDLE1BQU0sVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QixPQUFPO2dCQUNMLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRTthQUNkLENBQUM7U0FDSDtRQUNELElBQUksTUFBTSxJQUFJLFFBQVEsRUFBRTtZQUN0QixNQUFNLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxNQUFNLElBQUksT0FBTyxFQUFFO1lBQ3JCLE1BQU0sVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxNQUFNLElBQUksTUFBTSxFQUFFO1lBQ3BCLE1BQU0sRUFB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