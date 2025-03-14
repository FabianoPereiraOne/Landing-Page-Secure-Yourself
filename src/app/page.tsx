import { About } from "@/components/About"
import { Benefits } from "@/components/Benefits"
import { Hero } from "@/components/Hero"
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
    </>
  )
}
