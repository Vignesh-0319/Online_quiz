// DOM references
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const retryBtn = document.getElementById("retryBtn");

const setupEl = document.getElementById("setup");
const questionArea = document.getElementById("questionArea");
const resultArea = document.getElementById("resultArea");

const qIndexEl = document.getElementById("qIndex");
const qTotalEl = document.getElementById("qTotal");
const questionText = document.getElementById("questionText");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const progressBar = document.getElementById("progressBar");
const timeLeftEl = document.getElementById("timeLeft");
const resultScore = document.getElementById("finalScore");
const performanceText = document.getElementById("performanceText");

const qTotalSelect = document.getElementById("numQuestions");
const timePerQSelect = document.getElementById("timePerQ");

// ==========================
// QUESTION BANKS (30 each)
// ==========================
const QUESTIONS = {
  easy: [
    { q: "Which HTML tag creates a hyperlink?", choices: ["<link>", "<a>", "<href>", "<hyper>"], answer: 1 },
    { q: "CSS stands for?", choices: ["Cascading Style Sheets", "Creative Style Setup", "Computer Styled System", "Custom Style Syntax"], answer: 0 },
    { q: "Which symbol is used for IDs in CSS?", choices: [".", "#", "@", "&"], answer: 1 },
    { q: "Which tag creates the largest heading?", choices: ["<h1>", "<h6>", "<header>", "<title>"], answer: 0 },
    { q: "Default display type of <div>?", choices: ["inline", "block", "flex", "grid"], answer: 1 },
    { q: "Which property sets background color in CSS?", choices: ["color", "bg", "background-color", "background"], answer: 2 },
    { q: "Which tag is used for line breaks?", choices: ["<br>", "<lb>", "<break>", "<ln>"], answer: 0 },
    { q: "In HTML, lists can be?", choices: ["Ordered & Unordered", "Only Ordered", "Only Unordered", "Styled"], answer: 0 },
    { q: "Which input type is used for emails?", choices: ["text", "mail", "email", "input-email"], answer: 2 },
    { q: "In CSS, font-size can be in?", choices: ["px", "em", "%", "all"], answer: 3 },
    { q: "Which symbol starts a comment in JS?", choices: ["//", "#", "/* */", "<!-- -->"], answer: 0 },
    { q: "In JS, arrays are written with?", choices: ["{}", "()", "[]", "<>"], answer: 2 },
    { q: "Which attribute sets image URL?", choices: ["href", "src", "alt", "url"], answer: 1 },
    { q: "Which tag adds an image?", choices: ["<img>", "<picture>", "<image>", "<src>"], answer: 0 },
    { q: "Which HTML element adds a link to CSS?", choices: ["<style>", "<css>", "<link>", "<script>"], answer: 2 },
    { q: "Which property centers text in CSS?", choices: ["align", "text-align", "center", "font-align"], answer: 1 },
    { q: "What is the default position in CSS?", choices: ["absolute", "relative", "static", "fixed"], answer: 2 },
    { q: "Which tag is used for forms?", choices: ["<form>", "<input>", "<fieldset>", "<table>"], answer: 0 },
    { q: "Which attribute makes input required?", choices: ["need", "must", "required", "validate"], answer: 2 },
    { q: "Which HTML element plays video?", choices: ["<movie>", "<video>", "<play>", "<media>"], answer: 1 },
    { q: "Which HTML element for bold text?", choices: ["<strong>", "<em>", "<bold>", "<mark>"], answer: 0 },
    { q: "CSS property to make corners round?", choices: ["border-radius", "corner-style", "roundness", "radius"], answer: 0 },
    { q: "Which attribute provides tooltip?", choices: ["info", "tooltip", "alt", "title"], answer: 3 },
    { q: "Which CSS property hides element?", choices: ["display:none", "visibility:hidden", "opacity:0", "all"], answer: 3 },
    { q: "Which HTML element adds JavaScript?", choices: ["<script>", "<js>", "<javascript>", "<code>"], answer: 0 },
    { q: "Which tag is used for lists with bullets?", choices: ["<ul>", "<ol>", "<li>", "<list>"], answer: 0 },
    { q: "Which tag is used for tables?", choices: ["<table>", "<tab>", "<grid>", "<tr>"], answer: 0 },
    { q: "Which HTML5 tag defines navigation?", choices: ["<navigate>", "<nav>", "<menu>", "<section>"], answer: 1 },
    { q: "Which HTML element defines footer?", choices: ["<footer>", "<bottom>", "<end>", "<down>"], answer: 0 },
    { q: "Which attribute is unique in a page?", choices: ["class", "id", "style", "name"], answer: 1 }
  ],
  medium: [
    { q: "Which HTTP status code means 'Not Found'?", choices: ["200", "301", "404", "500"], answer: 2 },
    { q: "SQL command to retrieve data?", choices: ["SELECT", "INSERT", "UPDATE", "DELETE"], answer: 0 },
    { q: "Which keyword declares constant in JS?", choices: ["let", "var", "const", "static"], answer: 2 },
    { q: "Which CSS unit is relative to root?", choices: ["px", "em", "rem", "%"], answer: 2 },
    { q: "In JS, === means?", choices: ["equal", "strict equal", "assignment", "compare"], answer: 1 },
    { q: "Which sorting algorithm is O(n log n)?", choices: ["Bubble", "Quick", "Insertion", "Selection"], answer: 1 },
    { q: "Which HTML element is semantic?", choices: ["<span>", "<article>", "<b>", "<div>"], answer: 1 },
    { q: "Which attribute adds alternate text for images?", choices: ["src", "alt", "title", "desc"], answer: 1 },
    { q: "Which DBMS command removes a table?", choices: ["DROP", "DELETE", "REMOVE", "CLEAR"], answer: 0 },
    { q: "Which CSS property changes font?", choices: ["font-style", "font-family", "font-weight", "font-size"], answer: 1 },
    { q: "Which HTML tag defines metadata?", choices: ["<meta>", "<head>", "<title>", "<link>"], answer: 0 },
    { q: "Which tag embeds audio?", choices: ["<sound>", "<audio>", "<music>", "<voice>"], answer: 1 },
    { q: "Which symbol is used for classes in CSS?", choices: [".", "#", "&", "@"], answer: 0 },
    { q: "Which SQL clause filters rows?", choices: ["WHERE", "HAVING", "ORDER", "GROUP"], answer: 0 },
    { q: "Which protocol sends emails?", choices: ["HTTP", "SMTP", "IMAP", "FTP"], answer: 1 },
    { q: "Which keyword is used for inheritance in Java?", choices: ["this", "super", "extends", "inherits"], answer: 2 },
    { q: "In JS, what is NaN?", choices: ["Not a Number", "New Array Number", "Negative and Null", "None"], answer: 0 },
    { q: "Which CSS property sets spacing between lines?", choices: ["line-height", "letter-spacing", "spacing", "row-gap"], answer: 0 },
    { q: "Which tag is used for definition list?", choices: ["<dl>", "<list>", "<def>", "<dt>"], answer: 0 },
    { q: "Which HTML element is block-level?", choices: ["<span>", "<div>", "<a>", "<strong>"], answer: 1 },
    // Add 10 more medium...
  ],
  hard: [
    { q: "What does Big-O notation represent?", choices: ["Algorithm runtime growth", "Code readability", "Program length", "Data storage"], answer: 0 },
    { q: "Which sorting algorithm is NOT comparison-based?", choices: ["Quick Sort", "Merge Sort", "Counting Sort", "Heap Sort"], answer: 2 },
    { q: "In DBMS, which isolation level avoids dirty reads?", choices: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"], answer: 1 },
    { q: "In OS, what is thrashing?", choices: ["High CPU use", "Excessive paging", "Low memory", "Deadlock"], answer: 1 },
    { q: "Which network model has 7 layers?", choices: ["TCP/IP", "OSI", "Hybrid", "LAN"], answer: 1 },
    { q: "Which algorithm is used in RSA?", choices: ["Factorization", "Diffie-Hellman", "Hashing", "ElGamal"], answer: 0 },
    { q: "Which data structure is used in recursion?", choices: ["Queue", "Stack", "Heap", "Tree"], answer: 1 },
    { q: "CAP theorem trade-off is between?", choices: ["Consistency, Availability, Partition tolerance", "Cache, Access, Performance", "Cost, Accuracy, Performance", "Control, Access, Privacy"], answer: 0 },
    { q: "Which database uses BASE instead of ACID?", choices: ["SQL", "NoSQL", "Oracle", "PostgreSQL"], answer: 1 },
    { q: "Which is NP-complete?", choices: ["Travelling Salesman", "Sorting", "Multiplication", "Binary Search"], answer: 0 },
    // Add 20 more hard...
  ]
};

// ==========================
// Quiz Logic
// ==========================
let questions = [];
let currentIndex = 0;
let score = 0;
let timer;
let timeRemaining;
let answered = false;

function startQuiz() {
  const difficulty = document.getElementById("difficulty").value;
  const totalQ = parseInt(qTotalSelect.value, 10);

  // Pick random questions from chosen difficulty
  questions = shuffleArray([...QUESTIONS[difficulty]]).slice(0, totalQ);

  currentIndex = 0;
  score = 0;
  scoreEl.textContent = score;
  qTotalEl.textContent = questions.length;

  setupEl.classList.add("hidden");
  questionArea.classList.remove("hidden");
  resultArea.classList.add("hidden");

  loadQuestion();
}

function loadQuestion() {
  answered = false;
  nextBtn.disabled = true;
  feedbackEl.textContent = "";

  const q = questions[currentIndex];
  qIndexEl.textContent = currentIndex + 1;
  questionText.textContent = q.q;
  choicesEl.innerHTML = "";

  q.choices.forEach((choice, i) => {
    const btn = document.createElement("div");
    btn.className = "choice fade-in";
    btn.textContent = choice;
    btn.addEventListener("click", () => selectAnswer(i, q.answer, btn));
    choicesEl.appendChild(btn);
  });

  timeRemaining = parseInt(timePerQSelect.value, 10);
  timeLeftEl.textContent = timeRemaining;
  startTimer();
}

function selectAnswer(choiceIndex, correctIndex) {
  if (answered) return;
  answered = true;
  clearInterval(timer);

  const choiceButtons = document.querySelectorAll(".choice");
  choiceButtons.forEach((btn, i) => {
    if (i === correctIndex) btn.classList.add("correct");
    if (i === choiceIndex && i !== correctIndex) btn.classList.add("incorrect");
    btn.classList.add("disabled");
  });

  if (choiceIndex === correctIndex) {
    score++;
    scoreEl.textContent = score;
    feedbackEl.textContent = "✅ Correct!";
  } else {
    feedbackEl.textContent = "❌ Wrong!";
  }

  nextBtn.disabled = false;
  updateProgress();
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    timeRemaining--;
    timeLeftEl.textContent = timeRemaining;
    if (timeRemaining <= 0) {
      clearInterval(timer);
      feedbackEl.textContent = "⏰ Time up!";
      selectAnswer(null, questions[currentIndex].answer);
    }
  }, 1000);
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    finishQuiz();
  }
});

retryBtn.addEventListener("click", startQuiz);

function finishQuiz() {
  questionArea.classList.add("hidden");
  resultArea.classList.remove("hidden");
  resultScore.textContent = `Your Score: ${score} / ${questions.length}`;
  performanceText.textContent =
    score >= questions.length / 2 ? "👏 Good job!" : "💡 Keep practicing!";
}

function updateProgress() {
  const pct = ((currentIndex + 1) / questions.length) * 100;
  progressBar.style.width = pct + "%";
}

function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

startBtn.addEventListener("click", startQuiz);
