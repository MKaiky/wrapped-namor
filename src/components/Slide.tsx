import type { ReactNode } from "react"
import { motion } from "framer-motion"

type Props = {
  children: ReactNode
}

export default function Slide({ children }: Props) {

return (

<motion.div
className="h-screen flex flex-col items-center justify-center text-center px-8 bg-gradient-to-b from-black via-black to-neutral-900"
initial={{ opacity:0, y:40 }}
animate={{ opacity:1, y:0 }}
exit={{ opacity:0, y:-40 }}
transition={{ duration:0.6 }}
>

{children}

</motion.div>

)

}