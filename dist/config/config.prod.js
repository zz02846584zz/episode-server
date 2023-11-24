"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 本地开发 npm run prod 读取的配置文件
 */
exports.default = {
    typeorm: {
        dataSource: {
            default: {
                type: 'mysql',
                host: '127.0.0.1',
                port: 3306,
                username: 'bryan',
                password: 'f5_3Z~P/g3mVy2GC',
                database: 'episode',
                // username: 'root',
                // password: 'monokuro8669',
                // database: 'episode_dev',
                // 自动建表 注意：线上部署的时候不要使用，有可能导致数据丢失
                synchronize: false,
                // 打印日志
                logging: false,
                // 字符集
                charset: 'utf8mb4',
                // 是否开启缓存
                cache: true,
                // 实体路径
                entities: ['**/modules/*/entity'],
            },
        },
    },
    cool: {
        // 是否自动导入数据库，生产环境不建议开，用本地的数据库手动初始化
        initDB: false,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnByb2QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2NvbmZpZy5wcm9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7O0dBRUc7QUFDSCxrQkFBZTtJQUNiLE9BQU8sRUFBRTtRQUNQLFVBQVUsRUFBRTtZQUNWLE9BQU8sRUFBRTtnQkFDUCxJQUFJLEVBQUUsT0FBTztnQkFDYixJQUFJLEVBQUUsV0FBVztnQkFDakIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixvQkFBb0I7Z0JBQ3BCLDRCQUE0QjtnQkFDNUIsMkJBQTJCO2dCQUMzQixnQ0FBZ0M7Z0JBQ2hDLFdBQVcsRUFBRSxLQUFLO2dCQUNsQixPQUFPO2dCQUNQLE9BQU8sRUFBRSxLQUFLO2dCQUNkLE1BQU07Z0JBQ04sT0FBTyxFQUFFLFNBQVM7Z0JBQ2xCLFNBQVM7Z0JBQ1QsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsT0FBTztnQkFDUCxRQUFRLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzthQUNsQztTQUNGO0tBQ0Y7SUFDRCxJQUFJLEVBQUU7UUFDSixrQ0FBa0M7UUFDbEMsTUFBTSxFQUFFLEtBQUs7S0FDQTtDQUNBLENBQUMifQ==