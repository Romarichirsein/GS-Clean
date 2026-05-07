import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Award, Heart, CheckCircle2, Target, History, Sparkles, MapPin, Globe } from "lucide-react";
import Breadcrumbs from "../components/UI/Breadcrumbs";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="pt-24 bg-white dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <Breadcrumbs />
      </div>
      {/* Narrative Section */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest">
              <History size={14} />
              <span>{t("about_page.badge")}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight dark:text-white leading-tight">
              {t("about_page.title")}
            </h1>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {t("about_page.p1")}
            </p>
            <div className="p-8 border-l-4 border-blue-600 bg-zinc-50 dark:bg-zinc-900 rounded-r-3xl">
              <p className="italic text-zinc-600 dark:text-zinc-300">
                "{t("about_page.quote")}"
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[64px] overflow-hidden shadow-2xl border-2 border-zinc-100 dark:border-zinc-800">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop" 
                alt="Cleaning expert at work" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-bold dark:text-white">{t("about_page.v_title")}</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">{t("about_page.v_subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Award size={32} />, title: t("about_page.v1_t"), desc: t("about_page.v1_d") },
              { icon: <Heart size={32} />, title: t("about_page.v2_t"), desc: t("about_page.v2_d") },
              { icon: <CheckCircle2 size={32} />, title: t("about_page.v3_t"), desc: t("about_page.v3_d") }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-zinc-800 p-12 rounded-[40px] text-center space-y-6 shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold dark:text-white">{value.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-zinc-950 text-white p-16 rounded-[48px] space-y-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
               <Target className="text-blue-500" size={48} />
               <h2 className="text-4xl font-bold leading-tight">{t("about_page.ph_title")}</h2>
               <p className="text-zinc-400 leading-relaxed">
                 {t("about_page.ph_p")}
               </p>
               <ul className="space-y-4 pt-4">
                 {[
                   t("about_page.ph_l1"),
                   t("about_page.ph_l2"),
                   t("about_page.ph_l3"),
                   t("about_page.ph_l4")
                 ].map((item, i) => (
                   <li key={i} className="flex items-center space-x-3 text-sm">
                     <Sparkles size={16} className="text-blue-500" />
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 font-bold text-xs uppercase tracking-widest">
              <Globe size={14} />
              <span>Ancrage Local</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight dark:text-white">Partenaire de confiance en Wallonie.</h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400">
              Bien plus qu'un simple prestataire, nous sommes vos voisins. Notre connaissance de La Louvière, Mons et Nivelles nous permet d'être réactifs et d'offrir un service de proximité inégalé.
            </p>
            <div className="flex items-center space-x-4 pt-4">
               <div className="flex flex-col items-center p-4 bg-zinc-50 dark:bg-zinc-800 rounded-2xl min-w-[120px]">
                  <MapPin size={24} className="text-blue-600 mb-2" />
                  <span className="font-bold text-sm dark:text-white">La Louvière</span>
               </div>
               <div className="flex flex-col items-center p-4 bg-zinc-50 dark:bg-zinc-800 rounded-2xl min-w-[120px]">
                  <MapPin size={24} className="text-blue-600 mb-2" />
                  <span className="font-bold text-sm dark:text-white">Mons</span>
               </div>
               <div className="flex flex-col items-center p-4 bg-zinc-50 dark:bg-zinc-800 rounded-2xl min-w-[120px]">
                  <MapPin size={24} className="text-blue-600 mb-2" />
                  <span className="font-bold text-sm dark:text-white">Nivelles</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
