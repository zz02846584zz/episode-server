import { BaseEntity } from '@cool-midway/core';
/**
 * 用户信息
 */
export declare class UserInfoEntity extends BaseEntity {
    unionid: string;
    avatarUrl: string;
    nickName: string;
    phone: string;
    gender: number;
    status: number;
    loginType: number;
}
