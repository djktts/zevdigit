import { motion } from "motion/react";

import zevLogo from "@/assets/zev-logo.png.asset.json";

export function Header() {
  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5 sm:px-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex shrink-0 items-center"
          aria-label="Zev Digital"
        >
          <img
            src={zevLogo.url}
            alt="Zev Digital"
            className="h-16 w-auto object-contain sm:h-20"
          />
        </button>

        <button
          onClick={() => go("#iletisim")}
          className="shrink-0 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Hemen Başlayalım
        </button>
      </nav>
    </motion.header>
  );
}