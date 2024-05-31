import { PrismaClient } from "@prisma/client";

export async function POST(request: Request) {
    const prisma = new PrismaClient();

    const funcionarios = await prisma.funcionario.findMany({
        select: {
            nome: true,
            cargo: true,
            area: true
        }
    })
    return Response.json(funcionarios);
}