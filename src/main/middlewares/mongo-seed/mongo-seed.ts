import { firstSeed } from "../../../utils/first-seed";
import { Request, Response, NextFunction } from "express";

export const mongoSeed = async (_req: Request, _res: Response, next: NextFunction): Promise<void> => {
  await firstSeed();
  next();
}
