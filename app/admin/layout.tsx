import Link from "next/link";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="grid grid-flow-col auto-cols-max">
            <div className="flex flex-col gap-[15px] w-[110px] items-center">
                <Link href="/admin/banners" className="border-b-[1px] border-solid border-iblue w-full">Banners</Link>
                <Link href="/admin/funcionarios" className="border-b-[1px] border-solid border-iblue w-full">Funcionários</Link>
                {/* <Link href="/admin/equipe" className="border-b-[1px] border-solid border-iblue w-full">Equipe</Link> */}
                <Link href="/admin/cardapio" className="border-b-[1px] border-solid border-iblue w-full">Cardápio</Link>
            </div>
            <div className="container mx-auto pb-[100px]">
              {children}
            </div>
      </div>  
    );
}