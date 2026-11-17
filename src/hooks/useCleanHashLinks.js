import { useEffect } from "react";

/*
 * Links internos (href="#secao") sem deixar o "#secao" na URL.
 * Rola até a seção, move o foco para ela (teclado e leitor de tela
 * continuam dali) e não grava nada no histórico.
 * Se a página abrir com um # (link compartilhado), o navegador rola
 * até a seção normalmente e o # é removido da URL em seguida.
 */
function useCleanHashLinks() {
  useEffect(() => {
    const cleanUrl = () => {
      if (window.location.hash) {
        history.replaceState(history.state, "", window.location.pathname + window.location.search);
      }
    };

    function scrollToTarget(hash) {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const behavior = reduceMotion ? "auto" : "smooth";

      if (hash === "#" || hash === "#top") {
        window.scrollTo({ top: 0, behavior });
        return true;
      }

      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!target) return false;

      target.scrollIntoView({ behavior, block: "start" });
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
      return true;
    }

    function onClick(event) {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = event.target.closest("a[href^='#']");
      if (!link || link.closest("[data-contact]")) return;

      if (scrollToTarget(link.getAttribute("href"))) {
        event.preventDefault();
        cleanUrl();
      }
    }

    // Link compartilhado com #: deixa o navegador rolar e depois limpa a URL
    const frame = requestAnimationFrame(cleanUrl);

    // # digitado direto na barra de endereço: mesma limpeza
    const onHashChange = () => requestAnimationFrame(cleanUrl);

    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", onHashChange);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);
}

export default useCleanHashLinks;
