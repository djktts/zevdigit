import { useEffect } from "react";

const SCRIPT_SRC = "https://tally.so/widgets/embed.js";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

export function TallyForm() {
  useEffect(() => {
    const load = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds();
        return;
      }
      document
        .querySelectorAll<HTMLIFrameElement>("iframe[data-tally-src]:not([src])")
        .forEach((el) => {
          el.src = el.dataset['tallySrc'] as string;
        });
    };

    if (window.Tally) {
      load();
      return;
    }

    let script = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", load);
    script.addEventListener("error", load);
    return () => {
      script?.removeEventListener("load", load);
      script?.removeEventListener("error", load);
    };
  }, []);

  return (
    <div id="form-embed" className="w-full overflow-hidden">
      <iframe
        data-tally-src="https://tally.so/embed/RGeO4K?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height={719}
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title="İşletmeniz İçin Neler Yapabileceğimizi Konuşalım"
        className="block w-full max-w-full border-0"
      />
    </div>
  );
}
