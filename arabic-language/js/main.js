const LANGS = ["en", "ar", "fr", "es", "it"];

const LETTERS = [
  {
    isolated: "ا", trans: "ʾ / ā", forms: ["ا", "ا", "ا", "ا"],
    name: { en: "Alif", ar: "ألف", fr: "Alif", es: "Alif", it: "Alif" },
    note: {
      en: "The first letter. It carries the sound \"a\" and often the glottal stop.",
      ar: "الحرف الأول. يحمل صوت «الألف» وغالبًا همزة.",
      fr: "La première lettre. Elle porte le son « a » et souvent le coup de glotte.",
      es: "La primera letra. Lleva el sonido «a» y a menudo la oclusión glotal.",
      it: "La prima lettera. Porta il suono «a» e spesso l'occlusiva glottale.",
    },
  },
  {
    isolated: "ب", trans: "b", forms: ["ب", "بـ", "ـبـ", "ـب"],
    name: { en: "Bāʾ", ar: "باء", fr: "Bāʾ", es: "Bāʾ", it: "Bāʾ" },
    note: {
      en: "A connecting letter — compare its forms across a word: كتاب، باب.",
      ar: "حرف متصل — قارن أشكاله في كلمة: كتاب، باب.",
      fr: "Une lettre connective — comparez ses formes dans un mot : كتاب، باب.",
      es: "Letra conectiva: compara sus formas en una palabra: كتاب، باب.",
      it: "Lettera connettiva — confronta le sue forme in una parola: كتاب، باب.",
    },
  },
  {
    isolated: "ت", trans: "t", forms: ["ت", "تـ", "ـتـ", "ـت"],
    name: { en: "Tāʾ", ar: "تاء", fr: "Tāʾ", es: "Tāʾ", it: "Tāʾ" },
    note: {
      en: "Forms the feminine endings and verb tenses.",
      ar: "يبني تاء التأنيث وصيغ الأفعال.",
      fr: "Forme les terminaisons féminines et les temps des verbes.",
      es: "Forma las terminaciones femeninas y los tiempos verbales.",
      it: "Forma le desinenze femminili e i tempi verbali.",
    },
  },
  {
    isolated: "ث", trans: "th", forms: ["ث", "ثـ", "ـثـ", "ـث"],
    name: { en: "Thāʾ", ar: "ثاء", fr: "Thāʾ", es: "Thāʾ", it: "Thāʾ" },
    note: {
      en: "A soft \"th\" as in English \"three\".",
      ar: "صوت «ث» اللينة كما في «ثلاثة».",
      fr: "Un « th » doux comme dans l'anglais « three ».",
      es: "Una «z» suave, como en inglés «three».",
      it: "Un «th» morbido come nell'inglese «three».",
    },
  },
  {
    isolated: "ج", trans: "j", forms: ["ج", "جـ", "ـجـ", "ـج"],
    name: { en: "Jīm", ar: "جيم", fr: "Jīm", es: "Jīm", it: "Jīm" },
    note: {
      en: "Sounds like the English \"j\" in Cairo and like a French \"j\" in the Gulf.",
      ar: "يُنطق «ج» مصرية في القاهرة و«ج» فرنسية في الخليج.",
      fr: "Son « dj » au Caire, son « j » français dans le Golfe.",
      es: "Suena «y»/«ll» en Egipto y como la «j» francesa en el Golfo.",
      it: "Suona «g» in Egitto e come una «j» francese nel Golfo.",
    },
  },
  {
    isolated: "ح", trans: "ḥ", forms: ["ح", "حـ", "ـحـ", "ـح"],
    name: { en: "Ḥāʾ", ar: "حاء", fr: "Ḥāʾ", es: "Ḥāʾ", it: "Ḥāʾ" },
    note: {
      en: "A breathy \"h\" from deep in the throat.",
      ar: "حاء تخرج من أعماق الحلق.",
      fr: "Un « h » expiré du fond de la gorge.",
      es: "Una «h» aspirada desde el fondo de la garganta.",
      it: "Una «h» aspirata dal profondo della gola.",
    },
  },
  {
    isolated: "خ", trans: "kh", forms: ["خ", "خـ", "ـخـ", "ـخ"],
    name: { en: "Khāʾ", ar: "خاء", fr: "Khāʾ", es: "Khāʾ", it: "Khāʾ" },
    note: {
      en: "Like the \"ch\" in Scottish \"loch\".",
      ar: "مثل «خ» في الخاء المبحوحة.",
      fr: "Comme le « ch » de l'écossais « loch ».",
      es: "Como la «j» del español «jota».",
      it: "Come la «ch» dello scozzese «loch».",
    },
  },
  {
    isolated: "د", trans: "d", forms: ["د", "د", "د", "ـد"],
    name: { en: "Dāl", ar: "دال", fr: "Dāl", es: "Dāl", it: "Dāl" },
    note: {
      en: "A non-connecting letter — it never joins the letter that follows.",
      ar: "حرف غير متصل — لا يتصل بالحرف الذي يليه.",
      fr: "Lettre non connective — elle ne rejoint jamais la suivante.",
      es: "Letra no conectiva: nunca se une a la que sigue.",
      it: "Lettera non connettiva — non si unisce mai alla successiva.",
    },
  },
  {
    isolated: "ذ", trans: "dh", forms: ["ذ", "ذ", "ذ", "ـذ"],
    name: { en: "Dhāl", ar: "ذال", fr: "Dhāl", es: "Dhāl", it: "Dhāl" },
    note: {
      en: "The \"th\" of English \"this\".",
      ar: "صوت «ذ» كما في «هذا».",
      fr: "Le « th » de l'anglais « this ».",
      es: "La «th» del inglés «this».",
      it: "La «th» dell'inglese «this».",
    },
  },
  {
    isolated: "ر", trans: "r", forms: ["ر", "ر", "ر", "ـر"],
    name: { en: "Rāʾ", ar: "راء", fr: "Rāʾ", es: "Rāʾ", it: "Rāʾ" },
    note: {
      en: "A rolled \"r\", often trilled.",
      ar: "راء مكررة وغالبًا ملفوفة.",
      fr: "Un « r » roulé, souvent vibrant.",
      es: "Una «r» vibrante, a menudo trinada.",
      it: "Una «r» arrotolata, spesso vibrante.",
    },
  },
  {
    isolated: "ز", trans: "z", forms: ["ز", "ز", "ز", "ـز"],
    name: { en: "Zāy", ar: "زاي", fr: "Zāy", es: "Zāy", it: "Zāy" },
    note: {
      en: "A non-connecting letter, like its cousins د ذ ر.",
      ar: "حرف غير متصل مثل د، ذ، ر.",
      fr: "Lettre non connective, comme د، ذ، ر.",
      es: "Letra no conectiva, como sus primas د، ذ، ر.",
      it: "Lettera non connettiva, come le sue cugine د، ذ، ر.",
    },
  },
  {
    isolated: "س", trans: "s", forms: ["س", "سـ", "ـسـ", "ـس"],
    name: { en: "Sīn", ar: "سين", fr: "Sīn", es: "Sīn", it: "Sīn" },
    note: {
      en: "Three dots make it ش; here it is a plain \"s\".",
      ar: "ثلاث نقاط تجعله «ش»؛ هنا «س» عادية.",
      fr: "Trois points en font ش ; ici un « s » simple.",
      es: "Tres puntos la hacen ش; aquí es una «s» simple.",
      it: "Tre punti la rendono ش; qui è una semplice «s».",
    },
  },
  {
    isolated: "ش", trans: "sh", forms: ["ش", "شـ", "ـشـ", "ـش"],
    name: { en: "Shīn", ar: "شين", fr: "Shīn", es: "Shīn", it: "Shīn" },
    note: {
      en: "The \"sh\" of English \"ship\".",
      ar: "صوت «ش» كما في «شمس».",
      fr: "Le « ch » de « chapeau ».",
      es: "El sonido «sh» del inglés «ship».",
      it: "La «sc» di «sci».",
    },
  },
  {
    isolated: "ص", trans: "ṣ", forms: ["ص", "صـ", "ـصـ", "ـص"],
    name: { en: "Ṣād", ar: "صاد", fr: "Ṣād", es: "Ṣād", it: "Ṣād" },
    note: {
      en: "An emphatic \"s\" — the tongue stays low and flat.",
      ar: "صاد مفخمة — يبقى اللسان منخفضًا.",
      fr: "Un « s » emphatique — la langue reste basse et plate.",
      es: "Una «s» enfática: la lengua queda baja y plana.",
      it: "Una «s» enfatica: la lingua resta bassa e piatta.",
    },
  },
  {
    isolated: "ض", trans: "ḍ", forms: ["ض", "ضـ", "ـضـ", "ـض"],
    name: { en: "Ḍād", ar: "ضاد", fr: "Ḍād", es: "Ḍād", it: "Ḍād" },
    note: {
      en: "Arabic's signature sound — the language is called \"the language of ḍād\".",
      ar: "صوت العربية المميز — تُسمَّى لغة الضاد.",
      fr: "Le son signature de l'arabe — on appelle la langue « langue du ḍād ».",
      es: "El sonido distintivo del árabe: la lengua se llama «lengua del ḍād».",
      it: "Il suono distintivo dell'arabo: la lingua è detta «lingua del ḍād».",
    },
  },
  {
    isolated: "ط", trans: "ṭ", forms: ["ط", "طـ", "ـطـ", "ـط"],
    name: { en: "Ṭāʾ", ar: "طاء", fr: "Ṭāʾ", es: "Ṭāʾ", it: "Ṭāʾ" },
    note: {
      en: "An emphatic \"t\", pronounced with the back of the tongue raised.",
      ar: "طاء مفخمة تُنطق برفع مؤخرة اللسان.",
      fr: "Un « t » emphatique, prononcé avec l'arrière de la langue relevé.",
      es: "Una «t» enfática, con el dorso de la lengua elevado.",
      it: "Una «t» enfatica, pronunciata con il dorso della lingua alzato.",
    },
  },
  {
    isolated: "ظ", trans: "ẓ", forms: ["ظ", "ظـ", "ـظـ", "ـظ"],
    name: { en: "Ẓāʾ", ar: "ظاء", fr: "Ẓāʾ", es: "Ẓāʾ", it: "Ẓāʾ" },
    note: {
      en: "An emphatic \"dh\".",
      ar: "ظاء مفخمة.",
      fr: "Un « dh » emphatique.",
      es: "Una «dh» enfática.",
      it: "Una «dh» enfatica.",
    },
  },
  {
    isolated: "ع", trans: "ʿ", forms: ["ع", "عـ", "ـعـ", "ـع"],
    name: { en: "ʿAyn", ar: "عين", fr: "ʿAyn", es: "ʿAyn", it: "ʿAyn" },
    note: {
      en: "A guttural sound with no English equivalent.",
      ar: "صوت حلقي لا مقابل له في الإنجليزية.",
      fr: "Un son guttural sans équivalent français.",
      es: "Un sonido gutural sin equivalente en español.",
      it: "Un suono gutturale senza equivalente italiano.",
    },
  },
  {
    isolated: "غ", trans: "gh", forms: ["غ", "غـ", "ـغـ", "ـغ"],
    name: { en: "Ghayn", ar: "غين", fr: "Ghayn", es: "Ghayn", it: "Ghayn" },
    note: {
      en: "Like a French \"r\" or the gargling of water.",
      ar: "مثل الراء الفرنسية أو كغرغرة الماء.",
      fr: "Comme un « r » français ou le gargarisme de l'eau.",
      es: "Como una «r» francesa o el gorgoteo del agua.",
      it: "Come una «r» francese o il gorgoglio dell'acqua.",
    },
  },
  {
    isolated: "ف", trans: "f", forms: ["ف", "فـ", "ـفـ", "ـف"],
    name: { en: "Fāʾ", ar: "فاء", fr: "Fāʾ", es: "Fāʾ", it: "Fāʾ" },
    note: {
      en: "The \"f\" of \"fall\".",
      ar: "فاء كما في «فم».",
      fr: "Le « f » de « feu ».",
      es: "La «f» de «faro».",
      it: "La «f» di «fiore».",
    },
  },
  {
    isolated: "ق", trans: "q", forms: ["ق", "قـ", "ـقـ", "ـق"],
    name: { en: "Qāf", ar: "قاف", fr: "Qāf", es: "Qāf", it: "Qāf" },
    note: {
      en: "A deep \"k\" from the back of the mouth.",
      ar: "قاف من أعمق الحلق.",
      fr: "Un « k » profond du fond de la bouche.",
      es: "Una «k» profunda desde el fondo de la boca.",
      it: "Una «k» profonda dal fondo della bocca.",
    },
  },
  {
    isolated: "ك", trans: "k", forms: ["ك", "كـ", "ـكـ", "ـك"],
    name: { en: "Kāf", ar: "كاف", fr: "Kāf", es: "Kāf", it: "Kāf" },
    note: {
      en: "The \"k\" of \"key\". A common Arabic name is كريم (Karim).",
      ar: "كاف كما في «كتاب». من الأسماء الشائعة «كريم».",
      fr: "Le « k » de « képi ». Un prénom arabe courant est كريم (Karim).",
      es: "La «k» de «kilo». Un nombre árabe común es كريم (Karim).",
      it: "La «k» di «kilometro». Un nome arabo comune è كريم (Karim).",
    },
  },
  {
    isolated: "ل", trans: "l", forms: ["ل", "لـ", "ـلـ", "ـل"],
    name: { en: "Lām", ar: "لام", fr: "Lām", es: "Lām", it: "Lām" },
    note: {
      en: "Combine it with ال to form the definite article \"the\".",
      ar: "ضمها مع «ال» لتصنع أداة التعريف «ال».",
      fr: "Combinez-la avec ال pour former l'article défini « le ».",
      es: "Combínala con ال para formar el artículo determinado «el».",
      it: "Uniscila a ال per formare l'articolo determinativo «il».",
    },
  },
  {
    isolated: "م", trans: "m", forms: ["م", "مـ", "ـمـ", "ـم"],
    name: { en: "Mīm", ar: "ميم", fr: "Mīm", es: "Mīm", it: "Mīm" },
    note: {
      en: "The \"m\" of \"mother\".",
      ar: "ميم كما في «ماء».",
      fr: "Le « m » de « mère ».",
      es: "La «m» de «madre».",
      it: "La «m» di «madre».",
    },
  },
  {
    isolated: "ن", trans: "n", forms: ["ن", "نـ", "ـنـ", "ـن"],
    name: { en: "Nūn", ar: "نون", fr: "Nūn", es: "Nūn", it: "Nūn" },
    note: {
      en: "The \"n\" of \"new\". Its dot distinguishes it from ب and ت.",
      ar: "نون كما في «نور». نقطتها تميزها عن ب وت.",
      fr: "Le « n » de « neuf ». Son point la distingue de ب et ت.",
      es: "La «n» de «nube». Su punto la distingue de ب y ت.",
      it: "La «n» di «nuvola». Il suo punto la distingue da ب e ت.",
    },
  },
  {
    isolated: "ه", trans: "h", forms: ["ه", "هـ", "ـهـ", "ـه"],
    name: { en: "Hāʾ", ar: "هاء", fr: "Hāʾ", es: "Hāʾ", it: "Hāʾ" },
    note: {
      en: "The \"h\" of \"hat\".",
      ar: "هاء كما في «هواء».",
      fr: "Le « h » de « hêtre ».",
      es: "La «h» de «humo».",
      it: "La «h» di «hotel».",
    },
  },
  {
    isolated: "و", trans: "w / ū", forms: ["و", "و", "و", "ـو"],
    name: { en: "Wāw", ar: "واو", fr: "Wāw", es: "Wāw", it: "Wāw" },
    note: {
      en: "A consonant \"w\" or the long vowel \"ū\". Non-connecting.",
      ar: "حرف علة «و» أو مد «أو». غير متصل.",
      fr: "Consonne « w » ou voyelle longue « ū ». Non connective.",
      es: "Consonante «w» o vocal larga «ū». No conectiva.",
      it: "Consonante «w» o vocale lunga «ū». Non connettiva.",
    },
  },
  {
    isolated: "ي", trans: "y / ī", forms: ["ي", "يـ", "ـيـ", "ـي"],
    name: { en: "Yāʾ", ar: "ياء", fr: "Yāʾ", es: "Yāʾ", it: "Yāʾ" },
    note: {
      en: "A consonant \"y\" or the long vowel \"ī\". Note its two dots.",
      ar: "حرف علة «ي» أو مد «ي». لاحظ نقطتيه.",
      fr: "Consonne « y » ou voyelle longue « ī ». Notez ses deux points.",
      es: "Consonante «y» o vocal larga «ī». Nota sus dos puntos.",
      it: "Consonante «y» o vocale lunga «ī». Nota i suoi due punti.",
    },
  },
];

const TRANSLATIONS = {
  en: {
    brand: "The Arabic Language",
    nav: { history: "History", alphabet: "Alphabet", grammar: "Grammar", dialects: "Dialects", influence: "Influence", resources: "Resources" },
    hero: {
      title: "One Language, <span class=\"accent\">A Thousand</span> Voices",
      sub: "Spoken by over 400 million people and cherished by two billion, Arabic is one of the world's great languages — the language of poetry, science, and the Quran.",
      btn1: "Explore the Alphabet", btn2: "Read Its History",
    },
    stats: { s1: "Million native speakers", s2: "Countries with Arabic as an official language", s3: "Most spoken language in the world", s4: "Billion people connect with Arabic through Islam" },
    history: {
      tag: "التاريخ",
      title: "A History of Beauty &amp; Resilience",
      y1: "~ 5th c. CE", t1: "The Classical Roots", p1: "Arabic emerges in the Arabian Peninsula, carried on the tongues of poets who gathered at the famous suq of Ukaz for verse competitions.",
      y2: "610 CE", t2: "The Revelation", p2: "The Quran is revealed in Arabic. Its language becomes sacred and unites a vast region under a shared literary tongue.",
      y3: "8th–13th c.", t3: "The Golden Age", p3: "Arabic becomes the lingua franca of science and philosophy. Scholars in Baghdad, Cordoba, and Cairo write in it — from algebra to astronomy.",
      y4: "Modern Era", t4: "Modern Standard Arabic", p4: "A standardized form, descended from Classical Arabic, serves as the common written language of news, literature, and education across the Arab world.",
    },
    alphabet: { tag: "الأبجدية", title: "The 28 Letters", intro: "Written from right to left, the Arabic script is cursive — letters change shape depending on where they appear in a word. Tap a letter to see its forms." },
    grammar: {
      tag: "النحو والصرف", title: "Grammar from a Root",
      c1h: "Root System", c1p: "Most words grow from three-letter roots. From k-t-b (\"to write\") spring kitāb (book), maktaba (library), and kātib (writer).",
      c2h: "Root &amp; Pattern", c2p: "Vowel patterns shape meaning: the pattern fāʿil signals the doer, while mafʿūl signals the receiver — a deeply logical, musical system.",
      c3h: "Short Vowels", c3p: "Short vowels are usually unwritten and inferred from context. The diacritics are added in the Quran, poetry, and children's books for clarity.",
      c4h: "Calligraphy", c4p: "Because the script is cursive and flowing, it became an art form — from Kufic's angular forms to the sweeping curves of Naskh and Diwani.",
    },
    dialects: {
      tag: "اللهجات", title: "One Language, Many Voices",
      intro: "Modern Standard Arabic is the shared written language; dialects are the living languages spoken at home — a beautiful spectrum across the region.",
      d1: "Levantine", r1: "Lebanon · Syria · Jordan · Palestine",
      d2: "Egyptian", r2: "Egypt — the most widely understood dialect",
      d3: "Gulf", r3: "Saudi Arabia · UAE · Kuwait · Qatar · Bahrain · Oman",
      d4: "Maghrebi", r4: "Morocco · Algeria · Tunisia · Libya",
      d5: "Iraqi", r5: "Iraq",
      d6: "Sudanese", r6: "Sudan · South Sudan",
    },
    influence: { tag: "التأثير", title: "Words That Traveled the World", intro: "Arabic loanwords live on in science, math, food, and daily life across Europe and beyond." },
    words: {
      w1: { s: "Algebra", m: "al-jabr — \"restoration\"" },
      w2: { s: "Zero", m: "ṣifr — \"nothing\"" },
      w3: { s: "Alcohol", m: "al-kuḥl — kohl" },
      w4: { s: "Cotton", m: "quṭn" },
      w5: { s: "Sugar", m: "sukkar" },
      w6: { s: "Admiral", m: "amīr al-baḥr — \"commander of the sea\"" },
      w7: { s: "Casbah", m: "qaṣba — \"fortress\"" },
      w8: { s: "Lute", m: "al-ʿūd" },
      w9: { s: "Magazine", m: "makhāzin — \"storehouses\"" },
      w10: { s: "Tariff", m: "taʿrīfa — \"fee\"" },
      w11: { s: "Lemon", m: "laymūn" },
      w12: { s: "Check", m: "ṣakk — \"document\"" },
    },
    resources: { tag: "المصادر", title: "Start Learning" },
    footer: { p: "Made with love for the language of <span class=\"accent\">الضاد</span>.", small: "© 2026 · The Arabic Language Project" },
  },

  ar: {
    brand: "اللغة العربية",
    nav: { history: "التاريخ", alphabet: "الأبجدية", grammar: "النحو والصرف", dialects: "اللهجات", influence: "التأثير", resources: "المصادر" },
    hero: {
      title: "لغةٌ واحدة، <span class=\"accent\">ألف</span> صوت",
      sub: "يتحدثها أكثر من ٤٠٠ مليون إنسان ويأنس بها ملياران — هي لغة الشعر والعلم والقرآن الكريم.",
      btn1: "استكشف الأبجدية", btn2: "اقرأ تاريخها",
    },
    stats: { s1: "مليون ناطق أصلي", s2: "دولة عربية رسمية", s3: "أكثر لغة انتشارًا في العالم", s4: "مليار يصلون بها إلى الإسلام" },
    history: {
      tag: "التاريخ", title: "تاريخٌ من الجمال والعطاء",
      y1: "القرن الخامس الميلادي", t1: "الجذور الكلاسيكية", p1: "تولد العربية في جزيرة العرب، يحملها الشعراء إلى أسواق عكاظ للمباراة في قول الشعر.",
      y2: "٦١٠ م", t2: "نزول الوحي", p2: "ينزل القرآن الكريم بالعربية، فتصبح لغةً مقدسة توحّد بين الناس لغةً أدبية مشتركة.",
      y3: "القرن ٨–١٣", t3: "العصر الذهبي", p3: "تصبح العربية لغة العلم والفلسفة؛ فيكتب بها علماء بغداد وقرطبة والقاهرة — من الجبر إلى الفلك.",
      y4: "العصر الحديث", t4: "العربية الفصحى", p4: "شكلٌ موحّد من العربية الكلاسيكية يخدم كلّ العرب في الصحافة والأدب والتعليم.",
    },
    alphabet: { tag: "الأبجدية", title: "الحروف الثمانية والعشرون", intro: "تُكتب العربية من اليمين إلى اليسار، وحروفها متصلة — يتغيّر شكل الحرف حسب موقعه في الكلمة. اضغط على أي حرف لترى أشكاله." },
    grammar: {
      tag: "النحو والصرف", title: "نحوٌ ينبت من جذر",
      c1h: "نظام الجذور", c1p: "تنبت معظم الكلمات من جذور ثلاثية. من (ك-ت-ب) تولد كلمة «كتاب» و«مكتبة» و«كاتب».",
      c2h: "الوزن الصرفي", c2p: "الأوزان تمنح المعنى: وزن «فاعِل» يدل على الفاعل، و«مفعول» يدل على المفعول به — نظامٌ موسيقيّ متّسق.",
      c3h: "الحركات", c3p: "الحركات القصيرة غالبًا لا تُكتب ويُفهَم المعنى من السياق. تُضاف في القرآن والشعر وكتب الأطفال.",
      c4h: "الخط العربي", c4p: "لأنّ الكتابة متصلة وانسيابية صارت فنًّا — من الكوفي بزواياه إلى انسيابية النسخ والديواني.",
    },
    dialects: {
      tag: "اللهجات", title: "لغةٌ واحدة، أصواتٌ كثيرة", intro: "الفصحى لغة الكتابة المشتركة، أما اللهجات فهي اللسان الحي في البيوت — طيفٌ جميل يمتد عبر المنطقة.",
      d1: "اللهجة الشامية", r1: "لبنان · سوريا · الأردن · فلسطين",
      d2: "اللهجة المصرية", r2: "مصر — الأكثر فهمًا في العالم العربي",
      d3: "اللهجة الخليجية", r3: "السعودية · الإمارات · الكويت · قطر · البحرين · عُمان",
      d4: "اللهجة المغاربية", r4: "المغرب · الجزائر · تونس · ليبيا",
      d5: "اللهجة العراقية", r5: "العراق",
      d6: "اللهجة السودانية", r6: "السودان · جنوب السودان",
    },
    influence: { tag: "التأثير", title: "كلماتٌ سافرت حول العالم", intro: "لا تزال كلمات عربية حيّة في العلوم والرياضيات والطعام والحياة اليومية في أوروبا وخارجها." },
    words: {
      w1: { s: "الجبر", m: "al-jabr — «استعادة»" },
      w2: { s: "الصفر", m: "ṣifr — «لا شيء»" },
      w3: { s: "الكحول", m: "al-kuḥl — الكحل" },
      w4: { s: "القطن", m: "quṭn" },
      w5: { s: "السكر", m: "sukkar" },
      w6: { s: "أمير البحر", m: "amīr al-baḥr — «قائد البحر»" },
      w7: { s: "القصبة", m: "qaṣba — «حصن»" },
      w8: { s: "العود", m: "al-ʿūd" },
      w9: { s: "المخازن", m: "makhāzin — «مستودعات»" },
      w10: { s: "التعريفة", m: "taʿrīfa — «رسوم»" },
      w11: { s: "الليمون", m: "laymūn" },
      w12: { s: "الصك", m: "ṣakk — «وثيقة»" },
    },
    resources: { tag: "المصادر", title: "ابدأ رحلتك في التعلّم" },
    footer: { p: "صنع بحبٍّ للغة <span class=\"accent\">الضاد</span>", small: "© ٢٠٢٦ · مشروع اللغة العربية" },
  },

  fr: {
    brand: "La langue arabe",
    nav: { history: "Histoire", alphabet: "Alphabet", grammar: "Grammaire", dialects: "Dialectes", influence: "Influence", resources: "Ressources" },
    hero: {
      title: "Une langue, <span class=\"accent\">mille</span> voix",
      sub: "Parlée par plus de 400 millions de personnes et chérie par deux milliards, l'arabe est l'une des grandes langues du monde — la langue de la poésie, de la science et du Coran.",
      btn1: "Explorer l'alphabet", btn2: "Lire son histoire",
    },
    stats: { s1: "Millions de locuteurs natifs", s2: "Pays où l'arabe est langue officielle", s3: "Langue la plus parlée au monde", s4: "Milliards de personnes reliées par l'arabe" },
    history: {
      tag: "L'histoire", title: "Une histoire de beauté et de résilience",
      y1: "Ve siècle", t1: "Les racines classiques", p1: "L'arabe naît dans la péninsule arabique, porté par les poètes qui se rassemblaient au souk d'Ukaz pour des joutes poétiques.",
      y2: "610 ap. J.-C.", t2: "La révélation", p2: "Le Coran est révélé en arabe. Sa langue devient sacrée et unit toute une région sous une langue littéraire commune.",
      y3: "VIIIe–XIIIe s.", t3: "L'âge d'or", p3: "L'arabe devient la langue de la science et de la philosophie. Les savants de Bagdad, Cordoue et Le Caire y écrivent — de l'algèbre à l'astronomie.",
      y4: "Époque moderne", t4: "L'arabe standard moderne", p4: "Une forme standardisée, issue de l'arabe classique, sert de langue écrite commune aux médias, à la littérature et à l'éducation dans tout le monde arabe.",
    },
    alphabet: { tag: "L'alphabet", title: "Les 28 lettres", intro: "Écrit de droite à gauche, l'écriture arabe est cursive — les lettres changent de forme selon leur position dans le mot. Cliquez sur une lettre pour voir ses formes." },
    grammar: {
      tag: "La grammaire", title: "Une grammaire issue d'une racine",
      c1h: "Le système des racines", c1p: "La plupart des mots naissent de racines de trois lettres. De « k-t-b » (écrire) naissent kitāb (livre), maktaba (bibliothèque) et kātib (écrivain).",
      c2h: "Racine et schème", c2p: "Les schèmes de voyelles façonnent le sens : le schème « fāʿil » désigne l'agent, « mafʿūl » le patient — un système profondément logique et musical.",
      c3h: "Les voyelles brèves", c3p: "Les voyelles brèves sont souvent omises et devinées d'après le contexte. Les diacritiques sont ajoutés dans le Coran, la poésie et les livres pour enfants.",
      c4h: "La calligraphie", c4p: "Puisque l'écriture est cursive et fluide, elle est devenue un art — des angles du coufique aux courbes du naskh et du diwani.",
    },
    dialects: {
      tag: "Les dialectes", title: "Une langue, de nombreuses voix", intro: "L'arabe standard moderne est la langue écrite commune ; les dialectes sont les langues vivantes parlées à la maison — un magnifique spectre à travers la région.",
      d1: "Dialecte levantin", r1: "Liban · Syrie · Jordanie · Palestine",
      d2: "Dialecte égyptien", r2: "Égypte — le dialecte le plus compris",
      d3: "Dialecte du Golfe", r3: "Arabie saoudite · EAU · Koweït · Qatar · Bahreïn · Oman",
      d4: "Dialecte maghrébin", r4: "Maroc · Algérie · Tunisie · Libye",
      d5: "Dialecte irakien", r5: "Irak",
      d6: "Dialecte soudanais", r6: "Soudan · Soudan du Sud",
    },
    influence: { tag: "L'influence", title: "Des mots qui ont voyagé", intro: "Les mots d'origine arabe vivent encore dans les sciences, les mathématiques, la cuisine et la vie quotidienne en Europe et au-delà." },
    words: {
      w1: { s: "Algèbre", m: "al-jabr — « restauration »" },
      w2: { s: "Zéro", m: "ṣifr — « rien »" },
      w3: { s: "Alcool", m: "al-kuḥl — le khôl" },
      w4: { s: "Coton", m: "quṭn" },
      w5: { s: "Sucre", m: "sukkar" },
      w6: { s: "Amiral", m: "amīr al-baḥr — « commandant de la mer »" },
      w7: { s: "Casbah", m: "qaṣba — « forteresse »" },
      w8: { s: "Luth", m: "al-ʿūd" },
      w9: { s: "Magasin", m: "makhāzin — « entrepôts »" },
      w10: { s: "Tarif", m: "taʿrīfa — « prix, taxe »" },
      w11: { s: "Citron", m: "laymūn" },
      w12: { s: "Chèque", m: "ṣakk — « document »" },
    },
    resources: { tag: "Les ressources", title: "Commencez à apprendre" },
    footer: { p: "Fait avec amour pour la langue de <span class=\"accent\">الضاد</span>", small: "© 2026 · Le projet de la langue arabe" },
  },

  es: {
    brand: "La lengua árabe",
    nav: { history: "Historia", alphabet: "Alfabeto", grammar: "Gramática", dialects: "Dialectos", influence: "Influencia", resources: "Recursos" },
    hero: {
      title: "Una lengua, <span class=\"accent\">mil</span> voces",
      sub: "Hablado por más de 400 millones de personas y apreciado por dos mil millones, el árabe es una de las grandes lenguas del mundo: la lengua de la poesía, la ciencia y el Corán.",
      btn1: "Explorar el alfabeto", btn2: "Leer su historia",
    },
    stats: { s1: "Millones de hablantes nativos", s2: "Países con el árabe como lengua oficial", s3: "Lengua más hablada del mundo", s4: "Mil millones conectados por el árabe" },
    history: {
      tag: "La historia", title: "Una historia de belleza y resiliencia",
      y1: "Siglo V", t1: "Las raíces clásicas", p1: "El árabe nace en la península arábiga, llevado por los poetas que se reunían en el zoco de Ukaz para competir en verso.",
      y2: "610 d. C.", t2: "La revelación", p2: "El Corán se revela en árabe. Su lengua se vuelve sagrada y une a toda una región bajo una lengua literaria común.",
      y3: "Siglos VIII–XIII", t3: "La Edad de Oro", p3: "El árabe se convierte en la lengua de la ciencia y la filosofía. Los sabios de Bagdad, Córdoba y El Cairo escriben en ella — del álgebra a la astronomía.",
      y4: "Era moderna", t4: "El árabe estándar moderno", p4: "Una forma estandarizada, heredera del árabe clásico, sirve como lengua escrita común para la prensa, la literatura y la educación en todo el mundo árabe.",
    },
    alphabet: { tag: "El alfabeto", title: "Las 28 letras", intro: "Escrito de derecha a izquierda, el alfabeto árabe es cursivo: las letras cambian de forma según su posición en la palabra. Haz clic en una letra para ver sus formas." },
    grammar: {
      tag: "La gramática", title: "Una gramática desde la raíz",
      c1h: "Sistema de raíces", c1p: "La mayoría de las palabras nacen de raíces de tres letras. De «k-t-b» (escribir) surgen kitāb (libro), maktaba (biblioteca) y kātib (escritor).",
      c2h: "Raíz y esquema", c2p: "Los patrones vocálicos dan forma al significado: el esquema «fāʿil» señala al agente, mientras que «mafʿūl» al paciente: un sistema profundamente lógico y musical.",
      c3h: "Vocales breves", c3p: "Las vocales breves suelen omitirse y se deducen del contexto. Los diacríticos se añaden en el Corán, la poesía y los libros infantiles.",
      c4h: "Caligrafía", c4p: "Como la escritura es cursiva y fluida, se convirtió en un arte: de las formas angulares del cúfico a las curvas del nasji y el diwani.",
    },
    dialects: {
      tag: "Los dialectos", title: "Una lengua, muchas voces", intro: "El árabe estándar moderno es la lengua escrita común; los dialectos son las lenguas vivas que se hablan en casa: un hermoso espectro en toda la región.",
      d1: "Dialecto levantino", r1: "Líbano · Siria · Jordania · Palestina",
      d2: "Dialecto egipcio", r2: "Egipto: el dialecto más comprendido",
      d3: "Dialecto del Golfo", r3: "Arabia Saudita · EAU · Kuwait · Catar · Baréin · Omán",
      d4: "Dialecto magrebí", r4: "Marruecos · Argelia · Túnez · Libia",
      d5: "Dialecto iraquí", r5: "Irak",
      d6: "Dialecto sudanés", r6: "Sudán · Sudán del Sur",
    },
    influence: { tag: "La influencia", title: "Palabras que viajaron por el mundo", intro: "Las palabras de origen árabe siguen vivas en la ciencia, las matemáticas, la cocina y la vida cotidiana en Europa y más allá." },
    words: {
      w1: { s: "Álgebra", m: "al-jabr — «restauración»" },
      w2: { s: "Cero", m: "ṣifr — «nada»" },
      w3: { s: "Alcohol", m: "al-kuḥl — el kohl" },
      w4: { s: "Algodón", m: "quṭn" },
      w5: { s: "Azúcar", m: "sukkar" },
      w6: { s: "Almirante", m: "amīr al-baḥr — «comandante del mar»" },
      w7: { s: "Alcazaba", m: "qaṣba — «fortaleza»" },
      w8: { s: "Laúd", m: "al-ʿūd" },
      w9: { s: "Almacén", m: "makhāzin — «almacenes»" },
      w10: { s: "Tarifa", m: "taʿrīfa — «precio, tasa»" },
      w11: { s: "Limón", m: "laymūn" },
      w12: { s: "Cheque", m: "ṣakk — «documento»" },
    },
    resources: { tag: "Los recursos", title: "Empieza a aprender" },
    footer: { p: "Hecho con amor por la lengua de <span class=\"accent\">الضاد</span>", small: "© 2026 · El proyecto de la lengua árabe" },
  },

  it: {
    brand: "La lingua araba",
    nav: { history: "Storia", alphabet: "Alfabeto", grammar: "Grammatica", dialects: "Dialetti", influence: "Influenza", resources: "Risorse" },
    hero: {
      title: "Una lingua, <span class=\"accent\">mille</span> voci",
      sub: "Parlato da oltre 400 milioni di persone e amato da due miliardi, l'arabo è una delle grandi lingue del mondo: la lingua della poesia, della scienza e del Corano.",
      btn1: "Esplora l'alfabeto", btn2: "Leggi la sua storia",
    },
    stats: { s1: "Milioni di madrelingua", s2: "Paesi con l'arabo come lingua ufficiale", s3: "Lingua più parlata al mondo", s4: "Miliardi di persone unite dall'arabo" },
    history: {
      tag: "La storia", title: "Una storia di bellezza e resilienza",
      y1: "V secolo", t1: "Le radici classiche", p1: "L'arabo nasce nella penisola arabica, portato dai poeti che si riunivano al suq di Ukaz per gareggiare in versi.",
      y2: "610 d.C.", t2: "La rivelazione", p2: "Il Corano viene rivelato in arabo. La sua lingua diventa sacra e unisce un'intera regione sotto una lingua letteraria comune.",
      y3: "VIII–XIII secolo", t3: "L'età dell'oro", p3: "L'arabo diventa la lingua della scienza e della filosofia. Gli studiosi di Baghdad, Cordova e Il Cairo vi scrivono, dall'algebra all'astronomia.",
      y4: "Era moderna", t4: "L'arabo standard moderno", p4: "Una forma standardizzata, discendente dell'arabo classico, funge da lingua scritta comune per stampa, letteratura e istruzione in tutto il mondo arabo.",
    },
    alphabet: { tag: "L'alfabeto", title: "Le 28 lettere", intro: "Scritto da destra a sinistra, l'alfabeto arabo è corsivo: le lettere cambiano forma a seconda della loro posizione nella parola. Clicca su una lettera per vedere le sue forme." },
    grammar: {
      tag: "La grammatica", title: "Una grammatica che nasce dalla radice",
      c1h: "Sistema delle radici", c1p: "La maggior parte delle parole nasce da radici di tre lettere. Da «k-t-b» (scrivere) nascono kitāb (libro), maktaba (biblioteca) e kātib (scrittore).",
      c2h: "Radice e schema", c2p: "Gli schemi vocalici danno forma al significato: lo schema «fāʿil» indica l'agente, mentre «mafʿūl» il paziente — un sistema profondamente logico e musicale.",
      c3h: "Vocali brevi", c3p: "Le vocali brevi di solito non si scrivono e si ricavano dal contesto. I segni diacritici si aggiungono nel Corano, nella poesia e nei libri per bambini.",
      c4h: "Calligrafia", c4p: "Poiché la scrittura è corsiva e fluida, è diventata un'arte: dalle forme angolari del cufico alle curve del naskh e del diwani.",
    },
    dialects: {
      tag: "I dialetti", title: "Una lingua, molte voci", intro: "L'arabo standard moderno è la lingua scritta comune; i dialetti sono le lingue vive parlate in casa: uno splendido spettro in tutta la regione.",
      d1: "Dialetto levantino", r1: "Libano · Siria · Giordania · Palestina",
      d2: "Dialetto egiziano", r2: "Egitto — il dialetto più compreso",
      d3: "Dialetto del Golfo", r3: "Arabia Saudita · EAU · Kuwait · Qatar · Bahrein · Oman",
      d4: "Dialetto maghrebino", r4: "Marocco · Algeria · Tunisia · Libia",
      d5: "Dialetto iracheno", r5: "Iraq",
      d6: "Dialetto sudanese", r6: "Sudan · Sudan del Sud",
    },
    influence: { tag: "L'influenza", title: "Parole che hanno viaggiato per il mondo", intro: "Le parole di origine araba sono ancora vive nella scienza, nella matematica, in cucina e nella vita quotidiana in Europa e oltre." },
    words: {
      w1: { s: "Algebra", m: "al-jabr — «restaurazione»" },
      w2: { s: "Zero", m: "ṣifr — «nulla»" },
      w3: { s: "Alcol", m: "al-kuḥl — il kohl" },
      w4: { s: "Cotone", m: "quṭn" },
      w5: { s: "Zucchero", m: "sukkar" },
      w6: { s: "Ammiraglio", m: "amīr al-baḥr — «comandante del mare»" },
      w7: { s: "Casba", m: "qaṣba — «fortezza»" },
      w8: { s: "Liuto", m: "al-ʿūd" },
      w9: { s: "Magazzino", m: "makhāzin — «magazzini»" },
      w10: { s: "Tariffa", m: "taʿrīfa — «prezzo, tassa»" },
      w11: { s: "Limone", m: "laymūn" },
      w12: { s: "Assegno", m: "ṣakk — «documento»" },
    },
    resources: { tag: "Le risorse", title: "Inizia a imparare" },
    footer: { p: "Fatto con amore per la lingua di <span class=\"accent\">الضاد</span>", small: "© 2026 · Il progetto della lingua araba" },
  },
};

let currentLang = localStorage.getItem("ar-lang") || "en";
let selectedIndex = null;

document.addEventListener("DOMContentLoaded", () => {
  setupLetters();
  setupNav();
  setupLangSelect();
  setupReveal();
  setupHeader();
  applyLang(currentLang);
});

/* ---------- Alphabet ---------- */
function setupLetters() {
  const grid = document.getElementById("lettersGrid");
  if (!grid) return;

  const fragment = document.createDocumentFragment();
  LETTERS.forEach((letter, i) => {
    const el = document.createElement("button");
    el.type = "button";
    el.className = "letter";
    el.dataset.index = i;
    el.setAttribute("aria-label", `Letter ${letter.name[currentLang]}`);
    el.innerHTML = `
      <span class="letter-isolated">${letter.isolated}</span>
      <span class="letter-form">${letter.forms[0]} ${letter.forms[1]} ${letter.forms[2]} ${letter.forms[3]}</span>
      <span class="letter-trans">${letter.trans}</span>
    `;
    fragment.appendChild(el);
  });

  const detail = document.createElement("div");
  detail.className = "letter-detail";
  detail.id = "letterDetail";
  fragment.appendChild(detail);

  grid.appendChild(fragment);

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".letter");
    if (!btn) return;
    selectedIndex = Number(btn.dataset.index);
    const detail = document.getElementById("letterDetail");
    renderLetterDetail(selectedIndex);
    detail.classList.add("visible");
    grid.querySelectorAll(".letter").forEach((l) => l.classList.remove("selected"));
    btn.classList.add("selected");
    detail.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

function renderLetterDetail(index) {
  const letter = LETTERS[index];
  const detail = document.getElementById("letterDetail");
  if (!detail) return;
  detail.innerHTML = `
    <span class="big">${letter.isolated}</span>
    <p><strong>${letter.name[currentLang]}</strong> — ${letter.note[currentLang]}</p>
    <p>${letter.forms[0]} &nbsp;·&nbsp; ${letter.forms[1]} &nbsp;·&nbsp; ${letter.forms[2]} &nbsp;·&nbsp; ${letter.forms[3]}</p>
  `;
}

/* ---------- Mobile nav ---------- */
function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  links.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

/* ---------- Language selector ---------- */
function setupLangSelect() {
  const select = document.getElementById("langSelect");
  if (!select) return;
  select.value = currentLang;

  select.addEventListener("change", () => {
    currentLang = select.value;
    localStorage.setItem("ar-lang", currentLang);
    applyLang(currentLang);
  });
}

function applyLang(lang) {
  const html = document.documentElement;
  const t = TRANSLATIONS[lang];
  html.setAttribute("lang", lang);
  html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  const select = document.getElementById("langSelect");
  if (select) select.value = lang;

  setText("#brandEn", lang, t.brand);
  setText(".nav-links li:nth-child(1) a", lang, t.nav.history);
  setText(".nav-links li:nth-child(2) a", lang, t.nav.alphabet);
  setText(".nav-links li:nth-child(3) a", lang, t.nav.grammar);
  setText(".nav-links li:nth-child(4) a", lang, t.nav.dialects);
  setText(".nav-links li:nth-child(5) a", lang, t.nav.influence);
  setText(".nav-links li:nth-child(6) a", lang, t.nav.resources);

  setText("#hero .hero-title", lang, t.hero.title);
  setText("#hero .hero-sub", lang, t.hero.sub);
  setText("#hero .hero-actions .btn-primary", lang, t.hero.btn1);
  setText("#hero .hero-actions .btn-ghost", lang, t.hero.btn2);

  document.querySelectorAll(".stat-label").forEach((el, i) => {
    setElText(el, lang, t.stats["s" + (i + 1)]);
  });

  setText("#history .section-tag", lang, t.history.tag);
  setText("#history .section-title", lang, t.history.title);
  setText(".timeline .tl-item:nth-child(1) .tl-year", lang, t.history.y1);
  setText(".timeline .tl-item:nth-child(1) h3", lang, t.history.t1);
  setText(".timeline .tl-item:nth-child(1) p", lang, t.history.p1);
  setText(".timeline .tl-item:nth-child(2) .tl-year", lang, t.history.y2);
  setText(".timeline .tl-item:nth-child(2) h3", lang, t.history.t2);
  setText(".timeline .tl-item:nth-child(2) p", lang, t.history.p2);
  setText(".timeline .tl-item:nth-child(3) .tl-year", lang, t.history.y3);
  setText(".timeline .tl-item:nth-child(3) h3", lang, t.history.t3);
  setText(".timeline .tl-item:nth-child(3) p", lang, t.history.p3);
  setText(".timeline .tl-item:nth-child(4) .tl-year", lang, t.history.y4);
  setText(".timeline .tl-item:nth-child(4) h3", lang, t.history.t4);
  setText(".timeline .tl-item:nth-child(4) p", lang, t.history.p4);

  setText("#alphabet .section-tag", lang, t.alphabet.tag);
  setText("#alphabet .section-title", lang, t.alphabet.title);
  setText("#alphabet .section-intro", lang, t.alphabet.intro);

  setText("#grammar .section-tag", lang, t.grammar.tag);
  setText("#grammar .section-title", lang, t.grammar.title);
  setText("#grammar .card:nth-child(1) h3", lang, t.grammar.c1h);
  setText("#grammar .card:nth-child(1) p", lang, t.grammar.c1p);
  setText("#grammar .card:nth-child(2) h3", lang, t.grammar.c2h);
  setText("#grammar .card:nth-child(2) p", lang, t.grammar.c2p);
  setText("#grammar .card:nth-child(3) h3", lang, t.grammar.c3h);
  setText("#grammar .card:nth-child(3) p", lang, t.grammar.c3p);
  setText("#grammar .card:nth-child(4) h3", lang, t.grammar.c4h);
  setText("#grammar .card:nth-child(4) p", lang, t.grammar.c4p);

  setText("#dialects .section-tag", lang, t.dialects.tag);
  setText("#dialects .section-title", lang, t.dialects.title);
  setText("#dialects .section-intro", lang, t.dialects.intro);
  setText("#dialects .dialect-card:nth-child(1) h3", lang, t.dialects.d1);
  setText("#dialects .dialect-card:nth-child(1) span", lang, t.dialects.r1);
  setText("#dialects .dialect-card:nth-child(2) h3", lang, t.dialects.d2);
  setText("#dialects .dialect-card:nth-child(2) span", lang, t.dialects.r2);
  setText("#dialects .dialect-card:nth-child(3) h3", lang, t.dialects.d3);
  setText("#dialects .dialect-card:nth-child(3) span", lang, t.dialects.r3);
  setText("#dialects .dialect-card:nth-child(4) h3", lang, t.dialects.d4);
  setText("#dialects .dialect-card:nth-child(4) span", lang, t.dialects.r4);
  setText("#dialects .dialect-card:nth-child(5) h3", lang, t.dialects.d5);
  setText("#dialects .dialect-card:nth-child(5) span", lang, t.dialects.r5);
  setText("#dialects .dialect-card:nth-child(6) h3", lang, t.dialects.d6);
  setText("#dialects .dialect-card:nth-child(6) span", lang, t.dialects.r6);

  setText("#influence .section-tag", lang, t.influence.tag);
  setText("#influence .section-title", lang, t.influence.title);
  setText("#influence .section-intro", lang, t.influence.intro);

  document.querySelectorAll(".word").forEach((wordEl, i) => {
    const w = t.words["w" + (i + 1)];
    setElText(wordEl.querySelector("strong"), lang, w.s);
    setElText(wordEl.querySelector("small"), lang, w.m);
  });

  setText("#resources .section-tag", lang, t.resources.tag);
  setText("#resources .section-title", lang, t.resources.title);

  setText(".site-footer p", lang, t.footer.p);
  setText(".site-footer small", lang, t.footer.small);

  document.querySelectorAll(".letter").forEach((el, i) => {
    el.setAttribute("aria-label", `Letter ${LETTERS[i].name[lang]}`);
  });
  if (selectedIndex !== null) renderLetterDetail(selectedIndex);
}

function setElText(el, lang, value) {
  if (!el) return;
  if (el.dataset.base === undefined) el.dataset.base = el.innerHTML;
  el.innerHTML = lang === "en" ? el.dataset.base : value;
  el.setAttribute("lang", lang);
}

function setText(selector, lang, value) {
  setElText(document.querySelector(selector), lang, value);
}

/* ---------- Scroll reveal ---------- */
function setupReveal() {
  const targets = document.querySelectorAll(
    ".section-head, .tl-item, .card, .dialect-card, .word, .resource, .stat"
  );
  targets.forEach((el) => el.classList.add("reveal"));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach((el) => io.observe(el));
}

/* ---------- Sticky header shadow ---------- */
function setupHeader() {
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    header.style.boxShadow = window.scrollY > 12 ? "0 6px 24px rgba(0,0,0,0.35)" : "none";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
