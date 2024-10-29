import prisma from "@/app/lib/prisma"

export async function GET(req: Request) {

    const cardapio = await prisma.cardapio.deleteMany();
    if(!cardapio) {
        Response.json({message: 'Cardapio not found', status: 404});
    }
    return Response.json({message: cardapio, status: 200, data: cardapio})
} 