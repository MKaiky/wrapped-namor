import { useState } from "react"

type Particle = {
  left: number
  size: number
  duration: number
}

function generateParticles(): Particle[] {
  const arr: Particle[] = []

  for (let i = 0; i < 20; i++) {
    arr.push({
      left: Math.random() * 100,
      size: 8 + Math.random() * 12,
      duration: 6 + Math.random() * 8
    })
  }

  return arr
}

export default function LoveParticles() {

  const [particles] = useState(generateParticles)

  return (
    <div className="fixed inset-0 pointer-events-none">

      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute bg-white/40 rounded-full animate-pulse"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`
          }}
        />
      ))}

    </div>
  )
}