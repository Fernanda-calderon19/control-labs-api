import { Request, Response, NextFunction } from 'express';

export const globalErrorHandler = (
  error: unknown,
  _solicitud: Request,
  respuesta: Response,
  siguiente: NextFunction
): void => {
  // Si ya se empezó a responder, se deja que Express termine la respuesta
  if (respuesta.headersSent) {
    siguiente(error);
    return;
  }

  // JSON mal escrito en el cuerpo de la petición
  if (
    typeof error === 'object' &&
    error !== null &&
    'type' in error &&
    error.type === 'entity.parse.failed'
  ) {
    respuesta.status(400).json({
      success: false,
      error: 'El cuerpo JSON está malformado.'
    });
    return;
  }

  // Cualquier otro error: se registra en consola y al cliente solo se le da un mensaje general
  console.error(error);
  respuesta.status(500).json({
    status: 'error',
    message: 'Error interno del servidor en ControlLabs',
    timestamp: new Date().toISOString()
  });
};