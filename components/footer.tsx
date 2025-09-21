import { Github, Twitter, Youtube, Instagram } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  const footerSections = [
    {
      title: "Universo",
      links: ["Shinigami", "Hollows", "Quincy", "Fullbringers"],
    },
    {
      title: "Locais",
      links: ["Karakura Town", "Soul Society", "Hueco Mundo", "Wandenreich"],
    },
    {
      title: "Mídia",
      links: ["Mangá", "Anime", "Filmes", "Jogos"],
    },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-primary">BLEACH</h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              {
                "Explore o universo espiritual criado por Tite Kubo, onde Shinigami, Hollows e humanos coexistem em uma batalha eterna entre a vida e a morte."
              }
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-semibold text-foreground">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            {"© 2024 Bleach Universe. Todos os direitos reservados a Tite Kubo."}
          </p>
          <p className="text-muted-foreground text-sm">
            {"Criado com"} <span className="text-primary">♥</span> {"para os fãs de Bleach"}
          </p>
        </div>
      </div>
    </footer>
  )
}
