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
exports.TaskInfoQueue = void 0;
const decorator_1 = require("@midwayjs/decorator");
const task_1 = require("@cool-midway/task");
const info_1 = require("../service/info");
/**
 * 任务
 */
let TaskInfoQueue = class TaskInfoQueue extends task_1.BaseCoolQueue {
    async data(job, done) {
        try {
            const result = await this.taskInfoService.invokeService(job.data.service);
            this.taskInfoService.record(job.data, 1, JSON.stringify(result));
        }
        catch (error) {
            this.taskInfoService.record(job.data, 0, error.message);
        }
        if (!job.data.isOnce) {
            this.taskInfoService.updateNextRunTime(job.data.id);
            this.taskInfoService.updateStatus(job.data.id);
        }
        done();
    }
};
exports.TaskInfoQueue = TaskInfoQueue;
__decorate([
    (0, decorator_1.App)(),
    __metadata("design:type", Object)
], TaskInfoQueue.prototype, "app", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", info_1.TaskInfoService)
], TaskInfoQueue.prototype, "taskInfoService", void 0);
exports.TaskInfoQueue = TaskInfoQueue = __decorate([
    (0, task_1.CoolQueue)()
], TaskInfoQueue);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Rhc2svcXVldWUvdGFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBa0Q7QUFDbEQsNENBQTZEO0FBQzdELDBDQUFrRDtBQUdsRDs7R0FFRztBQUVJLElBQWUsYUFBYSxHQUE1QixNQUFlLGFBQWMsU0FBUSxvQkFBYTtJQU92RCxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFTO1FBQ3ZCLElBQUk7WUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ2xFO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDekQ7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDaEQ7UUFDRCxJQUFJLEVBQUUsQ0FBQztJQUNULENBQUM7Q0FDRixDQUFBO0FBcEJxQixzQ0FBYTtBQUVqQztJQURDLElBQUEsZUFBRyxHQUFFOzswQ0FDa0I7QUFHeEI7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OEJBQ1Esc0JBQWU7c0RBQUM7d0JBTGIsYUFBYTtJQURsQyxJQUFBLGdCQUFTLEdBQUU7R0FDVSxhQUFhLENBb0JsQyJ9