"use server";
import nodemailer from "nodemailer";

const mailHTML = (usermail: string) => {
  return `
  <html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Email Subject</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">

  <table style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 10px;">
    <tr>
      <td>
        <h1 style="color: #333;">Khomyn Talyn Takhi</h1>
        <p style="color: #666;">You have new adoption request</p>
        <p style="color: #666;">${usermail} wants to adopt! Check admin page donation section</p>
        <a href="https://www.web-cms.uz.mn" style="color: #666;">Admin page</a>
      </td>
    </tr>
  </table>

</body>
</html>
    `;
};
const mailHTMLDonation = (usermail: string) => {
  return `
  <html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Email Subject</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">

  <table style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 10px;">
    <tr>
      <td>
        <h1 style="color: #333;">Khomyn Talyn Takhi</h1>
        <p style="color: #666;">You have new donatian request</p>
        <p style="color: #666;">${usermail} wants to donate! Check admin page donation section</p>
        <a href="https://www.web-cms.uz.mn" style="color: #666;">Admin page</a>
      </td>
    </tr>
  </table>

</body>
</html>
    `;
};

const transporter = nodemailer.createTransport({
  service: "gmail ",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "khomytalyntakhi@gmail.com",
    pass: "gqmg jjwa hyqc rxqr",
  },
});

export const sendEmail = async (usermail: string, isDonation?: boolean) => {
  try {
    const info = await transporter.sendMail({
      from: `${
        !isDonation ? "Takhi | Adopt" : "Takhi | Donation"
      } <khomytalyntakhi@gmail.com>`,
      to: "takhi@ktt.mn",
      subject: "Takhi.mn | New Adopt Request",
      text: "New Adopt Request!",
      html: !isDonation ? mailHTML(usermail) : mailHTMLDonation(usermail),
    });
    console.log("MAIL SEND");
  } catch (error) {
    console.log("ERROR WHILE EMAIL SENDING", error);
  }
};
