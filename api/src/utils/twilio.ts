import twilioClint, { Twilio } from 'twilio';
export class TwilioClient {
    private readonly accountSid = process.env.TWILIO_ACCOUNT_SID!;
    private readonly authToken = process.env.TWILIO_AUTH_TOKEN!
    private readonly serviceSid = process.env.TWILIO_SERVICE_SID!

    private readonly client: Twilio;
    constructor() {
        this.client = twilioClint(this.accountSid, this.authToken);
    }

    public async sendCode(phone: string) {

        const res = await this.client.verify.v2.services(this.serviceSid).verifications.create({ to: phone, channel: 'sms' })
        return res;
        // .then(verification => console.log(verification.status));
    }

    public async verifyPhone(phone: string, code: string) {
        const res = await this.client.verify.v2.services(this.serviceSid)
            .verificationChecks
            .create({ to: phone, code: code });
        return res;
        // .then(verification_check => console.log(verification_check.status));

    }
}