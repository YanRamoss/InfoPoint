import prisma from "@/app/lib/prisma"

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    return Response.json({message: 'Portfólio ID = '+id, status: 200})
} 