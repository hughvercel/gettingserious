/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RjDzD3ghqB7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary">
      <div className="max-w-md p-6 bg-background rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <img
            src="/placeholder.svg"
            alt="Meme image"
            className="w-full rounded-t-lg"
            width="400"
            height="300"
            style={{ aspectRatio: "400/300", objectFit: "cover" }}
          />
          <div className="mt-4 text-center">
            <h2 className="text-2xl font-bold text-primary-foreground">The Distracted Boyfriend Meme</h2>
            <p className="mt-2 text-muted-foreground">
              A classic meme that captures the struggle of being distracted by something new while in a relationship.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
