import { CloudFuncLogEntity } from './../entity/func/log';
import { IMidwayApplication } from '@midwayjs/core';
import { CloudFuncInfoEntity } from './../entity/func/info';
import { BaseService, CoolConfig } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { Context } from '@midwayjs/koa';
import { CloudReq, CoolCloudDb, CoolCloudFunc } from '@cool-midway/cloud';
/**
 * 云函数
 */
export declare class CloudFuncService extends BaseService {
    cloudFuncInfoEntity: Repository<CloudFuncInfoEntity>;
    cloudFuncLogEntity: Repository<CloudFuncLogEntity>;
    app: IMidwayApplication;
    ctx: Context;
    coolCloudDb: CoolCloudDb;
    coolCloudFunc: CoolCloudFunc;
    coolConfig: CoolConfig;
    /**
     * 调用云函数
     * @param req
     * @param id
     * @param content 内容 调试的时候传过来
     * @returns
     */
    invoke(req: CloudReq, id: number, content?: string): Promise<any>;
}
