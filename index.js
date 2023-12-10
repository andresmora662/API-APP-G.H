const express = require("express");
const app = express();
app.use(express.json());
const usuarios = [];

app.get("/", (request, response)=>{
    response.json({
        mensaje:"inicio"
    })
})


app.get("/usuarios", (request, response)=>{
    response.send(usuarios)
    
})

app.get("/usuarios/:id", (request, response)=>{
    const {id} = request.params;
    response.json({
        mensaje: "ontener usuario por su id",
        data: usuarios[Number(id)]
    });
})

app.post("/usuarios", (request, response)=>{
    const {nombre, 
        apellido,
        edad,
        correo} = request.body;
    usuarios.push({nombre, apellido, edad, correo})
    response.json({
        mensaje: "Usuario guardado",
        data: usuarios
    }
    )

   
    
})

const PUERTO = 5001
app.listen(PUERTO, ()=>{
    console.log(`Servidor conectado al puerto ${PUERTO}`)
})
