import { useState, FormEvent, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle, Calculator, Building2, User, Mail, Smartphone, MapPin, MessageSquare, Sparkles, Loader2 } from "lucide-react";
import Breadcrumbs from "../components/UI/Breadcrumbs";

export default function Quote() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);

  const loadingSteps = [
    "Validation des données...",
    "Calcul de l'estimation optimale...",
    "Vérification des disponibilités...",
    "Finalisation de votre dossier..."
  ];

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setLoadingStep((prev) => (prev < loadingSteps.length - 1 ? prev + 1 : prev));
      }, 500);
      return () => clearInterval(interval);
    } else {
      setLoadingStep(0);
    }
  }, [loading]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2800);
  };

  return (
    <div className="min-h-screen pt-40 pb-20 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Calculator size={14} />
              <span>Devis Gratuit & Sans engagement</span>
            </div>
            <h1 className="text-6xl font-display font-bold tracking-tighter dark:text-white leading-tight">
              Combien coûtera votre nettoyage ?
            </h1>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-md leading-relaxed">
              Remplissez ce formulaire détaillé pour nous permettre de vous proposer l'offre la plus juste et la plus compétitive du marché.
            </p>
            
            <div className="space-y-6 pt-8">
              {[
                { title: "Réponse Rapide", desc: "Estimation sous 24h ouvrées par e-mail ou téléphone.", icon: <CheckCircle className="text-green-500" /> },
                { title: "Tarifs Transparents", desc: "Aucun frais caché, tout est inclus dans le devis initial.", icon: <CheckCircle className="text-green-500" /> },
                { title: "Conseil Expert", desc: "Nous vous guidons sur les meilleures options pour votre espace.", icon: <CheckCircle className="text-green-500" /> }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold dark:text-white">{item.title}</h4>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-[48px] shadow-2xl shadow-zinc-200/50 dark:shadow-none border border-zinc-100 dark:border-zinc-800"
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Nom Complet</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                          <input 
                            required
                            type="text" 
                            placeholder="Jean Dupont"
                            className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 transition-all dark:text-white"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Email</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                          <input 
                            required
                            type="email" 
                            placeholder="jean@exemple.com"
                            className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 transition-all dark:text-white"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Téléphone</label>
                        <div className="relative">
                          <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                          <input 
                            required
                            type="tel" 
                            placeholder="0499 00 00 00"
                            className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 transition-all dark:text-white"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Localité</label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                          <select 
                            className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 transition-all dark:text-white appearance-none cursor-pointer"
                            defaultValue=""
                            required
                          >
                            <option value="" disabled>Choisir votre ville</option>
                            <option value="la-louviere">La Louvière</option>
                            <option value="mons">Mons</option>
                            <option value="nivelles">Nivelles</option>
                            <option value="autre">Autre (Proche)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Service Souhaité</label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {[
                          { id: "vitres", label: "Vitres / Solaire", icon: <Building2 size={16} /> },
                          { id: "tissus", label: "Tissus", icon: <CheckCircle size={16} /> },
                          { id: "chantier", label: "Fin de chantier", icon: <Building2 size={16} /> }
                        ].map((service) => (
                          <label key={service.id} className="relative group cursor-pointer">
                            <input type="radio" name="service" className="peer sr-only" required />
                            <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-2xl flex flex-col items-center justify-center space-y-2 peer-checked:bg-blue-600 peer-checked:text-white group-hover:scale-105 transition-all outline-none">
                              {service.icon}
                              <span className="text-xs font-bold">{service.label}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Précisions supplémentaires</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 text-zinc-400" size={18} />
                        <textarea 
                          rows={4}
                          placeholder="Dites-nous en plus sur la surface, le type de salissures, vos contraintes horaires..."
                          className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 transition-all dark:text-white resize-none"
                        ></textarea>
                      </div>
                    </div>

                    <button 
                      type="submit"
                      disabled={loading}
                      className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold flex items-center justify-center space-x-3 shadow-xl transition-all disabled:opacity-80 transform hover:scale-[1.02] active:scale-95"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={loadingStep}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="text-sm"
                            >
                              {loadingSteps[loadingStep]}
                            </motion.span>
                          </AnimatePresence>
                        </>
                      ) : (
                        <>
                          <span>Envoyer la demande</span>
                          <Send size={18} />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[10px] text-zinc-400 uppercase tracking-widest mt-4">
                      En envoyant ce formulaire, vous acceptez d'être recontacté exclusivement pour votre demande de devis.
                    </p>
                  </form>
                </motion.div>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                  className="bg-white dark:bg-zinc-900 p-12 rounded-[48px] shadow-2xl text-center space-y-8 border border-zinc-100 dark:border-zinc-800 overflow-hidden relative"
                >
                  {/* Decorative Sparkles */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="absolute top-10 left-10 text-blue-500/20"
                  >
                    <Sparkles size={64} />
                  </motion.div>
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute bottom-10 right-10 text-blue-500/20"
                  >
                    <Sparkles size={64} />
                  </motion.div>

                  <div className="relative">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 500, 
                        damping: 15,
                        delay: 0.2
                      }}
                      className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle size={48} />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h2 className="text-4xl font-display font-bold dark:text-white mb-4">Demande envoyée !</h2>
                      <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
                        Merci pour votre confiance. Notre équipe analysera votre demande et vous contactera par e-mail dans les plus brefs délais (généralement sous 24h).
                      </p>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="pt-4"
                  >
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="px-10 py-4 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 rounded-2xl font-bold shadow-xl hover:scale-105 active:scale-95 transition-all"
                    >
                      Faire une autre demande
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
