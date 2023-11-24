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
exports.BaseRecycleSchedule = void 0;
const decorator_1 = require("@midwayjs/decorator");
// import { ILogger } from '@midwayjs/logger';
const data_1 = require("../service/data");
/**
 * 数据定时清除定时任务
 */
let BaseRecycleSchedule = class BaseRecycleSchedule {
    // @Inject()
    // logger: ILogger;
    // 定时执行的具体任务
    async exec() {
        // this.logger.info('清除回收站数据定时任务开始执行');
        const startTime = Date.now();
        await this.recycleDataService.clear();
        // this.logger.info(
        //   `清除回收站数据定时任务结束，耗时:${Date.now() - startTime}ms`
        // );
    }
};
exports.BaseRecycleSchedule = BaseRecycleSchedule;
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", data_1.RecycleDataService)
], BaseRecycleSchedule.prototype, "recycleDataService", void 0);
__decorate([
    (0, decorator_1.TaskLocal)(decorator_1.FORMAT.CRONTAB.EVERY_DAY),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BaseRecycleSchedule.prototype, "exec", null);
exports.BaseRecycleSchedule = BaseRecycleSchedule = __decorate([
    (0, decorator_1.Provide)()
], BaseRecycleSchedule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3JlY3ljbGUvc2NoZWR1bGUvZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFNNkI7QUFDN0IsOENBQThDO0FBQzlDLDBDQUFxRDtBQUVyRDs7R0FFRztBQUVJLElBQU0sbUJBQW1CLEdBQXpCLE1BQU0sbUJBQW1CO0lBSTlCLFlBQVk7SUFDWixtQkFBbUI7SUFFbkIsWUFBWTtJQUVOLEFBQU4sS0FBSyxDQUFDLElBQUk7UUFDUix1Q0FBdUM7UUFDdkMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzdCLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RDLG9CQUFvQjtRQUNwQixtREFBbUQ7UUFDbkQsS0FBSztJQUNQLENBQUM7Q0FDRixDQUFBO0FBakJZLGtEQUFtQjtBQUU5QjtJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDVyx5QkFBa0I7K0RBQUM7QUFPakM7SUFETCxJQUFBLHFCQUFTLEVBQUMsa0JBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDOzs7OytDQVFuQzs4QkFoQlUsbUJBQW1CO0lBRC9CLElBQUEsbUJBQU8sR0FBRTtHQUNHLG1CQUFtQixDQWlCL0IifQ==