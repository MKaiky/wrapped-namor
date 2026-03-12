import { useEffect, useState } from "react"

type Props = {
  photos: string[]
}

export default function PhotoCarousel({ photos }: Props) {

  const [index,setIndex] = useState(0)

  useEffect(()=>{

    const interval = setInterval(()=>{
      setIndex((prev)=> (prev+1) % photos.length)
    },3000)

    return ()=>clearInterval(interval)

  },[photos.length])

  return(

    <div className="w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl">

      <img
        src={photos[index]}
        className="w-full h-[420px] object-cover transition-all duration-1000"
      />

    </div>

  )
}