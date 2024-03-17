const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// POST route to handle form submission
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Create transporter with your email credentials
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "peichandev@gmail.com",
      pass: "uzue osgf ztao rgrk",
    },
  });

  // Set up email data
  const mailOptions = {
    from: "test@gmail.com",
    to: "peichandev@gmail.com",
    subject: "New Contact Form Submission from Portfolio",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email from backend");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
