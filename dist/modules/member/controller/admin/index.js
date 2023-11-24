"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminMemberController = void 0;
const core_1 = require("@cool-midway/core");
const entity_1 = require("../../entity");
const admin_1 = require("../../service/admin");
/**
 * 描述
 */
let AdminMemberController = class AdminMemberController extends core_1.BaseController {
};
exports.AdminMemberController = AdminMemberController;
exports.AdminMemberController = AdminMemberController = __decorate([
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'info', 'list', 'page'],
        entity: entity_1.MemberEntity,
        service: admin_1.AdminMemberService,
    })
], AdminMemberController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9tZW1iZXIvY29udHJvbGxlci9hZG1pbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw0Q0FBbUU7QUFDbkUseUNBQTRDO0FBQzVDLCtDQUF5RDtBQUV6RDs7R0FFRztBQU1JLElBQU0scUJBQXFCLEdBQTNCLE1BQU0scUJBQXNCLFNBQVEscUJBQWM7Q0FBSSxDQUFBO0FBQWhELHNEQUFxQjtnQ0FBckIscUJBQXFCO0lBTGpDLElBQUEscUJBQWMsRUFBQztRQUNkLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3hELE1BQU0sRUFBRSxxQkFBWTtRQUNwQixPQUFPLEVBQUUsMEJBQWtCO0tBQzVCLENBQUM7R0FDVyxxQkFBcUIsQ0FBMkIifQ==