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
exports.AppMemberController = void 0;
const core_1 = require("@cool-midway/core");
const core_2 = require("@midwayjs/core");
const entity_1 = require("../../entity");
const app_1 = require("../../service/app");
/**
 * 描述
 */
let AppMemberController = class AppMemberController extends core_1.BaseController {
    async articleNew() {
        return this.ok(await this.appMemberService.list());
    }
};
exports.AppMemberController = AppMemberController;
__decorate([
    (0, core_2.Inject)(),
    __metadata("design:type", app_1.AppMemberService)
], AppMemberController.prototype, "appMemberService", void 0);
__decorate([
    (0, core_2.Post)('/list', { summary: '新增' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppMemberController.prototype, "articleNew", null);
exports.AppMemberController = AppMemberController = __decorate([
    (0, core_1.CoolController)({
        api: [],
        entity: entity_1.MemberEntity,
        service: app_1.AppMemberService,
    })
], AppMemberController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9tZW1iZXIvY29udHJvbGxlci9hcHAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNENBQW1FO0FBQ25FLHlDQUE4QztBQUM5Qyx5Q0FBNEM7QUFDNUMsMkNBQXFEO0FBRXJEOztHQUVHO0FBTUksSUFBTSxtQkFBbUIsR0FBekIsTUFBTSxtQkFBb0IsU0FBUSxxQkFBYztJQUsvQyxBQUFOLEtBQUssQ0FBQyxVQUFVO1FBQ2QsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztDQUNGLENBQUE7QUFSWSxrREFBbUI7QUFFOUI7SUFEQyxJQUFBLGFBQU0sR0FBRTs4QkFDUyxzQkFBZ0I7NkRBQUM7QUFHN0I7SUFETCxJQUFBLFdBQUksRUFBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7Ozs7cURBR2hDOzhCQVBVLG1CQUFtQjtJQUwvQixJQUFBLHFCQUFjLEVBQUM7UUFDZCxHQUFHLEVBQUUsRUFBRTtRQUNQLE1BQU0sRUFBRSxxQkFBWTtRQUNwQixPQUFPLEVBQUUsc0JBQWdCO0tBQzFCLENBQUM7R0FDVyxtQkFBbUIsQ0FRL0IifQ==