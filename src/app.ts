import express, { Request, Response } from 'express';
import cors from 'cors';
import apiRoutes from './routes';
import { requestLogger } from './middlewares/logger.middleware';
import { globalErrorHandler } from './middlewares/errorHandler.middleware';

const app = express();

// Primero los middlewares globales. El registro va antes de leer el JSON
// para auditar también las peticiones con cuerpo mal formado.
app.use(cors());
app.use(requestLogger);
app.use(express.json());

// Verificación de que la API está funcionando
app.get('/api/v1/health', (_solicitud: Request, respuesta: Response) => {
  respuesta.status(200).json({
    status: 'success',
    message: 'ControlLabs API operando correctamente',
    timestamp: new Date().toISOString()
  });
});

// Rutas de la API: /api/v1 + el prefijo de cada recurso (ver src/routes/index.ts)
app.use('/api/v1', apiRoutes);

// Ruta no encontrada: va después de todas las rutas
app.use((_solicitud: Request, respuesta: Response) => {
  respuesta.status(404).json({ success: false, error: 'Ruta no encontrada.' });
});

// El manejador de errores siempre va al final
app.use(globalErrorHandler);

export default app;