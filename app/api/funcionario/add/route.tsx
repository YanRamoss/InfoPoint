import { PrismaClient } from "@prisma/client/extension"

export async function GET(req: Request) {
    const prisma = new PrismaClient();
    const data = await prisma.funcionario.findMany({
        select:{
            nome: true,
            cargo: true,
            area: true
        }
    })
    return Response.json({message: 'Users found', status: 200, data: data})
} 