"use client"

import { useEffect, useState } from "react"

interface TypewriterProps {
  words: string[]
}

export function Typewriter({ words }: TypewriterProps) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    const finishedTyping = !deleting && text === word
    const finishedDeleting = deleting && text === ""

    const timer = setTimeout(
      () => {
        if (finishedTyping) {
          setDeleting(true)
        } else if (finishedDeleting) {
          setDeleting(false)
          setIndex((i) => i + 1)
        } else {
          setText(word.slice(0, text.length + (deleting ? -1 : 1)))
        }
      },
      finishedTyping ? 1800 : deleting ? 35 : 75,
    )

    return () => clearTimeout(timer)
  }, [text, deleting, index, words])

  return (
    <>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden="true">
        {text}
        <span className="caret" />
      </span>
    </>
  )
}
