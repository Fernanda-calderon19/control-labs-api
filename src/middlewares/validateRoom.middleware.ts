import { Request, Response, NextFunction } from 'express';

export const validateRoomPayload = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const body: unknown = req.body;
    if (typeof body !== 'object' || body === null || Array.isArray(body)) {
        res.status(400).json({ success: false, error: 'Cuerpo inválido.' });
        return;
    }

    const room = body as Record<string, unknown>;
    if (typeof room.nombre !== 'string' || room.nombre.trim() === '' ||
            typeof room.capacidad !== 'number' || !Number.isInteger(room.capacidad) || room.capacidad <= 0) {
        res.status(400).json({ success: false, error: 'Faltan datos válidos del ambiente.' });
        return;
    }
    next();
};