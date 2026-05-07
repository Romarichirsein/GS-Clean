import { Smartphone } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "32499469093"; // International format for WhatsApp
  const message = "Bonjour GS Clean, je souhaiterais obtenir des informations sur vos services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 group"
      aria-label="Contact on WhatsApp"
    >
      <div className="flex items-center space-x-3">
        <div className="bg-white dark:bg-zinc-800 px-4 py-2 rounded-full shadow-2xl border border-zinc-100 dark:border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 hidden md:block">
          <span className="text-sm font-bold text-zinc-900 dark:text-white whitespace-nowrap">Discutez avec nous !</span>
        </div>
        <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-all ring-4 ring-white/50 dark:ring-zinc-950/50">
          <Smartphone size={32} />
        </div>
      </div>
    </a>
  );
}
