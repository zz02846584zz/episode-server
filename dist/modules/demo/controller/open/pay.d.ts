import { BaseController, CoolWxPayConfig, CoolAliPayConfig } from '@cool-midway/core';
import { CoolAliPay, CoolWxPay } from '@cool-midway/pay';
/**
 * 微信支付
 */
export declare class AppDemoPayController extends BaseController {
    wxPay: CoolWxPay;
    aliPay: CoolAliPay;
    ctx: any;
    wxPayConfig: CoolWxPayConfig;
    aliPayConfig: CoolAliPayConfig;
    /**
     * 微信扫码支付
     */
    wx(): Promise<{
        code: number;
        message: string;
    }>;
    /**
     * 微信支付回调通知
     */
    wxNotify(body: any): Promise<void>;
    /**
     * 支付宝PC网站支付
     * @returns
     */
    aliPc(): Promise<{
        code: number;
        message: string;
    }>;
    /**
     * 支付宝APP支付
     * @returns
     */
    aliApp(): Promise<{
        code: number;
        message: string;
    }>;
    /**
     * 支付宝支付回调通知
     */
    aliNotify(body: any): Promise<string>;
}
