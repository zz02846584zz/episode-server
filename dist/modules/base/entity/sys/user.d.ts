import { BaseEntity } from '@cool-midway/core';
/**
 * 系统用户
 */
export declare class BaseSysUserEntity extends BaseEntity {
    departmentId: number;
    name: string;
    username: string;
    password: string;
    passwordV: number;
    nickName: string;
    headImg: string;
    phone: string;
    email: string;
    remark: string;
    status: number;
    departmentName: string;
    roleIdList: number[];
    socketId: string;
}
