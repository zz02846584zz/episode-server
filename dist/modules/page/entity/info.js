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
exports.PageInfoEntity = void 0;
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("typeorm");
/**
 * 描述
 */
let PageInfoEntity = class PageInfoEntity extends core_1.BaseEntity {
};
exports.PageInfoEntity = PageInfoEntity;
__decorate([
    (0, typeorm_1.Column)({ comment: '頁面ID' }),
    __metadata("design:type", Number)
], PageInfoEntity.prototype, "pageId", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '標題', nullable: true }),
    __metadata("design:type", String)
], PageInfoEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '描述', type: 'text', nullable: true }),
    __metadata("design:type", String)
], PageInfoEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '語系', default: 'zh-Hant' }),
    __metadata("design:type", String)
], PageInfoEntity.prototype, "locale", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '數據', type: 'text', nullable: true }),
    __metadata("design:type", String)
], PageInfoEntity.prototype, "metaData", void 0);
exports.PageInfoEntity = PageInfoEntity = __decorate([
    (0, typeorm_1.Entity)('page_info')
], PageInfoEntity);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3BhZ2UvZW50aXR5L2luZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNENBQStDO0FBQy9DLHFDQUF5QztBQUV6Qzs7R0FFRztBQUVJLElBQU0sY0FBYyxHQUFwQixNQUFNLGNBQWUsU0FBUSxpQkFBVTtDQWU3QyxDQUFBO0FBZlksd0NBQWM7QUFFekI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7OzhDQUNiO0FBR2Y7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7NkNBQzVCO0FBR2Q7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzttREFDcEM7QUFHcEI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQzs7OENBQy9CO0FBR2Y7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztnREFDdkM7eUJBZE4sY0FBYztJQUQxQixJQUFBLGdCQUFNLEVBQUMsV0FBVyxDQUFDO0dBQ1AsY0FBYyxDQWUxQiJ9