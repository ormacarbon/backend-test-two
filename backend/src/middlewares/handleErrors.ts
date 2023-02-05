import { NextFunction, Request, Response } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleErrors = (err: Error, _req: Request, res: Response, _next: NextFunction) => res.status(500).json({ message: err.message });

export default handleErrors;
