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
exports.BaseAuthorityMiddleware = void 0;
const decorator_1 = require("@midwayjs/decorator");
const _ = require("lodash");
const core_1 = require("@cool-midway/core");
const jwt = require("jsonwebtoken");
const cache_1 = require("@midwayjs/cache");
/**
 * 权限校验
 */
let BaseAuthorityMiddleware = class BaseAuthorityMiddleware {
    resolve() {
        return async (ctx, next) => {
            let statusCode = 200;
            let { url } = ctx;
            url = url.replace(this.prefix, '');
            const token = ctx.get('Authorization');
            const adminUrl = '/admin/';
            //忽略token验证的url
            const ignoreUrls = [];
            // 路由地址为 admin前缀的 需要权限校验
            if (_.startsWith(url, adminUrl)) {
                try {
                    ctx.admin = jwt.verify(token, this.jwtConfig.jwt.secret);
                    if (ctx.admin.isRefresh) {
                        ctx.status = 401;
                        ctx.body = {
                            code: core_1.RESCODE.COMMFAIL,
                            message: '登录失效~',
                        };
                        return;
                    }
                }
                catch (error) { }
                // 不需要登录 无需权限校验
                if (new RegExp(`^${adminUrl}?.*/open/`).test(url) ||
                    ignoreUrls.includes(url)) {
                    await next();
                    return;
                }
                if (ctx.admin) {
                    const rToken = await this.cacheManager.get(`admin:token:${ctx.admin.userId}`);
                    // 判断密码版本是否正确
                    const passwordV = await this.cacheManager.get(`admin:passwordVersion:${ctx.admin.userId}`);
                    if (passwordV != ctx.admin.passwordVersion) {
                        ctx.status = 401;
                        ctx.body = {
                            code: core_1.RESCODE.COMMFAIL,
                            message: '登录失效~',
                        };
                        return;
                    }
                    // 超管拥有所有权限
                    if (ctx.admin.username == 'admin' && !ctx.admin.isRefresh) {
                        if (rToken !== token && this.jwtConfig.jwt.sso) {
                            ctx.status = 401;
                            ctx.body = {
                                code: core_1.RESCODE.COMMFAIL,
                                message: '登录失效~',
                            };
                            return;
                        }
                        else {
                            await next();
                            return;
                        }
                    }
                    // 要登录每个人都有权限的接口
                    if (new RegExp(`^${adminUrl}?.*/comm/`).test(url) ||
                        // 字典接口
                        url == '/admin/dict/info/data') {
                        await next();
                        return;
                    }
                    // 如果传的token是refreshToken则校验失败
                    if (ctx.admin.isRefresh) {
                        ctx.status = 401;
                        ctx.body = {
                            code: core_1.RESCODE.COMMFAIL,
                            message: '登录失效~',
                        };
                        return;
                    }
                    if (!rToken) {
                        ctx.status = 401;
                        ctx.body = {
                            code: core_1.RESCODE.COMMFAIL,
                            message: '登录失效或无权限访问~',
                        };
                        return;
                    }
                    if (rToken !== token && this.jwtConfig.jwt.sso) {
                        statusCode = 401;
                    }
                    else {
                        let perms = await this.cacheManager.get(`admin:perms:${ctx.admin.userId}`);
                        if (!_.isEmpty(perms)) {
                            perms = perms.map(e => {
                                return e.replace(/:/g, '/');
                            });
                            if (!perms.includes(url.split('?')[0].replace('/admin/', ''))) {
                                statusCode = 403;
                            }
                        }
                        else {
                            statusCode = 403;
                        }
                    }
                }
                else {
                    statusCode = 401;
                }
                if (statusCode > 200) {
                    ctx.status = statusCode;
                    ctx.body = {
                        code: core_1.RESCODE.COMMFAIL,
                        message: '登录失效或无权限访问~',
                    };
                    return;
                }
            }
            await next();
        };
    }
};
exports.BaseAuthorityMiddleware = BaseAuthorityMiddleware;
__decorate([
    (0, decorator_1.Config)('koa.globalPrefix'),
    __metadata("design:type", Object)
], BaseAuthorityMiddleware.prototype, "prefix", void 0);
__decorate([
    (0, decorator_1.Config)('module.base'),
    __metadata("design:type", Object)
], BaseAuthorityMiddleware.prototype, "jwtConfig", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", cache_1.CacheManager)
], BaseAuthorityMiddleware.prototype, "cacheManager", void 0);
__decorate([
    (0, decorator_1.App)(),
    __metadata("design:type", Object)
], BaseAuthorityMiddleware.prototype, "app", void 0);
exports.BaseAuthorityMiddleware = BaseAuthorityMiddleware = __decorate([
    (0, decorator_1.Middleware)()
], BaseAuthorityMiddleware);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvYmFzZS9taWRkbGV3YXJlL2F1dGhvcml0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBc0U7QUFDdEUsNEJBQTRCO0FBQzVCLDRDQUE0QztBQUM1QyxvQ0FBb0M7QUFHcEMsMkNBQStDO0FBRS9DOztHQUVHO0FBRUksSUFBTSx1QkFBdUIsR0FBN0IsTUFBTSx1QkFBdUI7SUFlbEMsT0FBTztRQUNMLE9BQU8sS0FBSyxFQUFFLEdBQVksRUFBRSxJQUFrQixFQUFFLEVBQUU7WUFDaEQsSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7WUFDbEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNuQyxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQztZQUMzQixlQUFlO1lBQ2YsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLHdCQUF3QjtZQUN4QixJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxFQUFFO2dCQUMvQixJQUFJO29CQUNGLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3pELElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7d0JBQ3ZCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO3dCQUNqQixHQUFHLENBQUMsSUFBSSxHQUFHOzRCQUNULElBQUksRUFBRSxjQUFP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