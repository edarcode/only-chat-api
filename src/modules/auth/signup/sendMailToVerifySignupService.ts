import { transporter } from "../../../services/transporter";

export const sendMailToVerifySignupService = async (
  to: string,
  link: string
) => {
  return await transporter.sendMail({
    from: process.env.NODEMAILER_GMAIL,
    to,
    subject: "Verify email to signup in only-chat 💪",
    html: `<a href=${link} style="color: royalblue">Click me to verify signup</a>`,
  });
};
