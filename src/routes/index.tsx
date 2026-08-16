import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Globe, Megaphone, Sparkles } from "lucide-react";

import { Header } from "@/components/landing/Header";
import { Reveal } from "@/components/landing/Reveal";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";
import { TallyForm } from "@/components/landing/TallyForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zev Digital | Markanızı Dijitalde Büyütüyoruz" },
      {
        name: "description",
        content:
          "Zev Digital; web siteleri, marka inşası ve reklam yönetimiyle işletmenizin dijital altyapısını kurar ve yönetir.",
      },
      { property: "og:title", content: "Zev Digital | Digital Danışmanlık" },
      {
        property: "og:description",
        content:
          "Dijital altyapı, marka inşası ve reklam yönetimi. Siz işinize odaklanın, dijitali biz yönetelim.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Globe,
    title: "Dijital Altyapı",
    text: "İşletmenizi en iyi şekilde temsil eden, modern ve kesintisiz çalışan dijital vitrinler inşa ediyoruz.",
  },
  {
    icon: Sparkles,
    title: "Marka İnşası",
    text: "Sadece bir logo değil, sosyal medyada doğru hedef kitleyle bağ kuran, akılda kalıcı bir marka kimliği oluşturuyoruz.",
  },
  {
    icon: Megaphone,
    title: "Reklam Yönetimi",
    text: "Başta Meta olmak üzere dijital reklam bütçenizi en verimli şekilde stratejilendiriyor, işletmenize doğru müşterileri çekiyoruz.",
  },
];

const packages = [
  {
    tag: "Tek Seferlik",
    title: "Hızlı Lansman",
    text: "Dijital vitrininizin hızlı kurulumu ve anahtar teslimi.",
  },
  {
    tag: "Aylık Danışmanlık",
    title: "Büyüme Ortaklığı",
    text: "Reklam yönetimi, sosyal medya ve sürekli dijital büyüme danışmanlığı.",
  },
];

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      <main>
        {/* Hero */}
        <section className="px-6 pb-32 pt-40 sm:px-8 sm:pb-44 sm:pt-56">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="text-4xl font-semibold leading-[1.06] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Markanızı Dijitalde Büyütüp, Kârlılığınızı Artırıyoruz.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Karmaşık teknik detaylarla uğraşmayın. Biz işletmenizin dijital altyapısını kurup
              yönetirken, siz sadece büyümeye odaklanın.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                onClick={() => scrollTo("#iletisim")}
                className="w-full rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
              >
                Projeye Başla
              </button>
              <button
                onClick={() => scrollTo("#hizmetler")}
                className="w-full rounded-full border border-border px-8 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-secondary sm:w-auto"
              >
                Hizmetlerimiz
              </button>
            </div>
          </motion.div>
        </section>

        {/* Services */}
        <section id="hizmetler" className="bg-secondary px-6 py-28 sm:px-8 sm:py-40">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Hizmetlerimiz
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                İşletmenizin dijitalde ihtiyaç duyduğu her şeyi tek çatı altında topluyoruz.
              </p>
            </Reveal>

            <div className="mt-20 grid gap-6 md:grid-cols-3">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.1}>
                  <article className="group h-full rounded-3xl bg-background p-10 shadow-[0_2px_20px_-12px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_30px_60px_-24px_rgba(0,0,0,0.22)]">
                    <s.icon
                      className="h-8 w-8 text-primary transition-transform duration-300 ease-out group-hover:scale-110"
                      strokeWidth={1.25}
                    />
                    <h3 className="mt-8 text-xl font-semibold tracking-tight text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section id="modeller" className="px-6 py-28 sm:px-8 sm:py-40">
          <div className="mx-auto max-w-5xl">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Çalışma Modellerimiz
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                İhtiyacınıza göre iki basit yol.
              </p>
            </Reveal>

            <div className="mt-20 grid gap-6 md:grid-cols-2">
              {packages.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.1}>
                  <article className="h-full rounded-3xl border border-border bg-background p-12">
                    <span className="text-sm font-medium text-primary">{p.tag}</span>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">{p.text}</p>
                    <button
                      onClick={() => scrollTo("#iletisim")}
                      className="mt-10 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Görüşme Ayarla
                    </button>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="iletisim" className="bg-secondary px-6 py-28 sm:px-8 sm:py-40">
          <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
                İşletmeniz İçin Neler Yapabileceğimizi Konuşalım
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                <br />
              </p>
              <a
                href="mailto:bilgi@zevdigital.co"
                className="mt-8 inline-block text-lg font-medium text-primary hover:underline"
              >
                bilgi@zevdigital.co
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="w-full rounded-3xl bg-background p-6 shadow-[0_2px_20px_-12px_rgba(0,0,0,0.15)] sm:p-10">
                <TallyForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-12 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
          <span className="font-medium text-foreground">Zev Digital</span>
          <span>© {new Date().getFullYear()} Zev Digital. Tüm hakları saklıdır.</span>
        </div>
      </footer>
    </div>
  );
}
