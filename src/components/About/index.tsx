import Image from "next/image"
import { LinkBuy } from "../LinkBuy"

export const About = () => {
  return (
    <section
      id='about'
      className=' w-full overflow-hidden p-[20px] md:p-[36px]'
    >
      <div className='w-full max-w-[1400px] mx-auto gap-[64px] md:gap-[100px] py-[36px] md:py-[100px] lg:min-h-[80vh] flex flex-col lg:flex-row items-center lg:justify-center'>
        <article className='flex-1'>
          <strong className='block max-w-[280px] mx-0 md:mx-auto lg:mx-0 text-center bg-red-500 px-4 py-2 text-white text-md font-normal rounded-[24px] uppercase'>
            Acorde Para a Realidade
          </strong>
          <h3 className='text-left md:text-center lg:text-left text-2xl  text-white font-extrabold mt-[16px]'>
            Sobre o E-book
          </h3>
          <p className='text-left mb-[36px] md:text-center lg:text-left mt-4 text-gray-200 font-normal text-md whitespace-pre-line'>
            Todos os dias, mulheres são vítimas de relacionamentos abusivos que
            terminam em tragédia. Muitos desses casos poderiam ter sido evitados
            se os sinais tivessem sido identificados a tempo. O problema é que
            os agressores sabem como manipular, esconder sua verdadeira face e
            prender suas vítimas em um ciclo de medo e dependência.{"\n\n"} Este
            e-book foi criado para abrir seus olhos e te ensinar a reconhecer os
            padrões perigosos antes que seja tarde. Através de uma abordagem
            direta e sem rodeios, você aprenderá a identificar sinais sutis de
            comportamento abusivo, os perfis mais perigosos e as estratégias
            para se proteger de relacionamentos tóxicos.{"\n\n"} Aqui, você não
            vai encontrar teorias complexas ou discursos vazios. Você terá
            acesso a informações práticas, baseadas em relatos reais e estudos
            sobre o comportamento.
          </p>
          <LinkBuy classAdt='mx-0 md:mx-auto lg:mx-0' />
        </article>
        <figure
          className='
         w-full max-w-[500px] relative 
         before:hidden md:before:flex
         before:bg-[url(/assets/blood1.webp)] before:rotate-[26deg]
         before:absolute before:right-[-180px] before:bottom-[-120px] before:w-[150px] before:h-[150px] md:before:w-[500px] md:before:h-[700px] z-10 before:-z-1 bg-contain bg-no-repeat bg-center'
        >
          <Image
            src='/assets/openGraph.webp'
            alt='Imagem Sobre'
            width={500}
            height={500}
          />
        </figure>
      </div>
    </section>
  )
}
