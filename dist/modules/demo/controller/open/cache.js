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
exports.AppDemoCacheController = void 0;
const cache_1 = require("../../service/cache");
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const cache_2 = require("@midwayjs/cache");
/**
 * 缓存
 */
let AppDemoCacheController = class AppDemoCacheController extends core_1.BaseController {
    /**
     * 设置缓存
     * @returns
     */
    async set() {
        await this.cacheManager.set('a', 1);
        // 缓存10秒
        await this.cacheManager.set('a', 1, {
            ttl: 30,
        });
        return this.ok(await this.cacheManager.get('a'));
    }
    /**
     * 获得缓存
     * @returns
     */
    async get() {
        return this.ok(await this.demoCacheService.get());
    }
};
exports.AppDemoCacheController = AppDemoCacheController;
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", cache_2.CacheManager)
], AppDemoCacheController.prototype, "cacheManager", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", cache_1.DemoCacheService)
], AppDemoCacheController.prototype, "demoCacheService", void 0);
__decorate([
    (0, decorator_1.Post)('/set'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppDemoCacheController.prototype, "set", null);
__decorate([
    (0, decorator_1.Get)('/get'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppDemoCacheController.prototype, "get", null);
exports.AppDemoCacheController = AppDemoCacheController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)()
], AppDemoCacheController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9kZW1vL2NvbnRyb2xsZXIvb3Blbi9jYWNoZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBdUQ7QUFDdkQsbURBQWlFO0FBQ2pFLDRDQUFtRTtBQUNuRSwyQ0FBK0M7QUFFL0M7O0dBRUc7QUFHSSxJQUFNLHNCQUFzQixHQUE1QixNQUFNLHNCQUF1QixTQUFRLHFCQUFjO0lBT3hEOzs7T0FHRztJQUVHLEFBQU4sS0FBSyxDQUFDLEdBQUc7UUFDUCxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQyxRQUFRO1FBQ1IsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFO1lBQ2xDLEdBQUcsRUFBRSxFQUFFO1NBQ1IsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7OztPQUdHO0lBRUcsQUFBTixLQUFLLENBQUMsR0FBRztRQUNQLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FDRixDQUFBO0FBN0JZLHdEQUFzQjtBQUVqQztJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDSyxvQkFBWTs0REFBQztBQUczQjtJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDUyx3QkFBZ0I7Z0VBQUM7QUFPN0I7SUFETCxJQUFBLGdCQUFJLEVBQUMsTUFBTSxDQUFDOzs7O2lEQVFaO0FBT0s7SUFETCxJQUFBLGVBQUcsRUFBQyxNQUFNLENBQUM7Ozs7aURBR1g7aUNBNUJVLHNCQUFzQjtJQUZsQyxJQUFBLG1CQUFPLEdBQUU7SUFDVCxJQUFBLHFCQUFjLEdBQUU7R0FDSixzQkFBc0IsQ0E2QmxDIn0=