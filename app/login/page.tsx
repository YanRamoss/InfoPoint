
import Link from 'next/link'
    
export default function Login() {
    return(
        <>
        <h1 className="text-center font-medium my-[15px]">Acesse sua conta</h1>
        <form className="flex flex-col mx-auto w-[300px]">
            <label htmlFor="usuario">Usuário</label>
            <input type="text" name="usuario" id="" placeholder="Usuário" className="outline outline-1 py-[5px] px-[5px] outline-gray rounded-[1px] mb-[15px]" />

            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" placeholder="Senha" className="outline outline-1 py-[5px] px-[5px] outline-gray rounded-[1px] mb-[15px]"/>

            <Link href="/login"><input type="submit" value="Login" className="bg-iblue cursor-pointer w-[100px] rounded-[3px] text-white text-sm mx-auto" /></Link>
        </form>
        </>
    )
}
