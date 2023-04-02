"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwilioClient = void 0;
const twilio_1 = __importDefault(require("twilio"));
class TwilioClient {
    constructor() {
        this.accountSid = process.env.TWILIO_ACCOUNT_SID;
        this.authToken = process.env.TWILIO_AUTH_TOKEN;
        this.serviceSid = process.env.TWILIO_SERVICE_SID;
        this.client = (0, twilio_1.default)(this.accountSid, this.authToken);
    }
    async sendCode(phone) {
        const res = await this.client.verify.v2.services(this.serviceSid).verifications.create({ to: phone, channel: 'sms' });
        return res;
    }
    async verifyPhone(phone, code) {
        const res = await this.client.verify.v2.services(this.serviceSid)
            .verificationChecks
            .create({ to: phone, code: code });
        return res;
    }
}
exports.TwilioClient = TwilioClient;
//# sourceMappingURL=twilio.js.map