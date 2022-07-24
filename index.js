const express = require('express');
const bodyParse = require('body-parser');
require('dotenv').config();


const app = express();

//body-parser
app.use(bodyParse.urlencoded({extended:true}))

//Ruta
app.use('/api', require('./routes/auth'));




app.listen(process.env.PORT || 3000,() => {
    const port = process.env.PORT || 3000;
    console.log(`Servidor corriendo en puerto ${port}`);
});