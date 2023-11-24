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
exports.MemberInfoEntity = void 0;
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("typeorm");
/**
 * 描述
 */
let MemberInfoEntity = class MemberInfoEntity extends core_1.BaseEntity {
};
exports.MemberInfoEntity = MemberInfoEntity;
__decorate([
    (0, typeorm_1.Column)({ comment: '成員ID' }),
    __metadata("design:type", Number)
], MemberInfoEntity.prototype, "memberId", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '語系', default: 'zh-Hant' }),
    __metadata("design:type", String)
], MemberInfoEntity.prototype, "locale", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '姓名' }),
    __metadata("design:type", String)
], MemberInfoEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '職稱', nullable: true }),
    __metadata("design:type", String)
], MemberInfoEntity.prototype, "job", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '簡介', type: 'text', nullable: true }),
    __metadata("design:type", String)
], MemberInfoEntity.prototype, "intro", void 0);
exports.MemberInfoEntity = MemberInfoEntity = __decorate([
    (0, typeorm_1.Entity)('member_info')
], MemberInfoEntity);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL21lbWJlci9lbnRpdHkvaW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBK0M7QUFDL0MscUNBQXlDO0FBRXpDOztHQUVHO0FBRUksSUFBTSxnQkFBZ0IsR0FBdEIsTUFBTSxnQkFBaUIsU0FBUSxpQkFBVTtDQWUvQyxDQUFBO0FBZlksNENBQWdCO0FBRTNCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDOztrREFDWDtBQUdqQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDOztnREFDL0I7QUFHZjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7OENBQ2I7QUFHYjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzs2Q0FDOUI7QUFHWjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7OytDQUMxQzsyQkFkSCxnQkFBZ0I7SUFENUIsSUFBQSxnQkFBTSxFQUFDLGFBQWEsQ0FBQztHQUNULGdCQUFnQixDQWU1QiJ9