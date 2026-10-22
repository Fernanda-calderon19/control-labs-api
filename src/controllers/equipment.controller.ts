import { Request, Response } from 'express';

export class EquipmentController {
  public static createEquipment = (req: Request, res: Response): void => {
    // TODO: llamar al servicio con req.body (incluye el ambiente al que se vincula el equipo) y responder 201.
    res.status(501).json({
      success: false,
      message: 'El registro de equipos todavía no está implementado.'
    });
  };

  public static getEquipment = (req: Request, res: Response): void => {
    // TODO: leer el filtro opcional req.query.roomId, llamar al servicio y responder con los equipos.
    res.status(501).json({
      success: false,
      message: 'El listado de equipos todavía no está implementado.'
    });
  };

  public static updateEquipment = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: pasar id y los campos parciales de req.body (estado técnico o ubicación) al servicio.
    res.status(501).json({
      success: false,
      message: `La actualización parcial del equipo ${id} todavía no está implementada.`
    });
  };
}
