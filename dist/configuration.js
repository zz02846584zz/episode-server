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
exports.ContainerLifeCycle = void 0;
const orm = require("@midwayjs/typeorm");
const decorator_1 = require("@midwayjs/decorator");
const koa = require("@midwayjs/koa");
const validate = require("@midwayjs/validate");
const info = require("@midwayjs/info");
const path_1 = require("path");
const view = require("@midwayjs/view-ejs");
const staticFile = require("@midwayjs/static-file");
const localTask = require("@midwayjs/task");
// import * as crossDomain from '@midwayjs/cross-domain';
const cool = require("@cool-midway/core");
const cloud = require("@cool-midway/cloud");
const file = require("@cool-midway/file");
const sms = require("@cool-midway/sms");
// import * as rpc from '@cool-midway/rpc';
// import * as task from '@cool-midway/task';
// import * as pay from '@cool-midway/pay';
// import * as iot from '@cool-midway/iot';
let ContainerLifeCycle = class ContainerLifeCycle {
    async onReady() { }
};
exports.ContainerLifeCycle = ContainerLifeCycle;
__decorate([
    (0, decorator_1.App)(),
    __metadata("design:type", Object)
], ContainerLifeCycle.prototype, "app", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], ContainerLifeCycle.prototype, "logger", void 0);
__decorate([
    (0, decorator_1.Config)('module'),
    __metadata("design:type", Object)
], ContainerLifeCycle.prototype, "config", void 0);
exports.ContainerLifeCycle = ContainerLifeCycle = __decorate([
    (0, decorator_1.Configuration)({
        imports: [
            // https://koajs.com/
            koa,
            // 是否开启跨域(注：顺序不能乱放！！！) http://www.midwayjs.org/docs/extensions/cross_domain
            // crossDomain,
            // 模板渲染 https://midwayjs.org/docs/extensions/render
            view,
            // 静态文件托管 https://midwayjs.org/docs/extensions/static_file
            staticFile,
            // orm https://midwayjs.org/docs/extensions/orm
            orm,
            // 参数验证 https://midwayjs.org/docs/extensions/validate
            validate,
            // 本地任务 http://midwayjs.org/docs/legacy/task
            localTask,
            // cool-admin 官方组件 https://cool-js.com
            cool,
            // 文件上传 本地 阿里云存储 腾讯云存储 七牛云存储
            file,
            // rpc 微服务 远程调用
            // rpc,
            // 任务与队列
            // task,
            // cool-admin 云开发组件
            cloud,
            // 支付(微信、支付宝) https://cool-js.com/admin/node/core/pay.html
            // pay,
            // 物联网开发，如MQTT支持等
            // iot,
            // 短信
            sms,
            {
                component: info,
                enabledEnvironment: ['local'],
            },
        ],
        importConfigs: [(0, path_1.join)(__dirname, './config')],
    })
], ContainerLifeCycle);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF5QztBQUN6QyxtREFBeUU7QUFDekUscUNBQXFDO0FBQ3JDLCtDQUErQztBQUMvQyx1Q0FBdUM7QUFDdkMsK0JBQTRCO0FBQzVCLDJDQUEyQztBQUMzQyxvREFBb0Q7QUFDcEQsNENBQTRDO0FBQzVDLHlEQUF5RDtBQUN6RCwwQ0FBMEM7QUFDMUMsNENBQTRDO0FBQzVDLDBDQUEwQztBQUMxQyx3Q0FBd0M7QUFFeEMsMkNBQTJDO0FBQzNDLDZDQUE2QztBQUM3QywyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBeUNwQyxJQUFNLGtCQUFrQixHQUF4QixNQUFNLGtCQUFrQjtJQVU3QixLQUFLLENBQUMsT0FBTyxLQUFJLENBQUM7Q0FDbkIsQ0FBQTtBQVhZLGdEQUFrQjtBQUU3QjtJQURDLElBQUEsZUFBRyxHQUFFOzsrQ0FDZTtBQUdyQjtJQURDLElBQUEsa0JBQU0sR0FBRTs7a0RBQ087QUFHaEI7SUFEQyxJQUFBLGtCQUFNLEVBQUMsUUFBUSxDQUFDOztrREFDVjs2QkFSSSxrQkFBa0I7SUF2QzlCLElBQUEseUJBQWEsRUFBQztRQUNiLE9BQU8sRUFBRTtZQUNQLHFCQUFxQjtZQUNyQixHQUFHO1lBQ0gsMkVBQTJFO1lBQzNFLGVBQWU7WUFDZixtREFBbUQ7WUFDbkQsSUFBSTtZQUNKLDBEQUEwRDtZQUMxRCxVQUFVO1lBQ1YsK0NBQStDO1lBQy9DLEdBQUc7WUFDSCxxREFBcUQ7WUFDckQsUUFBUTtZQUNSLDRDQUE0QztZQUM1QyxTQUFTO1lBQ1Qsc0NBQXNDO1lBQ3RDLElBQUk7WUFDSiw0QkFBNEI7WUFDNUIsSUFBSTtZQUNKLGVBQWU7WUFDZixPQUFPO1lBQ1AsUUFBUTtZQUNSLFFBQVE7WUFDUixtQkFBbUI7WUFDbkIsS0FBSztZQUNMLDBEQUEwRDtZQUMxRCxPQUFPO1lBQ1AsaUJBQWlCO1lBQ2pCLE9BQU87WUFDUCxLQUFLO1lBQ0wsR0FBRztZQUNIO2dCQUNFLFNBQVMsRUFBRSxJQUFJO2dCQUNmLGtCQUFrQixFQUFFLENBQUMsT0FBTyxDQUFDO2FBQzlCO1NBQ0Y7UUFDRCxhQUFhLEVBQUUsQ0FBQyxJQUFBLFdBQUksRUFBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FDN0MsQ0FBQztHQUNXLGtCQUFrQixDQVc5QiJ9