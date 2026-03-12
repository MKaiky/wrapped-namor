import { useState } from "react"
import { useSwipeable } from "react-swipeable"

import Intro from "./components/Intro"
import Timeline from "./components/Timeline"
import Photos from "./components/Photos"
import Stats from "./components/Stats"
import Music from "./components/Music"
import LoveLetter from "./components/LoveLetter"
import FinalMessage from "./components/FinalMessage"

import FloatingHearts from "./components/FloatingHearts"
import MusicPlayer from "./components/MusicPlayer"
import ProgressBar from "./components/ProgressBar"
import SlideTransition from "./components/SlideTransition"

import LoveBackground from "./components/LoveBackground"
import LoveParticles from "./components/LoveParticles"
import StarField from "./components/StarField"

export default function App() {

  const TOTAL_STEPS = 7

  const [step, setStep] = useState(0)

  const next = () => {
    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1))
  }

  const prev = () => {
    setStep((s) => Math.max(0, s - 1))
  }

  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    trackMouse: false,
    preventScrollOnSwipe: true
  })

  let page

  switch (step) {
    case 0:
      page = <Intro next={next} />
      break

    case 1:
      page = <Timeline next={next} />
      break

    case 2:
      page = <Photos next={next} />
      break

    case 3:
      page = <Stats next={next} />
      break

    case 4:
      page = <Music next={next} />
      break

    case 5:
      page = <LoveLetter />
      break

    default:
      page = <FinalMessage />
      break
  }

  return (
    <div
      {...handlers}
      className="
      relative
      h-[100dvh]
      w-screen
      flex
      flex-col
      items-center
      justify-center
      p-4
      overflow-hidden
      "
    >

      {/* Fundo gradiente */}
      <LoveBackground />

      {/* Estrelas */}
      <StarField />

      {/* Partículas românticas */}
      <LoveParticles />

      {/* Barra estilo Spotify Wrapped */}
      <ProgressBar step={step} total={TOTAL_STEPS} />

      {/* Música */}
      <MusicPlayer />

      {/* Corações flutuando */}
      <FloatingHearts />

      {/* Slide central */}
      <div className="w-full max-w-sm mx-auto text-center z-10 px-4 overflow-y-auto max-h-[85dvh]">
        <SlideTransition key={step}>
          {page}
        </SlideTransition>
      </div>

    </div>
  )
}