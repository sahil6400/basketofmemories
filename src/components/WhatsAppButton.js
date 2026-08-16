import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/data/site";

export function WhatsAppInlineButton({ message, label = "Enquire on WhatsApp", className = "" }) {
  const href = buildWhatsAppLink(message);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp px-4 py-2.5 text-sm justify-center w-full ${className}`}
    >
      <MessageCircle size={17} strokeWidth={2.4} />
      {label}
    </a>
  );
}

export function WhatsAppFloatingButton({ message }) {
  const href = buildWhatsAppLink(message);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Basket of Memories on WhatsApp"
      className="fixed bottom-5 right-5 z-50 btn-whatsapp w-14 h-14 !rounded-full !p-0 flex items-center justify-center animate-pulse-soft"
    >
      <MessageCircle size={28} strokeWidth={2.2} />
    </a>
  );
}
