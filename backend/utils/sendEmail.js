import "dotenv/config";
import nodemailer from "nodemailer";

// import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Force verification at startup
transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP VERIFY FAILED ❌", error);
  } else {
    console.log("SMTP READY ✅");
  }
});

export default async function sendEmail({ to, subject, html }) {
  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    html,
  });
}
