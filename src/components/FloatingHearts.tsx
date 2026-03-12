import { useMemo } from "react"

type Heart = {
  id: number
  left: number
  size: number
  duration: number
  emoji: string
}

const emojis = ["❤️", "💖", "💕", "💗", "💘"]

function generateHearts(): Heart[] {
  return Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 16 + Math.random() * 24,
    duration: 6 + Math.random() * 6,
    emoji: emojis[Math.floor(Math.random() * emojis.length)]
  }))
}

export default function FloatingHearts() {

  const hearts = useMemo<Heart[]>(() => generateHearts(), [])

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">

      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute animate-[floatLinear]"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            bottom: "-40px"
          }}
        >
          {heart.emoji}
        </span>
      ))}

    </div>
  )
}