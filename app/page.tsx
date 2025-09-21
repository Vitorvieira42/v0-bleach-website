import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Characters } from "@/components/characters"
import { Arcs } from "@/components/arcs"
import { Powers } from "@/components/powers"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Characters />
      <Arcs />
      <Powers />
      <Footer />
    </main>
  )
}
