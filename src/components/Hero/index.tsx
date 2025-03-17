import Image from "next/image"
import Link from "next/link"
import { FiArrowDown } from "react-icons/fi"
import { LinkBuy } from "../LinkBuy"
import { Time } from "./parts/Time"

export const Hero = () => {
  return (
    <main className='w-full overflow-hidden p-[20px] md:p-[36px] before:blur-[200px] relative  before:absolute before:right-0 before:top-0 before:w-[150px] before:h-[150px] lg:before:w-[400px] lg:before:h-[400px] before:bg-red-500 before:rounded-full before:-z-10 lg:before:blur-[400px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[8px] after:bg-gradient-to-r after:from-yellow-500 after:to-yellow-600'>
      <span className='absolute left-[-16px] top-[100px] w-[550px] h-[36px] bg-yellow-500 rotate-[-15deg] origin-top-left text-black text-xs font-bold uppercase flex items-center md:justify-center bg-gradient-to-r from-yellow-500 to-yellow-600'>
        <span className='ml-[36px] md:ml-[-64px]'>
          Atenção: Está Oferta Expira Em Poucas Horas!
        </span>
      </span>
      <div className='w-full max-w-[1400px] mx-auto pt-[150px] pb-[48px] md:py-[150px] gap-[64px] md:gap-[100px] lg:min-h-[70vh] flex flex-col lg:flex-row items-center lg:justify-center'>
        <div className='w-full md:max-w-[500px]'>
          <article className='w-full flex-col'>
            <h1 className='text-left md:text-center lg:text-left text-2xl text-red-500 font-extrabold md:text-3xl uppercase'>
              Não seja a próxima vítima:
            </h1>
            <h2 className='text-left md:text-center lg:text-left text-2xl text-white font-extrabold md:text-3xl uppercase mt-2'>
              Aprenda a reconhecer os sinais antes que seja tarde!
            </h2>
            <p className='text-left md:text-center lg:text-left mt-4 text-gray-200 font-normal text-md'>
              Os sinais estão lá, mas muitas mulheres não os percebem até que
              seja tarde demais. Iremos te ensinar a identificar os perigos
              escondidos e a se proteger antes que o pior aconteça.
            </p>
            <div className='w-full flex items-center gap-[16px] mt-6 flex-wrap justify-start md:justify-center lg:justify-start'>
              <LinkBuy />
              <Link
                href='#about'
                className='relative inline-flex items-center justify-center  overflow-hidden  transition duration-300 ease-out px-6 py-3 text-white text-md font-semibold uppercase rounded-[6px] border border-zinc-800 shadow-md group'
              >
                <span className='absolute inset-0 flex items-center justify-center w-full h-full text-red-500 duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease'>
                  <FiArrowDown className='w-6 h-6' />
                </span>
                <span className='absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease'>
                  Saiba Mais
                </span>
                <span className='relative invisible'>Saiba Mais</span>
              </Link>
            </div>
          </article>
          <div className='mt-16 flex flex-col gap-4 items-start md:items-center lg:items-start'>
            <Time />
          </div>
        </div>

        <figure className='grid relative h-full w-full max-w-[500px] before:hidden lg:before:flex before:absolute before:right-[-16px] xl:before:right-[-36px] before:top-[36px] before:w-[500px] before:rounded-[6px] before:-z-1 before:h-[400px] before:bg-[rgba(29,28,28,0.3)]'>
          <Image
            src='/assets/cover.webp'
            alt='Imagem da mulher 1'
            width={500}
            height={500}
            className='w-full h-full object-cover rounded-[6px]'
          />
        </figure>
      </div>
    </main>
  )
}
