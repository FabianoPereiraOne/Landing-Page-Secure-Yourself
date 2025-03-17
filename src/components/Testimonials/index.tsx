import { listTestimonials } from "@/schemas/base/cards"
import { motion } from "framer-motion"
import Image from "next/image"
import { MdStar } from "react-icons/md"
import { AnimateOnScroll } from "../AnimateOnScroll"

export const Testimonials = () => {
  return (
    <section
      id='testimonials'
      className=' w-full overflow-hidden p-[20px] md:p-[36px] relative 
        before:hidden lg:before:flex
        before:bg-[url(/assets/blood2.webp)]
        before:absolute before:left-[-80px] before:top-[-140px] before:w-[150px] before:h-[150px] md:before:w-[500px] md:before:h-[500px] z-10 before:-z-1 bg-contain bg-no-repeat bg-center'
    >
      <div className='w-full max-w-[1400px] mx-auto gap-[64px] md:gap-[64px] py-[36px] lg:p-[64px] lg:min-h-[40vh] flex flex-col items-center'>
        <AnimateOnScroll
          MotionComponent={motion.article}
          direction='up'
          delay={0.1}
          className='w-full md:max-w-[500px] z-10'
        >
          <strong className='block max-w-[250px] mx-auto text-center bg-red-500 px-4 py-2 text-white text-md font-normal rounded-[24px] uppercase'>
            Você Não Está Sozinha
          </strong>
          <h3 className='text-center text-2xl  text-white font-extrabold mt-[16px]'>
            ⭐ Depoimentos de quem transformou a vida com nosso eBook! ⭐
          </h3>
          <p className='text-center mt-4 text-gray-200 font-normal text-md whitespace-pre-line'>
            📖 Se essas histórias te inspiraram, está na hora de transformar a
            sua também! 🚀
          </p>
        </AnimateOnScroll>
        <div className='w-full flex flex-wrap gap-[24px] '>
          {listTestimonials.map((card, index) => {
            const directions = {
              0: "left",
              1: "up",
              2: "right"
            } as any
            const count = index + 1

            return (
              <AnimateOnScroll
                MotionComponent={motion.article}
                direction={directions[index] ?? "up"}
                key={index}
                className=' flex-1 min-w-[300px] hover:scale-103 transition duration-300 p-6 border border-zinc-800 rounded-[6px] bg-[#101010] flex flex-col gap-4 justify-between'
              >
                <span className='text-yellow-500 font-extrabold text-3xl flex'>
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                </span>
                <p className='text-left mt-2 text-gray-300 font-normal text-md whitespace-pre-line'>
                  {card?.description ?? ""}
                </p>
                <div className='flex items-center gap-4 mt-2'>
                  <Image
                    src={`/assets/image${count}.webp`}
                    alt='Foto Susana Alves'
                    width={36}
                    height={36}
                    className='w-[36px] h-[36px] object-cover rounded-[50%]'
                  />
                  <strong className='text-white font-medium text-md'>
                    {card?.name ?? ""}
                  </strong>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
