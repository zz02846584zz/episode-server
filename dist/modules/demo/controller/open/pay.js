"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDemoPayController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const pay_1 = require("@cool-midway/pay");
// @ts-ignore
const form_1 = require("alipay-sdk/lib/form");
// @ts-ignore
const util_1 = require("alipay-sdk/lib/util");
/**
 * 微信支付
 */
let AppDemoPayController = class AppDemoPayController extends core_1.BaseController {
    /**
     * 微信扫码支付
     */
    async wx() {
        const orderNum = await this.wxPay.createOrderNum();
        const params = {
            description: '测试',
            out_trade_no: orderNum,
            notify_url: this.wxPayConfig.notify_url,
            amount: {
                total: 1,
            },
            scene_info: {
                payer_client_ip: 'ip',
            },
        };
        const result = await this.wxPay.getInstance().transactions_native(params);
        return this.ok(result);
    }
    /**
     * 微信支付回调通知
     */
    async wxNotify(body) {
        const check = await this.wxPay.signVerify(this.ctx);
        // 验签通过，处理业务逻辑
        if (check) {
        }
    }
    /**
     * 支付宝PC网站支付
     * @returns
     */
    async aliPc() {
        const orderNum = await this.aliPay.createOrderNum();
        const formData = new form_1.default();
        // 调用 setMethod 并传入 get，会返回可以跳转到支付页面的 url
        formData.setMethod('get');
        formData.addField('notifyUrl', this.aliPayConfig.notifyUrl);
        formData.addField('bizContent', {
            outTradeNo: orderNum,
            productCode: 'FAST_INSTANT_TRADE_PAY',
            totalAmount: '0.01',
            subject: '商品',
            body: '商品详情',
        });
        // 返回支付链接
        const result = await this.aliPay
            .getInstance()
            .exec('alipay.trade.page.pay', {}, { formData });
        return this.ok(result);
    }
    /**
     * 支付宝APP支付
     * @returns
     */
    async aliApp() {
        const orderNum = await this.aliPay.createOrderNum();
        // 返回支付链接
        const data = (0, util_1.sign)('alipay.trade.app.pay', {
            notifyUrl: this.aliPayConfig.notifyUrl,
            bizContent: {
                subject: '商品标题',
                totalAmount: '0.01',
                outTradeNo: orderNum,
                productCode: 'QUICK_MSECURITY_PAY',
            },
        }, this.aliPay.getInstance().config);
        const payInfo = new URLSearchParams(data).toString();
        return this.ok(payInfo);
    }
    /**
     * 支付宝支付回调通知
     */
    async aliNotify(body) {
        const { ciphertext, associated_data, nonce } = body.resource;
        // 解密数据
        const data = this.wxPay
            .getInstance()
            .decipher_gcm(ciphertext, associated_data, nonce);
        console.log(data);
        const check = await this.aliPay.signVerify(body);
        // 验签通过，处理业务逻辑
        if (check) {
        }
        return 'success';
    }
};
exports.AppDemoPayController = AppDemoPayController;
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", pay_1.CoolWxPay)
], AppDemoPayController.prototype, "wxPay", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", pay_1.CoolAliPay)
], AppDemoPayController.prototype, "aliPay", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], AppDemoPayController.prototype, "ctx", void 0);
__decorate([
    (0, decorator_1.Config)('cool.pay.wx'),
    __metadata("design:type", Object)
], AppDemoPayController.prototype, "wxPayConfig", void 0);
__decorate([
    (0, decorator_1.Config)('cool.pay.ali'),
    __metadata("design:type", Object)
], AppDemoPayController.prototype, "aliPayConfig", void 0);
__decorate([
    (0, decorator_1.Post)('/wx'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppDemoPayController.prototype, "wx", null);
__decorate([
    (0, decorator_1.Post)('/wxNotify'),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppDemoPayController.prototype, "wxNotify", null);
__decorate([
    (0, decorator_1.Post)('/aliPc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppDemoPayController.prototype, "aliPc", null);
__decorate([
    (0, decorator_1.Post)('/aliApp'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppDemoPayController.prototype, "aliApp", null);
__decorate([
    (0, decorator_1.Post)('/aliNotify'),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppDemoPayController.prototype, "aliNotify", null);
exports.AppDemoPayController = AppDemoPayController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)()
], AppDemoPayController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvZGVtby9jb250cm9sbGVyL29wZW4vcGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUEwRTtBQUMxRSw0Q0FLMkI7QUFDM0IsMENBQXlEO0FBQ3pELGFBQWE7QUFDYiw4Q0FBaUQ7QUFDakQsYUFBYTtBQUNiLDhDQUEyQztBQUUzQzs7R0FFRztBQUdJLElBQU0sb0JBQW9CLEdBQTFCLE1BQU0sb0JBQXFCLFNBQVEscUJBQWM7SUFrQnREOztPQUVHO0lBRUcsQUFBTixLQUFLLENBQUMsRUFBRTtRQUNOLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuRCxNQUFNLE1BQU0sR0FBRztZQUNiLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFlBQVksRUFBRSxRQUFRO1lBQ3RCLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFDdkMsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxDQUFDO2FBQ1Q7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsZUFBZSxFQUFFLElBQUk7YUFDdEI7U0FDRixDQUFDO1FBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFFRyxBQUFOLEtBQUssQ0FBQyxRQUFRLENBQVMsSUFBSTtRQUN6QixNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwRCxjQUFjO1FBQ2QsSUFBSSxLQUFLLEVBQUU7U0FDVjtJQUNI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