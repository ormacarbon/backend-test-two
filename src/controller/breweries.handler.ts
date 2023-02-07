import { NextFunction, Request, Response } from 'express';


export const findAllBrewelers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json([])
  } catch (error) {
    next(error);
  }
};

export const store = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json({
      message: "criado"
    })
  } catch (error) {
    next(error);
  }
};
