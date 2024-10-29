import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
  const { prato, data } = await req.json();
    const cardapio = await prisma.cardapio.({
        data: {
          prato,
          data
        },
      });
   
    return Response.json({message: cardapio, status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Failed to add cardapio' }, { status: 500 });
  }
}
