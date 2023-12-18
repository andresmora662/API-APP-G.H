const express = require("express");
const {
    obtenerInicio, 
    obtenerTodosLosUsuarios, 
    obtenerPorId, 
    crearUsuario,
    actualizarUsuario} = require("./controladores/usuarios.controlador")
const app = express();
app.use(express.json());


//Rutas
app.get("/", obtenerInicio)


app.get("/usuarios", obtenerTodosLosUsuarios)
app.get("/usuarios/:id", obtenerPorId)
app.post("/usuarios", crearUsuario)
app.put("/usuarios/:id", actualizarUsuario)

const PUERTO = 5001
app.listen(PUERTO, ()=>{
    console.log(`Servidor conectado al puerto ${PUERTO}`)
})

