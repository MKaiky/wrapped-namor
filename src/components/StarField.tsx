import { useState } from "react"

type Star = {
  left: number
  top: number
  size: number
  duration: number
}

function generateStars(): Star[] {
  const stars: Star[] = []

  for (let i = 0; i < 40; i++) {
    stars.push({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2
    })
  }

  return stars
}

export default function StarField() {

  const [stars] = useState(generateStars)

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">

      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            animationDuration: `${star.duration}s`
          }}
        />
      ))}

    </div>
  )
}