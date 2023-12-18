const usuarios = [];

const obtenerInicio = (request, response)=>{
    response.json({
        mensaje:"inicio"
    })
}

const obtenerTodosLosUsuarios = (request, response)=>{
    response.send(usuarios)
    
}

const obtenerPorId = (request, response)=>{
    const {id} = request.params;
    response.json({
        mensaje: "ontener usuario por su id",
        data: usuarios[Number(id)],
        
    });
}

const crearUsuario = (request, response)=>{
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
}


const actualizarUsuario = (request, response)=>{
    const {id} = request.params;
    const {nombre, apellido, edad, correo} = request.body;

        usuarios[Number(id)]={
        nombre, 
        apellido,
        edad,
        correo
        }
    response.json({
        mensaje: "Usuario actualizado",
        data: usuarios[Number(id)]
    });
}

module.exports = {
    obtenerInicio,
    obtenerTodosLosUsuarios,
    obtenerPorId,
    crearUsuario,
    actualizarUsuario
}