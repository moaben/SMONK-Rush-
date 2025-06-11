const questions = [
  // 1
  {
    en: {
      question: "What is Bitcoin?",
      answers: ["A cryptocurrency", "A video game", "A social media platform", "A software"],
      correct: 0,
    },
    ar: {
      question: "ما هي البيتكوين؟",
      answers: ["عملة رقمية", "لعبة فيديو", "منصة تواصل اجتماعي", "برنامج"],
      correct: 0,
    },
  },
  // 2
  {
    en: {
      question: "What does 'mining' mean in crypto?",
      answers: ["Validating transactions", "Hacking accounts", "Sending emails", "Designing websites"],
      correct: 0,
    },
    ar: {
      question: "ماذا يعني 'التعدين' في العملات الرقمية؟",
      answers: ["التحقق من المعاملات", "اختراق الحسابات", "إرسال البريد الإلكتروني", "تصميم المواقع"],
      correct: 0,
    },
  },
  // 3
  {
    en: {
      question: "What is a blockchain?",
      answers: ["A distributed ledger", "A type of coin", "An exchange", "A wallet"],
      correct: 0,
    },
    ar: {
      question: "ما هي تقنية البلوكشين؟",
      answers: ["دفتر أستاذ موزع", "نوع من العملات", "بورصة", "محفظة"],
      correct: 0,
    },
  },
  // 4
  {
    en: {
      question: "Which one is NOT a cryptocurrency?",
      answers: ["Ethereum", "Litecoin", "Ripple", "Facebook"],
      correct: 3,
    },
    ar: {
      question: "أي من التالي ليست عملة رقمية؟",
      answers: ["إيثريوم", "لايتكوين", "ريبل", "فيسبوك"],
      correct: 3,
    },
  },
  // 5
  {
    en: {
      question: "What does 'HODL' mean?",
      answers: ["Hold On for Dear Life", "Sell Quickly", "Buy More", "Mine Coins"],
      correct: 0,
    },
    ar: {
      question: "ماذا تعني كلمة 'HODL'؟",
      answers: ["التمسك طويلًا", "البيع بسرعة", "الشراء أكثر", "تعدين العملات"],
      correct: 0,
    },
  },
  // 6
  {
    en: {
      question: "What is Ethereum mainly used for?",
      answers: ["Smart contracts", "Video games", "Online shopping", "Social media"],
      correct: 0,
    },
    ar: {
      question: "ما هو الاستخدام الرئيسي لإيثريوم؟",
      answers: ["العقود الذكية", "ألعاب الفيديو", "التسوق الإلكتروني", "وسائل التواصل الاجتماعي"],
      correct: 0,
    },
  },
  // 7
  {
    en: {
      question: "What is a token in crypto?",
      answers: ["A digital asset", "A physical coin", "A website", "A bank"],
      correct: 0,
    },
    ar: {
      question: "ما هو التوكن في العملات الرقمية؟",
      answers: ["أصل رقمي", "عملة مادية", "موقع إلكتروني", "بنك"],
      correct: 0,
    },
  },
  // 8
  {
    en: {
      question: "What is a wallet in crypto?",
      answers: ["A place to store coins", "A bank", "An exchange", "A game"],
      correct: 0,
    },
    ar: {
      question: "ما هي المحفظة في الكريبتو؟",
      answers: ["مكان لتخزين العملات", "بنك", "بورصة", "لعبة"],
      correct: 0,
    },
  },
  // 9
  {
    en: {
      question: "Which crypto is known as 'digital gold'?",
      answers: ["Bitcoin", "Ethereum", "Litecoin", "Dogecoin"],
      correct: 0,
    },
    ar: {
      question: "أي عملة رقمية تعرف بـ 'الذهب الرقمي'؟",
      answers: ["بيتكوين", "إيثريوم", "لايتكوين", "دوغكوين"],
      correct: 0,
    },
  },
  // 10
  {
    en: {
      question: "What does 'DeFi' stand for?",
      answers: ["Decentralized Finance", "Digital Finance", "Direct Finance", "Decentralized Files"],
      correct: 0,
    },
    ar: {
      question: "ماذا تعني 'DeFi'؟",
      answers: ["التمويل اللامركزي", "التمويل الرقمي", "التمويل المباشر", "الملفات اللامركزية"],
      correct: 0,
    },
  },
  // 11
  {
    en: {
      question: "What is a smart contract?",
      answers: ["Self-executing contract", "A phone app", "A social media post", "A video game"],
      correct: 0,
    },
    ar: {
      question: "ما هو العقد الذكي؟",
      answers: ["عقد ينفذ نفسه", "تطبيق هاتف", "منشور تواصل اجتماعي", "لعبة فيديو"],
      correct: 0,
    },
  },
  // 12
  {
    en: {
      question: "What does 'ICO' mean?",
      answers: ["Initial Coin Offering", "Internet Coin Operation", "International Crypto Order", "Instant Crypto Offer"],
      correct: 0,
    },
    ar: {
      question: "ماذا تعني ICO؟",
      answers: ["عرض العملة الأولي", "تشغيل عملة الإنترنت", "أمر تشفير دولي", "عرض تشفير فوري"],
      correct: 0,
    },
  },
  // 13
  {
    en: {
      question: "What is Ethereum's native cryptocurrency?",
      answers: ["Ether", "Bitcoin", "Litecoin", "Dogecoin"],
      correct: 0,
    },
    ar: {
      question: "ما هي العملة الأصلية لإيثريوم؟",
      answers: ["إيثر", "بيتكوين", "لايتكوين", "دوغكوين"],
      correct: 0,
    },
  },
  // 14
  {
    en: {
      question: "What is 'staking' in crypto?",
      answers: ["Locking coins to support the network", "Selling coins quickly", "Buying new coins", "Mining coins"],
      correct: 0,
    },
    ar: {
      question: "ما هو 'الستاكينج' في العملات الرقمية؟",
      answers: ["قفل العملات لدعم الشبكة", "بيع العملات بسرعة", "شراء عملات جديدة", "تعدين العملات"],
      correct: 0,
    },
  },
  // 15
  {
    en: {
      question: "Which crypto uses the Proof of Work consensus?",
      answers: ["Bitcoin", "Cardano", "Polkadot", "Solana"],
      correct: 0,
    },
    ar: {
      question: "أي عملة تستخدم إثبات العمل؟",
      answers: ["بيتكوين", "كاردانو", "بولكادوت", "سولانا"],
      correct: 0,
    },
  },
  // 16
  {
    en: {
      question: "What is a 'fork' in blockchain?",
      answers: ["A split in the blockchain", "A software bug", "A hacking tool", "A wallet type"],
      correct: 0,
    },
    ar: {
      question: "ما هو 'الفورك' في البلوكشين؟",
      answers: ["انقسام في البلوكشين", "خطأ في البرنامج", "أداة اختراق", "نوع محفظة"],
      correct: 0,
    },
  },
  // 17
  {
    en: {
      question: "What is 'gas' in Ethereum?",
      answers: ["Transaction fee", "A new coin", "A wallet type", "A mining tool"],
      correct: 0,
    },
    ar: {
      question: "ما هو 'الغاز' في إيثريوم؟",
      answers: ["رسوم المعاملة", "عملة جديدة", "نوع محفظة", "أداة تعدين"],
      correct: 0,
    },
  },
  // 18
  {
    en: {
      question: "What is a decentralized exchange (DEX)?",
      answers: ["A crypto trading platform without intermediaries", "A bank", "A wallet", "A social network"],
      correct: 0,
    },
    ar: {
      question: "ما هي البورصة اللامركزية؟",
      answers: ["منصة تداول بدون وسطاء", "بنك", "محفظة", "شبكة اجتماعية"],
      correct: 0,
    },
  },
  // 19
  {
    en: {
      question: "What is the maximum supply of Bitcoin?",
      answers: ["21 million", "100 million", "1 billion", "10 million"],
      correct: 0,
    },
    ar: {
      question: "ما هو الحد الأقصى لإجمالي عملات البيتكوين؟",
      answers: ["21 مليون", "100 مليون", "1 مليار", "10 مليون"],
      correct: 0,
    },
  },
  // 20
  {
    en: {
      question: "What is 'cold storage'?",
      answers: ["Offline crypto storage", "Hot wallet", "Mining rig", "Exchange account"],
      correct: 0,
    },
    ar: {
      question: "ما هو التخزين البارد؟",
      answers: ["تخزين العملات دون اتصال بالإنترنت", "محفظة ساخنة", "معدات تعدين", "حساب بورصة"],
      correct: 0,
    },
  },
  // 21
  {
    en: {
      question: "What is a 'public key'?",
      answers: ["A crypto wallet address", "A password", "A private note", "A transaction fee"],
      correct: 0,
    },
    ar: {
      question: "ما هو المفتاح العام؟",
      answers: ["عنوان المحفظة", "كلمة سر", "ملاحظة خاصة", "رسوم معاملة"],
      correct: 0,
    },
  },
  // 22
  {
    en: {
      question: "What is a 'private key'?",
      answers: ["A secret code to access wallet", "A public address", "A new coin", "A crypto exchange"],
      correct: 0,
    },
    ar: {
      question: "ما هو المفتاح الخاص؟",
      answers: ["كود سري للوصول للمحفظة", "عنوان عام", "عملة جديدة", "بورصة عملات رقمية"],
      correct: 0,
    },
  },
  // 23
  {
    en: {
      question: "Which crypto is fastest in transactions?",
      answers: ["Solana", "Bitcoin", "Ethereum", "Litecoin"],
      correct: 0,
    },
    ar: {
      question: "أي عملة رقمية الأسرع في المعاملات؟",
      answers: ["سولانا", "بيتكوين", "إيثريوم", "لايتكوين"],
      correct: 0,
    },
  },
  // 24
  {
    en: {
      question: "What does 'FOMO' mean?",
      answers: ["Fear Of Missing Out", "Fun Of Making Offers", "Fear Of Making Offers", "Fear Of Money"],
      correct: 0,
    },
    ar: {
      question: "ماذا تعني كلمة 'FOMO'؟",
      answers: ["الخوف من الفقدان", "متعة تقديم العروض", "الخوف من تقديم العروض", "الخوف من المال"],
      correct: 0,
    },
  },
  // 25
  {
    en: {
      question: "What is a 'tokenomics'?",
      answers: ["Economics of a token", "A type of token", "A mining tool", "A wallet"],
      correct: 0,
    },
    ar: {
      question: "ما هو الـ 'توكنوميكس'؟",
      answers: ["اقتصاديات التوكن", "نوع من التوكن", "أداة تعدين", "محفظة"],
      correct: 0,
    },
  },
  // 26
  {
    en: {
      question: "What does 'ATH' stand for in crypto?",
      answers: ["All Time High", "Average Trading Hour", "Annual Trading History", "Automatic Trade Helper"],
      correct: 0,
    },
    ar: {
      question: "ماذا تعني ATH في الكريبتو؟",
      answers: ["أعلى سعر على الإطلاق", "متوسط ساعة التداول", "سجل التداول السنوي", "مساعد التداول الآلي"],
      correct: 0,
    },
  },
  // 27
  {
    en: {
      question: "Which crypto has the largest market cap?",
      answers: ["Bitcoin", "Ethereum", "Binance Coin", "Cardano"],
      correct: 0,
    },
    ar: {
      question: "أي عملة رقمية لديها أكبر قيمة سوقية؟",
      answers: ["بيتكوين", "إيثريوم", "بينانس كوين", "كاردانو"],
      correct: 0,
    },
  },
  // 28
  {
    en: {
      question: "What is a 'block' in blockchain?",
      answers: ["A record of transactions", "A coin", "A wallet", "A mining tool"],
      correct: 0,
    },
    ar: {
      question: "ما هو الـ 'بلوك' في البلوكشين؟",
      answers: ["سجل المعاملات", "عملة", "محفظة", "أداة تعدين"],
      correct: 0,
    },
  },
  // 29
  {
    en: {
      question: "What is a 'nonce' in blockchain?",
      answers: ["A number used once in mining", "A coin type", "A wallet address", "A mining pool"],
      correct: 0,
    },
    ar: {
      question: "ما هو الـ 'نونص' في البلوكشين؟",
      answers: ["رقم يستخدم مرة واحدة في التعدين", "نوع عملة", "عنوان محفظة", "مجموعة تعدين"],
      correct: 0,
    },
  },
  // 30
  {
    en: {
      question: "Which is a popular crypto wallet?",
      answers: ["MetaMask", "PayPal", "Google Wallet", "Venmo"],
      correct: 0,
    },
    ar: {
      question: "أي من المحفظات التالية مشهورة؟",
      answers: ["ميتا ماسك", "باي بال", "جوجل والت", "فينمو"],
      correct: 0,
    },
  },
  // 31
  {
    en: {
      question: "What is 'liquidity' in crypto?",
      answers: ["Ease of buying/selling", "Number of coins", "Market cap", "Mining speed"],
      correct: 0,
    },
    ar: {
      question: "ما هو السيولة في الكريبتو؟",
      answers: ["سهولة الشراء/البيع", "عدد العملات", "القيمة السوقية", "سرعة التعدين"],
      correct: 0,
    },
  },
  // 32
  {
    en: {
      question: "What is a 'whale' in crypto slang?",
      answers: ["A large investor", "A hacker", "A miner", "A trader"],
      correct: 0,
    },
    ar: {
      question: "ماذا يعني 'حوت' في مصطلحات الكريبتو؟",
      answers: ["مستثمر كبير", "هاكر", "مُعدّن", "متداول"],
      correct: 0,
    },
  },
  // 33
  {
    en: {
      question: "What is a 'bull market'?",
      answers: ["Market rising", "Market crashing", "Market stagnant", "Market uncertain"],
      correct: 0,
    },
    ar: {
      question: "ما هو سوق الثيران؟",
      answers: ["سوق صاعد", "سوق هابط", "سوق راكد", "سوق غير مؤكد"],
      correct: 0,
    },
  },
  // 34
  {
    en: {
      question: "What is 'FUD' in crypto?",
      answers: ["Fear, Uncertainty, Doubt", "Fast User Data", "Financial User Deposit", "Future Utility Data"],
      correct: 0,
    },
    ar: {
      question: "ما معنى FUD في الكريبتو؟",
      answers: ["الخوف، عدم اليقين، الشك", "بيانات المستخدم السريعة", "وديعة المستخدم المالية", "بيانات المنفعة المستقبلية"],
      correct: 
