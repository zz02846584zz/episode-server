"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminIotMessageController = void 0;
const message_1 = require("./../../entity/message");
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
/**
 * 设备消息
 */
let AdminIotMessageController = class AdminIotMessageController extends core_1.BaseController {
};
exports.AdminIotMessageController = AdminIotMessageController;
exports.AdminIotMessageController = AdminIotMessageController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        api: ['page'],
        entity: message_1.IotMessageEntity,
        pageQueryOp: {
            fieldEq: ['deviceId'],
        },
    })
], AdminIotMessageController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2lvdC9jb250cm9sbGVyL2FkbWluL21lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsb0RBQTBEO0FBQzFELG1EQUE4QztBQUM5Qyw0Q0FBbUU7QUFFbkU7O0dBRUc7QUFTSSxJQUFNLHlCQUF5QixHQUEvQixNQUFNLHlCQUEwQixTQUFRLHFCQUFjO0NBQUcsQ0FBQTtBQUFuRCw4REFBeUI7b0NBQXpCLHlCQUF5QjtJQVJyQyxJQUFBLG1CQUFPLEdBQUU7SUFDVCxJQUFBLHFCQUFjLEVBQUM7UUFDZCxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDYixNQUFNLEVBQUUsMEJBQWdCO1FBQ3hCLFdBQVcsRUFBRTtZQUNYLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQztTQUN0QjtLQUNGLENBQUM7R0FDVyx5QkFBeUIsQ0FBMEIifQ==