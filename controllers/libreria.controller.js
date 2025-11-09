
import Libro from '../models/libreria.model.js'; 
import mongoose from 'mongoose';

// [GET] Obtener todos los libros
export const obtenerTodosLosLibros = async (req, res) => {
    console.log('Obtiene todos los libros');
    try {
        const libros = await Libro.find({}, { __v: 0 }); 
        
        if (libros.length === 0) {
            return res.status(404).json({
                msg: 'No se encontraron libros'
            });
        }
        return res.status(200).json({
            libros
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener los libros',
            error: error.message
        });
    }
};

export const obtenerLibroPorId = async (req, res) => {
    console.log('Libro por ID');
    const id = req.params.id;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID de libro no válido'
            });
        }

        const libro = await Libro.findById(id);
        
        if (!libro) {
            return res.status(404).json({
                msg: 'Libro no encontrado'
            });
        }
        return res.status(200).json({
            libro
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener el libro por ID',
            error: error.message
        });
    }
};
export const crearNuevoLibro = async (req, res) => {
    console.log('POST LIBRO');
    const body = req.body;
    const libro = new Libro(body); 
    
    try {
        const validationError = libro.validateSync();
        
        if (validationError) {
            const errorMessages = Object.values(validationError.errors).map(err => err.message);
            return res.status(400).json({
                errors: errorMessages
            });
        }
        
        await libro.save(); 
        return res.status(201).json({
            msg: 'Libro creado con éxito',
            libro
        });

    } catch (error) {
        return res.status(500).json({
            msg: 'Error al guardar el libro',
            error: error.message
        });
    }
};

export const actualizarLibro = async (req, res) => {
    const id = req.params.id;
    const body = req.body; 
    
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID de libro no válido'
            });
        }
        
        const libroActualizado = await Libro.findByIdAndUpdate(id, body, { new: true, runValidators: true });
        
        if (!libroActualizado) {
            return res.status(404).json({
                msg: 'Libro no encontrado para actualizar'
            });
        }
        return res.status(200).json({
            msg: 'Libro actualizado con éxito',
            libro: libroActualizado
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al actualizar el libro',
            error: error.message
        });
    }
};
export const eliminarLibro = async (req, res) => {
    console.log('DELETE LIBRO');
    const id = req.params.id;
    
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID de libro no válido'
            });
        }
        
        const libroEliminado = await Libro.findByIdAndDelete(id);
        
        if (!libroEliminado) {
            return res.status(404).json({
                msg: 'Libro no encontrado para eliminar'
            });
        }
        
        return res.status(200).json({
            msg: 'Libro eliminado con éxito',
            libro: libroEliminado
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al eliminar el libro',
            error: error.message
        });
    }
};
