import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { UserInfoEntity } from '../entity/info';
import { CoolFile } from '@cool-midway/file';
/**
 * 用户信息
 */
export declare class UserInfoService extends BaseService {
    userInfoEntity: Repository<UserInfoEntity>;
    file: CoolFile;
    /**
     * 获取用户信息
     * @param id
     * @returns
     */
    person(id: any): Promise<UserInfoEntity>;
    updatePerson(id: any, param: any): Promise<import("typeorm").UpdateResult>;
}
