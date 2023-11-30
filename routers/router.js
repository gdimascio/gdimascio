require("dotenv").config();

const express = require ("express");
const nodemailer = require('nodemailer');

const router = express.Router();

router.get("/",(req,res) => {
    res.render("index")
})

router.post("/enviar", async(req,res) => {
    const {nombre, email, telefono, mensaje} = req.body;

    // Validar campos
    if(!nombre || !email || !telefono || !mensaje){
        return res.render("index", {error: "Todos los campos son obligatorios"});
    }

    // Configurar transportador SMTP
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            // user: process.env.USERNAME,
            // pass: process.env.PASSWORD

            user: process.env.USERNAME_LOCAL,
            pass: process.env.PASSWORD_LOCAL,
        },
        tls: {
            rejectUnauthorized: false
        }


        //ETHEREAL EMAIL
        // host: 'smtp.ethereal.email',
        // port: 587,
        // auth: {
        //     user: 'angela.bauch14@ethereal.email',
        //     pass: 'r8e9zdEkQtN1akz4hy'
        //     },
        // tls: {
        //     rejectUnauthorized: false
        // }

    });


    // Configurar correo electronico
    const mailOptions = {
        from: email,
        to: 'guido.dimascio@gmail.com',
        subject: 'Contacto - GD',
        text: `
        Nombre:  ${nombre}
        Email:  ${email}
        Telefono:  ${telefono}

        ${mensaje}`
    };

    try{
        // Enviar correo
        await transporter.sendMail(mailOptions);
        res.render("index");
    } catch(error){
        console.log(error)
        res.render("index", {error: "Error al enviar mensaje."})
    }

})



module.exports = router;