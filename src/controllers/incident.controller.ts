import { Request, Response } from 'express';

export class IncidentController {
  public static createIncident = (req: Request, res: Response): void => {
    // TODO: llamar al servicio con req.body (asociada a un equipo o ambiente) y responder 201.
    res.status(501).json({
      success: false,
      message: 'El reporte de novedades todavía no está implementado.'
    });
  };

  public static getIncidents = (req: Request, res: Response): void => {
    // TODO: llamar al servicio y responder con el historial completo de novedades.
    res.status(501).json({
      success: false,
      message: 'El historial de novedades todavía no está implementado.'
    });
  };

  public static updateIncident = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: pasar id y el nuevo estado de req.body (pendiente, en proceso o resuelto) al servicio.
    res.status(501).json({
      success: false,
      message: `La actualización parcial de la novedad ${id} todavía no está implementada.`
    });
  };
}
