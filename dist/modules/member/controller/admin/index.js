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
exports.AdminMemberController = void 0;
const core_1 = require("@cool-midway/core");
const core_2 = require("@midwayjs/core");
const entity_1 = require("../../entity");
const admin_1 = require("../../service/admin");
/**
 * 描述
 */
let AdminMemberController = class AdminMemberController extends core_1.BaseController {
    async edit(param) {
        return this.ok(await this.adminMemberService.edit(param));
    }
};
exports.AdminMemberController = AdminMemberController;
__decorate([
    (0, core_2.Inject)(),
    __metadata("design:type", admin_1.AdminMemberService)
], AdminMemberController.prototype, "adminMemberService", void 0);
__decorate([
    (0, core_2.Post)('/edit', { summary: '編輯' }),
    __param(0, (0, core_2.Body)(core_2.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminMemberController.prototype, "edit", null);
exports.AdminMemberController = AdminMemberController = __decorate([
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'info', 'list', 'page'],
        entity: entity_1.MemberEntity,
        service: admin_1.AdminMemberService,
    })
], AdminMemberController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9tZW1iZXIvY29udHJvbGxlci9hZG1pbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBbUU7QUFDbkUseUNBQXlEO0FBQ3pELHlDQUE0QztBQUM1QywrQ0FBeUQ7QUFFekQ7O0dBRUc7QUFNSSxJQUFNLHFCQUFxQixHQUEzQixNQUFNLHFCQUFzQixTQUFRLHFCQUFjO0lBS2pELEFBQU4sS0FBSyxDQUFDLElBQUksQ0FBWSxLQUFLO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0NBQ0YsQ0FBQTtBQVJZLHNEQUFxQjtBQUVoQztJQURDLElBQUEsYUFBTSxHQUFFOzhCQUNXLDBCQUFrQjtpRUFBQztBQUdqQztJQURMLElBQUEsV0FBSSxFQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNyQixXQUFBLElBQUEsV0FBSSxFQUFDLFVBQUcsQ0FBQyxDQUFBOzs7O2lEQUVwQjtnQ0FQVSxxQkFBcUI7SUFMakMsSUFBQSxxQkFBYyxFQUFDO1FBQ2QsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDeEQsTUFBTSxFQUFFLHFCQUFZO1FBQ3BCLE9BQU8sRUFBRSwwQkFBa0I7S0FDNUIsQ0FBQztHQUNXLHFCQUFxQixDQVFqQyJ9