import { About } from "@/components/About"
import { Benefits } from "@/components/Benefits"
import { Faq } from "@/components/Faq"
import { Guarantee } from "@/components/Guarantee"
import { Hero } from "@/components/Hero"
import { RangeHorizontal } from "@/components/RangeHorizontal"
import { SectionCta } from "@/components/SectionCta"
import { Testimonials } from "@/components/Testimonials"
import { WhyBuy } from "@/components/WhyBuy"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Benefits />
      <WhyBuy />
      <Testimonials />
      <Guarantee />
      <RangeHorizontal />
      <SectionCta />
      <Faq />
    </>
  )
}
