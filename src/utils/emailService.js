import nodemailer from "nodemailer";

class EmailService {
    static async sendEmail() {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GENERATED_USER, // generated ethereal user
                pass: process.env.GENERATED_PASSWORD, // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        let info = await transporter.sendMail({
            from: process.env.SENDER_EMAIL, // sender address
            to: process.env.RECIVER_EMAIL, // list of receivers
            subject: "Video Notification", // Subject line
            html: `<div>
                <p> We are thrilled to share with you the discovery of an intriguing new video on Twitter!
                Stay ahead of the curve by checking out the latest content on CoinDesk's
                <a href=https://hrlicensurefe.dev.k8s.sandboxaddis.com>Twitter profile</a></p>
                </div>`, // html body
        });
    }
}
export default EmailService;