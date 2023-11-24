import { BaseEntity } from '@cool-midway/core';
/**
 * 微信用户
 */
export declare class UserWxEntity extends BaseEntity {
    unionid: string;
    openid: string;
    avatarUrl: string;
    nickName: string;
    gender: number;
    language: string;
    city: string;
    province: string;
    country: string;
    type: number;
}
