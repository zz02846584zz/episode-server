import { BaseEntity } from '@cool-midway/core';
/**
 * 描述
 */
export declare class MemberInfoEntity extends BaseEntity {
    memberId: number;
    locale: string;
    name: string;
    job: string;
    intro: string;
}
