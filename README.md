API– Gestión de Librería

Backend desarrollado con Node.js, Express y base de datos MongoDB.

Esta API permite gestionar un inventario de libros mediante operaciones CRUD.
El sistema permite registrar, consultar, actualizar y eliminar libros, ideal para el backend de una librería física o virtual.

Tecnologías utilizadas

Node.js	Entorno de ejecución del servidor
Express.js	Framework para implementar el API REST
MongoDB	Base de datos NoSQL
Mongoose	Modelado de datos con esquemas
Instalación y ejecución del backend

Clona el repositorio

git clone <URL-del-repositorio>
cd Backend_Mera6toA


Instala dependencias

npm install

Crea el archivo .env en la raíz
PORT=3000
MONGO_URI=mongodb://localhost:27017/libreria_db


Inicia el servidor

npm run dev
ó
node server.js

Rutas de la API

Base URL recomendada:

/api/libros

Método	Ruta	Descripción
GET	/	Obtiene todos los libros
GET	/:id	Obtiene un libro por ID
POST	/	Crea un nuevo libro
PUT	/:id	Actualiza un libro existente
DELETE	/:id	Elimina un libro por ID
Modelo de Libro (MongoDB)
{
  titulo: String,
  autor: String,
  anioPublicacion: Number,
  genero: String,
  imagen: String,
  disponible: Boolean
}
Pruebas recomendadas (Postman / Thunder Client)
Acción	URL
Obtener todos los libros	GET http://localhost:3000/api/libros

Buscar por ID	GET http://localhost:3000/api/libros/:id

Crear un libro	POST http://localhost:3000/api/libros

Actualizar un libro	PUT http://localhost:3000/api/libros/:id

Eliminar libro	DELETE http://localhost:3000/api/libros/:id
