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
exports.SpaceInfoService = void 0;
const info_1 = require("./../entity/info");
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("@midwayjs/typeorm");
const typeorm_2 = require("typeorm");
/**
 * 文件信息
 */
let SpaceInfoService = class SpaceInfoService extends core_1.BaseService {
    /**
     * 新增
     */
    async add(param) {
        if (this.config.mode == core_1.MODETYPE.LOCAL) {
            param.key = param.url.replace(this.config.domain, '');
        }
        return super.add(param);
    }
};
exports.SpaceInfoService = SpaceInfoService;
__decorate([
    (0, typeorm_1.InjectEntityModel)(info_1.SpaceInfoEntity),
    __metadata("design:type", typeorm_2.Repository)
], SpaceInfoService.prototype, "spaceInfoEntity", void 0);
__decorate([
    (0, decorator_1.Config)('cool.file'),
    __metadata("design:type", Object)
], SpaceInfoService.prototype, "config", void 0);
exports.SpaceInfoService = SpaceInfoService = __decorate([
    (0, decorator_1.Provide)()
], SpaceInfoService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3NwYWNlL3NlcnZpY2UvaW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBbUQ7QUFDbkQsbURBQXNEO0FBQ3RELDRDQUEwRTtBQUMxRSwrQ0FBc0Q7QUFDdEQscUNBQXFDO0FBRXJDOztHQUVHO0FBRUksSUFBTSxnQkFBZ0IsR0FBdEIsTUFBTSxnQkFBaUIsU0FBUSxrQkFBVztJQU8vQzs7T0FFRztJQUNILEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSztRQUNiLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksZUFBUSxDQUFDLEtBQUssRUFBRTtZQUN0QyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7Q0FDRixDQUFBO0FBaEJZLDRDQUFnQjtBQUUzQjtJQURDLElBQUEsMkJBQWlCLEVBQUMsc0JBQWUsQ0FBQzs4QkFDbEIsb0JBQVU7eURBQWtCO0FBRzdDO0lBREMsSUFBQSxrQkFBTSxFQUFDLFdBQVcsQ0FBQzs7Z0RBQ0c7MkJBTFosZ0JBQWdCO0lBRDVCLElBQUEsbUJBQU8sR0FBRTtHQUNHLGdCQUFnQixDQWdCNUIifQ==