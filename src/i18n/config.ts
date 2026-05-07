import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      "nav": {
        "home": "Accueil",
        "services": "Services",
        "about": "À Propos",
        "quote": "Devis",
        "contact": "Contact",
        "realisations": "Réalisations",
        "book": "Prendre RDV"
      },
      "hero": {
        "title": "GS Clean – Le souci du détail",
        "subtitle": "Société de nettoyage professionnelle active à La Louvière, Mons et Nivelles.",
        "badge": "Nettoyage professionnel Premium",
        "cta_quote": "Demander un devis",
        "cta_services": "Nos Services"
      },
      "stats": {
        "exp": "Années d'expérience",
        "interventions": "Interventions/An",
        "agents": "Agents qualifiés",
        "zones": "Zones couvertes"
      },
      "engagements": {
        "badge": "Nos Valeurs",
        "title": "Nos Engagements",
        "subtitle": "pour votre Excellence.",
        "p": "Chez GS Clean, nous ne nous contentons pas de nettoyer. Nous nous engageons à offrir une expérience exceptionnelle basée sur trois piliers fondamentaux.",
        "q1": "Qualité Irréprochable",
        "q1_desc": "Utilisation de machines professionnelles et contrôle rigoureux après chaque passage.",
        "q2": "Fiabilité & Ponctualité",
        "q2_desc": "Nous respectons scrupuleusement les délais et les créneaux horaires convenus.",
        "q3": "Écologie Responsable",
        "q3_desc": "Produits biodégradables et respectueux de l'environnement et de votre santé."
      },
      "gallery": {
        "badge": "Nos Réalisations",
        "title": "Galerie interactive",
        "f_all": "Tous",
        "f_windows": "Vitres",
        "f_fabrics": "Tissus",
        "f_construction": "Chantier",
        "img1": "Vitrage Commercial",
        "img2": "Canapé Textile",
        "img3": "Appartement neuf",
        "img4": "Baies vitrées",
        "img5": "Chaises de bureau",
        "img6": "Maison rénovée"
      },
      "why_us": {
        "badge": "Pourquoi nous choisir ?",
        "title": "Plus qu'une simple société de nettoyage.",
        "p": "Chez GS Clean, nous croyons que la propreté est la base du bien-être. C'est pourquoi nous utilisons des équipements de pointe et des méthodes respectueuses pour transformer votre environnement.",
        "c1": "Disponibilité",
        "c1_desc": "7j/7 pour vos urgences",
        "c2": "Excellence",
        "c2_desc": "Formation continue",
        "c3": "Assurance",
        "c3_desc": "Protection civile complète",
        "c4": "Vitesse",
        "c4_desc": "Intervention rapide",
        "f1": "Équipes professionnelles et formées",
        "f2": "Utilisation de produits respectueux",
        "f3": "Transparence totale des tarifs",
        "f4": "Suivi personnalisé de chaque chantier"
      },
      "testimonials": {
        "title": "Ce que disent nos clients",
        "subtitle": "La satisfaction de nos clients est le moteur de notre agence. Découvrez pourquoi ils nous font confiance.",
        "t1_name": "Marc Vandamme",
        "t1_quote": "Une équipe ponctuelle et un travail d'une propreté exemplaire pour mes vitres. Je recommande vivement GS Clean !",
        "t2_name": "Sophie Leclerc",
        "t2_quote": "Mon canapé est comme neuf après leur passage. Le nettoyage de tissus est vraiment efficace et professionnel.",
        "t3_name": "Julien Dubuisson",
        "t3_quote": "Nettoyage après rénovation impeccable. Ils sont allés dans les moindres détails, même là où je n'avais pas regardé.",
        "t4_name": "Elena Rodriguez",
        "t4_quote": "Service client exceptionnel. Ils ont su s'adapter à mes horaires complexes pour le nettoyage de mes bureaux.",
        "t5_name": "Thomas Petit",
        "t5_quote": "La qualité du nettoyage de vitres en hauteur est impressionnante. Matériel pro et sécurité au top.",
        "t6_name": "Marie-Hélène",
        "t6_quote": "Enfin une société de nettoyage sérieuse qui respecte les délais et fournit un travail de qualité constante."
      },
      "pricing": {
        "bg_text": "Nos Tarifs",
        "title": "Nos Packs Nettoyage",
        "subtitle": "Des solutions claires et professionnelles pour tous vos besoins de nettoyage à travers la Wallonie.",
        "popular": "Le plus populaire",
        "cta": "Souscrire au pack",
        "per_visit": "/ intervention",
        "pack1_name": "Basique",
        "pack1_desc": "Idéal pour un entretien régulier de votre habitation.",
        "pack2_name": "Premium",
        "pack2_desc": "Le pack complet pour une remise à neuf totale.",
        "pack3_name": "Étendu",
        "pack3_desc": "Pour les grandes surfaces ou fins de chantier.",
        "f_ext_edges": "Nettoyage rebords extérieurs",
        "f_7days": "Intervention sous 7 jours",
        "f_all_basic": "Tout le pack Basique",
        "f_glass_treatment": "Traitement déperlant vitres",
        "f_deep_fabrics": "Nettoyage en profondeur tissus",
        "f_48h": "Intervention prioritaires 48h",
        "f_all_premium": "Tout le pack Premium",
        "f_post_renovation": "Remise à neuf après travaux",
        "f_residue_removal": "Élimination résidus colle/peinture",
        "f_dedicated_team": "Équipe dédiée 1 journée"
      },
      "faq": {
        "title": "Questions Fréquentes",
        "subtitle": "Tout ce que vous devez savoir sur nos services et notre manière de travailler."
      },
      "cta": {
        "title": "Prêt à faire briller vos espaces ?",
        "subtitle": "Obtenez un devis gratuit en moins de 24h ou prenez rendez-vous directement en ligne.",
        "quote": "Demander un devis",
        "contact": "Nous contacter"
      },
      "services": {
        "title": "Nos Services d'Exception",
        "subtitle": "Nous offrons une gamme complète de services spécialisés pour répondre à vos besoins les plus exigeants.",
        "windows": {
          "title": "Nettoyage de vitres et panneaux solaires",
          "desc": "Résultat impeccable, sans traces ni résidus pour maisons, commerces et bureaux."
        },
        "fabrics": {
          "title": "Nettoyage de tissus",
          "desc": "Redonnez vie à vos canapés, fauteuils et chaises. Élimination des taches et odeurs."
        },
        "construction": {
          "title": "Nettoyage fin de chantier",
          "desc": "Élimination des poussières et résidus après travaux pour un espace prêt à l'emploi."
        }
      },
      "common": {
        "learn_more": "En savoir plus",
        "read_history": "Notre Histoire",
        "why_us": "Pourquoi nous ?",
        "satisfaction": "+500 Clients Satisfaits",
        "quality_guaranteed": "Qualité Garantie",
        "discover_history": "Découvrez notre histoire"
      },
      "about_page": {
        "badge": "Notre Histoire",
        "title": "GS Clean : L'Excellence du Nettoyage.",
        "p1": "Basée dans la région, notre entreprise intervient rapidement à La Louvière, Mons, Nivelles et dans les alentours pour vous offrir un service de nettoyage fiable, efficace et professionnel.",
        "quote": "Notre mission est simple : transformer chaque espace en un lieu sain et éclatant, où le souci du détail n'est pas une option mais un standard.",
        "v_title": "Nos Valeurs Fondamentaux",
        "v_subtitle": "Ces principes guident chacune de nos interventions depuis le premier jour.",
        "v1_t": "Rigueur Militaire",
        "v1_d": "Chaque recoin est inspecté méthodiquement pour ne laisser aucune trace.",
        "v2_t": "Passion Client",
        "v2_d": "Votre satisfaction est notre seule métrique de succès. Nous écoutons et adaptons.",
        "v3_t": "Intégrité",
        "v3_d": "Transparence totale sur nos méthodes, nos produits et nos délais d'intervention.",
        "ph_title": "Notre Philosophie du Détail",
        "ph_p": "Nous ne nous contentons pas de nettoyer des surfaces. Nous restaurons des environnements. Que ce soit pour un nettoyage de fin de chantier exigeant ou pour redonner vie à un canapé en tissu chargé d'histoire, GS Clean apporte une expertise technique et humaine unique.",
        "ph_l1": "Respect strict des matériaux et fibres",
        "ph_l2": "Utilisation d'équipements pro uniquement",
        "ph_l3": "Personnel formé aux techniques spécifiques",
        "ph_l4": "Vérification post-chantier rigoureuse"
      },
      "contact_page": {
        "badge": "Disponibles pour vous",
        "title": "Contact & Rendez-vous",
        "subtitle": "Une question ? Un rendez-vous urgent ? Nous intervenons rapidement à La Louvière, Mons et Nivelles.",
        "phone_title": "Appelez-nous",
        "phone_sub": "Lun - Ven: 08:00 - 18:00",
        "email_title": "Email",
        "email_sub": "Réponse sous 24h",
        "loc_title": "Localisation",
        "loc_sub": "Mons, Nivelles & alentours",
        "form_title": "Réserver une session",
        "form_subtitle": "Choisissez une date sur le calendrier pour voir nos disponibilités.",
        "name_label": "Nom",
        "phone_label": "Téléphone",
        "date_label": "Date souhaitée",
        "select_day": "Sélectionnez un jour",
        "selected_date": "Date sélectionnée",
        "msg_label": "Message / Détails de l'intervention",
        "placeholders": {
          "name": "Dupont Jean",
          "phone": "0499 46 90 93",
          "msg": "Ex: Nettoyage de 10 fenêtres, fin de chantier maison 3 chambres..."
        },
        "cta": "Confirmer la demande",
        "success": "Demande reçue !",
        "success_msg": "Nous avons bien reçu votre demande de rendez-vous. Un conseiller vous rappellera dans l'heure pour confirmer le créneau.",
        "another_request": "Envoyer une autre demande",
        "biz_info": "Informations Entreprise",
        "biz_tva": "N° d'entreprise (TVA)"
      },
      "footer": {
        "contact_us": "Contactez-nous",
        "rights": "© 2026 GS Clean. Tous droits réservés.",
        "agency": "Propulsé par NHR Digital Agency"
      }
    }
  },
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "services": "Services",
        "about": "About",
        "quote": "Quote",
        "contact": "Contact",
        "realisations": "Realizations",
        "book": "Book Now"
      },
      "hero": {
        "title": "GS Clean – Detail Oriented",
        "subtitle": "Professional cleaning company active in La Louvière, Mons and Nivelles.",
        "badge": "Premium Professional Cleaning",
        "cta_quote": "Request a Quote",
        "cta_services": "Our Services"
      },
      "stats": {
        "exp": "Years of experience",
        "interventions": "Interventions/Year",
        "agents": "Qualified agents",
        "zones": "Covered zones"
      },
      "engagements": {
        "badge": "Our Values",
        "title": "Our Commitments",
        "subtitle": "for your Excellence.",
        "p": "At GS Clean, we do more than just clean. We are committed to providing an exceptional experience based on three fundamental pillars.",
        "q1": "Irreproachable Quality",
        "q1_desc": "Use of professional machines and rigorous checks after each visit.",
        "q2": "Reliability & Punctuality",
        "q2_desc": "We scrupulously respect the agreed deadlines and time slots.",
        "q3": "Responsible Ecology",
        "q3_desc": "Biodegradable products that are respectful of the environment and your health."
      },
      "gallery": {
        "badge": "Our Achievements",
        "title": "Interactive Gallery",
        "f_all": "All",
        "f_windows": "Windows",
        "f_fabrics": "Fabrics",
        "f_construction": "Construction",
        "img1": "Commercial Glass",
        "img2": "Textile Sofa",
        "img3": "New Apartment",
        "img4": "Bay Windows",
        "img5": "Office Chairs",
        "img6": "Renovated House"
      },
      "why_us": {
        "badge": "Why choose us?",
        "title": "More than just a cleaning company.",
        "p": "At GS Clean, we believe that cleanliness is the basis of well-being. That's why we use cutting-edge equipment and respectful methods to transform your environment.",
        "c1": "Availability",
        "c1_desc": "7/7 for your emergencies",
        "c2": "Excellence",
        "c2_desc": "Continuous training",
        "c3": "Insurance",
        "c3_desc": "Full civil protection",
        "c4": "Speed",
        "c4_desc": "Fast intervention",
        "f1": "Professional and trained teams",
        "f2": "Use of respectful products",
        "f3": "Total price transparency",
        "f4": "Personalized follow-up of each site"
      },
      "testimonials": {
        "title": "What our clients say",
        "subtitle": "Our clients' satisfaction is the driving force of our agency. Discover why they trust us.",
        "t1_name": "Marc Vandamme",
        "t1_quote": "A punctual team and exemplary cleanliness for my windows. I highly recommend GS Clean!",
        "t2_name": "Sophie Leclerc",
        "t2_quote": "My sofa is like new after their visit. The fabric cleaning is really effective and professional.",
        "t3_name": "Julien Dubuisson",
        "t3_quote": "Impeccable post-renovaton cleaning. They went into the smallest details, even where I hadn't looked.",
        "t4_name": "Elena Rodriguez",
        "t4_quote": "Exceptional customer service. They were able to adapt to my complex schedule for my office cleaning.",
        "t5_name": "Thomas Petit",
        "t5_quote": "The quality of high-level window cleaning is impressive. Pro equipment and top safety.",
        "t6_name": "Marie-Hélène",
        "t6_quote": "Finally a serious cleaning company that respects deadlines and provides consistent quality work."
      },
      "pricing": {
        "bg_text": "Our Prices",
        "title": "Our Cleaning Packs",
        "subtitle": "Clear and professional solutions for all your cleaning needs across Wallonia.",
        "popular": "Most popular",
        "cta": "Subscribe to pack",
        "per_visit": "/ intervention",
        "pack1_name": "Basic",
        "pack1_desc": "Ideal for regular maintenance of your home.",
        "pack2_name": "Premium",
        "pack2_desc": "The complete pack for a total refresh.",
        "pack3_name": "Extended",
        "pack3_desc": "For large surfaces or post-construction.",
        "f_ext_edges": "External ledge cleaning",
        "f_7days": "Intervention within 7 days",
        "f_all_basic": "All Basic pack",
        "f_glass_treatment": "Water repellent glass treatment",
        "f_deep_fabrics": "Deep fabric cleaning",
        "f_48h": "48h priority intervention",
        "f_all_premium": "All Premium pack",
        "f_post_renovation": "Post-construction cleaning",
        "f_residue_removal": "Glue/paint residue removal",
        "f_dedicated_team": "Dedicated team for 1 day"
      },
      "faq": {
        "title": "Frequently Asked Questions",
        "subtitle": "Everything you need to know about our services and our way of working."
      },
      "cta": {
        "title": "Ready to make your spaces shine?",
        "subtitle": "Get a free quote in less than 24h or book directly online.",
        "quote": "Request a quote",
        "contact": "Contact us"
      },
      "services": {
        "title": "Our Exceptional Services",
        "subtitle": "We offer a full range of specialized services to meet your most demanding needs.",
        "windows": {
          "title": "Window & Solar Panel Cleaning",
          "desc": "Impeccable results, streak-free for homes, shops, and offices."
        },
        "fabrics": {
          "title": "Fabric Cleaning",
          "desc": "Breathe new life into your sofas, armchairs and chairs. Stain and odor removal."
        },
        "construction": {
          "title": "Post-Construction Cleaning",
          "desc": "Removal of dust and residues after work for a ready-to-use space."
        }
      },
      "common": {
        "learn_more": "Learn more",
        "read_history": "Our History",
        "why_us": "Why us?",
        "satisfaction": "+500 Satisfied Clients",
        "quality_guaranteed": "Quality Guaranteed",
        "discover_history": "Discover our history"
      },
      "about_page": {
        "badge": "Our History",
        "title": "GS Clean: Excellence in Cleaning.",
        "p1": "Based in the region, our company intervenes quickly in La Louvière, Mons, Nivelles and the surrounding areas to offer you a reliable, efficient and professional cleaning service.",
        "quote": "Our mission is simple: to transform each space into a healthy and radiant place, where attention to detail is not an option but a standard.",
        "v_title": "Our Core Values",
        "v_subtitle": "These principles guide each of our interventions since day one.",
        "v1_t": "Military Rigor",
        "v1_d": "Every corner is methodically inspected to leave no trace.",
        "v2_t": "Customer Passion",
        "v2_d": "Your satisfaction is our only metric of success. We listen and adapt.",
        "v3_t": "Integrity",
        "v3_d": "Total transparency on our methods, our products and our intervention times.",
        "ph_title": "Our Philosophy of Detail",
        "ph_p": "We don't just clean surfaces. We restore environments. Whether it's for a demanding post-construction clean or restoring life to a fabric sofa with a long history, GS Clean brings unique technical and human expertise.",
        "ph_l1": "Strict respect for materials and fibers",
        "ph_l2": "Use of professional equipment only",
        "ph_l3": "Staff trained in specific techniques",
        "ph_l4": "Rigorous post-intervention check"
      },
      "contact_page": {
        "badge": "Available for you",
        "title": "Contact & Appointments",
        "subtitle": "A question? An urgent appointment? We intervene quickly in La Louvière, Mons and Nivelles.",
        "phone_title": "Call us",
        "phone_sub": "Mon - Fri: 08:00 - 18:00",
        "email_title": "Email",
        "email_sub": "Response within 24h",
        "loc_title": "Location",
        "loc_sub": "Mons, Nivelles & surrounding areas",
        "form_title": "Book a session",
        "form_subtitle": "Choose a date on the calendar to see our availability.",
        "name_label": "Name",
        "phone_label": "Phone",
        "date_label": "Requested date",
        "select_day": "Select a day",
        "selected_date": "Selected date",
        "msg_label": "Message / Intervention details",
        "placeholders": {
          "name": "John Doe",
          "phone": "0499 46 90 93",
          "msg": "Ex: Cleaning of 10 windows, post-construction 3-bedroom house..."
        },
        "cta": "Confirm request",
        "success": "Request received!",
        "success_msg": "We have received your appointment request. An advisor will call you back within an hour to confirm the slot.",
        "another_request": "Send another request",
        "biz_info": "Company Information",
        "biz_tva": "Company Number (VAT)"
      },
      "footer": {
        "contact_us": "Contact Us",
        "rights": "© 2026 GS Clean. All rights reserved.",
        "agency": "Powered by NHR Digital Agency"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
