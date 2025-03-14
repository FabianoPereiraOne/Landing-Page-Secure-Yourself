export const Benefits = () => {
  return (
    <section
      id='benefits'
      className=' w-full overflow-hidden p-[20px] md:p-[36px]'
    >
      <div className='w-full max-w-[1400px] mx-auto gap-[64px] md:gap-[100px] py-[36px] md:py-[64px] lg:min-h-[50vh] flex flex-col items-center'>
        <article className='w-full md:max-w-[500px] z-10'>
          <strong className='block max-w-[250px] mx-auto text-center bg-red-500 px-4 py-2 text-white text-md font-normal rounded-[24px] uppercase'>
            Entenda os Fatores
          </strong>
          <h3 className='text-center text-2xl  text-white font-extrabold mt-[16px]'>
            O que você vai encontrar
          </h3>
          <p className='text-center mt-4 text-gray-200 font-normal text-md whitespace-pre-line'>
            Um guia completo que aborda todos os aspectos do feminicídio
          </p>
        </article>
        <div className='w-full z-10 grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10 before:blur-[200px] relative  before:absolute before:left-[50%] before:translate-x-[-50%] before:top-0 before:w-[150px] before:h-[150px] lg:before:w-[250px] lg:before:h-[250px] before:-z-10 before:bg-red-500 before:rounded-full lg:before:blur-[250px] '>
          {Array(6)
            .fill(null)
            .map((_, index) => {
              const count = index + 1
              return (
                <article className='hover:scale-103 transition duration-300 p-6 border-l-4 border-l-red-500 rounded-[6px] bg-[#101010] flex items-center gap-8'>
                  <span className='text-red-500 font-extrabold text-3xl'>
                    0{count}
                  </span>
                  <div>
                    <strong className='text-left text-white font-semibold text-lg whitespace-pre-line'>
                      A Anatomia do Feminicídio
                    </strong>
                    <p className='text-left mt-2 text-gray-300 font-normal text-md whitespace-pre-line'>
                      Entenda os padrões e ciclos de violência que culminam em
                      casos fatais
                    </p>
                  </div>
                </article>
              )
            })}
        </div>
      </div>
    </section>
  )
}
