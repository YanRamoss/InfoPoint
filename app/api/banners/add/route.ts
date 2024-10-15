import prisma from '@prisma/client';
export async function GET(req: Request) {
  const { nome, imagem } = await req.json();

    try {
      const banners = await prisma.banners.create({
        data: {
          nome,
          imagem,
        },
      });
      Response.json(banners);
    } catch (error) {
      Response.json({ error: 'Falha no registro.' });
    }
}