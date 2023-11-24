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
exports.UserMiddleware = void 0;
const core_1 = require("@cool-midway/core");
const core_2 = require("@midwayjs/core");
const decorator_1 = require("@midwayjs/decorator");
/**
 * 用户
 */
let UserMiddleware = class UserMiddleware {
    constructor() {
        this.ignoreUrls = [];
    }
    resolve() {
        return async (ctx, next) => {
            // this.ignoreUrls = this.ignoreUrls.concat(
            //   this.coolUrlTagData.byKey(TagTypes.IGNORE_TOKEN)
            // );
            // let { url } = ctx;
            // url = url.split('?')[0];
            // if (_.startsWith(url, '/app/')) {
            //   const token = ctx.get('Authorization');
            //   try {
            //     ctx.user = jwt.verify(token, this.jwtConfig.secret);
            //     if (ctx.user.isRefresh) {
            //       ctx.status = 401;
            //       ctx.body = {
            //         code: RESCODE.COMMFAIL,
            //         message: '登录失效~',
            //       };
            //       return;
            //     }
            //   } catch (error) {}
            //   if (this.ignoreUrls.includes(url)) {
            //     await next();
            //     return;
            //   } else {
            //     if (!ctx.user) {
            //       ctx.status = 401;
            //       ctx.body = {
            //         code: RESCODE.COMMFAIL,
            //         message: '登录失效~',
            //       };
            //       return;
            //     }
            //   }
            // }
            await next();
        };
    }
};
exports.UserMiddleware = UserMiddleware;
__decorate([
    (0, decorator_1.Config)(decorator_1.ALL),
    __metadata("design:type", Object)
], UserMiddleware.prototype, "coolConfig", void 0);
__decorate([
    (0, core_2.Inject)(),
    __metadata("design:type", core_1.CoolUrlTagData)
], UserMiddleware.prototype, "coolUrlTagData", void 0);
__decorate([
    (0, decorator_1.Config)('module.user.jwt'),
    __metadata("design:type", Object)
], UserMiddleware.prototype, "jwtConfig", void 0);
exports.UserMiddleware = UserMiddleware = __decorate([
    (0, decorator_1.Middleware)()
], UserMiddleware);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlci9taWRkbGV3YXJlL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBbUQ7QUFDbkQseUNBQXFEO0FBQ3JELG1EQUE4RDtBQUc5RDs7R0FFRztBQUVJLElBQU0sY0FBYyxHQUFwQixNQUFNLGNBQWM7SUFBcEI7UUFVSyxlQUFVLEdBQUcsRUFBRSxDQUFDO0lBdUM1QixDQUFDO0lBckNDLE9BQU87UUFDTCxPQUFPLEtBQUssRUFBRSxHQUFZLEVBQUUsSUFBa0IsRUFBRSxFQUFFO1lBQ2hELDRDQUE0QztZQUM1QyxxREFBcUQ7WUFDckQsS0FBSztZQUNMLHFCQUFxQjtZQUNyQiwyQkFBMkI7WUFDM0Isb0NBQW9DO1lBQ3BDLDRDQUE0QztZQUM1QyxVQUFVO1lBQ1YsMkRBQTJEO1lBQzNELGdDQUFnQztZQUNoQywwQkFBMEI7WUFDMUIscUJBQXFCO1lBQ3JCLGtDQUFrQztZQUNsQyw0QkFBNEI7WUFDNUIsV0FBVztZQUNYLGdCQUFnQjtZQUNoQixRQUFRO1lBQ1IsdUJBQXVCO1lBQ3ZCLHlDQUF5QztZQUN6QyxvQkFBb0I7WUFDcEIsY0FBYztZQUNkLGFBQWE7WUFDYix1QkFBdUI7WUFDdkIsMEJBQTBCO1lBQzFCLHFCQUFxQjtZQUNyQixrQ0FBa0M7WUFDbEMsNEJBQTRCO1lBQzVCLFdBQVc7WUFDWCxnQkFBZ0I7WUFDaEIsUUFBUTtZQUNSLE1BQU07WUFDTixJQUFJO1lBQ0osTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBakRZLHdDQUFjO0FBRXpCO0lBREMsSUFBQSxrQkFBTSxFQUFDLGVBQUcsQ0FBQzs7a0RBQ0Q7QUFHWDtJQURDLElBQUEsYUFBTSxHQUFFOzhCQUNPLHFCQUFjO3NEQUFDO0FBRy9CO0lBREMsSUFBQSxrQkFBTSxFQUFDLGlCQUFpQixDQUFDOztpREFDaEI7eUJBUkMsY0FBYztJQUQxQixJQUFBLHNCQUFVLEdBQUU7R0FDQSxjQUFjLENBaUQxQiJ9