/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tKyuj93QtW3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="w-full">
      <header className="bg-primary text-primary-foreground py-4 px-6 md:px-8 lg:px-10">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="#" className="text-lg font-bold" prefetch={false}>
              News Feed
            </Link>
            <div className="hidden md:flex gap-4">
              <Link href="#" className="hover:underline" prefetch={false}>
                Politics
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Technology
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Sports
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Business
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Entertainment
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              Sign In
            </Link>
            <Button variant="outline">Subscribe</Button>
          </div>
        </nav>
      </header>
      <main>
        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img
                  src="/placeholder.svg"
                  width={600}
                  height={400}
                  alt="Featured Article"
                  className="rounded-lg object-cover w-full h-[300px] md:h-[400px]"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium mb-4">
                  Politics
                </div>
                <h2 className="text-3xl font-bold mb-4">Groundbreaking Legislation Passes in Congress</h2>
                <p className="text-muted-foreground mb-6">
                  In a historic move, Congress has passed a landmark bill that will have far-reaching implications for
                  the country. The legislation addresses key issues and is expected to significantly impact the lives of
                  millions of Americans.
                </p>
                <Link href="#" className="inline-flex items-center gap-2 font-medium hover:underline" prefetch={false}>
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
