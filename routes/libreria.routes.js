import { Router } from "express";
import {
    
    obtenerTodosLosLibros,
    obtenerLibroPorId,
    crearNuevoLibro,
    actualizarLibro,
    eliminarLibro
} from '../controllers/libreria.controller.js'; 

const libroRouter = Router(); 

libroRouter.get('/', obtenerTodosLosLibros);
libroRouter.get('/:id', obtenerLibroPorId);
libroRouter.post('/', crearNuevoLibro);
libroRouter.put('/:id', actualizarLibro);
libroRouter.delete('/:id', eliminarLibro);
export default libroRouter;