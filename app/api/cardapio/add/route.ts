import prisma from '@prisma/client';
export async function GET(req: Request) {
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