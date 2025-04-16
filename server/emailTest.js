import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

async function sendTestMail() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: "Test Email",
    text: "Hello from Node!",
  });

  console.log("✅ Message sent: %s", info.messageId);
}

sendTestMail().catch(console.error);
