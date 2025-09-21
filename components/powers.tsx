import { Card, CardContent } from "@/components/ui/card"
import { Sword, Shield, Zap, Eye } from "lucide-react"

export function Powers() {
  const powers = [
    {
      icon: Sword,
      title: "Zanpakutō",
      description: "Espadas espirituais que refletem a alma de seu portador, cada uma com habilidades únicas.",
      color: "text-primary",
    },
    {
      icon: Shield,
      title: "Kidō",
      description: "Artes demoníacas que permitem conjurar feitiços ofensivos e defensivos.",
      color: "text-accent",
    },
    {
      icon: Zap,
      title: "Shunpo",
      description: "Técnica de movimento em alta velocidade usada pelos Shinigami.",
      color: "text-destructive",
    },
    {
      icon: Eye,
      title: "Reiatsu",
      description: "Pressão espiritual que demonstra o poder e a força de um ser espiritual.",
      color: "text-chart-4",
    },
  ]

  return (
    <section id="powers" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Poderes Espirituais</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubra as habilidades que definem a força no mundo espiritual
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {powers.map((power, index) => (
            <Card key={power.title} className="group hover:spiritual-glow transition-all duration-300 text-center">
              <CardContent className="p-8 space-y-4">
                <div className={`inline-flex p-4 rounded-full bg-card ${power.color}`}>
                  <power.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold">{power.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{power.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto spiritual-glow">
            <CardContent className="p-12">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-balance">
                {"Unindo inovação, durabilidade e eficácia espiritual"}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {
                  "O mundo de Bleach representa a evolução constante dos poderes espirituais, onde cada batalha traz novas descobertas sobre as capacidades ocultas da alma humana e dos seres espirituais."
                }
              </p>
              <div className="aspect-video rounded-lg overflow-hidden">
                <img src="/bleach-anime-spiritual-battle-scene-with-energy-ef.jpg" alt="Batalha Espiritual" className="w-full h-full object-cover" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
