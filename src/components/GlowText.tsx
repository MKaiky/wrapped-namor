import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function GlowText({ children }: Props) {
  return (
    <span className="
      bg-gradient-to-r
      from-white
      via-pink-200
      to-white
      bg-clip-text
      text-transparent
      animate-pulse
    ">
      {children}
    </span>
  )
}