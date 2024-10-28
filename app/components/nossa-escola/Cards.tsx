type CardCurso = {
    titulo: string,
    descricao: string,
    imagem:string,
}
export default function CardCurso(props: CardCurso) {
    return(
        <div className="flex sm:flex-row gap-[40px] flex-col items-center">
          <div
      style={{ backgroundImage: `url('${props.imagem}')` }} className={`flex text-outline text-white text-[20px] font-bold w-[80%] h-[130px] bg-cover bg-center items-center justify-center`}>
            <div className='title'>{props.titulo}</div>
          </div>
          <p className='text-[17px] sm:w-[100%] w-[80%]'>
          {props.descricao}  
          </p>
        </div>
    )
}