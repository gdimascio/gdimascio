
require("dotenv").config();

const express = require("express");
const router = require ('./routers/router')
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3001;

// HBS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials");

// MIDDLEWARE
// app.use("/", express.static(__dirname + './public'));            //// BORRAME? /////
app.use(express.static(__dirname + '/public'));
// Configurar express para procesar datos de formulario
app.use(express.urlencoded({extended: false}));


app.use('/', router)
// app.use("/");


app.get("*", function(req, res){res.send("ERROR 404")})
app.listen(port , () => {
    console.log("usando el puerto http://localhost:" + port);
})
