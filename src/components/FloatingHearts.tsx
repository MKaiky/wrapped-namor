import { useState } from "react"

type Heart = {
  left: number
  size: number
  duration: number
}

function generateHearts(): Heart[] {
  const hearts: Heart[] = []

  for (let i = 0; i < 20; i++) {
    hearts.push({
      left: Math.random() * 100,
      size: Math.random() * 20 + 20,
      duration: 6 + Math.random() * 6
    })
  }

  return hearts
}

export default function FloatingHearts() {
  const [hearts] = useState<Heart[]>(generateHearts)

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart, i) => (
        <div
          key={i}
          className="absolute text-pink-400 animate-float"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  )
}