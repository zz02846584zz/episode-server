"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("./middleware/log");
const authority_1 = require("./middleware/authority");
/**
 * 模块的配置
 */
exports.default = () => {
    return {
        // 模块名称
        name: '权限管理',
        // 模块描述
        description: '基础的权限管理功能，包括登录，权限校验',
        // 中间件
        globalMiddlewares: [authority_1.BaseAuthorityMiddleware, log_1.BaseLogMiddleware],
        // 模块加载顺序，默认为0，值越大越优先加载
        order: 10,
        // app参数配置允许读取的key
        allowKeys: [],
        // jwt 生成解密token的
        jwt: {
            // 单点登录
            sso: false,
            // 注意： 最好重新修改，防止破解
            secret: '7c2b0e20703811eea31db9fdfb16a12e',
            // token
            token: {
                // 2小时过期，需要用刷新token
                expire: 2 * 3600,
                // 15天内，如果没操作过就需要重新登录
                refreshExpire: 24 * 3600 * 15,
            },
        },
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvYmFzZS9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBcUQ7QUFDckQsc0RBQWlFO0FBR2pFOztHQUVHO0FBQ0gsa0JBQWUsR0FBRyxFQUFFO0lBQ2xCLE9BQU87UUFDTCxPQUFPO1FBQ1AsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPO1FBQ1AsV0FBVyxFQUFFLHFCQUFxQjtRQUNsQyxNQUFNO1FBQ04saUJBQWlCLEVBQUUsQ0FBQyxtQ0FBdUIsRUFBRSx1QkFBaUIsQ0FBQztRQUMvRCx1QkFBdUI7UUFDdkIsS0FBSyxFQUFFLEVBQUU7UUFDVCxrQkFBa0I7UUFDbEIsU0FBUyxFQUFFLEVBQUU7UUFDYixpQkFBaUI7UUFDakIsR0FBRyxFQUFFO1lBQ0gsT0FBTztZQUNQLEdBQUcsRUFBRSxLQUFLO1lBQ1Ysa0JBQWtCO1lBQ2xCLE1BQU0sRUFBRSxrQ0FBa0M7WUFDMUMsUUFBUTtZQUNSLEtBQUssRUFBRTtnQkFDTCxtQkFBbUI7Z0JBQ25CLE1BQU0sRUFBRSxDQUFDLEdBQUcsSUFBSTtnQkFDaEIscUJBQXFCO2dCQUNyQixhQUFhLEVBQUUsRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFO2FBQzlCO1NBQ0Y7S0FDYyxDQUFDO0FBQ3BCLENBQUMsQ0FBQyJ9