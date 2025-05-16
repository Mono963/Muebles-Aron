import dotenv from 'dotenv';
import { Request, Response } from 'express';
import generarToken from '../services/service.auth.token';

dotenv.config();

const authController = (req: Request, res: Response) => {
  const { clave } = req.body;

  if (clave !== process.env.AUTH_ACCESS_KEY) {
    res.status(401).json({ message: "Clave incorrecta" });
    return 
  }

  const token = generarToken();
  res.status(200).json({ token });
};

export default authController;