import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  const token = req.headers.authorization?.split(' ')[1];

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).end();
  } catch (error) {
    res.status(401).json({ message: 'Token inválido' });
  }
}