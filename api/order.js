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


orderRouter.post('/', async (req, res, next) => {
    console.log('were in the order api');
    const {firstName, lastName, email, phone, concrete, house, deck, patio, fence, additionalInfo} = req.body;
    console.log(firstName, lastName, email, phone, concrete, house, deck, patio, fence, additionalInfo)
    try {
        const order = await addOrder(firstName, lastName, email, phone, concrete, house, deck, patio, fence, additionalInfo);
        console.log(order);

        const customerMessage = {
            from: process.env.AUTH_EMAIL,
            to: email,
            subject: "Ohio Premium Pressure Washing",
            text: `Hello ${firstName}, thank you for your interest in Ohio Premium Pressure Washing!
            We will send your quote within 24 hours.`
        }
        const conveneCleanMessage = {
            from: process.env.AUTH_EMAIL,
            to: process.env.AUTH_EMAIL,
            subject: "New Quote Request",
            text: `Name: ${firstName} ${lastName},
                   Email: ${email},
                   Phone: ${phone},
                   Concrete: ${concrete},
                   House: ${house},
                   Deck: ${deck},
                   Patio: ${patio},
                   Fence: ${fence},
                   Additional Info: ${additionalInfo}
                `
        }
        transporter
            .sendMail(customerMessage)
            .then(()=> {
                console.log("success")
            })
            .catch((error) => {
                console.log(error);
            })

        transporter
            .sendMail(conveneCleanMessage)
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