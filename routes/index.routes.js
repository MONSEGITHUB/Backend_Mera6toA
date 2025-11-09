import ejemploRouter from './ejemplo.routes.js';
import libroRouter from './libreria.routes.js'; 
import { Router } from 'express';

const apiRouter = Router(); 
apiRouter.use('/ejemplo', ejemploRouter); 
apiRouter.use('/libros', libroRouter); 

export default apiRouter; 

