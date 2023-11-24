"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDemoService = void 0;
const core_1 = require("@cool-midway/core");
const decorator_1 = require("@midwayjs/decorator");
// import { ILogger } from '@midwayjs/logger';
/**
 * 描述
 */
let TaskDemoService = class TaskDemoService extends core_1.BaseService {
    // @Logger()
    // logger: ILogger;
    /**
     * 描述
     */
    async test() {
        // this.logger.info('我被调用了');
        return '任务执行成功';
    }
};
exports.TaskDemoService = TaskDemoService;
exports.TaskDemoService = TaskDemoService = __decorate([
    (0, decorator_1.Provide)()
], TaskDemoService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Rhc2svc2VydmljZS9kZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDRDQUFnRDtBQUNoRCxtREFBOEM7QUFDOUMsOENBQThDO0FBRTlDOztHQUVHO0FBRUksSUFBTSxlQUFlLEdBQXJCLE1BQU0sZUFBZ0IsU0FBUSxrQkFBVztJQUM5QyxZQUFZO0lBQ1osbUJBQW1CO0lBQ25COztPQUVHO0lBQ0gsS0FBSyxDQUFDLElBQUk7UUFDUiw2QkFBNkI7UUFDN0IsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztDQUNGLENBQUE7QUFWWSwwQ0FBZTswQkFBZixlQUFlO0lBRDNCLElBQUEsbUJBQU8sR0FBRTtHQUNHLGVBQWUsQ0FVM0IifQ==