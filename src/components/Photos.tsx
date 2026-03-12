import Slide from "./Slide"
import foto1 from "../assets/foto1.jpg"
import foto2 from "../assets/foto2.jpg"
import foto3 from "../assets/foto3.jpg"

type PhotosProps = {
  next: () => void
}

export default function Photos({ next }: PhotosProps) {
  return (
    <Slide>
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center">
        Nossos Momentos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img src={foto1} alt="Momento 1" className="w-full rounded-xl" />
        <img src={foto2} alt="Momento 2" className="w-full rounded-xl" />
        <img src={foto3} alt="Momento 3" className="w-full rounded-xl" />
      </div>

      <button
        onClick={next}
        className="w-full sm:w-auto mt-6 bg-spotify px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-200"
      >
        Próximo
      </button>
    </Slide>
  )
}