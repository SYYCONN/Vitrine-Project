import { useCallback, useEffect, useRef, useState } from "react";
import { CircleCheck, X } from "lucide-react";
import Select from "./Select.jsx";
import "../styles/Contact.css";

/*
 * Modal de contato.
 * Abre ao clicar em qualquer elemento com o atributo data-contact
 * (o valor escolhe o assunto) ou quando a URL termina em #contato.
 * O envio vai para o Netlify Forms; o formulário "contato" também
 * existe escondido no index.html para o Netlify reconhecê-lo no deploy.
 */

const FORM_NAME = "contato";

const subjects = {
  "landing-page": "Quero uma landing page",
  profissionais: "Rede de profissionais",
  duvida: "Outra dúvida",
};

const subjectOptions = Object.entries(subjects).map(([value, label]) => ({ value, label }));

const emptyForm = {
  nome: "",
  negocio: "",
  cidade: "",
  contato: "",
  assunto: "landing-page",
  mensagem: "",
  consentimento: false,
};

function ContactModal() {
  const dialogRef = useRef(null);
  const firstFieldRef = useRef(null);
  const startedOnBackdrop = useRef(false);
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle");
  const [closing, setClosing] = useState(false);

  const open = useCallback((subject) => {
    const dialog = dialogRef.current;
    if (subjects[subject]) setForm((current) => ({ ...current, assunto: subject }));
    setStatus((current) => (current === "sent" ? "idle" : current));
    if (!dialog.open) dialog.showModal();
    requestAnimationFrame(() => firstFieldRef.current?.focus());
  }, []);

  useEffect(() => {
    function onClick(event) {
      const trigger = event.target.closest("[data-contact]");
      if (!trigger) return;
      event.preventDefault();
      open(trigger.dataset.contact);
    }

    document.addEventListener("click", onClick);
    const frame = window.location.hash === "#contato" ? requestAnimationFrame(() => open()) : 0;
    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
    };
  }, [open]);

  function close() {
    setClosing(true);
  }

  function update(event) {
    const { name, type, value, checked } = event.target;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
  }

  async function submit(event) {
    event.preventDefault();
    setStatus("sending");

    const body = new URLSearchParams({
      "form-name": FORM_NAME,
      ...form,
      assunto: subjects[form.assunto],
      consentimento: form.consentimento ? "sim" : "não",
      "bot-field": event.currentTarget.elements["bot-field"].value,
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setForm(emptyForm);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <dialog
      ref={dialogRef}
      className="contact-modal"
      aria-labelledby="contact-title"
      data-closing={closing || undefined}
      onCancel={(event) => {
        event.preventDefault();
        close();
      }}
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget && event.animationName === "contact-exit") {
          event.currentTarget.close();
        }
      }}
      onClose={() => setClosing(false)}
      onPointerDown={(event) => { startedOnBackdrop.current = event.target === event.currentTarget; }}
      onClick={(event) => {
        if (startedOnBackdrop.current && event.target === event.currentTarget) close();
        startedOnBackdrop.current = false;
      }}
    >
      <div className="contact-panel">
        <button type="button" className="contact-close" aria-label="Fechar" onClick={close}>
          <X size={20} aria-hidden="true" />
        </button>

        {status === "sent" ? (
          <div className="contact-success" role="status">
            <CircleCheck size={48} strokeWidth={1.5} aria-hidden="true" />
            <h2 id="contact-title">Recebemos sua mensagem!</h2>
            <p>A equipe da Vitrine vai entrar em contato pelo e-mail ou telefone que você informou.</p>
            <button type="button" className="contact-submit" onClick={close}>Fechar</button>
          </div>
        ) : (
          <>
            <div className="contact-header">
              <span className="section-title">Fale com a Vitrine</span>
              <h2 id="contact-title">Quer uma página para o seu negócio?</h2>
              <p>Preencha os campos e a nossa equipe entra em contato com você.</p>
            </div>

            <form
              className="contact-form"
              name={FORM_NAME}
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={submit}
            >
              <input type="hidden" name="form-name" value={FORM_NAME} />
              <p className="contact-honeypot" aria-hidden="true">
                <label>Não preencha este campo: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
              </p>

              <Select
                className="contact-field contact-field-full"
                label="Assunto"
                name="assunto"
                value={form.assunto}
                options={subjectOptions}
                onChange={update}
              />

              <label className="contact-field">
                <span>Seu nome</span>
                <input ref={firstFieldRef} name="nome" value={form.nome} onChange={update} autoComplete="name" required />
              </label>

              <label className="contact-field">
                <span>Cidade</span>
                <input name="cidade" value={form.cidade} onChange={update} autoComplete="address-level2" required />
              </label>

              <label className="contact-field contact-field-full">
                <span>Negócio e ramo</span>
                <input name="negocio" value={form.negocio} onChange={update} placeholder="Ex.: Doceria da Ana — confeitaria" required />
              </label>

              <label className="contact-field contact-field-full">
                <span>E-mail ou telefone</span>
                <input name="contato" value={form.contato} onChange={update} placeholder="Como prefere que a gente fale com você" required />
              </label>

              <label className="contact-field contact-field-full">
                <span>Conte o que você precisa <small>(opcional)</small></span>
                <textarea name="mensagem" rows={3} value={form.mensagem} onChange={update} />
              </label>

              <label className="contact-consent contact-field-full">
                <input type="checkbox" name="consentimento" checked={form.consentimento} onChange={update} required />
                <span>Concordo que a Vitrine use esses dados apenas para responder ao meu pedido.</span>
              </label>

              {status === "error" && (
                <p className="contact-error contact-field-full" role="alert">
                  Não foi possível enviar agora. Tente novamente em instantes.
                </p>
              )}

              <button type="submit" className="contact-submit contact-field-full" disabled={sending}>
                {sending ? "Enviando..." : "Enviar mensagem"}
              </button>
            </form>
          </>
        )}
      </div>
    </dialog>
  );
}

export default ContactModal;
