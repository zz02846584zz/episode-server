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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudDBController = void 0;
const db_1 = require("./../../service/db");
const db_2 = require("./../../entity/db");
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
/**
 * 云数据库
 */
let CloudDBController = class CloudDBController extends core_1.BaseController {
    async initEntity() {
        await this.cloudDBService.initEntity();
        return this.ok();
    }
    async data(body) {
        const { id, method, params } = body;
        return this.ok(await this.cloudDBService.data(id, method, params));
    }
};
exports.CloudDBController = CloudDBController;
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", db_1.CloudDBService)
], CloudDBController.prototype, "cloudDBService", void 0);
__decorate([
    (0, decorator_1.Post)('/initEntity', { summary: '初始化Entity' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CloudDBController.prototype, "initEntity", null);
__decorate([
    (0, decorator_1.Post)('/data', { summary: '数据操作' }),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CloudDBController.prototype, "data", null);
exports.CloudDBController = CloudDBController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'info', 'list', 'page'],
        entity: db_2.CloudDBEntity,
        service: db_1.CloudDBService,
        pageQueryOp: {
            fieldEq: ['status'],
            keyWordLikeFields: ['name'],
        },
    })
], CloudDBController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9jbG91ZC9jb250cm9sbGVyL2FkbWluL2RiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFvRDtBQUNwRCwwQ0FBa0Q7QUFDbEQsbURBQWtFO0FBQ2xFLDRDQUFtRTtBQUVuRTs7R0FFRztBQVdJLElBQU0saUJBQWlCLEdBQXZCLE1BQU0saUJBQWtCLFNBQVEscUJBQWM7SUFLN0MsQUFBTixLQUFLLENBQUMsVUFBVTtRQUNkLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN2QyxPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBR0ssQUFBTixLQUFLLENBQUMsSUFBSSxDQUFTLElBQUk7UUFDckIsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0NBQ0YsQ0FBQTtBQWZZLDhDQUFpQjtBQUU1QjtJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDTyxtQkFBYzt5REFBQztBQUd6QjtJQURMLElBQUEsZ0JBQUksRUFBQyxhQUFhLEVBQUUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUM7Ozs7bURBSTdDO0FBR0s7SUFETCxJQUFBLGdCQUFJLEVBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQ3ZCLFdBQUEsSUFBQSxnQkFBSSxHQUFFLENBQUE7Ozs7NkNBR2pCOzRCQWRVLGlCQUFpQjtJQVY3QixJQUFBLG1CQUFPLEdBQUU7SUFDVCxJQUFBLHFCQUFjLEVBQUM7UUFDZCxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUN4RCxNQUFNLEVBQUUsa0JBQWE7UUFDckIsT0FBTyxFQUFFLG1CQUFjO1FBQ3ZCLFdBQVcsRUFBRTtZQUNYLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNuQixpQkFBaUIsRUFBRSxDQUFDLE1BQU0sQ0FBQztTQUM1QjtLQUNGLENBQUM7R0FDVyxpQkFBaUIsQ0FlN0IifQ==