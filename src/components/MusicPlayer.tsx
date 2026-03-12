import { useEffect, useRef } from "react"

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Função para tentar tocar automaticamente
    const playAudio = async () => {
      try {
        // Começa silenciado para contornar bloqueios de autoplay
        audio.muted = true
        await audio.play()
        // Depois remove o mute para ouvir a música
        audio.muted = false
      } catch {
        // Se o navegador bloquear, não precisa fazer nada
        // Música vai tocar quando houver interação do usuário
      }
    }

    playAudio()
  }, [])

  return <audio ref={audioRef} loop src="/music/music.mp3" />
}