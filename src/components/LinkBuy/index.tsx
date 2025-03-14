import Link from "next/link"
import { FiArrowRight } from "react-icons/fi"

export const LinkBuy = ({ classAdt }: { classAdt?: string }) => {
  return (
    <Link
      href='/'
      className={`${
        classAdt ?? ""
      } max-w-[220px] bg-red-500 px-6 py-3 text-white text-md font-semibold uppercase rounded-[6px] flex items-center justify-center gap-2 hover:bg-red-600 transition-all ease-in`}
    >
      Comprar Agora
      <FiArrowRight />
    </Link>
  )
}
