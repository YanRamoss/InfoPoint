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
   
    return Response.json({message: funcionario, status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Failed to add funcionario' }, { status: 500 });
  }
}
