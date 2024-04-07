const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Corrected require statement

const UserModel = require("./models/registration");
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
