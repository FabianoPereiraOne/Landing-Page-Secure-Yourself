import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { faqItems } from "@/schemas/base/faq"
import { motion } from "framer-motion"
import { FiInfo } from "react-icons/fi"
import { AnimateOnScroll } from "../AnimateOnScroll"

export const Faq = () => {
  return (
    <section
      id='faq'
      className=' w-full p-[20px] md:p-[36px] relative 
        before:blur-[200px]  before:absolute before:right-0 before:top-0 before:w-[150px] before:h-[150px] lg:before:w-[400px] lg:before:h-[400px] z-10 before:bg-red-500 before:rounded-full before:-z-10 lg:before:blur-[500px]'
    >
      <div className='w-full max-w-[1400px] mx-auto gap-[64px] md:gap-[64px] py-[36px] lg:p-[64px] lg:min-h-[40vh] flex flex-col items-center'>
        <AnimateOnScroll
          MotionComponent={motion.article}
          direction='up'
          delay={0.1}
          className='w-full md:max-w-[500px] z-10'
        >
          <strong className='block max-w-[250px] mx-auto text-center bg-red-500 px-4 py-2 text-white text-md font-normal rounded-[24px] uppercase'>
            Sua change
          </strong>
          <h3 className='text-center text-2xl  text-white font-extrabold mt-[16px]'>
            Perguntas Frequentes
          </h3>
          <p className='text-center mt-4 text-gray-200 font-normal text-md whitespace-pre-line'>
            O conhecimento contido neste ebook pode fazer a difereça entre a
            vida e a morte. Não deixe para depois
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll
          MotionComponent={motion.article}
          direction='up'
          className='w-full'
        >
          <div className='max-w-3xl mx-auto space-y-2'>
            <Accordion type='single' collapsible className='space-y-4'>
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className='border border-zinc-800 bg-zinc-900/50 rounded-lg overflow-hidden'
                >
                  <AccordionTrigger className='flex gap-3 px-4 py-4 hover:no-underline hover:bg-zinc-900/80 transition-colors'>
                    <div className='flex gap-4 items-center'>
                      <FiInfo className='w-6 h-6 text-red-500 flex-shrink-0' />
                      <p className='text-white text-left'>{item?.question}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className='p-4 text-zinc-400 text-md font-normal transition-[height,opacity] duration-300 ease-in-out'>
                    {item?.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
