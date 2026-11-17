import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

/*
 * Botão de modo claro/escuro.
 * O tema inicial já vem aplicado pelo script do index.html (sem "piscar").
 * Enquanto a pessoa não escolhe, o site acompanha o tema do sistema;
 * depois de clicar, a escolha fica salva neste navegador.
 */
const STORAGE_KEY = "theme";
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

function savedTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
}

function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme ?? (systemDark.matches ? "dark" : "light")
  );

  useEffect(() => {
    function onSystemChange(event) {
      if (savedTheme()) return;
      const next = event.matches ? "dark" : "light";
      applyTheme(next);
      setTheme(next);
    }
    systemDark.addEventListener("change", onSystemChange);
    return () => systemDark.removeEventListener("change", onSystemChange);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Navegação privada ou armazenamento bloqueado: vale só para esta visita
    }
  }

  const dark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}
      title={dark ? "Modo claro" : "Modo escuro"}
      onClick={toggle}
    >
      {dark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
    </button>
  );
}

export default ThemeToggle;
