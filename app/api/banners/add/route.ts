import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
  const { nome, imagem } = await req.json();
      const banners = await prisma.banners.create({
        data: {
          nome,
          imagem,
        },
      });
   
    return Response.json({message: banner, status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Failed to add banner' }, { status: 500 });
  }
}
 