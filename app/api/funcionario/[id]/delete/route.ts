import prisma from "@/app/lib/prisma"

export async function DELETE(req: Request) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    const data = 'Delete Route'

    // const data = await prisma.funcionario.delete({
    //     where: {
    //     }
    // })
    return Response.json({message: 'Users found', status: 200, data: data})
} 