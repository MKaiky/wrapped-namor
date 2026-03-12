import { motion } from "framer-motion"

type Props = {
  next: () => void
}

export default function Intro({ next }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] text-center px-6">

      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6"
      >
        Nossa retrospectiva
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg opacity-80 max-w-xs mb-10"
      >
        Dois meses que mudaram tudo.
      </motion.p>

      {/* Botão */}
      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={next}
        className="bg-white text-black font-semibold px-8 py-4 rounded-full shadow-xl hover:scale-105 transition"
      >
        Começar nossa retrospectiva →
      </motion.button>

      {/* dica */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5 }}
        className="text-sm mt-8"
      >
        deslize para navegar →
      </motion.p>

    </div>
  )
}