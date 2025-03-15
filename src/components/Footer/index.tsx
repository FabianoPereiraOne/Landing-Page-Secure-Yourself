import Link from "next/link"

export const Footer = () => {
  return (
    <>
      <footer className='w-full bg-[#121212] flex flex-col items-center justify-center p-[20px] md:p-[36px] gap-2'>
        <p className='text-md text-white font-normal text-center'>
          <Link
            className='hover:text-yellow-500 transition duration-300 text-center'
            href='https://fabianopereiradev.com.br/'
            target='_blank'
          >
            &copy; Fabiano Pereira
          </Link>
          {` - `}Todos os direitos reservados.
        </p>
        <span className='text-md text-zinc-300 font-normal text-center'>
          Este site não coleta dados pessoais sensíveis e respeita sua
          privacidade
        </span>
      </footer>
    </>
  )
}
