"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPageInfoController = void 0;
const core_1 = require("@cool-midway/core");
const info_1 = require("../../entity/info");
const info_2 = require("../../service/admin/info");
/**
 * 描述
 */
let AdminPageInfoController = class AdminPageInfoController extends core_1.BaseController {
};
exports.AdminPageInfoController = AdminPageInfoController;
exports.AdminPageInfoController = AdminPageInfoController = __decorate([
    (0, core_1.CoolController)({
        api: ['update', 'info', 'list', 'page'],
        service: info_2.AdminPageInfoService,
        entity: info_1.PageInfoEntity,
    })
], AdminPageInfoController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3BhZ2UvY29udHJvbGxlci9hZG1pbi9pbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDRDQUFtRTtBQUNuRSw0Q0FBbUQ7QUFDbkQsbURBQWdFO0FBRWhFOztHQUVHO0FBTUksSUFBTSx1QkFBdUIsR0FBN0IsTUFBTSx1QkFBd0IsU0FBUSxxQkFBYztDQUFJLENBQUE7QUFBbEQsMERBQXVCO2tDQUF2Qix1QkFBdUI7SUFMbkMsSUFBQSxxQkFBYyxFQUFDO1FBQ2QsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3ZDLE9BQU8sRUFBRSwyQkFBb0I7UUFDN0IsTUFBTSxFQUFFLHFCQUFjO0tBQ3ZCLENBQUM7R0FDVyx1QkFBdUIsQ0FBMkIifQ==