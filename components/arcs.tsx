import { Card, CardContent } from "@/components/ui/card"

export function Arcs() {
  const arcs = [
    {
      title: "Arco da Sociedade das Almas",
      description: "Ichigo e seus amigos invadem a Sociedade das Almas para resgatar Rukia.",
      episodes: "Episódios 21-63",
      image: "/soul-society-arc-from-bleach-anime-with-seireitei-.jpg",
    },
    {
      title: "Arco dos Arrancar",
      description: "A guerra contra Aizen e seus Espada Arrancar pelo destino de ambos os mundos.",
      episodes: "Episódios 110-167",
      image: "/arrancar-arc-from-bleach-anime-with-hueco-mundo-de.jpg",
    },
    {
      title: "Arco da Guerra Sangrenta de Mil Anos",
      description: "A batalha final contra os Quincy e o Wandenreich liderado por Yhwach.",
      episodes: "Episódios 343+",
      image: "/thousand-year-blood-war-from-bleach-anime-with-qui.jpg",
    },
  ]

  return (
    <section id="arcs" className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Arcos da História</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Acompanhe as principais sagas que definiram o destino do universo espiritual
          </p>
        </div>

        <div className="space-y-8">
          {arcs.map((arc, index) => (
            <Card key={arc.title} className="overflow-hidden group hover:spiritual-glow transition-all duration-300">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto">
                    <img
                      src={arc.image || "/placeholder.svg"}
                      alt={arc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center space-y-4">
                    <div className="text-primary text-sm font-medium">{arc.episodes}</div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-balance">{arc.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{arc.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
