import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1]; 

  if (!token) {
    res.status(401).json({ message: 'Token no proporcionado' });
    return;
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET as string);
    next(); 
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      res.status(403).json({ message: 'El token ha expirado' });
      return;
    }
    res.status(403).json({ message: 'Token inválido' });
    return;
  }
};

export default auth;