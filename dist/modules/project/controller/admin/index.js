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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminProjectController = void 0;
const core_1 = require("@cool-midway/core");
const core_2 = require("@midwayjs/core");
const entity_1 = require("../../entity");
const admin_1 = require("../../service/admin");
/**
 * 描述
 */
let AdminProjectController = class AdminProjectController extends core_1.BaseController {
    async edit(param) {
        return this.ok(await this.adminProjectService.edit(param));
    }
};
exports.AdminProjectController = AdminProjectController;
__decorate([
    (0, core_2.Inject)(),
    __metadata("design:type", admin_1.AdminProjectService)
], AdminProjectController.prototype, "adminProjectService", void 0);
__decorate([
    (0, core_2.Post)('/edit', { summary: '編輯' }),
    __param(0, (0, core_2.Body)(core_2.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminProjectController.prototype, "edit", null);
exports.AdminProjectController = AdminProjectController = __decorate([
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'info', 'list', 'page'],
        entity: entity_1.ProjectEntity,
        service: admin_1.AdminProjectService,
    })
], AdminProjectController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9qZWN0L2NvbnRyb2xsZXIvYWRtaW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQW1FO0FBQ25FLHlDQUF5RDtBQUN6RCx5Q0FBNkM7QUFDN0MsK0NBQTBEO0FBRTFEOztHQUVHO0FBTUksSUFBTSxzQkFBc0IsR0FBNUIsTUFBTSxzQkFBdUIsU0FBUSxxQkFBYztJQUtsRCxBQUFOLEtBQUssQ0FBQyxJQUFJLENBQVksS0FBSztRQUN6QixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztDQUNGLENBQUE7QUFSWSx3REFBc0I7QUFFakM7SUFEQyxJQUFBLGFBQU0sR0FBRTs4QkFDWSwyQkFBbUI7bUVBQUM7QUFHbkM7SUFETCxJQUFBLFdBQUksRUFBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDckIsV0FBQSxJQUFBLFdBQUksRUFBQyxVQUFHLENBQUMsQ0FBQTs7OztrREFFcEI7aUNBUFUsc0JBQXNCO0lBTGxDLElBQUEscUJBQWMsRUFBQztRQUNkLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3hELE1BQU0sRUFBRSxzQkFBYTtRQUNyQixPQUFPLEVBQUUsMkJBQW1CO0tBQzdCLENBQUM7R0FDVyxzQkFBc0IsQ0FRbEMifQ==