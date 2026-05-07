import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon, Languages, Menu, X, Smartphone, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith("fr") ? "en" : "fr";
    i18n.changeLanguage(newLang);
    showFeedback(newLang === "fr" ? "Français" : "English");
  };

  const [feedback, setFeedback] = useState<string | null>(null);

  const showFeedback = (msg: string) => {
    setFeedback(msg);
    setTimeout(() => setFeedback(null), 2000);
  };

  const handleToggleTheme = () => {
    toggleTheme();
    showFeedback(theme === "light" ? "Mode Sombre" : "Mode Clair");
  };

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.realisations"), path: "/realisations" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.quote"), path: "/quote" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      {/* feedback message */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full shadow-2xl font-bold text-sm flex items-center space-x-3"
          >
            <Sparkles size={16} className="text-blue-400" />
            <span>{feedback}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <img 
            src="/logo.png" 
            alt="GS Clean Logo" 
            className="w-14 h-14 object-contain group-hover:scale-110 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-display font-black text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 leading-none">
              GS CLEAN
            </span>
            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-blue-600 leading-none mt-1">
              Le souci du détail
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400",
                  location.pathname === link.path
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-zinc-600 dark:text-zinc-400"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800" />

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400"
              aria-label="Toggle language"
            >
              <Languages size={20} />
            </button>
            <button
              onClick={handleToggleTheme}
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <Link
              to="/quote"
              className="px-5 py-2.5 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 rounded-full text-sm font-bold shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              {t("nav.book")}
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center space-x-4">
          <button
            onClick={handleToggleTheme}
            className="p-2 text-zinc-600 dark:text-zinc-400"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-zinc-600 dark:text-zinc-400"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 shadow-2xl lg:hidden"
          >
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium p-2 text-zinc-600 dark:text-zinc-400"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-900 flex justify-between items-center">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 text-zinc-600 dark:text-zinc-400"
                >
                  <Languages size={20} />
                  <span>{i18n.language.startsWith("fr") ? "English" : "Français"}</span>
                </button>
                <Link
                  to="/quote"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg"
                >
                  {t("nav.book")}
                </Link>
              </div>
              <div className="pt-4 flex items-center space-x-2 text-sm text-zinc-500">
                <Smartphone size={16} />
                <a href="https://wa.me/32499469093" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
                  0499 46 90 93
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
