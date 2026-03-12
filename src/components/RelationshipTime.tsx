import { useEffect, useState } from "react"

export default function RelationshipTime() {

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  })

  useEffect(() => {

    const startDate = new Date("2026-01-11") // coloque a data certa aqui

    const updateTime = () => {

      const now = new Date().getTime()
      const diff = now - startDate.getTime()

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)

      setTime({
        days,
        hours,
        minutes
      })

    }

    updateTime()

    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)

  }, [])

  return (
    <div className="text-center">

      <p className="text-lg mb-2 opacity-80">
        Estamos juntos há
      </p>

      <div className="text-4xl font-bold">
        {time.days} dias
      </div>

      <p className="opacity-70">
        {time.hours}h {time.minutes}m
      </p>

    </div>
  )
}