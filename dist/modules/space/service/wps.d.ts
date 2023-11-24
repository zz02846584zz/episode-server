import { SpaceTypeEntity } from './../entity/type';
import { SpaceInfoEntity } from './../entity/info';
import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { BaseSysUserService } from '../../base/service/sys/user';
import { CacheManager } from '@midwayjs/cache';
import { BaseSysUserEntity } from '../../base/entity/sys/user';
import { CoolFile } from '@cool-midway/file';
/**
 * 使用wps在线文档
 */
export declare class SpaceWpsService extends BaseService {
    spaceInfoEntity: Repository<SpaceInfoEntity>;
    spaceTypeEntity: Repository<SpaceTypeEntity>;
    baseSysUserService: BaseSysUserService;
    baseSysUserEntity: Repository<BaseSysUserEntity>;
    ctx: any;
    coolFile: CoolFile;
    cacheManager: CacheManager;
    jwtConfig: any;
    /**
     * 根据filedId获取数据库文件信息
     * @param fileId
     */
    getFileInfo(fileId: any): Promise<SpaceInfoEntity>;
    /**
     * 校验文档权限
     */
    verifyUser(): Promise<any>;
    /**
     * 获得文件信息
     * @param file_id
     */
    getFiles(file_id: string): Promise<{
        code: string;
        msg: string;
        data?: undefined;
    } | {
        code: number;
        data: {
            id: string;
            name: string;
            version: number;
            size: number;
            create_time: number;
            modify_time: number;
            creator_id: string;
            modifier_id: string;
            attrs: {
                _w_third_file_id: string;
            };
        };
        msg?: undefined;
    }>;
    /**
     * 获取文件下载地址
     * @param file_id
     * @returns
     */
    download(file_id: string): Promise<{
        code: number;
        data: {
            url: string;
        };
    }>;
    /**
     * 获取文档用户权限
     * @param file_id
     * @returns
     */
    permission(file_id: string): Promise<{
        code: number;
        data: {
            user_id: string;
            read: number;
            update: number;
            download: number;
            rename: number;
            history: number;
            copy: number;
            print: number;
            saveas: number;
            comment: number;
        };
    }>;
    /**
     * 文件上传
     * @param file_id
     * @param files
     * @param body
     * @returns
     */
    upload(file_id: string, files: any): Promise<{
        code: number;
        data: {
            id: string;
            name: string;
            version: number;
            size: number;
            create_time: number;
            modify_time: number;
            creator_id: string;
            modifier_id: string;
        };
    }>;
    /**
     * 用户信息
     * @param user_ids
     * @returns
     */
    users(user_ids: string[]): Promise<{
        code: number;
        data: {
            id: string;
            name: string;
            avatar_url: string;
        }[];
    }>;
    /**
     * 准备上传阶段
     * @param file_id
     * @returns
     */
    uploadPrepare(file_id: string): Promise<{
        code: number;
        data: {
            digest_types: string[];
        };
        msg: string;
    }>;
    /**
     * 获取上传地址
     * @param file_id
     * @param body
     * @returns
     */
    uploadAddress(file_id: string, body: any): Promise<{
        code: string;
        msg: string;
        data?: undefined;
    } | {
        code: number;
        data: {
            method: string;
            url: any;
        };
        msg: string;
    }>;
    /**
     * 上传完成后，回调通知上传结果
     * @param file_id
     * @param body
     * @returns
     */
    uploadComplete(file_id: string, body: any): Promise<{
        code: number;
        data: {
            id: string;
            name: string;
            version: number;
            size: number;
            create_time: number;
            modify_time: number;
            creator_id: string;
            modifier_id: string;
        };
    }>;
}
