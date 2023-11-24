"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 本地开发 npm run dev 读取的配置文件
 */
exports.default = {
    typeorm: {
        dataSource: {
            default: {
                type: 'mysql',
                host: '127.0.0.1',
                port: 3306,
                username: 'root',
                password: 'monokuro8669',
                database: 'episode_dev',
                synchronize: true,
                logging: false,
                charset: 'utf8mb4',
                cache: true,
                entities: ['**/modules/*/entity'],
            },
        },
    },
    cool: {
        // 是否自动导入模块数据库
        initDB: true,
        // 是否自动导入模块菜单
        initMenu: true,
        // crud配置
        crud: {
            // 软删除
            softDelete: true,
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmxvY2FsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy9jb25maWcubG9jYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQTs7R0FFRztBQUNILGtCQUFlO0lBQ2IsT0FBTyxFQUFFO1FBQ1AsVUFBVSxFQUFFO1lBQ1YsT0FBTyxFQUFFO2dCQUNQLElBQUksRUFBRSxPQUFPO2dCQUNiLElBQUksRUFBRSxXQUFXO2dCQUNqQixJQUFJLEVBQUUsSUFBSTtnQkFDVixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixXQUFXLEVBQUUsSUFBSTtnQkFDakIsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsT0FBTyxFQUFFLFNBQVM7Z0JBQ2xCLEtBQUssRUFBRSxJQUFJO2dCQUNYLFFBQVEsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2FBQ2xDO1NBQ0Y7S0FDRjtJQUNELElBQUksRUFBRTtRQUNKLGNBQWM7UUFDZCxNQUFNLEVBQUUsSUFBSTtRQUNaLGFBQWE7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFNBQVM7UUFDVCxJQUFJLEVBQUU7WUFDSixNQUFNO1lBQ04sVUFBVSxFQUFFLElBQUk7U0FDakI7S0FDWTtDQUNBLENBQUMifQ==