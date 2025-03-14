"use client"

import { useEffect, useState } from "react"

export const Time = () => {
  const [timeLeft, setTimeLeft] = useState(3600)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 0) {
          clearInterval(timer)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, "0")
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0")
    const secs = String(seconds % 60).padStart(2, "0")
    return `${hours}:${minutes}:${secs}`
  }
  return (
    <>
      <strong className='text-white text-md font-semibold'>
        ⚠️ Oferta {timeLeft === 0 ? "expirada" : "por tempo limitado"}
      </strong>
      <time className='max-w-[220px] inline-flex items-center justify-center  overflow-hidden  transition duration-300 ease-out px-6 py-3 tracking-[2px]  text-white text-3xl font-semibold uppercase rounded-[6px] border border-white shadow-md group transition-all ease-in'>
        {formatTime(timeLeft)}
      </time>
    </>
  )
}
