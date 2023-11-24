import { BaseController } from '@cool-midway/core';
import { SpaceWpsService } from '../../service/wps';
/**
 * wps回调
 */
export declare class AppSpaceWpsController extends BaseController {
    spaceWpsService: SpaceWpsService;
    files(file_id: string): Promise<{
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
    download(file_id: string): Promise<{
        code: number;
        data: {
            url: string;
        };
    }>;
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
    uploadPrepare(file_id: string): Promise<{
        code: number;
        data: {
            digest_types: string[];
        };
        msg: string;
    }>;
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
    users(user_ids: string[]): Promise<{
        code: number;
        data: {
            id: string;
            name: string;
            avatar_url: string;
        }[];
    }>;
}
