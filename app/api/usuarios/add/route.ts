import { PrismaClient } from '@prisma/client';

import bcrypt from 'bcrypt';
const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { nome, cargo, senha } = await req.json();

    // Hash the password
    const hashedPassword = await bcrypt.hash(senha, 10);

    try {
      // Create user in the database
      const usuarios = await prisma.usuarios.create({
        data: {
          nome,
          cargo,
          senha: hashedPassword,
        },
      });
      Response.json(usuarios);
    } catch (error) {
      Response.json({ error: 'Falha no registro.' });
    }
}