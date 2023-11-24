"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@cool-midway/core");
const fsStore = require("@cool-midway/cache-manager-fs-hash");
exports.default = {
    // use for cookie sign key, should change to your own and keep security
    keys: 'cool-admin for node',
    koa: {
        port: 8001,
    },
    // 模板渲染
    view: {
        mapping: {
            '.html': 'ejs',
        },
    },
    // 文件上传
    upload: {
        fileSize: '200mb',
        whitelist: null,
    },
    // 缓存 可切换成其他缓存如：redis http://midwayjs.org/docs/extensions/cache
    cache: {
        store: fsStore,
        options: {
            path: 'cache',
            ttl: -1,
        },
    },
    cool: {
        file: {
            // 上传模式 本地上传或云存储
            mode: core_1.MODETYPE.LOCAL,
            // 本地上传 文件地址前缀
            domain: 'http://127.0.0.1:8001',
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2NvbmZpZy5kZWZhdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNENBQXlEO0FBRXpELDhEQUE4RDtBQUU5RCxrQkFBZTtJQUNiLHVFQUF1RTtJQUN2RSxJQUFJLEVBQUUscUJBQXFCO0lBQzNCLEdBQUcsRUFBRTtRQUNILElBQUksRUFBRSxJQUFJO0tBQ1g7SUFDRCxPQUFPO0lBQ1AsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLEtBQUs7U0FDZjtLQUNGO0lBQ0QsT0FBTztJQUNQLE1BQU0sRUFBRTtRQUNOLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFNBQVMsRUFBRSxJQUFJO0tBQ2hCO0lBQ0QsK0RBQStEO0lBQy9ELEtBQUssRUFBRTtRQUNMLEtBQUssRUFBRSxPQUFPO1FBQ2QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLE9BQU87WUFDYixHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ1I7S0FDRjtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRTtZQUNKLGdCQUFnQjtZQUNoQixJQUFJLEVBQUUsZUFBUSxDQUFDLEtBQUs7WUFDcEIsY0FBYztZQUNkLE1BQU0sRUFBRSx1QkFBdUI7U0FDaEM7S0FDWTtDQUNBLENBQUMifQ==