import { Request, Response, NextFunction } from 'express';

export const validateEquipmentPayload = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const body: unknown = req.body;
    if (typeof body !== 'object' || body === null || Array.isArray(body)) {
        res.status(400).json({ success: false, error: 'Cuerpo inválido.' });
        return;
    }

    const equipment = body as Record<string, unknown>;
    if (typeof equipment.nombre !== 'string' || equipment.nombre.trim() === '' ||
            typeof equipment.numeroSerie !== 'string' || equipment.numeroSerie.trim() === '' ||
            typeof equipment.aula !== 'string' || equipment.aula.trim() === '') {
        res.status(400).json({ success: false, error: 'Faltan datos válidos del equipo.' });
        return;
    }
    next();
};