import { useReveal } from "@/hooks/use-reveal"

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)

  const sources = [
    {
      number: "01",
      title: "Федеральный закон № 149-ФЗ «Об информации, информационных технологиях и о защите информации»",
      year: "2024",
      url: "https://www.consultant.ru/document/cons_doc_LAW_61798/",
    },
    {
      number: "02",
      title: "ГОСТ Р 57580.1-2017 — Безопасность финансовых (банковских) операций. Защита информации",
      year: "2024",
      url: "https://protect.gost.ru/document.aspx?control=7&id=210103",
    },
    {
      number: "03",
      title: "DataReportal — Digital 2024: Russia. Использование VPN-сервисов",
      year: "2024",
      url: "https://datareportal.com/reports/digital-2024-russia",
    },
    {
      number: "04",
      title: "Statista: VPN usage statistics in Russia, 2021–2025",
      year: "2025",
      url: "https://www.statista.com/topics/8530/vpn-usage-in-russia/",
    },
    {
      number: "05",
      title: "WireGuard: Next Generation Kernel Network Tunnel — Jason A. Donenfeld",
      year: "2024",
      url: "https://www.wireguard.com/papers/wireguard.pdf",
    },
    {
      number: "06",
      title: "IETF RFC 4301 — Security Architecture for the Internet Protocol (IPsec)",
      year: "2024",
      url: "https://www.ietf.org/rfc/rfc4301.txt",
    },
    {
      number: "07",
      title: "Роскомнадзор — реестр запрещённых VPN-сервисов и правоприменение, 2024",
      year: "2024",
      url: "https://rkn.gov.ru/",
    },
    {
      number: "08",
      title: "OpenVPN 2.6 Community Reference Manual — официальная документация",
      year: "2024",
      url: "https://openvpn.net/community-resources/reference-manual-for-openvpn-2-6/",
    },
  ]

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start flex-col justify-between px-4 pt-24 pb-8 md:px-12 md:pt-28 md:pb-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl flex-1 flex flex-col">
        <div
          className={`mb-6 transition-all duration-700 md:mb-8 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Источники
          </h2>
          <p className="font-mono text-xs text-foreground/60 md:text-sm">
            / Официальные источники и статьи 2024–2026. Курсант 954 взвода Левашова Е.М.
          </p>
        </div>

        <div className="flex-1 overflow-y-auto pr-1">
          <div className="grid gap-3 md:grid-cols-2 md:gap-4">
            {sources.map((source, i) => (
              <div
                key={i}
                className={`group transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${150 + i * 80}ms` }}
              >
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 border border-foreground/10 rounded-sm p-3 hover:border-foreground/30 hover:bg-foreground/5 transition-all duration-200"
                >
                  <span className="font-mono text-xs text-foreground/30 mt-0.5 shrink-0">{source.number}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs leading-relaxed text-foreground/80 group-hover:text-foreground transition-colors line-clamp-2">
                      {source.title}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-foreground/40 shrink-0">{source.year}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`mx-auto w-full max-w-7xl pt-4 border-t border-foreground/10 transition-all duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "900ms" }}
      >
        <p className="font-mono text-xs text-foreground/40">
          Московский университет МВД России им. В.Я. Кикотя ·{" "}
          <a href="https://mossimvd.ru/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground/60">
            mossimvd.ru
          </a>
          {" · "}Курсант 954 взвода Левашова Е.М. · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  )
}
