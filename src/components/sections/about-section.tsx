import { useReveal } from "@/hooks/use-reveal"

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  const chartData = [
    { label: "2021", value: 31, pct: "31%" },
    { label: "2022", value: 44, pct: "44%" },
    { label: "2023", value: 58, pct: "58%" },
    { label: "2024", value: 71, pct: "71%" },
    { label: "2025*", value: 82, pct: "82%*" },
  ]

  const maxValue = 100

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start flex-col justify-between px-4 pt-24 pb-8 md:px-12 md:pt-28 md:pb-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl flex-1 flex flex-col">
        <div
          className={`mb-6 transition-all duration-700 md:mb-8 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-4xl font-light leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Статистика
          </h2>
          <p className="font-mono text-sm text-foreground/60">/ Динамика использования VPN в России, %</p>
        </div>

        <div className="flex-1 grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
          <div
            className={`flex flex-col justify-center transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="space-y-3">
              {chartData.map((bar, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="font-mono text-xs text-foreground/50 w-10 shrink-0">{bar.label}</span>
                  <div className="flex-1 relative h-7 bg-foreground/10 rounded-sm overflow-hidden">
                    <div
                      className="h-full bg-foreground/70 rounded-sm transition-all duration-1000"
                      style={{
                        width: isVisible ? `${(bar.value / maxValue) * 100}%` : "0%",
                        transitionDelay: `${300 + i * 150}ms`,
                      }}
                    />
                  </div>
                  <span className="font-mono text-xs text-foreground/80 w-10 text-right shrink-0">{bar.pct}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 font-mono text-xs text-foreground/40">* 2025 — прогнозные данные</p>
          </div>

          <div className="flex flex-col justify-center space-y-5 md:space-y-8">
            {[
              { value: "71%", label: "Пользователей VPN в РФ", sublabel: "По данным GlobalWebIndex, 2024", direction: "right" },
              { value: "↑2.3×", label: "Рост с 2021 г.", sublabel: "Ускорение после 2022 года", direction: "left" },
              { value: "45 млн", label: "Активных пользователей", sublabel: "ежемесячно, Россия, 2024", direction: "right" },
            ].map((stat, i) => {
              const getRevealClass = () => {
                if (!isVisible) {
                  return stat.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
                }
                return "translate-x-0 opacity-100"
              }

              return (
                <div
                  key={i}
                  className={`flex items-baseline gap-4 border-l border-foreground/30 pl-4 transition-all duration-700 md:gap-8 md:pl-8 ${getRevealClass()}`}
                  style={{
                    transitionDelay: `${300 + i * 150}ms`,
                    marginLeft: i % 2 === 0 ? "0" : "auto",
                    maxWidth: i % 2 === 0 ? "100%" : "85%",
                  }}
                >
                  <div className="text-3xl font-light text-foreground md:text-5xl lg:text-6xl">{stat.value}</div>
                  <div>
                    <div className="font-sans text-sm font-light text-foreground md:text-base">{stat.label}</div>
                    <div className="font-mono text-xs text-foreground/60">{stat.sublabel}</div>
                  </div>
                </div>
              )
            })}
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
          Источник:{" "}
          <a href="https://datareportal.com/reports/digital-2024-russia" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground/60">
            DataReportal — Digital 2024: Russia
          </a>
          {" · "}
          <a href="https://www.statista.com/topics/8530/vpn-usage-in-russia/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground/60">
            Statista: VPN Usage in Russia, 2024
          </a>
        </p>
      </div>
    </section>
  )
}
