import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { nome, cargo, area, imagem } = await req.json();

    const funcionario = await prisma.funcionario.create({
      data: {
        nome,
        cargo,
        area,
        imagem,
      },
    });

    return Response.json({message: funcionario, status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Failed to add funcionario' }, { status: 500 });
  }
}