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

    // Revisa si se esta accediendo por host o de forma local
    let username;
    let password;
    try {
        if (!process.env.USERNAME || !process.env.PASSWORD) {
            throw new Error("No se encontraron variables en .env");
        }
        username = process.env.USERNAME;
        password = process.env.PASSWORD
    } catch (error) {
        console.log("No se encontraron variables en.env");
        console.log("Usando variables locales");
        username = process.env.USERNAME_LOCAL;
        password = process.env.PASSWORD_LOCAL
    }

    // Configurar transportador SMTP
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: username,
            pass: password
        },
        tls: {rejectUnauthorized: false}

    });

    await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
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

    await new Promise((resolve, reject) => {
        // Enviar correo
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                res.send(`
                    <script>
                        alert("Email Sent Successfully.")
                        window.location.href = "/";
                    </script>
                    `);
                res.redirect("/");
                resolve(info);
            }
        });
    });
})

module.exports = router;