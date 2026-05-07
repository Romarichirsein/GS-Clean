import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, Facebook, Instagram, ArrowRight, Clock } from "lucide-react";

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "https://web.facebook.com/profile.php?id=61587239757735&_rdc=1&_rdr#", label: "Facebook" },
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/gs_clean31/", label: "Instagram" },
    { icon: <TikTokIcon size={18} />, href: "https://www.tiktok.com/@gs_clean31", label: "TikTok" }
  ];

  const isOpen = () => {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 1-5 is Mon-Fri, 6 is Saturday
    const hours = now.getHours();
    return day >= 1 && day <= 5 && hours >= 8 && hours < 18;
  };

  const status = isOpen();

  return (
    <footer className="bg-zinc-50 dark:bg-zinc-900 pt-24 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/logo.png" 
                alt="GS Clean Logo" 
                className="w-16 h-16 object-contain group-hover:scale-110 transition-transform"
              />
              <div className="flex flex-col">
                <span className="font-display font-black text-xl tracking-tighter dark:text-white leading-none">
                  GS CLEAN
                </span>
                <span className="text-[7px] font-black uppercase tracking-[0.3em] text-blue-600 leading-none mt-1">
                  Le souci du détail
                </span>
              </div>
            </Link>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
              {t("hero.subtitle")} Le souci du détail est notre priorité absolue pour votre satisfaction.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, i) => (
                <a 
                  key={i} 
                  href={link.href} 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label={link.label}
                  className="p-2 bg-white dark:bg-zinc-800 rounded-full shadow-sm hover:scale-110 hover:text-blue-600 transition-all"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-6 uppercase text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-zinc-500 dark:text-zinc-400 hover:text-blue-600 transition-colors text-sm">Accueil</Link></li>
              <li><Link to="/services" className="text-zinc-500 dark:text-zinc-400 hover:text-blue-600 transition-colors text-sm">Services</Link></li>
              <li><Link to="/about" className="text-zinc-500 dark:text-zinc-400 hover:text-blue-600 transition-colors text-sm">À Propos</Link></li>
              <li><Link to="/quote" className="text-zinc-500 dark:text-zinc-400 hover:text-blue-600 transition-colors text-sm">Demander un devis</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-6 uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-zinc-500 dark:text-zinc-400 text-sm">
                <MapPin size={18} className="text-blue-600 shrink-0" />
                <span>7110 La Louvière, Belgique</span>
              </li>
              <li className="flex items-center space-x-3 text-zinc-500 dark:text-zinc-400 text-sm">
                <Phone size={18} className="text-blue-600 shrink-0" />
                <a href="https://wa.me/32499469093" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
                  0499 46 90 93 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center space-x-3 text-zinc-500 dark:text-zinc-400 text-sm">
                <Mail size={18} className="text-blue-600 shrink-0" />
                <a href="mailto:gsclean31@gmail.com" className="hover:text-blue-600 transition-colors">
                  gsclean31@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-8 space-y-3">
              <h4 className="font-bold text-zinc-900 dark:text-white uppercase text-[10px] tracking-[0.2em] opacity-50">Horaires d'ouverture</h4>
              <div className="flex items-center justify-between bg-white dark:bg-zinc-800/50 p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm">
                <div className="flex items-center space-x-3">
                  <Clock size={16} className="text-blue-600" />
                  <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">Lun - Ven: 08:00 - 18:00</span>
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full ${
                  status 
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-500" 
                    : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-500"
                }`}>
                  {status ? "Disponible" : "Fermé"}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-6 uppercase text-xs tracking-widest">Newsletter</h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">Restez informé de nos offres exclusives.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="w-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white"
              />
              <button className="absolute right-2 top-2 p-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-zinc-400 text-xs">
          <p>{t("footer.rights")} BE1032943102</p>
          <p className="font-medium tracking-wide">{t("footer.agency")}</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-zinc-600 transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-zinc-600 transition-colors">Conditions générales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
