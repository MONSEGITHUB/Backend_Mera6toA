
import mongoose, { Schema, model } from 'mongoose';

const LibroSchema = new Schema({

    titulo: {
        type: String,
        required: [true, 'El título del libro es obligatorio'],
        trim: true,
        unique: true 
    },

    autor: {
        type: String,
        required: [true, 'El nombre del autor es obligatorio'],
        trim: true
    },

    anioPublicacion: {
        type: Number,
        required: false,
        min: [1000, 'El año debe ser un valor válido'],
        max: [new Date().getFullYear(), 'El año no puede ser futuro']
    },
    generos: {
        type: [String],
        required: false,
        default: [] 
    },
    disponible: {
        type: Boolean,
        default: true
    }
}, {
   
    timestamps: true 
});

const Libro = model('Libro', LibroSchema);

export default Libro;