import prisma from "@/app/lib/prisma"
export async function POST(req: Request) {
    const { searchParams } = new URL(req.url)
    const nome = searchParams.get('nome');
    const cargo = searchParams.get('cargo');
    const area = searchParams.get('area');
    const imagem = searchParams.get('imagem');


    const data = await prisma.funcionario.create({
        data: {
            nome: nome,
            cargo: cargo,
            area: area,
            imagem: imagem
        }
    })
    return Response.json({message: 'Users found', status: 200, data: data})
} 