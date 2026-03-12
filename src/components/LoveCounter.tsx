import { useEffect, useState } from "react"

type Props = {
  target: number
}

export default function LoveCounter({ target }: Props) {

  const [count, setCount] = useState(0)

  useEffect(() => {

    let start = 0

    const interval = setInterval(() => {
      start++
      setCount(start)

      if (start >= target) {
        clearInterval(interval)
      }
    }, 40)

    return () => clearInterval(interval)

  }, [target])

  return (
    <div className="text-5xl font-bold">
      {count}
    </div>
  )
}