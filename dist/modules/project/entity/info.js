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
exports.ProjectInfoEntity = void 0;
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("typeorm");
/**
 * 描述
 */
let ProjectInfoEntity = class ProjectInfoEntity extends core_1.BaseEntity {
};
exports.ProjectInfoEntity = ProjectInfoEntity;
__decorate([
    (0, typeorm_1.Column)({ comment: '頁面ID' }),
    __metadata("design:type", Number)
], ProjectInfoEntity.prototype, "projectId", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '語系', default: 'zh-Hant' }),
    __metadata("design:type", String)
], ProjectInfoEntity.prototype, "locale", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '標題', nullable: true }),
    __metadata("design:type", String)
], ProjectInfoEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '簡介', type: 'text', nullable: true }),
    __metadata("design:type", String)
], ProjectInfoEntity.prototype, "intro", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: 'SEO標題', nullable: true }),
    __metadata("design:type", String)
], ProjectInfoEntity.prototype, "seoTitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: 'SEO描述', nullable: true }),
    __metadata("design:type", String)
], ProjectInfoEntity.prototype, "seoDescription", void 0);
exports.ProjectInfoEntity = ProjectInfoEntity = __decorate([
    (0, typeorm_1.Entity)('project_info')
], ProjectInfoEntity);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2plY3QvZW50aXR5L2luZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNENBQStDO0FBQy9DLHFDQUF5QztBQUV6Qzs7R0FFRztBQUVJLElBQU0saUJBQWlCLEdBQXZCLE1BQU0saUJBQWtCLFNBQVEsaUJBQVU7Q0FrQmhELENBQUE7QUFsQlksOENBQWlCO0FBRTVCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDOztvREFDVjtBQUdsQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDOztpREFDL0I7QUFHZjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztnREFDNUI7QUFHZDtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O2dEQUMxQztBQUdkO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O21EQUM1QjtBQUdqQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt5REFDdEI7NEJBakJaLGlCQUFpQjtJQUQ3QixJQUFBLGdCQUFNLEVBQUMsY0FBYyxDQUFDO0dBQ1YsaUJBQWlCLENBa0I3QiJ9