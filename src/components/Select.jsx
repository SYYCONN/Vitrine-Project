import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import "../styles/Select.css";

/*
 * Select próprio, com o visual do site.
 * Segue o padrão "select-only combobox" da WAI-ARIA:
 * ↑ ↓ navegam, Enter/Espaço escolhem, Home/End vão às pontas,
 * uma letra pula para a opção que começa com ela, Esc/Tab fecham.
 */
function Select({ label, name, value, options, onChange, className = "" }) {
  const id = useId();
  const buttonRef = useRef(null);
  const rootRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const selectedIndex = Math.max(0, options.findIndex((option) => option.value === value));
  const selected = options[selectedIndex];

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event) {
      if (!rootRef.current.contains(event.target)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  function show(index = selectedIndex) {
    setActive(index);
    setOpen(true);
  }

  function choose(index) {
    onChange({ target: { name, value: options[index].value } });
    setOpen(false);
    buttonRef.current.focus();
  }

  function onKeyDown(event) {
    const last = options.length - 1;
    const keys = {
      ArrowDown: () => (open ? setActive(Math.min(active + 1, last)) : show()),
      ArrowUp: () => (open ? setActive(Math.max(active - 1, 0)) : show()),
      Home: () => open && setActive(0),
      End: () => open && setActive(last),
      Enter: () => (open ? choose(active) : show()),
      " ": () => (open ? choose(active) : show()),
      Escape: () => open && setOpen(false),
    };

    if (event.key === "Tab") {
      setOpen(false);
      return;
    }

    if (keys[event.key]) {
      // Sem isso, o Esc também fecharia o modal onde o select está
      if (event.key !== "Escape" || open) {
        event.preventDefault();
        event.stopPropagation();
      }
      keys[event.key]();
      return;
    }

    if (event.key.length === 1) {
      const letter = event.key.toLowerCase();
      const start = open ? active : selectedIndex;
      const order = [...options.keys()].map((step) => (start + 1 + step) % options.length);
      const match = order.find((index) => options[index].label.toLowerCase().startsWith(letter));
      if (match === undefined) return;
      if (open) setActive(match);
      else onChange({ target: { name, value: options[match].value } });
    }
  }

  return (
    <div ref={rootRef} className={`select ${className}`} data-open={open || undefined}>
      <span id={`${id}-label`} className="select-label">{label}</span>
      <button
        ref={buttonRef}
        type="button"
        className="select-button"
        role="combobox"
        aria-labelledby={`${id}-label`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-list`}
        aria-activedescendant={open ? `${id}-option-${active}` : undefined}
        onClick={() => (open ? setOpen(false) : show())}
        onKeyDown={onKeyDown}
      >
        <span>{selected.label}</span>
        <ChevronDown size={18} aria-hidden="true" className="select-chevron" />
      </button>
      <ul
        id={`${id}-list`}
        className="select-list"
        role="listbox"
        aria-labelledby={`${id}-label`}
        tabIndex={-1}
        hidden={!open}
      >
        {options.map((option, index) => (
          <li
            key={option.value}
            id={`${id}-option-${index}`}
            role="option"
            aria-selected={index === selectedIndex}
            data-active={index === active || undefined}
            onPointerEnter={() => setActive(index)}
            onPointerDown={(event) => event.preventDefault()}
            onClick={() => choose(index)}
          >
            <span>{option.label}</span>
            {index === selectedIndex && <Check size={16} aria-hidden="true" />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Select;
