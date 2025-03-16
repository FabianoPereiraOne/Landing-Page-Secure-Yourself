"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

type StaggerContainerProps = {
  children: ReactNode
  className?: string
  delay?: number
  staggerChildren?: number
}

export const StaggerContainer = ({
  children,
  className = "",
  delay = 0,
  staggerChildren = 0.1
}: StaggerContainerProps) => {
  return (
    <motion.div
      className={className}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: delay,
            staggerChildren
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

export const StaggerItem = ({
  children,
  className = "",
  direction = "up"
}: {
  children: ReactNode
  className?: string
  direction?: "left" | "right" | "up" | "down"
}) => {
  // Define animation variants based on direction
  const getVariants = () => {
    const variants = {
      hidden: {},
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1.0]
        }
      }
    }

    // Set initial position based on direction
    switch (direction) {
      case "left":
        variants.hidden = { opacity: 0, x: -50 }
        break
      case "right":
        variants.hidden = { opacity: 0, x: 50 }
        break
      case "up":
        variants.hidden = { opacity: 0, y: 50 }
        break
      case "down":
        variants.hidden = { opacity: 0, y: -50 }
        break
      default:
        variants.hidden = { opacity: 0, y: 50 }
    }

    return variants
  }

  return (
    <motion.div className={className} variants={getVariants()}>
      {children}
    </motion.div>
  )
}
