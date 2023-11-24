"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppMetaController = void 0;
const core_1 = require("@cool-midway/core");
const entity_1 = require("../../entity");
/**
 * 描述
 */
let AppMetaController = class AppMetaController extends core_1.BaseController {
};
exports.AppMetaController = AppMetaController;
exports.AppMetaController = AppMetaController = __decorate([
    (0, core_1.CoolController)({
        api: ['update', 'info', 'list', 'page'],
        entity: entity_1.MetaEntity,
    })
], AppMetaController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9tZXRhL2NvbnRyb2xsZXIvYXBwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDRDQUFtRTtBQUNuRSx5Q0FBMEM7QUFFMUM7O0dBRUc7QUFLSSxJQUFNLGlCQUFpQixHQUF2QixNQUFNLGlCQUFrQixTQUFRLHFCQUFjO0NBQUksQ0FBQTtBQUE1Qyw4Q0FBaUI7NEJBQWpCLGlCQUFpQjtJQUo3QixJQUFBLHFCQUFjLEVBQUM7UUFDZCxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDdkMsTUFBTSxFQUFFLG1CQUFVO0tBQ25CLENBQUM7R0FDVyxpQkFBaUIsQ0FBMkIifQ==