import Image from "next/image"
import { FiCheckCircle } from "react-icons/fi"

export const WhyBuy = () => {
  return (
    <section
      id='whyBuy'
      className=' w-full overflow-hidden px-[20px] md:px-[36px]'
    >
      <div className='w-full max-w-[1400px] mx-auto gap-[64px] md:gap-[100px] py-[36px] lg:min-h-[60vh] flex flex-col lg:flex-row items-center lg:justify-center'>
        <figure
          className='
         w-full max-w-[500px]  
        '
        >
          <Image
            src='/assets/openGraph.webp'
            alt='Imagem Sobre'
            width={500}
            height={500}
          />
        </figure>
        <article className='flex-1'>
          <strong className='block max-w-[230px] mx-0 md:mx-auto lg:mx-0 text-center bg-red-500 px-4 py-2 text-white text-md font-normal rounded-[24px] uppercase'>
            Oque você precisa
          </strong>
          <h3 className='text-left md:text-center lg:text-left text-2xl  text-white font-extrabold mt-[16px]'>
            Por Que Este Ebook é Essencial
          </h3>
          <p className='text-left mb-[36px] md:text-center lg:text-left mt-4 text-gray-200 font-normal text-md whitespace-pre-line max-w-none md:max-w-[90%] lg:max-w-none mx-0 md:mx-auto lg:mx-0'>
            Todos os dias, mulheres são vítimas de relacionamentos abusivos que
            terminam em tragédia. Muitos desses casos poderiam ter sido evitados
            se os sinais tivessem sido identificados a tempo. O problema é que
            os agressores sabem como manipular, esconder sua verdadeira face e
            prender suas vítimas em um ciclo de medo e dependência.
          </p>
          <div className='flex flex-col gap-4 items-center lg:items-start'>
            {Array(4)
              .fill(null)
              .map((_, index) => {
                return (
                  <article key={index} className=' flex items-center gap-8'>
                    <span className='text-red-500 font-extrabold text-3xl'>
                      <FiCheckCircle />
                    </span>
                    <div>
                      <strong className='text-left text-gray-300 font-semibold text-lg whitespace-pre-line'>
                        Conhecimento que salva vidas
                      </strong>
                      <p className='text-left mt-2 text-gray-300 font-normal text-md whitespace-pre-line'>
                        Informações vitais que podem previr tragédias
                      </p>
                    </div>
                  </article>
                )
              })}
          </div>
        </article>
      </div>
    </section>
  )
}
