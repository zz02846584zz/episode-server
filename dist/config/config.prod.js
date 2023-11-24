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
                username: 'root',
                password: '123456',
                database: 'cool',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnByb2QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2NvbmZpZy5wcm9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7O0dBRUc7QUFDSCxrQkFBZTtJQUNiLE9BQU8sRUFBRTtRQUNQLFVBQVUsRUFBRTtZQUNWLE9BQU8sRUFBRTtnQkFDUCxJQUFJLEVBQUUsT0FBTztnQkFDYixJQUFJLEVBQUUsV0FBVztnQkFDakIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsZ0NBQWdDO2dCQUNoQyxXQUFXLEVBQUUsS0FBSztnQkFDbEIsT0FBTztnQkFDUCxPQUFPLEVBQUUsS0FBSztnQkFDZCxNQUFNO2dCQUNOLE9BQU8sRUFBRSxTQUFTO2dCQUNsQixTQUFTO2dCQUNULEtBQUssRUFBRSxJQUFJO2dCQUNYLE9BQU87Z0JBQ1AsUUFBUSxFQUFFLENBQUMscUJBQXFCLENBQUM7YUFDbEM7U0FDRjtLQUNGO0lBQ0QsSUFBSSxFQUFFO1FBQ0osa0NBQWtDO1FBQ2xDLE1BQU0sRUFBRSxLQUFLO0tBQ0E7Q0FDQSxDQUFDIn0=