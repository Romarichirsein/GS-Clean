import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Sun, CheckCircle2, Building, Sparkles, Sofa, Construction, Wind, ArrowRight, ShieldCheck, Microscope } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/UI/Breadcrumbs";

const services = [
  {
    id: "windows",
    title: "Nettoyage de vitres et panneaux solaires",
    icon: <Sun size={48} className="text-blue-500" />,
    img: "/images/Capture d'écran 2026-05-07 054903.png",
    desc: "GS Clean propose un service professionnel de nettoyage de vitres et panneaux solaires à La Louvière, Mons et Nivelles. Nous intervenons pour maisons, appartements, commerces et bureaux avec un résultat impeccable, sans traces ni résidus.",
    features: [
      "Intervention sur tous types de surfaces vitrées",
      "Nettoyage des châssis et encadrements inclus",
      "Équipements professionnels (système à l'eau pure)",
      "Optimisation du rendement des panneaux solaires",
      "Sécurité garantie pour les travaux en hauteur"
    ],
    details: "Un vitrage propre change radicalement l'atmosphère de votre intérieur ou l'image de votre commerce. Nos équipes utilisent des techniques de pointe pour garantir une transparence totale, sans aucune trace de passage. Pour les panneaux solaires, un nettoyage régulier permet d'augmenter le rendement jusqu'à 30% en éliminant les micro-poussières et dépôts graisseux."
  },
  {
    id: "fabric",
    title: "Nettoyage de tissus (Canapés & Textiles)",
    icon: <Sofa size={48} className="text-blue-500" />,
    img: "/images/Capture d'écran 2026-05-07 055043.png",
    desc: "Redonnez une seconde vie à vos canapés, fauteuils, chaises et autres surfaces textiles. Nos méthodes permettent d'éliminer les taches, les odeurs et les saletés tout en respectant les fibres des tissus.",
    features: [
      "Extraction par injection pour un nettoyage en profondeur",
      "Traitement anti-acariens et désinfection",
      "Élimination des odeurs persistantes (tabac, animaux)",
      "Protection des fibres et ravivage des couleurs",
      "Séchage rapide grâce à nos équipements performants"
    ],
    details: "Les textiles d'ameublement sont de véritables nids à poussières et allergènes. Notre processus de nettoyage professionnel pénètre au cœur des fibres pour extraire la saleté incrustée que les aspirateurs classiques ne peuvent atteindre. Résultat : un mobilier frais, sain et comme neuf."
  },
  {
    id: "construction",
    title: "Nettoyage de fin de chantier",
    icon: <Construction size={48} className="text-blue-500" />,
    img: "/images/Capture d'écran 2026-05-07 054943.png",
    desc: "Après des travaux ou une rénovation, GS Clean réalise le nettoyage de fin de chantier à La Louvière, Mons et Nivelles. Nous éliminons poussières, traces de peinture et résidus pour rendre vos espaces propres.",
    features: [
      "Élimination de la poussière fine sur toutes surfaces",
      "Retrait des traces de ciment, colle et peinture",
      "Nettoyage approfondi des sanitaires et cuisines",
      "Aspiration industrielle des sols et recoins",
      "Remise en état complète pour emménagement immédiat"
    ],
    details: "La poussière de chantier est extrêmement volatile et s'insinue partout. Ne prenez pas le risque d'endommager vos nouvelles surfaces avec des produits inadaptés. GS Clean dispose de l'artillerie lourde (monobrosses, aspirateurs HEPA) pour un résultat chirurgical."
  }
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <div className="pt-24 bg-white dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <Breadcrumbs />
      </div>
      {/* Header */}
      <section className="py-24 border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest"
          >
            Nos expertises
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight dark:text-white"
          >
            Services de <span className="text-blue-600">Nettoyage</span> Professionnel
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            Du particulier à l'entreprise, GS Clean apporte le même niveau d'excellence et de rigueur à chaque intervention.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-6 py-20 divide-y divide-zinc-100 dark:divide-zinc-900">
        {services.map((service, index) => (
          <section key={service.id} className="py-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={index % 2 === 1 ? "lg:order-2" : ""}
            >
              <div className="space-y-8">
                <div className="w-20 h-20 bg-zinc-50 dark:bg-zinc-900 rounded-3xl flex items-center justify-center shadow-sm">
                  {service.icon}
                </div>
                <h2 className="text-4xl font-bold dark:text-white leading-tight">{service.title}</h2>
                <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {service.desc}
                </p>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-[32px] border border-zinc-100 dark:border-zinc-800">
                  <p className="text-sm dark:text-zinc-300 italic">"{service.details}"</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3 group">
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 shrink-0 group-hover:scale-110 transition-transform">
                        <CheckCircle2 size={14} />
                      </div>
                      <span className="text-sm font-medium dark:text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6">
                  <Link 
                    to="/quote" 
                    className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
                  >
                    <span>Demander un devis pour ce service</span>
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
            >
              <div className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white dark:bg-zinc-800 p-8 rounded-3xl shadow-xl space-y-2 hidden md:block border border-zinc-100 dark:border-zinc-700">
                 <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                 </div>
                 <p className="font-bold text-sm dark:text-white">Qualité GS Clean</p>
                 <p className="text-xs text-zinc-400 uppercase tracking-widest">Contrôle de rigueur</p>
              </div>
            </motion.div>
          </section>
        ))}
      </div>

      {/* Trust Badges */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: <ShieldCheck />, title: "Assurance complète", desc: "Responsabilité civile" },
              { icon: <Microscope />, title: "Hygiène contrôlée", desc: "Protocoles sanitaires" },
              { icon: <Wind />, title: "Écologie", desc: "Produits biodégradables" },
              { icon: <Building />, title: "Pro & Particulier", desc: "Adaptabilité totale" }
            ].map((badge, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4">
                <div className="text-blue-600">{badge.icon}</div>
                <h4 className="font-bold text-sm dark:text-white">{badge.title}</h4>
                <p className="text-xs text-zinc-400 uppercase tracking-widest">{badge.desc}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

function Star({ size, fill, className, ...props }: { size: number, fill?: string, className?: string, [key: string]: any }) {
  return <Sparkles size={size} fill={fill} className={className} {...props} />;
}
