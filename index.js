
require("dotenv").config();

const express = require("express");
const router = require ('./routers/router')
const hbs = require('hbs');

const app = express();

// HBS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials");

// MIDDLEWARE
// app.use("/", express.static(__dirname + './public'));            //// BORRAME? /////
app.use(express.static(__dirname + '/public'));
// Configurar express para procesar datos de formulario
app.use(express.urlencoded({extended: false}));


app.use('/home', router)
// app.get("/", (req, res) => {
//     const htmlResponse = `
//     <html>
//         <head>
//         <title>NodeJs y Express en Vercel</title>
//         </head>
//         <body>
//         <h1>Soy un proyecto Back end en vercel</h1>
//         </body>
//     </html>
//     `;
//     res.send(htmlResponse);
// });



const port = process.env.PORT || 3001;
// app.get("*", function(req, res){res.send("ERROR 404")})
app.listen(port , () => {
    console.log("usando el puerto http://localhost:" + port);
})
