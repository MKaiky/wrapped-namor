import { useState } from "react"

type Heart = {
  x: number
  y: number
}

function generateHearts(): Heart[] {

  const arr: Heart[] = []

  for (let i = 0; i < 20; i++) {
    arr.push({
      x: (Math.random() - 0.5) * 500,
      y: (Math.random() - 0.5) * 500
    })
  }

  return arr
}

export default function LoveExplosion() {

  const [hearts] = useState(generateHearts)

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

      {hearts.map((h, i) => (
        <div
          key={i}
          className="absolute text-3xl animate-ping"
          style={{
            transform: `translate(${h.x}px, ${h.y}px)`
          }}
        >
          ❤️
        </div>
      ))}

    </div>
  )
}