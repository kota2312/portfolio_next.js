import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { lastname, firstname, company, department, email, tel, message } = req.body;

  if (!lastname || !firstname || !company || !email || !message) {
    return res.status(400).json({ message: "Email and message are required" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_EMAIL, // 自分宛てに送信
    subject: `Message from ${firstname} ${lastname} (${email})`,
    text: `
      以下の内容で問い合わせがありました。
      
      お名前: ${firstname} ${lastname}
      会社: ${company}
      事業部: ${department}
      メールアドレス: ${email}
      電話番号: ${tel}
      本文:
      ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error); // サーバーログにエラー詳細を表示

    // エラー詳細をレスポンスとして返す（デバッグ用）
    return res.status(500).json({
      message: "Error sending email",
      error: error.message,
      stack: error.stack,
    });
  }
}
