import prisma from '@prisma/client';
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