import { motion } from "framer-motion"

type Heart = {
  x: number
  y: number
}

const hearts: Heart[] = Array.from({ length: 20 }).map(() => ({
  x: (Math.random() - 0.5) * 400,
  y: (Math.random() - 0.5) * 400
}))

export default function HeartExplosion() {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">

      {hearts.map((heart, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
          animate={{
            scale: 1.5,
            x: heart.x,
            y: heart.y,
            opacity: 0
          }}
          transition={{ duration: 1.5 }}
          className="absolute text-pink-500 text-3xl"
        >
          ❤️
        </motion.div>
      ))}

    </div>
  )
}