import Slide from "./Slide"

type MusicProps = {
  next: () => void
}

export default function Music({ next }: MusicProps) {
  return (
    <Slide>
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center">
        Uma música que me lembra você
      </h1>

      <audio controls className="mb-10 w-full rounded-lg">
        <source src="/music.mp3" type="audio/mpeg" />
        Seu navegador não suporta áudio.
      </audio>

      <button
        onClick={next}
        className="w-full sm:w-auto bg-spotify px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-200"
      >
        Última parte
      </button>
    </Slide>
  )
}