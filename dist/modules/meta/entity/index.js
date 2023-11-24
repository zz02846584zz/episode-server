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
exports.MetaEntity = void 0;
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("typeorm");
/**
 * 描述
 */
let MetaEntity = class MetaEntity extends core_1.BaseEntity {
};
exports.MetaEntity = MetaEntity;
__decorate([
    (0, typeorm_1.Column)({ comment: '鍵' }),
    __metadata("design:type", String)
], MetaEntity.prototype, "key", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '值' }),
    __metadata("design:type", String)
], MetaEntity.prototype, "value", void 0);
exports.MetaEntity = MetaEntity = __decorate([
    (0, typeorm_1.Entity)('meta')
], MetaEntity);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9tZXRhL2VudGl0eS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBK0M7QUFDL0MscUNBQXlDO0FBRXpDOztHQUVHO0FBRUksSUFBTSxVQUFVLEdBQWhCLE1BQU0sVUFBVyxTQUFRLGlCQUFVO0NBTXpDLENBQUE7QUFOWSxnQ0FBVTtBQUVyQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQzs7dUNBQ2I7QUFHWjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQzs7eUNBQ1g7cUJBTEgsVUFBVTtJQUR0QixJQUFBLGdCQUFNLEVBQUMsTUFBTSxDQUFDO0dBQ0YsVUFBVSxDQU10QiJ9