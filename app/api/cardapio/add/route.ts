import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
  const deletedCardapio = await prisma.cardapio.deleteMany();
    return Response.json({message: cardapio, status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Failed to add cardapio' }, { status: 500 });
  }
}
