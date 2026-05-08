import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2, Star as StarIcon, ShieldCheck, Clock, Award, Users, ChevronRight, Zap, Sun, Smartphone, Quote as QuoteIcon, Camera, Filter, HelpCircle, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Breadcrumbs from "../components/UI/Breadcrumbs";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};


const galleryImages = [
  { id: 1, category: "windows", src: "/images/Capture d'écran 2026-05-07 055001.png", title: "Vitrage Commercial" },
  { id: 2, category: "fabrics", src: "/images/Capture d'écran 2026-05-07 054924.png", title: "Canapé Textile" },
  { id: 3, category: "construction", src: "/images/Capture d'écran 2026-05-07 054822.png", title: "Appartement neuf" },
  { id: 4, category: "windows", src: "/images/656010950_122114372103241325_9105145638804172464_n.jpg", title: "Baies vitrées" },
  { id: 5, category: "fabrics", src: "/images/Capture d'écran 2026-05-07 055043.png", title: "Chaises de bureau" },
  { id: 6, category: "construction", src: "/images/659811305_122114372127241325_4961321725729247414_n.jpg", title: "Maison rénovée" }
];

export default function Home() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");

  const pricingPacks = [
    {
      name: t("pricing.pack1_name"),
      price: "149",
      description: t("pricing.pack1_desc"),
      features: [
        t("services.windows.title"),
        t("engagements.q1"),
        t("pricing.f_ext_edges"),
        t("pricing.f_7days")
      ],
      glowColor: "from-blue-500/20 to-transparent",
      borderColor: "border-blue-500/20"
    },
    {
      name: t("pricing.pack2_name"),
      price: "299",
      description: t("pricing.pack2_desc"),
      features: [
        t("pricing.f_all_basic"),
        t("services.fabrics.title"),
        t("pricing.f_glass_treatment"),
        t("pricing.f_deep_fabrics"),
        t("pricing.f_48h")
      ],
      glowColor: "from-blue-400/40 to-transparent",
      borderColor: "border-blue-400/40",
      popular: true
    },
    {
      name: t("pricing.pack3_name"),
      price: "499",
      description: t("pricing.pack3_desc"),
      features: [
        t("pricing.f_all_premium"),
        t("services.construction.title"),
        t("pricing.f_post_renovation"),
        t("pricing.f_residue_removal"),
        t("pricing.f_dedicated_team")
      ],
      glowColor: "from-blue-300/20 to-transparent",
      borderColor: "border-blue-300/20"
    }
  ];

  const translatedTestimonials = [
    {
      name: t("testimonials.t1_name"),
      location: "Mons",
      quote: t("testimonials.t1_quote"),
      rating: 5
    },
    {
      name: t("testimonials.t2_name"),
      location: "La Louvière",
      quote: t("testimonials.t2_quote"),
      rating: 5
    },
    {
      name: t("testimonials.t3_name"),
      location: "Nivelles",
      quote: t("testimonials.t3_quote"),
      rating: 5
    },
    {
      name: t("testimonials.t4_name"),
      location: "Charleroi",
      quote: t("testimonials.t4_quote"),
      rating: 5
    },
    {
      name: t("testimonials.t5_name"),
      location: "Namur",
      quote: t("testimonials.t5_quote"),
      rating: 5
    },
    {
      name: t("testimonials.t6_name"),
      location: "Manage",
      quote: t("testimonials.t6_quote"),
      rating: 5
    }
  ];

  const faqs = [
    {
      question: t("faq.q1", "Quelles zones géographiques couvrez-vous précisément ?"),
      answer: t("faq.a1", "Nous intervenons principalement dans les régions de La Louvière, Mons et Nivelles.")
    },
    {
      question: t("faq.q2", "Fournissez-vous tout le matériel de nettoyage ?"),
      answer: t("faq.a2", "Oui, GS Clean apporte tout l'équipement nécessaire : aspirateurs, monobrosses, produits bio.")
    },
    {
      question: t("faq.q3", "Comment se déroule la demande de devis ?"),
      answer: t("faq.a3", "Remplissez le formulaire en ligne ou appelez-nous. Réponse en moins de 24h.")
    }
  ];

  const translatedGallery = galleryImages.map((img, idx) => ({
    ...img,
    displayTitle: t(`gallery.img${idx + 1}`),
    displayCategory: t(`gallery.f_${img.category}`)
  }));

  const filteredImages = activeFilter === "all" 
    ? translatedGallery 
    : translatedGallery.filter(img => img.category === activeFilter);

  return (
    <div className="overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-[60]">
        <Breadcrumbs />
      </div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Zap size={14} />
              <span>Nettoyage professionnel Premium</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] text-zinc-900 dark:text-white">
              {t("hero.title")}
            </h1>
            
            <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-lg leading-relaxed">
              {t("hero.subtitle")} Spécialiste du vitrage, des tissus et des fins de chantier.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/quote"
                className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-2xl shadow-blue-500/20 flex items-center justify-center space-x-2 transition-all hover:scale-105 active:scale-95"
              >
                <span>{t("hero.cta_quote")}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-2xl font-bold flex items-center justify-center hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all"
              >
                {t("hero.cta_services")}
              </Link>
            </div>

            <div className="flex items-center space-x-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center overflow-hidden">
                     <Users size={20} className="text-zinc-400" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-900 dark:text-white">{t("common.satisfaction")}</p>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} size={14} fill="currentColor" />)}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="w-full aspect-square rounded-[40px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-8 border-white dark:border-zinc-800">
              <img 
                src="/images/644251985_122109587787241325_6390650338003336732_n.jpg" 
                alt="Cleaning service profesional" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white dark:bg-zinc-800 p-8 rounded-3xl shadow-2xl border border-zinc-100 dark:border-zinc-700 animate-bounce-slow">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-2xl flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Certification</p>
                  <p className="text-xl font-bold dark:text-white">{t("common.quality_guaranteed")}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar Component */}
      <section className="relative z-20 mt-16 max-w-7xl mx-auto px-6">
        <div className="bg-white dark:bg-zinc-900 rounded-[40px] p-10 md:p-14 shadow-2xl shadow-blue-500/10 border border-zinc-100 dark:border-zinc-800 grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 lg:divide-x divide-zinc-100 dark:divide-zinc-800">
          {[
            { label: t("stats.exp"), value: "10+", sub: "depuis 2014" },
            { label: t("stats.interventions"), value: "1200+", sub: "annuellement" },
            { label: t("stats.agents"), value: "25+", sub: "certifiés" },
            { label: t("stats.zones"), value: "15+", sub: "communes" }
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center space-y-2 lg:px-8"
            >
              <h3 className="text-5xl lg:text-6xl font-display font-black text-blue-600 dark:text-blue-500 tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">{stat.label}</p>
              <p className="text-[10px] text-zinc-300 dark:text-zinc-600 font-medium italic">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Quote Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-white/10 backdrop-blur-xl rounded-[40px] p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest">
                  <Zap size={14} />
                  <span>Devis Express</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                  Estimation rapide <br /><span className="text-blue-200">en 30 secondes.</span>
                </h2>
                <p className="text-blue-100 text-lg">
                  Besoin d'un tarif immédiat ? Indiquez vos besoins et recevez une estimation personnalisée directement.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-blue-600 bg-zinc-200" />
                    ))}
                  </div>
                  <p className="text-sm text-blue-100 font-medium">
                    <span className="font-bold text-white">+50 devis</span> envoyés aujourd'hui
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Services</label>
                      <select className="w-full bg-zinc-50 border-2 border-transparent focus:border-blue-500 rounded-xl px-4 py-3 outline-none text-sm font-medium">
                        <option>Vitres & Châssis</option>
                        <option>Nettoyage Tissus</option>
                        <option>Fin de chantier</option>
                        <option>Autre service</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Surface (approx)</label>
                      <input type="text" placeholder="ex: 50m2" className="w-full bg-zinc-50 border-2 border-transparent focus:border-blue-500 rounded-xl px-4 py-3 outline-none text-sm font-medium" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Votre Téléphone</label>
                    <input type="tel" placeholder="04XX XX XX XX" className="w-full bg-zinc-50 border-2 border-transparent focus:border-blue-500 rounded-xl px-4 py-3 outline-none text-sm font-medium" />
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center space-x-2">
                    <span>Recevoir mon estimation</span>
                    <ArrowRight size={18} />
                  </button>
                  <p className="text-[10px] text-zinc-400 text-center">Estimation gratuite et sans engagement.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center space-y-4 mb-20 text-balance">
            <p className="text-blue-600 font-bold uppercase tracking-widest text-xs">{t("nav.services")}</p>
            <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight dark:text-white">{t("services.title")}</h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
              {t("services.subtitle")}
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { 
                title: t("services.windows.title"), 
                desc: t("services.windows.desc"), 
                icon: <Sun className="text-blue-600" size={32} />,
                img: "/images/Capture d'écran 2026-05-07 054842.png"
              },
              { 
                title: t("services.fabrics.title"), 
                desc: t("services.fabrics.desc"), 
                icon: <Zap className="text-blue-600" size={32} />,
                img: "/images/Capture d'écran 2026-05-07 055043.png"
              },
              { 
                title: t("services.construction.title"), 
                desc: t("services.construction.desc"), 
                icon: <ShieldCheck className="text-blue-600" size={32} />,
                img: "/images/Capture d'écran 2026-05-07 054943.png"
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-[32px] bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-8 hover:shadow-2xl transition-all"
              >
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-16 h-16 bg-white dark:bg-zinc-800 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold dark:text-white mb-4 leading-tight">{service.title}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>
                  <Link 
                    to="/services" 
                    className="inline-flex items-center space-x-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <span>{t("common.learn_more")}</span>
                    <ChevronRight size={16} />
                  </Link>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
                   <img src={service.img} alt="" className="w-full h-full object-cover rounded-bl-[64px]" referrerPolicy="no-referrer" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Nos Engagements Section */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-900 transition-colors border-t border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp} className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest">
                <ShieldCheck size={14} />
                <span>Nos Valeurs</span>
              </div>
              <h2 className="text-5xl font-display font-bold dark:text-white leading-tight">Nos Engagements <br /><span className="text-blue-600">pour votre Excellence.</span></h2>
              <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Chez GS Clean, nous ne nous contentons pas de nettoyer. Nous nous engageons à offrir une expérience exceptionnelle basée sur trois piliers fondamentaux.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Qualité Irréprochable", desc: "Utilisation de machines professionnelles et contrôle rigoureux après chaque passage.", icon: <StarIcon className="text-yellow-500" /> },
                  { title: "Fiabilité & Ponctualité", desc: "Nous respectons scrupuleusement les délais et les créneaux horaires convenus.", icon: <Clock className="text-blue-500" /> },
                  { title: "Écologie Responsable", desc: "Produits biodégradables et respectueux de l'environnement et de votre santé.", icon: <Zap className="text-green-500" /> }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4 p-6 bg-white dark:bg-zinc-800 rounded-3xl border border-zinc-100 dark:border-zinc-700 shadow-sm transition-all"
                  >
                    <div className="shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold dark:text-white">{item.title}</h4>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[64px] overflow-hidden shadow-2xl"
            >
              <img 
                src="/images/657233555_122114372115241325_4439502890147710673_n.jpg" 
                alt="Professional commitment" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-900 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <motion.div {...fadeInUp} className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest">
                <Camera size={14} />
                <span>{t("gallery.badge")}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white">{t("gallery.title")}</h2>
            </motion.div>

            <motion.div {...fadeInUp} className="flex flex-wrap gap-2">
              {[
                { id: "all", label: t("gallery.f_all"), icon: <Filter size={14} /> },
                { id: "windows", label: t("gallery.f_windows"), icon: null },
                { id: "fabrics", label: t("gallery.f_fabrics"), icon: null },
                { id: "construction", label: t("gallery.f_construction"), icon: null }
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center space-x-2",
                    activeFilter === filter.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white dark:bg-zinc-800 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                  )}
                >
                  {filter.icon}
                  <span>{filter.label}</span>
                </button>
              ))}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[600px]">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="group relative aspect-square rounded-[32px] overflow-hidden bg-white dark:bg-zinc-800 shadow-sm border border-zinc-100 dark:border-zinc-800"
                >
                  <img
                    src={image.src}
                    alt={image.displayTitle}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                    <p className="text-white font-bold text-xl">{image.displayTitle}</p>
                    <p className="text-zinc-300 text-sm uppercase tracking-widest">{image.displayCategory}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: <Clock size={28} />, title: t("why_us.c1"), desc: t("why_us.c1_desc"), color: "blue" },
                { icon: <Award size={28} />, title: t("why_us.c2"), desc: t("why_us.c2_desc"), color: "yellow" },
                { icon: <ShieldCheck size={28} />, title: t("why_us.c3"), desc: t("why_us.c3_desc"), color: "green" },
                { icon: <Zap size={28} />, title: t("why_us.c4"), desc: t("why_us.c4_desc"), color: "purple" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -5, borderColor: "rgb(37 99 235 / 0.5)" }}
                  className="bg-white dark:bg-zinc-800 p-8 rounded-[32px] shadow-sm space-y-5 border border-zinc-100 dark:border-zinc-700 transition-all cursor-default group"
                >
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3",
                    item.color === "blue" && "bg-blue-50 dark:bg-blue-900/30 text-blue-600",
                    item.color === "yellow" && "bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600",
                    item.color === "green" && "bg-green-50 dark:bg-green-900/30 text-green-600",
                    item.color === "purple" && "bg-purple-50 dark:bg-purple-900/30 text-purple-600",
                  )}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg dark:text-white mb-2 leading-tight">{item.title}</h4>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-8">
              <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">{t("why_us.badge")}</p>
              <h2 className="text-5xl font-display font-bold leading-tight dark:text-white">{t("why_us.title")}</h2>
              <p className="text-lg text-zinc-500 dark:text-zinc-400">
                {t("why_us.p")}
              </p>
              <ul className="space-y-4">
                {[
                  t("why_us.f1"),
                  t("why_us.f2"),
                  t("why_us.f3"),
                  t("why_us.f4")
                ].map((text, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle2 size={20} className="text-green-500" />
                    <span className="font-medium dark:text-zinc-300">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <Link 
                  to="/about" 
                  className="px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 rounded-2xl font-bold hover:scale-105 transition-transform inline-block"
                >
                  {t("common.read_history")}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp} className="text-center space-y-4 mb-20">
            <QuoteIcon size={48} className="text-blue-500 mx-auto opacity-50" />
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">{t("testimonials.title")}</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              {t("testimonials.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {translatedTestimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-10 rounded-[40px] space-y-6 relative group hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5",
                  i === 1 || i === 4 ? "lg:scale-105 lg:z-10 bg-zinc-900" : ""
                )}
              >
                <div className="flex text-blue-500 space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <StarIcon key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg text-zinc-300 leading-relaxed font-medium">"{t.quote}"</p>
                <div className="flex items-center space-x-4 pt-6 border-t border-zinc-800/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg ring-4 ring-blue-500/10">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-wider text-xs">{t.name}</h4>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-black">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Packs Section */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden">
        {/* Background glow effects like the image */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp} className="text-center space-y-4 mb-20">
            <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-white opacity-10 absolute top-0 left-1/2 -translate-x-1/2 select-none uppercase">
                Nos Tarifs
            </h2>
            <div className="relative pt-12">
                <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">{t("pricing.title")}</h3>
                <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    {t("pricing.subtitle")}
                </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {pricingPacks.map((pack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "relative group rounded-[48px] p-10 flex flex-col h-full transition-all duration-500",
                  "bg-white/5 backdrop-blur-xl border-2 hover:border-blue-500/50",
                  pack.popular ? "scale-105 z-10 py-16 border-blue-500/50" : "border-zinc-800"
                )}
              >
                {/* Glow effect */}
                <div className={cn("absolute inset-x-0 -top-px h-px bg-gradient-to-r", pack.glowColor)} />
                <div className={cn("absolute inset-x-0 -bottom-px h-px bg-gradient-to-r", pack.glowColor)} />

                {pack.popular && (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest text-white shadow-xl shadow-blue-600/20">
                        {t("pricing.popular")}
                    </div>
                )}

                <div className="text-center mb-8">
                  <h4 className="text-2xl font-display font-bold text-white mb-2 uppercase tracking-widest">{pack.name}</h4>
                  <p className="text-zinc-500 text-sm">{pack.description}</p>
                </div>

                <div className="flex-grow space-y-4 mb-10">
                  {pack.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3 group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover/item:scale-110 transition-transform">
                        <CheckCircle2 size={12} />
                      </div>
                      <span className="text-zinc-300 text-sm group-hover/item:text-white transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center space-y-6">
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-4xl md:text-6xl font-display font-black text-white">{pack.price} €</span>
                    <span className="text-zinc-500 font-bold uppercase tracking-widest text-xs">{t("pricing.per_visit")}</span>
                  </div>
                  
                  <a
                    href={`https://wa.me/32499469093?text=${encodeURIComponent(`Bonjour GS Clean, je souhaite souscrire au pack ${pack.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "block w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center space-x-2",
                      pack.popular 
                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-600/20" 
                        : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                    )}
                  >
                    <span>{t("pricing.cta")}</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white dark:bg-zinc-950 transition-colors">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center space-y-4 mb-20">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest">
              <HelpCircle size={14} />
              <span>FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white">{t("faq.title")}</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              {t("faq.subtitle")}
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const [isExpanded, setIsExpanded] = useState(false);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-zinc-50 dark:bg-zinc-900 rounded-[32px] overflow-hidden border border-zinc-100 dark:border-zinc-800"
                >
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between group"
                  >
                    <span className="font-bold text-lg dark:text-white group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </span>
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center transition-all",
                      isExpanded ? "bg-blue-600 text-white rotate-180" : "bg-zinc-200 dark:bg-zinc-800 text-zinc-500"
                    )}>
                      <ChevronDown size={18} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-8 pb-8 text-zinc-500 dark:text-zinc-400 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-blue-600 rounded-[48px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(37,99,235,0.4)]"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">{t("cta.title")}</h2>
              <p className="text-blue-100 text-lg opacity-80">
                {t("cta.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/quote"
                  className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold shadow-xl hover:scale-105 active:scale-95 transition-all"
                >
                  {t("cta.quote")}
                </Link>
                <Link
                  to="/contact"
                  className="px-10 py-5 bg-blue-700 text-white border border-blue-500 rounded-2xl font-bold shadow-xl hover:bg-blue-800 transition-all"
                >
                  {t("cta.contact")}
                </Link>
              </div>
              <div className="flex items-center justify-center space-x-4 pt-12">
                <p className="text-sm font-bold flex items-center space-x-2">
                  <Smartphone size={16} />
                  <a href="https://wa.me/32499469093" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
                    0499 46 90 93
                  </a>
                </p>
                <div className="w-1 h-1 bg-blue-300 rounded-full" />
                <p className="text-sm font-bold flex items-center space-x-2">
                  <a href="mailto:gsclean31@gmail.com" className="hover:text-blue-600 transition-colors">
                    gsclean31@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
