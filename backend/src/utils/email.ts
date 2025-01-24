import transporter from "../config/mail";

interface Options {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export const sendEmail = async (options: Options) => {
  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html,
  });
};
