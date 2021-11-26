const express = require('express');
const app = express();
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded()) //hacer parseos del body al json
const conexion = require('./js/conexionDB') //Aqui va mi conexion con mi base de datos
app.listen(process.env.PORT, process.env.HOST, ()=>{console.log(`Servidor de Node con Express en puerto ${process.env.HOST}:${process.env.PORT}`)})

//Ahora se llaman las routas que utilizaremos para el intercambio de informacion
const user = require('./js/routes/usuarios.js')
//app.use('/',user);
app.use((req, res, next)=>{
    res.status(404).json({
        msg:'Tu solicitud no se puede atender en este momento'
    })
});

app.use((err, req, res, next)=>{
    console.error(err.stack)
    res.status(500).json({
        msg:'Error del sistema, tu solicitud no se puede atender en este momento'
    })
});

