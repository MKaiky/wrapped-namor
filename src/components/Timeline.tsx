type Props = {
  next: () => void
}

export default function Timeline({ next }: Props) {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-4xl font-bold mb-10">
        Nossa História
      </h1>

      <div className="max-w-2xl text-lg space-y-6 leading-relaxed">

        <p>
          Tudo começou quando éramos apenas amigos, lá em 2023.
          A gente já se achava atraente um para o outro,
          mas sempre existia aquela vergonha.
        </p>

        <p>
          Em outubro de 2025 voltamos a conversar um pouco,
          e em novembro ficamos praticamente inseparáveis.
          Conversávamos sobre tudo, quase o dia todo.
        </p>

        <p>
          Enquanto você estava na aula e eu no trabalho
          (e depois ainda tinha faculdade),
          a gente sempre dava um jeito de falar sobre tudo.
        </p>

        <p>
          No dia 20 de novembro, dia da consciência do seu neguin 😝,
          saímos pela primeira vez.
          Não foi exatamente um encontro,
          mas eu já estava completamente apaixonado.
        </p>

        <p>
          Eu só não tinha coragem de falar nada.
          Tinha vergonha e medo de você dizer
          que era apenas amizade.
        </p>

        <p>
          Até que no dia <b>5 de janeiro</b> aconteceu algo especial.
          Saímos novamente,
          demos nosso primeiro selinho
          e também saiu o primeiro <b>"eu te amo"</b>.
        </p>

        <p>
          Nesse dia eu também conheci sua mãe e seu irmão.
          Foi tudo incrível.
        </p>

        <p>
          Então no dia <b>15 de janeiro</b>,
          eu decidi fazer a pergunta oficialmente...
          e começamos nosso namoro de verdade.
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