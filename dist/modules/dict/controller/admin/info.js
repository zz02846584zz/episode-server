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
exports.AdminDictInfoController = void 0;
const info_1 = require("./../../entity/info");
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const info_2 = require("../../service/info");
/**
 * 字典信息
 */
let AdminDictInfoController = class AdminDictInfoController extends core_1.BaseController {
    async data(types = []) {
        return this.ok(await this.dictInfoService.data(types));
    }
};
exports.AdminDictInfoController = AdminDictInfoController;
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", info_2.DictInfoService)
], AdminDictInfoController.prototype, "dictInfoService", void 0);
__decorate([
    (0, decorator_1.Post)('/data', { summary: '获得字典数据' }),
    __param(0, (0, decorator_1.Body)('types')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], AdminDictInfoController.prototype, "data", null);
exports.AdminDictInfoController = AdminDictInfoController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'info', 'list', 'page'],
        entity: info_1.DictInfoEntity,
        service: info_2.DictInfoService,
        listQueryOp: {
            fieldEq: ['typeId'],
            keyWordLikeFields: ['name'],
            addOrderBy: {
                createTime: 'ASC',
            },
        },
    })
], AdminDictInfoController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2RpY3QvY29udHJvbGxlci9hZG1pbi9pbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUFxRDtBQUNyRCxtREFBa0U7QUFDbEUsNENBQW1FO0FBQ25FLDZDQUFxRDtBQUVyRDs7R0FFRztBQWNJLElBQU0sdUJBQXVCLEdBQTdCLE1BQU0sdUJBQXdCLFNBQVEscUJBQWM7SUFLbkQsQUFBTixLQUFLLENBQUMsSUFBSSxDQUFnQixRQUFrQixFQUFFO1FBQzVDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztDQUNGLENBQUE7QUFSWSwwREFBdUI7QUFFbEM7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OEJBQ1Esc0JBQWU7Z0VBQUM7QUFHM0I7SUFETCxJQUFBLGdCQUFJLEVBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLFdBQUEsSUFBQSxnQkFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFBOzs7O21EQUV4QjtrQ0FQVSx1QkFBdUI7SUFibkMsSUFBQSxtQkFBTyxHQUFFO0lBQ1QsSUFBQSxxQkFBYyxFQUFDO1FBQ2QsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDeEQsTUFBTSxFQUFFLHFCQUFjO1FBQ3RCLE9BQU8sRUFBRSxzQkFBZTtRQUN4QixXQUFXLEVBQUU7WUFDWCxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDbkIsaUJBQWlCLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDM0IsVUFBVSxFQUFFO2dCQUNWLFVBQVUsRUFBRSxLQUFLO2FBQ2xCO1NBQ0Y7S0FDRixDQUFDO0dBQ1csdUJBQXVCLENBUW5DIn0=