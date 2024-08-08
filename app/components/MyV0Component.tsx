/**
 * v0 by Vercel.
 * @see https://v0.dev/t/eYjAdFEsNBn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Random GIF Generator</h1>
        <p className="text-muted-foreground">Click the button to display a random GIF from the GIF API.</p>
      </div>
      <div className="relative w-full max-w-md">
        <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
          <img
            src="/placeholder.svg"
            alt="Random GIF"
            width={400}
            height={400}
            className="object-cover w-full h-full"
            style={{ aspectRatio: "400/400", objectFit: "cover" }}
          />
        </div>
        <Button
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          onClick={() => {
            const gifUrl = "https://via.placeholder.com/400x400.gif?text=Loading..."
            document.querySelector("img").src = gifUrl
          }}
        >
          Get Random GIF
        </Button>
      </div>
    </div>
  )
}
