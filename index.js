const express = require("express");
require("dotenv").config()
const {
    obtenerInicio, 
    obtenerTodosLosUsuarios, 
    obtenerPorId, 
    crearUsuario,
    actualizarUsuario} = require("./controladores/index")
const app = express();
app.use(express.json());


//Rutas
app.get("/", obtenerInicio)


app.get("/usuarios", obtenerTodosLosUsuarios)
app.get("/usuarios/:id", obtenerPorId)
app.post("/usuarios", crearUsuario)
app.put("/usuarios/:id", actualizarUsuario)


app.listen(process.env.PORT, ()=>{
    console.log(`Servidor conectado al puerto ${process.env.PORT}`)
})

