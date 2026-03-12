import { motion } from "framer-motion"

type Props = {
  src: string
}

export default function PolaroidPhoto({ src }: Props) {

  return (
    <motion.div
      initial={{ y: -200, rotate: -10, opacity: 0 }}
      animate={{ y: 0, rotate: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="
      bg-white
      p-3
      rounded-lg
      shadow-2xl
      max-w-[220px]
      mx-auto
      "
    >

      <img
        src={src}
        className="rounded"
      />

      <p className="text-black text-sm mt-2">
        Nosso momento ❤️
      </p>

    </motion.div>
  )
}