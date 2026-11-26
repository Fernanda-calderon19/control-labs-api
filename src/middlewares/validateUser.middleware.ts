import { Request, Response, NextFunction } from 'express';

export const validateUserPayload = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const body: unknown = req.body;
    if (typeof body !== 'object' || body === null || Array.isArray(body)) {
        res.status(400).json({ success: false, error: 'Cuerpo inválido.' });
        return;
    }

    const user = body as Record<string, unknown>;
    if (typeof user.nombre !== 'string' || user.nombre.trim() === '' ||
            typeof user.email !== 'string' || user.email.trim() === '' ||
            typeof user.rol !== 'string' || user.rol.trim() === '') {
        res.status(400).json({ success: false, error: 'Faltan datos válidos del usuario.' });
        return;
    }
    next();
};