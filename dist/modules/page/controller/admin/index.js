"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPageController = void 0;
const core_1 = require("@cool-midway/core");
const index_1 = require("../../entity/index");
const admin_1 = require("../../service/admin");
/**
 * 描述
 */
let AdminPageController = class AdminPageController extends core_1.BaseController {
};
exports.AdminPageController = AdminPageController;
exports.AdminPageController = AdminPageController = __decorate([
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'info', 'list', 'page'],
        service: admin_1.AdminPageService,
        entity: index_1.PageEntity,
    })
], AdminPageController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wYWdlL2NvbnRyb2xsZXIvYWRtaW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNENBQW1FO0FBQ25FLDhDQUFnRDtBQUNoRCwrQ0FBdUQ7QUFFdkQ7O0dBRUc7QUFNSSxJQUFNLG1CQUFtQixHQUF6QixNQUFNLG1CQUFvQixTQUFRLHFCQUFjO0NBQUksQ0FBQTtBQUE5QyxrREFBbUI7OEJBQW5CLG1CQUFtQjtJQUwvQixJQUFBLHFCQUFjLEVBQUM7UUFDZCxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUN4RCxPQUFPLEVBQUUsd0JBQWdCO1FBQ3pCLE1BQU0sRUFBRSxrQkFBVTtLQUNuQixDQUFDO0dBQ1csbUJBQW1CLENBQTJCIn0=