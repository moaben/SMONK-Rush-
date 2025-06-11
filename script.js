const questions = {
  easy: [
    {
      en: {
        question: "What does 'BTC' stand for?",
        answers: ["Bitcoin", "Bitconnect", "Blockchain", "Bitcash"],
        correct: 0,
      },
      ar: {
        question: "ماذا تعني 'BTC'؟",
        answers: ["بيتكوين", "بتكونكت", "بلوكشين", "بيت كاش"],
        correct: 0,
      },
    },
    {
      en: {
        question: "Which technology underpins cryptocurrencies?",
        answers: ["Blockchain", "Internet", "Cloud Computing", "AI"],
        correct: 0,
      },
      ar: {
        question: "ما هي التقنية التي تدعم العملات الرقمية؟",
        answers: ["البلوكشين", "الإنترنت", "الحوسبة السحابية", "الذكاء الاصطناعي"],
        correct: 0,
      },
    },
    // ... add more easy questions here
  ],
  medium: [
    {
      en: {
        question: "What is a 'wallet' in crypto?",
        answers: ["A storage for coins", "A bank", "A computer virus", "A type of coin"],
        correct: 0,
      },
      ar: {
        question: "ما هو 'المحفظة' في الكريبتو؟",
        answers: ["مكان لتخزين العملات", "بنك", "فيروس كمبيوتر", "نوع من العملات"],
        correct: 0,
      },
    },
    // ... add more medium questions here
  ],
  hard: [
    {
      en: {
        question: "What is 'DeFi' short for?",
        answers: ["Decentralized Finance", "Defined Finance", "Digital Finance", "Deferred Finance"],
        correct: 0,
      },
      ar: {
        question: "ما معنى 'DeFi'؟",
        answers: ["التمويل اللامركزي", "تمويل محدد", "تمويل رقمي", "تمويل مؤجل"],
        correct: 0,
      },
    },
    // ... add more hard questions here
  ],
};

let currentLanguage = localStorage.getItem("language") || "en";
let currentLevel = null;
let score = 0;
let currentQuestionIndex = 0;
let timerInterval = null;
let timeLeft = 5;

const langButtons = document.querySelectorAll(".lang-btn");
const levelSelect = document.getElementById("level-select");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");
const resultEl = document.getElementById("result");
const finalScoreEl = document.getElementById("final-score");
const restartBtn = document.getElementById("restart-btn");
const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");
const app = document.getElementById("app");

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("language", lang);
  document.documentElement.lang = lang;
  if (lang === "ar") {
    document.body.setAttribute("lang", "ar");
  } else {
    document.body.removeAttribute("lang");
  }
  updateStaticText();
  resetGame();
}

function updateStaticText() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const translations = {
      choose_level: { en: "Choose Level", ar: "اختر المستوى" },
      easy: { en: "Easy", ar: "سهل" },
      medium: { en: "Medium", ar: "متوسط" },
      hard: { en: "Hard", ar: "صعب" },
      results: { en: "Results", ar: "النتائج" },
      restart: { en: "Restart", ar: "إعادة" },
    };
    if (translations[key]) {
      el.textContent = translations[key][currentLanguage];
    }
  });
}

function resetGame() {
  score = 0;
  currentQuestionIndex = 0;
  currentLevel = null;
  levelSelect.classList.remove("hide");
  quiz.classList.add("hide");
  resultEl.classList.add("hide");
  scoreEl.textContent = `${currentLanguage === "ar" ? "النقاط" : "Score"}: 0`;
}

function startGame(level) {
  currentLevel = level;
  score = 0;
  currentQuestionIndex = 0;
  levelSelect.classList.add("hide");
  quiz.classList.remove("hide");
  resultEl.classList.add("hide");
  scoreEl.textContent = `${currentLanguage === "ar" ? "النقاط" : "Score"}: 0`;
  showQuestion();
  startTimer();
}

function showQuestion() {
  clearInterval(timerInterval);
  timeLeft = 5;
  timerEl.textContent = timeLeft;
  const q = questions[currentLevel][currentQuestionIndex][currentLanguage];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  q.answers.forEach((answer, i) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.addEventListener("click", () => selectAnswer(i));
    answersEl.appendChild(btn);
  });
  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      nextQuestion();
    }
  }, 1000);
}

function selectAnswer(index) {
  clearInterval(timerInterval);
  const correctIndex = questions[currentLevel][currentQuestionIndex][currentLanguage].correct;
  if (index === correctIndex) {
    score++;
    scoreEl.textContent = `${currentLanguage === "ar" ? "النقاط" : "Score"}: ${score}`;
    correctSound.play();
  } else {
    wrongSound.play();
  }
  setTimeout(() => {
    nextQuestion();
  }, 1000);
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions[currentLevel].length) {
    showResults();
  } else {
    showQuestion();
  }
}

function showResults() {
  quiz.classList.add("hide");
  resultEl.classList.remove("hide");
  finalScoreEl.textContent =
    currentLanguage === "ar"
      ? `لقد حصلت على ${score} من ${questions[currentLevel].length} نقاط`
      : `You scored ${score} out of ${questions[currentLevel].length}`;
}

restartBtn.addEventListener("click", () => {
  resetGame();
});

langButtons.forEach(btn =>
  btn.addEventListener("click", () => {
    langButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    setLanguage(btn.dataset.lang);
  })
);

document.querySelectorAll(".level-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    startGame(btn.dataset.level);
  });
});

// Initialize
setLanguage(currentLanguage);
