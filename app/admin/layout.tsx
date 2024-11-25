import Link from "next/link";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex flex-row max-w-[100vw]">
            <div className="flex flex-col gap-[15px] w-[110px] items-center">
                <Link href="/admin/banners" className="border-b-[1px] border-solid border-iblue w-full">Banners</Link>
                <Link href="/admin/docentes" className="border-b-[1px] border-solid border-iblue w-full">Docentes</Link>
                {/* <Link href="/admin/equipe" className="border-b-[1px] border-solid border-iblue w-full">Equipe</Link> */}
                <Link href="/admin/cardapio" className="border-b-[1px] border-solid border-iblue w-full">Cardápio</Link>
            </div>
            <div className="container mx-auto min-h-[400px] pb-[100px]">
              {children}
            </div>
      </div>  
    );
}