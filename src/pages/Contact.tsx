import { useState, FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Clock, Calendar, CheckCircle, Send, Landmark, ChevronLeft, ChevronRight, Loader2, PartyPopper, MessageCircle, Facebook, Instagram, Sparkles } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Breadcrumbs from "../components/UI/Breadcrumbs";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
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

export default function Contact() {
  const { t, i18n } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!selectedDate) {
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-40 pb-20 bg-white dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <Breadcrumbs />
      </div>
      {/* Contact Head */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">{t("contact_page.badge")}</p>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight dark:text-white">{t("contact_page.title")}</h1>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            {t("contact_page.subtitle")}
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32 text-balance">
        {/* Info Cards */}
        {[
          { 
            icon: <Phone size={24} />, 
            title: t("contact_page.phone_title"), 
            value: "0499 46 90 93", 
            sub: "WhatsApp Disponible",
            href: "https://wa.me/32499469093"
          },
          { 
            icon: <Mail size={24} />, 
            title: t("contact_page.email_title"), 
            value: "gsclean31@gmail.com", 
            sub: "Réponse sous 24h",
            href: "mailto:gsclean31@gmail.com"
          },
          { 
            icon: <MapPin size={24} />, 
            title: t("contact_page.loc_title"), 
            value: "7110 La Louvière", 
            sub: "Mons, Nivelles & alentours",
            href: "https://maps.google.com/?q=La+Louviere"
          }
        ].map((info, i) => (
          <motion.a
            key={i}
            href={info.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group flex flex-col items-center p-10 rounded-[32px] bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-center hover:shadow-2xl hover:shadow-blue-500/5 transition-all"
          >
            <div className="w-16 h-16 bg-white dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
              {info.icon}
            </div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">{info.title}</h3>
            <p className="text-2xl font-bold dark:text-white mb-1">{info.value}</p>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">{info.sub}</p>
          </motion.a>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Reservation Form */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-[48px] shadow-2xl shadow-zinc-100 dark:shadow-none border border-zinc-100 dark:border-zinc-800 relative min-h-[500px] overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                className="text-center py-20 space-y-8"
              >
                <div className="relative inline-block">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 bg-green-500 rounded-full"
                  />
                  <div className="relative w-32 h-32 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-xl ring-8 ring-green-50 dark:ring-green-900/10">
                    <CheckCircle size={64} />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-display font-bold dark:text-white flex items-center justify-center space-x-3">
                    <span>{t("contact_page.success")}</span>
                    <PartyPopper size={32} className="text-yellow-500" />
                  </h2>
                  <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
                    {t("contact_page.success_msg")}
                  </p>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSubmitted(false);
                    setSelectedDate(null);
                  }}
                  className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 inline-flex items-center space-x-3"
                >
                  <Send size={20} />
                  <span>{t("contact_page.another_request")}</span>
                </motion.button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-10 relative z-10"
              >
                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-display font-bold dark:text-white mb-2">{t("contact_page.form_title")}</h2>
                  <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">{t("contact_page.form_subtitle")}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 ml-1">{t("contact_page.name_label")}</label>
                    <input 
                      required 
                      type="text" 
                      placeholder={t("contact_page.placeholders.name")} 
                      className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-2 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-zinc-800 rounded-3xl py-5 px-8 transition-all dark:text-white outline-none text-lg shadow-sm" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 ml-1">{t("contact_page.phone_label")}</label>
                    <input 
                      required 
                      type="tel" 
                      placeholder={t("contact_page.placeholders.phone")} 
                      className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-2 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-zinc-800 rounded-3xl py-5 px-8 transition-all dark:text-white outline-none text-lg shadow-sm" 
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 ml-1">{t("contact_page.date_label")}</label>
                  <div className="bg-zinc-50 dark:bg-zinc-900 rounded-[32px] p-8 lg:p-10 border border-zinc-100 dark:border-zinc-800 shadow-sm transition-all hover:shadow-xl hover:shadow-blue-500/5 ring-1 ring-black/5">
                    <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
                      <h4 className="font-bold text-lg dark:text-white flex items-center space-x-3">
                        <Calendar size={22} className="text-blue-600" />
                        <span>{t("contact_page.select_day")}</span>
                      </h4>
                      <div className="flex items-center space-x-3 bg-white dark:bg-zinc-800 p-1.5 rounded-2xl shadow-sm">
                        <button 
                          type="button" 
                          onClick={() => {
                            const newDate = new Date(currentMonth);
                            newDate.setMonth(newDate.getMonth() - 1);
                            setCurrentMonth(newDate);
                          }}
                          className="p-2.5 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-xl transition-colors dark:text-white"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <span className="text-sm font-black uppercase tracking-[0.1em] self-center dark:text-white min-w-[140px] text-center">
                          {currentMonth.toLocaleString(i18n.language, { month: 'long', year: 'numeric' })}
                        </span>
                        <button 
                          type="button" 
                          onClick={() => {
                            const newDate = new Date(currentMonth);
                            newDate.setMonth(newDate.getMonth() + 1);
                            setCurrentMonth(newDate);
                          }}
                          className="p-2.5 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-xl transition-colors dark:text-white"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-7 gap-3 text-center mb-6">
                      {['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'].map(d => (
                        <span key={d} className="text-[10px] font-black text-zinc-400 lg:text-zinc-500 uppercase tracking-widest">{d}</span>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-7 gap-3">
                      {Array.from({ length: getDaysInMonth(currentMonth) }).map((_, i) => {
                        const day = i + 1;
                        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                        const isToday = new Date().toDateString() === date.toDateString();
                        const isSelected = selectedDate?.toDateString() === date.toDateString();
                        const isPast = date < new Date(new Date().setHours(0,0,0,0));
                        const isWeekend = date.getDay() === 0 || date.getDay() === 6;

                        return (
                          <button
                            key={day}
                            type="button"
                            disabled={isPast}
                            onClick={() => setSelectedDate(date)}
                            className={cn(
                              "aspect-square text-sm font-black rounded-2xl transition-all flex flex-col items-center justify-center relative group overflow-hidden border-2",
                              isPast 
                                ? "text-zinc-200 dark:text-zinc-800 border-transparent cursor-not-allowed bg-transparent" 
                                : isSelected 
                                  ? "bg-blue-600 text-white shadow-2xl scale-110 z-10 border-blue-400 ring-4 ring-blue-500/20" 
                                  : cn(
                                      "border-transparent hover:scale-105 hover:bg-white dark:hover:bg-zinc-800 hover:border-blue-200 dark:hover:border-blue-900 hover:shadow-md",
                                      isToday 
                                        ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 border-blue-100 dark:border-blue-800" 
                                        : "text-zinc-600 dark:text-zinc-400 bg-white/50 dark:bg-zinc-800/30"
                                    )
                            )}
                          >
                            <span className="relative z-10">{day}</span>
                            {!isPast && !isSelected && !isWeekend && (
                              <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-green-500 rounded-full shadow-sm" title="Disponible" />
                            )}
                            {isSelected && (
                              <motion.div 
                                layoutId="active-date-bg"
                                className="absolute inset-0 bg-blue-600"
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {selectedDate && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10, height: 0 }} 
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl flex items-center space-x-3 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900"
                      >
                        <Sparkles size={20} className="shrink-0" />
                        <p className="text-sm font-bold">
                          {t("contact_page.selected_date")} : {selectedDate.toLocaleDateString(i18n.language, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 ml-1">{t("contact_page.msg_label")}</label>
                  <textarea 
                    rows={4} 
                    placeholder={t("contact_page.placeholders.msg")} 
                    className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-2 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-zinc-800 rounded-3xl py-5 px-8 transition-all dark:text-white outline-none resize-none text-lg shadow-sm"
                  ></textarea>
                </div>

                <motion.button 
                  disabled={isSubmitting || !selectedDate}
                  whileHover={!isSubmitting && selectedDate ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting && selectedDate ? { scale: 0.98 } : {}}
                  type="submit" 
                  className={cn(
                    "w-full py-6 rounded-3xl font-black flex items-center justify-center space-x-4 shadow-2xl transition-all text-xl uppercase tracking-widest",
                    isSubmitting 
                      ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-400 cursor-not-allowed shadow-none" 
                      : !selectedDate
                        ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-300 dark:text-zinc-700 cursor-not-allowed shadow-none"
                        : "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/30 ring-4 ring-blue-500/10"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={24} className="animate-spin" />
                      <span>Envoi...</span>
                    </>
                  ) : (
                    <>
                      <span>{t("contact_page.cta")}</span>
                      <Send size={24} />
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Administration Info */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12 py-6"
        >
          <div className="space-y-8">
            <h3 className="text-3xl font-display font-bold dark:text-white">{t("contact_page.biz_info")}</h3>
            <div className="space-y-5">
              {[
                { icon: <Landmark size={24} />, label: t("contact_page.biz_tva"), value: "BE1032943102" },
                { icon: <MapPin size={24} />, label: "Siège social", value: "7110 La Louvière, Belgique" },
                { icon: <Clock size={24} />, label: "Bureau", value: "064 70 01 14" }
              ].map((info, i) => (
                <div key={i} className="flex items-center space-x-6 p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 transition-all hover:bg-white dark:hover:bg-zinc-800 hover:shadow-lg">
                  <div className="p-4 bg-white dark:bg-zinc-800 rounded-2xl text-blue-600 shadow-sm">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-1">{info.label}</p>
                    <p className="font-bold text-lg dark:text-white">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 rounded-[48px] bg-gradient-to-br from-blue-600 to-blue-800 text-white space-y-8 shadow-2xl shadow-blue-600/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150" />
            
            <div className="relative z-10 space-y-6">
              <h4 className="text-2xl font-display font-bold uppercase tracking-tight">Intervention Express</h4>
              <p className="text-blue-100 leading-relaxed text-lg">
                Pour les dégâts des eaux ou les besoins urgents sous 4h, contactez-nous directement pour une priorité maximale.
              </p>
              
              <div className="flex flex-col space-y-4">
                <motion.a 
                  whileHover={{ x: 10 }}
                  href="tel:0499469093" 
                  className="flex items-center justify-between p-5 bg-white text-blue-600 rounded-3xl font-black uppercase tracking-widest shadow-xl"
                >
                  <div className="flex items-center space-x-3">
                    <Phone size={20} />
                    <span>Appel direct</span>
                  </div>
                  <ChevronRight size={20} />
                </motion.a>
                
                <motion.a 
                  whileHover={{ x: 10 }}
                  href="https://wa.me/32499469093" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-between p-5 bg-green-500 text-white rounded-3xl font-black uppercase tracking-widest shadow-xl"
                >
                  <div className="flex items-center space-x-3">
                    <MessageCircle size={20} />
                    <span>WhatsApp</span>
                  </div>
                  <ChevronRight size={20} />
                </motion.a>
              </div>
            </div>
            
            <div className="pt-10 border-t border-white/10 relative z-10">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-200 mb-6 text-center">Réseaux Sociaux</p>
              <div className="flex justify-center space-x-6">
                {[
                  { icon: <Facebook size={24} />, href: "https://web.facebook.com/profile.php?id=61587239757735", label: "Facebook" },
                  { icon: <Instagram size={24} />, href: "https://www.instagram.com/gs_clean31/", label: "Instagram" },
                  { icon: <TikTokIcon size={24} />, href: "https://www.tiktok.com/@gs_clean31", label: "TikTok" }
                ].map((social, i) => (
                  <motion.a 
                    key={i} 
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    href={social.href} 
                    target="_blank" 
                    rel="noreferrer" 
                    aria-label={social.label} 
                    className="p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all border border-white/5"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
