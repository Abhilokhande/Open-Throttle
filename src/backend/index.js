const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Corrected require statement
const nodemailer = require('nodemailer');
const UserModel = require("./models/registration");
const BookingModel = require('./models/Booking');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/Users", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });

app.post("/Register", (req, res) => {
    UserModel.create(req.body)
        .then(Register => res.json(Register))
        .catch(err => res.json(err))
});
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});  

// Create a transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'abhijeetlokhande2580@gmail.com',
        pass: 'whjs dxab wouf ihop'
    }
});

// Function to send email
const sendEmail = (to, subject, text) => {
    const mailOptions = {
        from: 'abhijeetlokhande2580@gmail.com',
        to: to,
        subject: subject,
        text: text
    };
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};


app.post("/Booking", (req, res) => {
    BookingModel.create(req.body)
    .then(book => {
        // Send email
        sendEmail(req.body.Email, 'Booking Confirmation', 'Your booking has been confirmed.');
        res.json(book);
    })
        .catch(err => res.json(err))
});


app.listen(3002, () => {
    console.log("Server is running on port 3002");
});
