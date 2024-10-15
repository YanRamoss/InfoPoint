import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export async function POST(req: Request) {
  const { nome, cargo, area, imagem } = await req.json();

    try {
      const funcionario = await prisma.funcionario.create({
        data: {
          nome,
          cargo,
          area,
          imagem,
        },
      });
      Response.json(funcionario);
    } catch (error) {
      Response.json({ error: 'Falha no registro.' });
    }
}