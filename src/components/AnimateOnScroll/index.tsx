"use client"

import { motion, useAnimation, type Variant } from "framer-motion"
import { ElementType, useEffect, useRef, useState, type ReactNode } from "react"

type AnimateOnScrollProps = {
  children: ReactNode
  direction?: "left" | "right" | "up" | "down"
  delay?: number
  duration?: number
  once?: boolean
  className?: string
  threshold?: number
  MotionComponent?: ElementType
}

export const AnimateOnScroll = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  once = true,
  className = "",
  threshold = 0.1,
  MotionComponent = motion.div
}: AnimateOnScrollProps) => {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  const getVariants = () => {
    const variants: Record<string, Variant> = {
      hidden: {},
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0]
        }
      }
    }
    switch (direction) {
      case "left":
        variants.hidden = { opacity: 0, x: -100 }
        break
      case "right":
        variants.hidden = { opacity: 0, x: 100 }
        break
      case "up":
        variants.hidden = { opacity: 0, y: 100 }
        break
      case "down":
        variants.hidden = { opacity: 0, y: -100 }
        break
      default:
        variants.hidden = { opacity: 0, y: 50 }
    }

    return variants
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          controls.start("visible")
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsInView(false)
          controls.start("hidden")
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px"
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls, once, threshold])

  return (
    <MotionComponent
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={getVariants()}
      className={className}
    >
      {children}
    </MotionComponent>
  )
}
