import { Request, Response, NextFunction } from 'express';

export const validateIncidentPayload = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const body: unknown = req.body;
    if (typeof body !== 'object' || body === null || Array.isArray(body)) {
        res.status(400).json({ success: false, error: 'Cuerpo inválido.' });
        return;
    }

    const incident = body as Record<string, unknown>;
    if (typeof incident.aula !== 'string' || incident.aula.trim() === '' ||
            typeof incident.descripcion !== 'string' || incident.descripcion.trim() === '' ||
            typeof incident.reportadoPor !== 'string' || incident.reportadoPor.trim() === '') {
        res.status(400).json({ success: false, error: 'Faltan datos válidos del incidente.' });
        return;
    }
    next();
};