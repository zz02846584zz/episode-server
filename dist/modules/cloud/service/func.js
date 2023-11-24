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
exports.CloudFuncService = void 0;
const log_1 = require("./../entity/func/log");
const core_1 = require("@midwayjs/core");
const info_1 = require("./../entity/func/info");
const decorator_1 = require("@midwayjs/decorator");
const core_2 = require("@cool-midway/core");
const typeorm_1 = require("@midwayjs/typeorm");
const typeorm_2 = require("typeorm");
const moment = require("moment");
// eslint-disable-next-line node/no-unpublished-import
const ts = require("typescript");
const cloud_1 = require("@cool-midway/cloud");
/**
 * 云函数
 */
let CloudFuncService = class CloudFuncService extends core_2.BaseService {
    /**
     * 调用云函数
     * @param req
     * @param id
     * @param content 内容 调试的时候传过来
     * @returns
     */
    async invoke(req, id, content) {
        const start = moment().valueOf();
        let funcInfo;
        if (id) {
            funcInfo = await this.cloudFuncInfoEntity
                .createQueryBuilder()
                .cache(true)
                .where({ id, status: 1 })
                .getOne();
            req.name = funcInfo === null || funcInfo === void 0 ? void 0 : funcInfo.name;
        }
        else {
            funcInfo = await this.cloudFuncInfoEntity
                .createQueryBuilder()
                .cache(true)
                .where({ name: req.name, status: 1 })
                .getOne();
        }
        if (!funcInfo) {
            throw new core_2.CoolCommException('云函数不存在或被禁用');
        }
        if (!req.method) {
            throw new core_2.CoolCommException('调用方法不能为空');
        }
        let result;
        let func;
        const code = content ? content : funcInfo.content;
        const className = this.coolCloudFunc.getClassName(code);
        const newCode = ts.transpile(`${code}
      func = new ${className}();
        `, {
            emitDecoratorMetadata: true,
            module: ts.ModuleKind.CommonJS,
            target: ts.ScriptTarget.ES2018,
            removeComments: true,
        });
        const log = new log_1.CloudFuncLogEntity();
        try {
            eval(newCode);
            func.ctx = this.ctx;
            func.app = this.app;
            func.coolCloudDb = this.coolCloudDb;
            func.coolConfig = this.coolConfig;
            await func.init(req);
            const apis = func.curdOption.api || [];
            // 判断是否可以执行6个通用方法
            if (['add', 'delete', 'update', 'info', 'list', 'page'].includes(req.method) &&
                !apis.includes(req.method)) {
                throw new core_2.CoolCommException(`${req.method} 方法未在curdOption.api 中配置`);
            }
            // result = func.add({ name: 'aa', age: 22, test2: 1 });
            result = await func[req.method](req.params);
        }
        catch (error) {
            log.error = error.message;
        }
        log.infoId = funcInfo.id;
        log.request = req;
        log.result = result;
        log.type = log.error ? 0 : 1;
        const end = moment().valueOf();
        log.time = end - start;
        this.cloudFuncLogEntity.insert(log);
        if (id) {
            return log;
        }
        else {
            return result;
        }
    }
};
exports.CloudFuncService = CloudFuncService;
__decorate([
    (0, typeorm_1.InjectEntityModel)(info_1.CloudFuncInfoEntity),
    __metadata("design:type", typeorm_2.Repository)
], CloudFuncService.prototype, "cloudFuncInfoEntity", void 0);
__decorate([
    (0, typeorm_1.InjectEntityModel)(log_1.CloudFuncLogEntity),
    __metadata("design:type", typeorm_2.Repository)
], CloudFuncService.prototype, "cloudFuncLogEntity", void 0);
__decorate([
    (0, decorator_1.App)(),
    __metadata("design:type", Object)
], CloudFuncService.prototype, "app", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], CloudFuncService.prototype, "ctx", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", cloud_1.CoolCloudDb)
], CloudFuncService.prototype, "coolCloudDb", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", cloud_1.CoolCloudFunc)
], CloudFuncService.prototype, "coolCloudFunc", void 0);
__decorate([
    (0, core_1.Config)('cool'),
    __metadata("design:type", Object)
], CloudFuncService.prototype, "coolConfig", void 0);
exports.CloudFuncService = CloudFuncService = __decorate([
    (0, decorator_1.Provide)()
], CloudFuncService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2Nsb3VkL3NlcnZpY2UvZnVuYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBMEQ7QUFDMUQseUNBQTREO0FBQzVELGdEQUE0RDtBQUM1RCxtREFBMkQ7QUFDM0QsNENBQStFO0FBQy9FLCtDQUFzRDtBQUN0RCxxQ0FBcUM7QUFDckMsaUNBQWlDO0FBRWpDLHNEQUFzRDtBQUN0RCxpQ0FBaUM7QUFFakMsOENBSzRCO0FBRTVCOztHQUVHO0FBRUksSUFBTSxnQkFBZ0IsR0FBdEIsTUFBTSxnQkFBaUIsU0FBUSxrQkFBVztJQXNCL0M7Ozs7OztPQU1HO0lBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFhLEVBQUUsRUFBVSxFQUFFLE9BQWdCO1FBQ3RELE1BQU0sS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLElBQUksUUFBNkIsQ0FBQztRQUNsQyxJQUFJLEVBQUUsRUFBRTtZQUNOLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUI7aUJBQ3RDLGtCQUFrQixFQUFFO2lCQUNwQixLQUFLLENBQUMsSUFBSSxDQUFDO2lCQUNYLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ3hCLE1BQU0sRUFBRSxDQUFDO1lBQ1osR0FBRyxDQUFDLElBQUksR0FBRyxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsSUFBSSxDQUFDO1NBQzNCO2FBQU07WUFDTCxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsbUJBQW1CO2lCQUN0QyxrQkFBa0IsRUFBRTtpQkFDcEIsS0FBSyxDQUFDLElBQUksQ0FBQztpQkFDWCxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7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