import { listWhy } from "@/schemas/base/cards"
import { motion } from "framer-motion"
import Image from "next/image"
import { FiCheckCircle } from "react-icons/fi"
import { AnimateOnScroll } from "../AnimateOnScroll"

export const WhyBuy = () => {
  return (
    <section
      id='whyBuy'
      className=' w-full overflow-hidden px-[20px] md:px-[36px]'
    >
      <div className='w-full max-w-[1400px] mx-auto gap-[64px] md:gap-[100px] py-[36px] lg:min-h-[60vh] flex flex-col lg:flex-row items-center lg:justify-center'>
        <AnimateOnScroll
          MotionComponent={motion.figure}
          direction='left'
          delay={0.1}
          className='
         w-full max-w-[500px]  
        '
        >
          <Image
            className='rounded-[6px] lg:h-[700px] object-cover'
            src='/assets/why.webp'
            alt='Imagem Sobre'
            width={500}
            height={500}
          />
        </AnimateOnScroll>
        <AnimateOnScroll
          MotionComponent={motion.article}
          direction='right'
          delay={0.1}
          className='flex-1'
        >
          <strong className='block max-w-[230px] mx-0 md:mx-auto lg:mx-0 text-center bg-red-500 px-4 py-2 text-white text-md font-normal rounded-[24px] uppercase'>
            O que você precisa
          </strong>
          <h3 className='text-left md:text-center lg:text-left text-2xl  text-white font-extrabold mt-[16px]'>
            Por Que Este Ebook é Essencial?
          </h3>
          <p className='text-left mb-[36px] md:text-center lg:text-left mt-4 text-gray-200 font-normal text-md whitespace-pre-line max-w-none md:max-w-[90%] lg:max-w-none mx-0 md:mx-auto lg:mx-0'>
            Vivemos em uma era onde os relacionamentos desempenham um papel
            fundamental no nosso bem-estar emocional, mental e até mesmo físico.
            No entanto, muitas pessoas acabam se envolvendo em relações tóxicas
            sem perceber os sinais de alerta, o que pode gerar sofrimento, baixa
            autoestima e dificuldades emocionais prolongadas. O eBook "Não seja
            a próxima vítima" mostra como sobreviver e como evitar
            relacionamentos tóxicos fornecendo conhecimento e ferramentas
            práticas para identificar padrões destrutivos e desenvolver relações
            saudáveis e equilibradas.
          </p>
          <div className='flex flex-col gap-4 items-center lg:items-start'>
            {listWhy.map((card, index) => {
              return (
                <article key={index} className=' flex items-center gap-8'>
                  <span className='text-red-500 font-extrabold text-3xl'>
                    <FiCheckCircle />
                  </span>
                  <div>
                    <strong className='text-left text-gray-300 font-semibold text-lg whitespace-pre-line'>
                      {card?.title ?? ""}
                    </strong>
                    <p className='text-left mt-2 text-gray-300 font-normal text-md whitespace-pre-line'>
                      {card?.subtitle ?? ""}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
