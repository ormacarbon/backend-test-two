import { firstSeed } from "@/utils/first-seed";
import { NextFunction } from "express";

export const mongoSeed = async (next: NextFunction): Promise<void> => {
  await firstSeed();
  next();
}