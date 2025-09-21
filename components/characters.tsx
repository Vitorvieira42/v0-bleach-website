import { Card, CardContent } from "@/components/ui/card"

export function Characters() {
  const characters = [
    {
      name: "Rukia Kuchiki",
      role: "Shinigami",
      description: "Shinigami da 13ª Divisão que transferiu seus poderes para Ichigo.",
      image: "/rukia-kuchiki-from-bleach-anime-with-black-hair-an.jpg",
    },
    {
      name: "Uryu Ishida",
      role: "Quincy",
      description: "Último Quincy que luta ao lado de Ichigo contra os Hollows.",
      image: "/uryu-ishida-from-bleach-anime-with-glasses-and-qui.jpg",
    },
    {
      name: "Orihime Inoue",
      role: "Fullbringer",
      description: "Amiga de Ichigo com poderes de rejeição da realidade.",
      image: "/orihime-inoue-from-bleach-anime-with-orange-hair-a.jpg",
    },
    {
      name: "Yasutora Sado",
      role: "Fullbringer",
      description: "Chad, amigo leal de Ichigo com braços espirituais poderosos.",
      image: "/chad-sado-from-bleach-anime-with-muscular-build-an.jpg",
    },
  ]

  return (
    <section id="characters" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Personagens Principais</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça os heróis que protegem tanto o mundo dos vivos quanto o mundo espiritual
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {characters.map((character, index) => (
            <Card key={character.name} className="group hover:spiritual-glow transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
                  <img
                    src={character.image || "/placeholder.svg"}
                    alt={character.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-semibold text-lg">{character.name}</h3>
                  <p className="text-primary text-sm font-medium">{character.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{character.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
