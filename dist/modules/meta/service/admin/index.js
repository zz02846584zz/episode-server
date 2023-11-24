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
exports.AdminMetaService = void 0;
const core_1 = require("@cool-midway/core");
const decorator_1 = require("@midwayjs/decorator");
const typeorm_1 = require("@midwayjs/typeorm");
const typeorm_2 = require("typeorm");
const index_1 = require("./../../entity/index");
/**
 * 描述
 */
let AdminMetaService = class AdminMetaService extends core_1.BaseService {
};
exports.AdminMetaService = AdminMetaService;
__decorate([
    (0, typeorm_1.InjectEntityModel)(index_1.MetaEntity),
    __metadata("design:type", typeorm_2.Repository)
], AdminMetaService.prototype, "metaEntity", void 0);
exports.AdminMetaService = AdminMetaService = __decorate([
    (0, decorator_1.Provide)()
], AdminMetaService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9tZXRhL3NlcnZpY2UvYWRtaW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNENBQWdEO0FBQ2hELG1EQUE4QztBQUM5QywrQ0FBc0Q7QUFDdEQscUNBQXFDO0FBQ3JDLGdEQUFrRDtBQUVsRDs7R0FFRztBQUVJLElBQU0sZ0JBQWdCLEdBQXRCLE1BQU0sZ0JBQWlCLFNBQVEsa0JBQVc7Q0FHaEQsQ0FBQTtBQUhZLDRDQUFnQjtBQUUzQjtJQURDLElBQUEsMkJBQWlCLEVBQUMsa0JBQVUsQ0FBQzs4QkFDbEIsb0JBQVU7b0RBQWE7MkJBRnhCLGdCQUFnQjtJQUQ1QixJQUFBLG1CQUFPLEdBQUU7R0FDRyxnQkFBZ0IsQ0FHNUIifQ==