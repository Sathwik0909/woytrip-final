// import express from "express";
// import nodemailer from "nodemailer";

// const router = express.Router();

// router.post("/send", async (req, res) => {
//   const { name, phone, email, location, days, persons, amenities } = req.body;

//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GMAIL_USER, // your Gmail
//         pass: process.env.GMAIL_APP_PASSWORD, // app password (not regular password!)
//       },
//     });

//     toEmail = `manitejagaddam1@gmail.com`;

//     // to: toEmail,
//     const mailOptions = {
//       from: process.env.GMAIL_USER,
//       to: process.env.RECEIVER_EMAIL, // you can also pass this from .env
//       subject: "New Travel Inquiry",
//       text: `
// New Travel Inquiry:

// 👤 Name: ${name}
// 📞 Phone: ${phone}
// 📧 Email: ${email}
// 📍 Location: ${location}
// 📅 Duration: ${days} day(s)
// 👥 Persons: ${persons}
// 🧳 Amenities: ${amenities}
//       `,
//     };

//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: "Email sent successfully!" });
//   } catch (err) {
//     console.error("Mail Error:", err);
//     res.status(500).json({ message: "Failed to send email." });
//   }
// });

// export default router;




import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/send', async (req, res) => {
  try {
    const { name, email, phone, location, days, persons, amenities } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: 'New Travel Inquiry',
      html: `
        <h3>Travel Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Days:</strong> ${days}</p>
        <p><strong>Persons:</strong> ${persons}</p>
        <p><strong>Amenities:</strong> ${amenities}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
});

export default router;
