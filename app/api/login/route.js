// pages/api/login.js

import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Verificar as credenciais do usuário aqui (exemplo: usuário e senha)
  const { username, password } = req.body;

  // Verificar se as credenciais estão corretas (isso é apenas um exemplo mockado)
  if (username === 'walissonwaal' && password === '123456') {
    // Dados do usuário para adicionar ao token (você pode adicionar mais informações se necessário)
    const userData = {
      username: 'usuario',
      role: 'user', // Exemplo de papel/role do usuário
    };

    // Chave secreta para assinar o token (mantenha essa informação segura!)
    const secretKey = '@Walisson943394';

    // Criar o token JWT
    const token = jwt.sign(userData, secretKey, { expiresIn: '1h' });

    // Retornar o token para o cliente
    return res.status(200).json({ token });
  }

  // Se as credenciais estiverem incorretas, retornar uma mensagem de erro
  return res.status(401).json({ message: 'Credenciais inválidas' });
}
