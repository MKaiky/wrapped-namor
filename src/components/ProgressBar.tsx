type Props = {
  step: number
  total: number
}

export default function ProgressBar({ step, total }: Props) {
  return (
    <div className="fixed top-0 left-0 w-full flex gap-1 p-3 z-50">

      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="flex-1 h-1 rounded-full bg-white/30 overflow-hidden"
        >
          <div
            className={`h-full transition-all duration-500 ${
              i <= step ? "bg-white" : ""
            }`}
          />
        </div>
      ))}

    </div>
  )
}