import { useReveal } from "@/hooks/use-reveal"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start flex-col justify-between px-6 pt-24 pb-8 md:px-12 md:pt-28 md:pb-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl flex-1 flex flex-col">
        <div
          className={`mb-8 transition-all duration-700 md:mb-10 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Принципы
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Как работает VPN</p>
        </div>

        <div className="flex-1 flex flex-col justify-center space-y-4 md:space-y-5">
          {[
            {
              number: "01",
              title: "Инкапсуляция",
              description: "Пакеты данных оборачиваются в новый протокол. Исходные данные скрываются внутри нового заголовка.",
              direction: "left",
            },
            {
              number: "02",
              title: "Шифрование",
              description: "Данные шифруются алгоритмами AES-256, ChaCha20 и др. Перехваченный трафик невозможно прочитать без ключа.",
              direction: "right",
            },
            {
              number: "03",
              title: "Аутентификация",
              description: "Стороны проверяют подлинность друг друга через сертификаты, токены или логин/пароль до установки туннеля.",
              direction: "left",
            },
            {
              number: "04",
              title: "Туннелирование",
              description: "Создаётся виртуальный «туннель» между клиентом и сервером — весь трафик идёт через него, минуя внешнюю сеть.",
              direction: "right",
            },
          ].map((item, i) => (
            <PrincipleCard key={i} item={item} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>

      <div
        className={`mx-auto w-full max-w-7xl pt-4 border-t border-foreground/10 transition-all duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "700ms" }}
      >
        <p className="font-mono text-xs text-foreground/40">
          Источник:{" "}
          <a
            href="https://www.ietf.org/rfc/rfc2764.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground/60"
          >
            IETF RFC 2764 — A Framework for IP Based Virtual Private Networks
          </a>
          {" · "}
          <a
            href="https://www.ietf.org/rfc/rfc4301.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground/60"
          >
            RFC 4301 — Security Architecture for IPsec (2024 актуально)
          </a>
        </p>
      </div>
    </section>
  )
}

function PrincipleCard({
  item,
  index,
  isVisible,
}: {
  item: { number: string; title: string; description: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return item.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex items-start gap-6 border-b border-foreground/10 pb-4 transition-all duration-700 hover:border-foreground/20 md:gap-10 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <span className="font-mono text-sm text-foreground/30 mt-0.5 md:text-base">{item.number}</span>
      <div className="flex-1">
        <h3 className="mb-1 font-sans text-xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-1 md:text-2xl">
          {item.title}
        </h3>
        <p className="font-mono text-xs leading-relaxed text-foreground/60 md:text-sm">{item.description}</p>
      </div>
    </div>
  )
}
