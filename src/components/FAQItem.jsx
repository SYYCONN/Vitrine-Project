import { Plus } from "lucide-react";

function FAQItem({ question, children }) {
  return (
    <details className="faq-item" name="faq">
      <summary>
        <span>{question}</span>
        <span className="faq-icon" aria-hidden="true">
          <Plus size={18} strokeWidth={2} />
        </span>
      </summary>
      <div className="faq-answer">{children}</div>
    </details>
  );
}

export default FAQItem;
