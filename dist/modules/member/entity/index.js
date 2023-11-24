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
exports.MemberEntity = void 0;
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("typeorm");
/**
 * 描述
 */
let MemberEntity = class MemberEntity extends core_1.BaseEntity {
};
exports.MemberEntity = MemberEntity;
__decorate([
    (0, typeorm_1.Column)({ comment: '名稱' }),
    __metadata("design:type", String)
], MemberEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '照片', nullable: true }),
    __metadata("design:type", String)
], MemberEntity.prototype, "avatar", void 0);
exports.MemberEntity = MemberEntity = __decorate([
    (0, typeorm_1.Entity)('member')
], MemberEntity);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9tZW1iZXIvZW50aXR5L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDRDQUErQztBQUMvQyxxQ0FBeUM7QUFFekM7O0dBRUc7QUFFSSxJQUFNLFlBQVksR0FBbEIsTUFBTSxZQUFhLFNBQVEsaUJBQVU7Q0FNM0MsQ0FBQTtBQU5ZLG9DQUFZO0FBRXZCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDOzswQ0FDYjtBQUdiO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7OzRDQUMzQjt1QkFMSixZQUFZO0lBRHhCLElBQUEsZ0JBQU0sRUFBQyxRQUFRLENBQUM7R0FDSixZQUFZLENBTXhCIn0=