import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generarToken = () => {
  return jwt.sign(
    {},
    process.env.JWT_SECRET as string,
    { expiresIn: '24h' } // Configura el tiempo de expiración del token (0 significa que no expira)
  );
};

export default generarToken;