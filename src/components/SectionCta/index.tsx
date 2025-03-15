import { LinkBuy } from "../LinkBuy"

export const SectionCta = () => {
  return (
    <section
      id='guarantee'
      className=' w-full overflow-hidden p-[20px] md:p-[36px] relative 
        before:hidden lg:before:flex
        before:bg-[url(/assets/blood3.webp)]
        before:absolute before:left-[-80px] before:top-[-140px] before:w-[150px] before:h-[150px] md:before:w-[500px] md:before:h-[500px] z-10 before:-z-1 bg-contain bg-no-repeat bg-center'
    >
      <div className='w-full max-w-[1400px] mx-auto gap-[64px]  py-[36px] flex flex-col lg:flex-row items-center lg:justify-center'>
        <article className='flex-1'>
          <h3 className='text-center uppercase text-2xl  text-white font-extrabold'>
            Não Espere para Agir
          </h3>
          <p className='text-center max-w-[550px] mx-auto mb-[36px] mt-4 text-gray-200 font-normal text-md whitespace-pre-line'>
            O conhecimento contido neste ebook pode fazer a difereça entre a
            vida e a morte. Não deixe para depois
          </p>
          <article className='w-full mx-auto max-w-[450px]  p-6 border border-zinc-800 rounded-[6px] bg-[#101010] flex gap-[36px] items-center md:justify-center flex-col md:flex-row'>
            <div className='flex flex-col gap-2'>
              <p className='text-gray-500 text-md line-through text-center md:text-left'>
                R$ 97,00
              </p>
              <strong className='text-white text-2xl font-extrabold text-center md:text-left'>
                R$ 47,00
              </strong>
            </div>
            <LinkBuy classAdt='mx-0 md:mx-auto lg:mx-0' />
          </article>
        </article>
      </div>
    </section>
  )
}
