type Props = {
  next: () => void
}

export default function Stats({ next }: Props) {

  const horas = 1416
  const minutos = 84960

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">

      <h1 className="text-4xl font-bold mb-10">
        Nosso Tempo Juntos
      </h1>

      <div className="space-y-6 text-xl">

        <p>
          Já passamos aproximadamente
        </p>

        <p className="text-5xl font-bold">
          {horas} horas
        </p>

        <p>
          ou
        </p>

        <p className="text-5xl font-bold">
          {minutos.toLocaleString()} minutos
        </p>

        <p>
          criando memórias juntos ❤️
        </p>

      </div>

      <button
        onClick={next}
        className="mt-12 bg-white text-black px-6 py-3 rounded-full"
      >
        Continuar
      </button>

    </div>
  )
}