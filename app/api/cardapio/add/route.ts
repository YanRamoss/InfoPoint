import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export async function POST(req: Request) {
  const { prato, data } = await req.json();

    try {
      const cardapio = await prisma.cardapio.create({
        data: {
          prato,
          data
        },
      });
      Response.json(cardapio);
    } catch (error) {
      Response.json({ error: 'Falha no registro.' });
    }
}
