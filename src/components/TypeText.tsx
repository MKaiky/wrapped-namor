import { useEffect, useState } from "react"

type TypeTextProps = {
  text: string
}

export default function TypeText({ text }: TypeTextProps) {

  const [display, setDisplay] = useState<string>("")
  const [i, setI] = useState<number>(0)

  useEffect(() => {
    if (i < text.length) {
      const timeout = setTimeout(() => {
        setDisplay((prev) => prev + text[i])
        setI(i + 1)
      }, 40)

      return () => clearTimeout(timeout)
    }
  }, [i, text])

  return (
    <p className="text-white text-xl text-center max-w-xl leading-relaxed">
      {display}
    </p>
  )
}