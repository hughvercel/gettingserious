/**
 * v0 by Vercel.
 * @see https://v0.dev/t/nbolcePz9n5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [backgroundColor, setBackgroundColor] = useState("")
  const [text, setText] = useState("")
  const generateRandomImage = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    setBackgroundColor(randomColor)
    setText(`Random Image ${Math.floor(Math.random() * 100)}`)
  }
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className={`relative w-full max-w-md overflow-hidden rounded-lg aspect-video bg-[${backgroundColor}]`}>
        <img
          src="/placeholder.svg"
          alt={text}
          width={800}
          height={450}
          className="object-cover w-full h-full"
          style={{ aspectRatio: "800/450", objectFit: "cover" }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">{text}</div>
      </div>
      <Button className="text-3xl">Generate New Image</Button>
    </div>
  )
}
