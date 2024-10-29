import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export async function GET(req: Request) {
  const { prato, datap } = await req.json();

    try {
      const cardapio = await prisma.cardapio.create({
        data: {
          prato,
          datap
        },
      });
      Response.json(cardapio);
    } catch (error) {
      Response.json({ error: 'Falha no registro.' });
    }
}
