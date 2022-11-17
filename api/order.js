const express = require("express");

const { addOrder } = require("../db/models/orders")

const orderRouter = express.Router();

orderRouter.use(express.json());

require("dotenv").config();

// //nodemailer config
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS
    }
})
//testing nodmailer success
transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready for messages");
        console.log(success);
    }
})


console.log('were in the order api outside of the post handler thingy');

orderRouter.post('/', async (req, res, next) => {
    console.log('were in the order api');
    const {firstName, lastName, email, phone, concrete, house, deck, patio, fence, additionalInfo} = req.body;
    try {
        const order = await addOrder(firstName, lastName, email, phone, concrete, house, deck, patio, fence, additionalInfo);
        console.log(order);

        const mailOptions = {
            from: process.env.AUTH_EMAIL,
            to: email,
            subject: "convene clean",
            text: `Hello ${firstName}, thank you for your interest in Conven Clean!
            We will send your quote within 24 hours.`
        }

        transporter
            .sendMail(mailOptions)
            .then(()=> {
                console.log("success")
            })
            .catch((error) => {
                console.log(error);
            })


        res.send({
            order,
        })
    } catch (error) {
        console.log(error);
    }
    
});

module.exports = orderRouter;