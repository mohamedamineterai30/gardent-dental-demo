// Client : Dr. Chasa Nora Sadoun (@dr_chasa_sadoun). Source : profil Instagram public, 12 nov 2026.
// "A CONFIRMER" = ma3louma ma l9inahach f profil, lazem tji men 3andha.
globalThis.CLINIC = {
  demo: true,
  accessKey: "gcd-b97cf85a",
  style: "rose",
  lang: "fr",
  name: "Gardent Cabinet Dentaire",
  short: "G",
  specialty: { fr: "Chirurgien-dentiste", ar: "جراحة أسنان" },
  city: { fr: "Dely Brahim, Alger", ar: "دالي ابراهيم، الجزائر" },
  tagline: { fr: "Your Barbie Dentiste.", ar: "Your Barbie Dentiste." },
  intro: {
    fr: "Facettes Emax, zircone, soins et esthétique du sourire avec le Dr. Chasa Nora Sadoun. Dites-nous ce qu'il vous faut, on vous garde une place.",
    ar: "فينير إيماكس، زيركون، علاجات وتجميل الابتسامة مع د. شاسة نورة سعدون. قولي لنا ما تحتاجين، ونحجز لك مكانا.",
  },
  // Fikra khassa b had site : l-patiente tkhayer 7ajetha, w soin yetkhayer wa7dou.
  needs: [
    { label: { fr: "J'ai mal à une dent", ar: "عندي ألم في سن" }, service: "soins" },
    { label: { fr: "Je veux un nouveau sourire", ar: "أريد ابتسامة جديدة" }, service: "emax" },
    { label: { fr: "Un simple contrôle", ar: "فحص عادي" }, service: "detartrage" },
  ],
  doctor: {
    name: "Dr. Chasa Nora Sadoun",
    title: { fr: "Chirurgien-dentiste · esthétique du sourire", ar: "جراحة أسنان · تجميل الابتسامة" },
    bio: {
      fr: "Au cabinet Gardent, à Dely Brahim, le Dr. Sadoun soigne et embellit : du détartrage à la facette Emax, de la dévitalisation au sourire complet en zircone. Ses résultats, elle les montre à ses 65 000 abonnés.",
      ar: "في عيادة Gardent بدالي ابراهيم، د. سعدون تعالج وتجمّل: من تنظيف الأسنان إلى فينير إيماكس، ومن علاج العصب إلى ابتسامة كاملة بالزيركون. نتائجها تشاركها مع 65 ألف متابع.",
    },
    photo: "", // A AJOUTER : sa photo, avec son accord
  },
  phone: "0775371204",
  whatsapp: "213775371204", // A CONFIRMER : même numéro sur WhatsApp ?
  instagram: "dr_chasa_sadoun",
  address: { fr: "Gardent Cabinet Dentaire, Dely Brahim, Alger", ar: "عيادة Gardent لطب الأسنان، دالي ابراهيم، الجزائر" },
  mapsUrl: "https://maps.app.goo.gl/Rch8jkUmxpYpqPJKA", // lien Maps men bio ta3ha
  theme: { primary: "#d64c7b", dark: "#7a1f45", accent: "#ffc2d4" },

  // A CONFIRMER : horaires réels. 0 = dimanche ... 6 = samedi. [] = fermé.
  hours: {
    0: [["09:00", "12:30"], ["14:00", "17:00"]],
    1: [["09:00", "12:30"], ["14:00", "17:00"]],
    2: [["09:00", "12:30"], ["14:00", "17:00"]],
    3: [["09:00", "12:30"], ["14:00", "17:00"]],
    4: [["09:00", "12:30"], ["14:00", "17:00"]],
    5: [],
    6: [["09:00", "13:00"]],
  },
  slotMinutes: 30,
  daysAhead: 21,

  // Les soins = les highlights ta3 profil ta3ha
  services: [
    { id: "emax", img: "assets/facettes.jpg", name: { fr: "Facettes Emax", ar: "فينير إيماكس" }, desc: { fr: "Fines et lumineuses, pour un sourire naturel.", ar: "رقيقة ومضيئة، لابتسامة طبيعية." } },
    { id: "zircone", img: "assets/sourire.jpg", name: { fr: "Zircone", ar: "زيركون" }, desc: { fr: "Couronnes solides, sans métal.", ar: "تيجان قوية، بدون معدن." } },
    { id: "soins", img: "assets/dent.jpg", name: { fr: "Soins dentaires", ar: "علاجات الأسنان" }, desc: { fr: "Caries et douleurs, traitées en douceur.", ar: "التسوس والألم، بلطف." } },
    { id: "canal", name: { fr: "Traitement de canal", ar: "علاجات العصب" }, desc: { fr: "Sauver la dent plutôt que l'enlever.", ar: "إنقاذ السن بدل خلعه." } },
    { id: "extraction", name: { fr: "Extraction", ar: "خلع الأسنان" }, desc: { fr: "Quand il n'y a plus d'autre solution.", ar: "عندما لا يوجد حل آخر." } },
    { id: "implant", name: { fr: "Implant", ar: "زراعة" }, desc: { fr: "Remplacer une dent manquante.", ar: "تعويض السن المفقود." } },
    { id: "gencives", name: { fr: "Correction des gencives", ar: "تصحيح اللثة" }, desc: { fr: "Harmoniser la ligne du sourire.", ar: "تنسيق خط الابتسامة." } },
    { id: "detartrage", name: { fr: "Détartrage", ar: "تنظيف الأسنان" }, desc: { fr: "Nettoyage complet et polissage.", ar: "تنظيف كامل وتلميع." } },
    { id: "blanchiment", name: { fr: "Blanchiment", ar: "تبييض اسنان" }, desc: { fr: "Des dents plus claires.", ar: "أسنان أكثر بياضا." } },
    { id: "filler", name: { fr: "Filler lèvres", ar: "فيلر الشفاه" }, desc: { fr: "Le sourire, jusqu'aux lèvres.", ar: "الابتسامة، حتى الشفاه." } },
  ],

  points: [
    { fr: "Réservation en 30 secondes", ar: "حجز في 30 ثانية" },
    { fr: "Confirmation par WhatsApp", ar: "تأكيد عبر واتساب" },
    { fr: "Paiement au cabinet", ar: "الدفع في العيادة" },
  ],
  proof: [
    { n: "65 k", l: { fr: "abonnés sur Instagram", ar: "متابع على إنستغرام" } },
    { n: "200+", l: { fr: "résultats publiés", ar: "نتيجة منشورة" } },
  ],
  gallery: [], // A AJOUTER : ses avant/après, avec son accord
  faq: [
    {
      q: { fr: "Faut-il payer pour réserver ?", ar: "هل يجب الدفع للحجز؟" },
      a: { fr: "Non. La réservation est gratuite, le règlement se fait au cabinet.", ar: "لا. الحجز مجاني، والدفع في العيادة." },
    },
    {
      q: { fr: "Je ne sais pas quel soin choisir", ar: "لا أعرف أي علاج أختار" },
      a: { fr: "Choisissez « Soins dentaires » : le docteur vous oriente après l'examen.", ar: "اختاري «علاجات الأسنان»: الطبيبة توجهك بعد الفحص." },
    },
    {
      q: { fr: "Comment annuler ou changer l'heure ?", ar: "كيف ألغي أو أغيّر الموعد؟" },
      a: { fr: "Écrivez-nous sur WhatsApp ou appelez, le plus tôt possible.", ar: "راسلينا على واتساب أو اتصلي، في أقرب وقت." },
    },
  ],
};
