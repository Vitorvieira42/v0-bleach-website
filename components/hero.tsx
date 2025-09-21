import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-balance leading-tight">Ichigo Kurosaki</h1>
              <p className="text-xl text-muted-foreground font-light">Shinigami Substituto</p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                {
                  "Sou um Shinigami substituto que protege tanto o mundo dos vivos quanto o mundo espiritual. Minha jornada começou quando conheci Rukia Kuchiki e descobri meus poderes."
                }
              </p>

              <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                {
                  "Atualmente, luto contra Hollows e outras ameaças espirituais, sempre protegendo aqueles que são importantes para mim. Minha Zanpakutō, Zangetsu, é minha parceira nesta batalha eterna."
                }
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Explorar Poderes
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Conhecer Personagens
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-card rounded-lg spiritual-glow overflow-hidden">
              <img src="/ichigo-kurosaki-from-bleach-anime-with-orange-hair.jpg" alt="Ichigo Kurosaki" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">
              {"2024 — PRESENTE"}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
