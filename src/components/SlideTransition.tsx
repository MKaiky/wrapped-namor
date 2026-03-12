import { motion } from "framer-motion"
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function SlideTransition({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8 }}
      className="w-full h-full flex items-center justify-center"
    >
      {children}
    </motion.div>
  )
}