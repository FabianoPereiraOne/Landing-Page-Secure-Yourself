import { motion } from "framer-motion"
import Image from "next/image"
import { AnimateOnScroll } from "../AnimateOnScroll"
import { LinkBuy } from "../LinkBuy"

export const Guarantee = () => {
  return (
    <section
      id='guarantee'
      className=' w-full overflow-hidden p-[20px] md:p-[36px]'
    >
      <div className='w-full max-w-[1400px] mx-auto gap-[64px]  py-[36px] lg:min-h-[80vh] flex flex-col lg:flex-row items-center lg:justify-center'>
        <AnimateOnScroll
          MotionComponent={motion.article}
          direction='left'
          delay={0.1}
          className='flex-1'
        >
          <strong className='block max-w-[280px] mx-0 md:mx-auto lg:mx-0 text-center bg-red-500 px-4 py-2 text-white text-md font-normal rounded-[24px] uppercase'>
            Seu direito garantido
          </strong>
          <h3 className='text-left md:text-center lg:text-left text-2xl  text-white font-extrabold mt-[16px]'>
            Satisfação Garantida
          </h3>
          <p className='text-left mb-[36px] md:text-center lg:text-left mt-4 text-gray-200 font-normal text-md whitespace-pre-line'>
            🔥 Transforme sua vida amorosa: Evite Relacionamentos Tóxicos com
            Segurança! 🔥{"\n\n"} Você já se viu preso(a) em um relacionamento
            desgastante, que drena sua energia e autoestima? Chega de sofrer!
            Nosso eBook foi criado para te ajudar a reconhecer os sinais de um
            relacionamento tóxico antes que seja tarde demais.{"\n\n"} ✅
            Aprenda a identificar comportamentos abusivos antes que eles afetem
            sua saúde emocional. {"\n"}✅ Descubra técnicas para fortalecer sua
            autoestima e impor limites saudáveis. {"\n"}✅ Saia de ciclos
            destrutivos com estratégias comprovadas por especialistas.{"\n"}✅
            Construa relacionamentos mais leves e saudáveis, baseados no
            respeito e na reciprocidade. {"\n\n"}💡 Garantia de Satisfação ou
            Seu Dinheiro de Volta! Temos tanta certeza de que este eBook será um
            divisor de águas na sua vida que oferecemos garantia total. Se em
            até 7 dias você não sentir que está mais preparado(a) para evitar
            relações tóxicas, devolvemos 100% do seu dinheiro. Sem burocracia,
            sem risco para você! {"\n\n"}🚀 Dê o primeiro passo para um futuro
            livre de relações tóxicas! Baixe agora e comece sua jornada de
            transformação.{"\n\n"}
            ASMR Auto hipnsose
          </p>
          <LinkBuy classAdt='mx-0 md:mx-auto lg:mx-0' />
        </AnimateOnScroll>
        <AnimateOnScroll
          MotionComponent={motion.figure}
          direction='right'
          delay={0.1}
          className='
         w-full max-w-[500px]'
        >
          <Image
            src='/assets/quality.webp'
            alt='Imagem Sobre'
            width={500}
            height={500}
          />
        </AnimateOnScroll>
      </div>
    </section>
  )
}
