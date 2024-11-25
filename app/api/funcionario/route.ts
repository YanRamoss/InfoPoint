import prisma from "@/app/lib/prisma"

export async function GET(req: Request) {

    const data = await prisma.funcionario.findMany({
        select:{
            nome: true,
            cargo: true,
            area: true,
            imagem: true
        }
    }) 
    if(!data) {
        Response.json({message: 'Users not found', status: 404});
    }
    return Response.json({message: 'Users found', status: 200, data: data})
} 