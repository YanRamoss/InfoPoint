import prisma from "@/app/lib/prisma"
import { triggerAsyncId } from "async_hooks";

export async function GET(req: Request) {

    const data = await prisma.cardapio.findMany({
        select:{
            prato: true,
            dia: true,
        }
    }) 
    if(!data) {
        Response.json({message: 'Cardapio not found', status: 404});
    }
    return Response.json({message: 'Cardapio found', status: 200, data: data})
} 