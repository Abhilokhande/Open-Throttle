const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abhijeetlokhande2580@gmail.com', // your email
    pass: 'Abhi@2580', // your password
  },
});

// Route to send email
app.post('/send-email', async (req, res) => {
  const { email } = req.body;

  const mailOptions = {
    from: 'abhijeetlokhande2580@gmial.com',
    to: email,
    subject: 'Test Email',
    text: 'This is a test email sent from MERN stack app.',
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent:', mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
