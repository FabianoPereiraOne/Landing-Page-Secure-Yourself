import Image from "next/image"
import { MdStar } from "react-icons/md"

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
        <article className='w-full md:max-w-[500px] z-10'>
          <strong className='block max-w-[250px] mx-auto text-center bg-red-500 px-4 py-2 text-white text-md font-normal rounded-[24px] uppercase'>
            Você Não Está Sozinha
          </strong>
          <h3 className='text-center text-2xl  text-white font-extrabold mt-[16px]'>
            O que dizem sobre o Ebook
          </h3>
          <p className='text-center mt-4 text-gray-200 font-normal text-md whitespace-pre-line'>
            Um guia completo que aborda todos os aspectos do feminicídio
          </p>
        </article>
        <div className='w-full flex flex-wrap gap-[24px]'>
          {Array(3)
            .fill(null)
            .map(() => {
              return (
                <article className=' flex-1 min-w-[300px] hover:scale-103 transition duration-300 p-6 border border-gray-900 rounded-[6px] bg-[#101010] flex flex-col gap-4'>
                  <span className='text-yellow-500 font-extrabold text-3xl flex'>
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                  </span>
                  <p className='text-left mt-2 text-gray-300 font-normal text-md whitespace-pre-line'>
                    Este e-book foi criado para abrir seus olhos e te ensinar a
                    reconhecer os padrões perigosos antes que seja tarde.
                    Através de uma abordagem direta
                  </p>
                  <div className='flex items-center gap-4 mt-2'>
                    <Image
                      src='/assets/user.webp'
                      alt='Foto Susana Alves'
                      width={36}
                      height={36}
                    />
                    <strong className='text-white font-medium text-md'>
                      Susana Alves
                    </strong>
                  </div>
                </article>
              )
            })}
        </div>
      </div>
    </section>
  )
}
