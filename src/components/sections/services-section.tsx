import { useReveal } from "@/hooks/use-reveal"

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  const protocols = [
    {
      title: "OpenVPN",
      description: "Открытый протокол на SSL/TLS. Высокая безопасность, гибкая настройка. Широко применяется в корпоративных сетях.",
      direction: "top",
    },
    {
      title: "WireGuard",
      description: "Современный протокол (2019–2025). Минималистичный код (~4000 строк), высокая скорость, криптография ChaCha20/Poly1305.",
      direction: "right",
    },
    {
      title: "IPsec / IKEv2",
      description: "Стандарт IETF. Используется в корпоративных и государственных VPN. Поддерживает быстрое переключение сетей (MOBIKE).",
      direction: "left",
    },
    {
      title: "SSTP / L2TP",
      description: "SSTP — туннель в HTTPS (порт 443). L2TP/IPsec — широкая совместимость, встроен в Windows/iOS/Android.",
      direction: "bottom",
    },
  ]

  const tableData = [
    { protocol: "OpenVPN", encryption: "AES-256-GCM", port: "1194 UDP/TCP", speed: "Средняя", security: "Высокая" },
    { protocol: "WireGuard", encryption: "ChaCha20/Poly1305", port: "51820 UDP", speed: "Очень высокая", security: "Высокая" },
    { protocol: "IPsec/IKEv2", encryption: "AES-256", port: "500/4500 UDP", speed: "Высокая", security: "Высокая" },
    { protocol: "L2TP/IPsec", encryption: "AES-128/256", port: "1701 UDP", speed: "Средняя", security: "Средняя" },
    { protocol: "SSTP", encryption: "SSL/TLS", port: "443 TCP", speed: "Средняя", security: "Высокая" },
  ]

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start flex-col justify-between px-6 pt-24 pb-8 md:px-12 md:pt-28 md:pb-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl flex-1 flex flex-col">
        <div
          className={`mb-6 transition-all duration-700 md:mb-8 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Протоколы
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Сравнительная таблица VPN-протоколов</p>
        </div>

        <div className="flex-1 flex flex-col gap-6 overflow-hidden">
          <div className="grid gap-4 md:grid-cols-2 md:gap-x-12 md:gap-y-4 lg:gap-x-20">
            {protocols.map((service, i) => (
              <ServiceCard key={i} service={service} index={i} isVisible={isVisible} />
            ))}
          </div>

          <div
            className={`overflow-x-auto transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <table className="w-full text-xs md:text-sm">
              <thead>
                <tr className="border-b border-foreground/20">
                  <th className="py-2 pr-4 text-left font-mono text-foreground/50 font-normal">Протокол</th>
                  <th className="py-2 pr-4 text-left font-mono text-foreground/50 font-normal">Шифрование</th>
                  <th className="py-2 pr-4 text-left font-mono text-foreground/50 font-normal">Порт</th>
                  <th className="py-2 pr-4 text-left font-mono text-foreground/50 font-normal">Скорость</th>
                  <th className="py-2 text-left font-mono text-foreground/50 font-normal">Безопасность</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr key={i} className="border-b border-foreground/10 hover:bg-foreground/5 transition-colors">
                    <td className="py-2 pr-4 font-sans text-foreground font-light">{row.protocol}</td>
                    <td className="py-2 pr-4 font-mono text-foreground/70">{row.encryption}</td>
                    <td className="py-2 pr-4 font-mono text-foreground/70">{row.port}</td>
                    <td className="py-2 pr-4 font-mono text-foreground/70">{row.speed}</td>
                    <td className={`py-2 font-mono ${row.security === "Высокая" ? "text-foreground/90" : "text-foreground/50"}`}>{row.security}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div
        className={`mx-auto w-full max-w-7xl pt-4 border-t border-foreground/10 transition-all duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "800ms" }}
      >
        <p className="font-mono text-xs text-foreground/40">
          Источник:{" "}
          <a href="https://www.wireguard.com/papers/wireguard.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground/60">
            WireGuard Whitepaper, J. Donenfeld, 2017–2024
          </a>
          {" · "}
          <a href="https://openvpn.net/community-resources/reference-manual-for-openvpn-2-6/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground/60">
            OpenVPN 2.6 Reference Manual (2024)
          </a>
        </p>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: { title: string; description: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="mb-1.5 flex items-center gap-3">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
        <span className="font-mono text-xs text-foreground/60">0{index + 1}</span>
      </div>
      <h3 className="mb-1 font-sans text-xl font-light text-foreground md:text-2xl">{service.title}</h3>
      <p className="max-w-sm text-xs leading-relaxed text-foreground/70 md:text-sm">{service.description}</p>
    </div>
  )
}
