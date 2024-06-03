import prisma from "@/app/lib/prisma"

export async function GET() {

    const data = await prisma.funcionario.findMany({
        select:{
            nome: true,
            cargo: true,
            area: true
        }
    })
    return Response.json({message: 'Users found', status: 200, data: data})
} 