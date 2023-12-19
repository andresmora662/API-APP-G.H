La presente aplicacion es un ejercicio que consiste en la creación de una API, 
a continuación describiré paso a paso el codigo para tener el modelo junto con las intrucciones:

A Creación del servidor

1. Importar Express
2. Instanciar Express
3. Middler Ware
4. Rutas
   4.1 Inicio
   4.2 Obtener todos
   4.3 Obtener por id
   4.4 Actualizar
   4.5 Borrar
6. Levantar Servidor

B. Modularizar 
1. Crear carpeta llamada "controladores"
2. Crear archivo "usuarios.controlador.js"
3. Importar - Exportar
3.1 Cortar y pegar el modelo (array que guardará los objetos(datos))
3.2 Crear las constantes y Pasarle como valor las funciones (que están dentro de las rutas)
3.3 Se exportan las funciones con "module.export={}"
3.4 Se importan al archivo index (principal) "const {nombre de la funcion} = require("./nombre del archivo")"
3.5 Finalmente se ponen las funciones dentro de las rutas para que estas sean usadas

C. Agregar variables de entorno

0. Se instala el paquete "dotenv" con npm install dotenv
1. Crear archivo .env
2. Se pone el la Key-Value en el .env (PORT = 5001)
3. Se importa el archivo con "require("dotenv").config()"
3. Se llama al objeto (Key-Value) con "process.env.PORT" donde se usará, ejemplo: process.env.PORT
4. Finalmente se ignora guardandolo en el archivo .gitignore