const questions = [{
    text: "Kam naudingos morkos?",
    choices: ["Niekam", "Hitleriui", "Kepenims", "Odai"],
    answer: "Odai"
 },
 {
    text: "Kam naudingi obuoliai?",
    choices: ["Širdžiai", "Kojoms", "Delfinams", "Virškinimui"],
    answer: "Virškinimui"
 },
 {
    text: "Kokias ligas padeda gydyti agrastai?",
    choices: ["Cukrini diabetą", "Kepenų cirozę", "Nemiga", "Vėžį"],
    answer: "Cukrini diabetą"
 },
 {
    text: "Kokio vitamino gausu apelsinuose?",
    choices: ["Vitamino E", "Vitamino A", "Vitamino C", "Vitamino B"],
    answer: "Vitamino C"
 },
 {
    text: "Kokiais dalykais yra turtingi arbūzai?",
    choices: ["Vitaminais", "Mineralais", "Antioksidantais", "Visi teisingi"],
    answer: "Visi teisingi"
 }];

const startBtn = document.getElementById("startBtn")
const quizContainer = document.getElementById("quizContainer")
const questionContainer = document.getElementById("questionContainer")
const questionNumber = document.getElementById("questionNumber")
const scoreElement = document.getElementById("score")
const restartBtn = document.getElementById("restartBtn")

let currentQuestionIndex = 0
let score = 0

startBtn.addEventListener("click", startQuiz)
restartBtn.addEventListener("click", restartQuiz)

function startQuiz() {
    startBtn.style.display = "none"
    quizContainer.style.display = "block"
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex]
    questionContainer.innerHTML = `<h3>${currentQuestion.text}</h3>`
    
    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement("button")
        button.textContent = choice
        button.addEventListener("click", () => checkAnswer(choice))
        questionContainer.appendChild(button)
    })

    questionNumber.textContent = `Klausimas ${currentQuestionIndex + 1} iš 5`
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex]
    if (selectedAnswer === currentQuestion.answer) {
        score++
    }

    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    } else {
        showResults()
    }
}
function showResults() {
    quizContainer.style.display = "block"
    resultsContainer.style.display = "block"
    scoreElement.textContent = ` ${score}`
}
function restartQuiz() {
    currentQuestionIndex = 0
    score = 0
    resultsContainer.style.display = "none"
    quizContainer.style.display = "block"
    startBtn.style.display = "block"
}
