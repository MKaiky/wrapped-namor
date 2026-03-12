import { motion } from "framer-motion"

type Heart = {
  x: number
  y: number
}

const hearts: Heart[] = Array.from({ length: 25 }).map(() => ({
  x: (Math.random() - 0.5) * 600,
  y: (Math.random() - 0.5) * 600
}))

export default function FinalMessage() {

  const replay = () => {
    window.location.reload()
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center text-white px-6 overflow-hidden">

      {hearts.map((heart, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
          animate={{
            scale: 1.6,
            x: heart.x,
            y: heart.y,
            opacity: 0
          }}
          transition={{ duration: 1.6 }}
          className="absolute text-pink-400 text-3xl"
        >
          ❤️
        </motion.div>
      ))}

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold mb-8 z-10"
      >
        Eu te amo ❤️
      </motion.h1>

      <motion.button
        onClick={replay}
        className="bg-white text-pink-500 font-semibold px-6 py-3 rounded-full shadow-xl hover:scale-110 transition z-10"
      >
        Rever nossa história 💖
      </motion.button>

    </div>
  )
}