const express = require('express')
const app = express.Router()
const hash = require('object-hash')
let {users} = require('../data');
const conexion = require('../conexionDB')

app.get('/usuarios', (req, res)=>{
    res.status(200).json({
        msg:'Listado de usuarios',
        //Aqui ira nuestro array de usuarios
        users
    })
})

app.get('/',(req,res)=>{
    console.log(req.query)
    let parametros = req.query
    //Se implementa la lógica necesaria para la ruta / con el //metodo GET
    res.status(200).json(
        {msg:`Respuesta desde Node en la ruta / con el parametro ${parametros.nombre}`}
    )
})

app.post('/usuario',(req,res)=>{
    //Implementar la lógica para la ruta /usuario con el //metodo POST
    console.log(req.body)
    let body = req.body
    res.status(201).json(
        {msg:`Respuesta desde Node ruta /usuario con POST y parametro ${body.nombre}`}
    )
})