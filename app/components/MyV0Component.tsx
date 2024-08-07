/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Utjlvywk15w
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"

export default function Component() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8">Adorable Dog Photos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <div className="relative group rounded-lg overflow-hidden cursor-pointer">
              <img
                src="/placeholder.svg"
                alt="Dog 1"
                width={300}
                height={300}
                className="w-full h-full object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <MaximizeIcon className="w-8 h-8 text-white" />
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="bg-background p-6 rounded-lg shadow-lg max-w-4xl">
            <img
              src="/placeholder.svg"
              alt="Dog 1"
              width={800}
              height={800}
              className="w-full h-auto object-contain"
              style={{ aspectRatio: "800/800", objectFit: "cover" }}
            />
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <div className="relative group rounded-lg overflow-hidden cursor-pointer">
              <img
                src="/placeholder.svg"
                alt="Dog 2"
                width={300}
                height={300}
                className="w-full h-full object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <MaximizeIcon className="w-8 h-8 text-white" />
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="bg-background p-6 rounded-lg shadow-lg max-w-4xl">
            <img
              src="/placeholder.svg"
              alt="Dog 2"
              width={800}
              height={800}
              className="w-full h-auto object-contain"
              style={{ aspectRatio: "800/800", objectFit: "cover" }}
            />
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <div className="relative group rounded-lg overflow-hidden cursor-pointer">
              <img
                src="/placeholder.svg"
                alt="Dog 3"
                width={300}
                height={300}
                className="w-full h-full object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <MaximizeIcon className="w-8 h-8 text-white" />
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="bg-background p-6 rounded-lg shadow-lg max-w-4xl">
            <img
              src="/placeholder.svg"
              alt="Dog 3"
              width={800}
              height={800}
              className="w-full h-auto object-contain"
              style={{ aspectRatio: "800/800", objectFit: "cover" }}
            />
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <div className="relative group rounded-lg overflow-hidden cursor-pointer">
              <img
                src="/placeholder.svg"
                alt="Dog 4"
                width={300}
                height={300}
                className="w-full h-full object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <MaximizeIcon className="w-8 h-8 text-white" />
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="bg-background p-6 rounded-lg shadow-lg max-w-4xl">
            <img
              src="/placeholder.svg"
              alt="Dog 4"
              width={800}
              height={800}
              className="w-full h-auto object-contain"
              style={{ aspectRatio: "800/800", objectFit: "cover" }}
            />
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <div className="relative group rounded-lg overflow-hidden cursor-pointer">
              <img
                src="/placeholder.svg"
                alt="Dog 5"
                width={300}
                height={300}
                className="w-full h-full object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <MaximizeIcon className="w-8 h-8 text-white" />
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="bg-background p-6 rounded-lg shadow-lg max-w-4xl">
            <img
              src="/placeholder.svg"
              alt="Dog 5"
              width={800}
              height={800}
              className="w-full h-auto object-contain"
              style={{ aspectRatio: "800/800", objectFit: "cover" }}
            />
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <div className="relative group rounded-lg overflow-hidden cursor-pointer">
              <img
                src="/placeholder.svg"
                alt="Dog 6"
                width={300}
                height={300}
                className="w-full h-full object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <MaximizeIcon className="w-8 h-8 text-white" />
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="bg-background p-6 rounded-lg shadow-lg max-w-4xl">
            <img
              src="/placeholder.svg"
              alt="Dog 6"
              width={800}
              height={800}
              className="w-full h-auto object-contain"
              style={{ aspectRatio: "800/800", objectFit: "cover" }}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

function MaximizeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  )
}
