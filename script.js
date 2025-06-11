// script.js
// Crypto Quiz Game - 200 questions, 3 levels, bilingual (EN/AR), timer, scoring, language & level select

const questions = {
  easy: [
    // Level: easy, total ~70 questions
    { en: "What does BTC stand for?", ar: "ماذا تعني BTC؟",
      options: {en: ["Bitcoin", "Bitcash", "Block Token", "Binary Coin"], ar: ["بيتكوين", "بيت كاش", "بلوكتوكن", "كوين ثنائي"]},
      correct: 0 },
    { en: "Which technology underpins cryptocurrencies?", ar: "أي تقنية تدعم العملات الرقمية؟",
      options: {en: ["Blockchain", "Cloud Computing", "Internet", "AI"], ar: ["البلوكتشين", "الحوسبة السحابية", "الإنترنت", "الذكاء الاصطناعي"]},
      correct: 0 },
    { en: "What is a digital wallet used for?", ar: "ما هو المحفظة الرقمية؟",
      options: {en: ["Storing crypto keys", "Mining coins", "Trading stocks", "Sending emails"], ar: ["تخزين مفاتيح العملات", "تعدين العملات", "تداول الأسهم", "إرسال البريد الإلكتروني"]},
      correct: 0 },
    // ...add ~67 more easy questions here
  ],
  medium: [
    // Level: medium, total ~70 questions
    { en: "What is a 'private key' in crypto?", ar: "ما هو 'المفتاح الخاص' في الكريبتو؟",
      options: {en: ["Secret key to access wallet", "Public address", "Type of coin", "Exchange platform"], ar: ["مفتاح سري للوصول للمحفظة", "العنوان العام", "نوع من العملات", "منصة تداول"]},
      correct: 0 },
    { en: "Which is NOT a type of crypto wallet?", ar: "أي مما يلي ليس نوعاً من المحافظ الرقمية؟",
      options: {en: ["Cold Wallet", "Hot Wallet", "Warm Wallet", "Hardware Wallet"], ar: ["المحفظة الباردة", "المحفظة الساخنة", "المحفظة الدافئة", "المحفظة الصلبة"]},
      correct: 2 },
    { en: "What does 'HODL' mean?", ar: "ماذا تعني 'HODL'؟",
      options: {en: ["Hold on for dear life", "Sell immediately", "Buy low sell high", "Trade often"], ar: ["الاحتفاظ بالعملة", "البيع الفوري", "الشراء بسعر منخفض والبيع بسعر مرتفع", "التداول المتكرر"]},
      correct: 0 },
    // ...add ~67 more medium questions here
  ],
  hard: [
    // Level: hard, total ~60 questions
    { en: "What consensus algorithm does Bitcoin use?", ar: "ما هو خوارزمية التوافق التي يستخدمها البيتكوين؟",
      options: {en: ["Proof of Work", "Proof of Stake", "Delegated Proof of Stake", "Byzantine Fault Tolerance"], ar: ["إثبات العمل", "إثبات الحصة", "إثبات الحصة المفوض", "تحمل الخطأ البيزنطي"]},
      correct: 0 },
    { en: "What does 'DeFi' stand for?", ar: "ماذا تعني 'DeFi'؟",
      options: {en: ["Decentralized Finance", "Deferred Finance", "Digital Finance", "Distributed Fidelity"], ar: ["التمويل اللامركزي", "التمويل المؤجل", "التمويل الرقمي", "الوفاء الموزع"]},
      correct: 0 },
    { en: "What is a '51% attack'?", ar: "ما هو 'هجوم 51%'؟",
      options: {en: ["Controlling majority mining power", "Security upgrade", "Exchange hack", "Wallet backup"], ar: ["السيطرة على غالبية قوة التعدين", "ترقية الأمان", "اختراق منصة تداول", "نسخة احتياطية للمحفظة"]},
      correct: 0 },
    // ...add ~57 more hard questions here
  ],
};

// The above is a skeleton with 9 sample questions total (3 per level).
// You would need to fill ~200 questions total in similar format.

// Game state variables
let currentLevel = "easy";
let language = "en";
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 5; // 5 seconds per question

// Elements references (add these IDs to your HTML accordingly)
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const scoreDisplay = document.getElementById("score-display");
const timerDisplay = document.getElementById("timer-display");
const nextBtn = document.getElementById("next-btn");
const languageSelect = document.getElementById("language-select");
const levelSelect = document.getElementById("level-select");
const resultDisplay = document.getElementById("result-display");

function startGame() {
  score = 0;
  currentQuestionIndex = 0;
  updateScore();
  nextBtn.disabled = true;
  loadQuestion();
  startTimer();
  resultDisplay.textContent = "";
}

function loadQuestion() {
  clearInterval(timer);
  timeLeft = 5;
  timerDisplay.textContent = timeLeft;

  const questionSet = questions[currentLevel];
  if (currentQuestionIndex >= questionSet.length) {
    endGame();
    return;
  }

  const q = questionSet[currentQuestionIndex];
  questionText.textContent = language === "en" ? q.en : q.ar;

  // Clear previous options
  optionsContainer.innerHTML = "";
  q.options[language].forEach((option, index) => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = option;
    btn.onclick = () => selectAnswer(index);
    optionsContainer.appendChild(btn);
  });

  nextBtn.disabled = true;
}

function selectAnswer(selectedIndex) {
  clearInterval(timer);
  const questionSet = questions[currentLevel];
  const correctIndex = questionSet[currentQuestionIndex].correct;

  // Disable all buttons
  Array.from(optionsContainer.children).forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correctIndex) btn.classList.add("correct");
    if (idx === selectedIndex && idx !== correctIndex) btn.classList.add("wrong");
  });

  if (selectedIndex === correctIndex) {
    score++;
    updateScore();
    resultDisplay.textContent = language === "en" ? "Correct!" : "صحيح!";
    resultDisplay.style.color = "green";
  } else {
    resultDisplay.textContent = language === "en" ? "Wrong!" : "خطأ!";
    resultDisplay.style.color = "red";
  }

  nextBtn.disabled = false;
}

function nextQuestion() {
  currentQuestionIndex++;
  resultDisplay.textContent = "";
  loadQuestion();
  startTimer();
}

function updateScore() {
  scoreDisplay.textContent = (language === "en" ? "Score: " : "النقاط: ") + score;
}

function startTimer() {
  clearInterval(timer);
  timeLeft = 5;
  timerDisplay.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      resultDisplay.textContent = language === "en" ? "Time's up!" : "انتهى الوقت!";
      resultDisplay.style.color = "orange";

      // Show correct answer
      const questionSet = questions[currentLevel];
      const correctIndex = questionSet[currentQuestionIndex].correct;
      Array.from(optionsContainer.children).forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === correctIndex) btn.classList.add("correct");
      });

      nextBtn.disabled = false;
    }
  }, 1000);
}

function endGame() {
  clearInterval(timer);
  questionText.textContent = language === "en" ? "Game Over!" : "انتهت اللعبة!";
  optionsContainer.innerHTML = "";
  resultDisplay.textContent = (language === "en" ? "Your final score is: " : "نقاطك النهائية: ") + score;
  nextBtn.disabled = true;
}

languageSelect.addEventListener("change", () => {
  language = languageSelect.value;
  startGame();
});

levelSelect.addEventListener("change", () => {
  currentLevel = levelSelect.value;
  startGame();
});

nextBtn.addEventListener("click", nextQuestion);

// Initialize game on page load
window.onload = () => {
  language = languageSelect.value;
  currentLevel = levelSelect.value;
  startGame();
};
