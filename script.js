// Тест
const quizData = [
    {
        question: "Кто изобрёл первую компьютерную мышь?",
        options: ["Билл Гейтс", "Дуглас Энгельбарт", "Стив Джобс"],
        answer: 1
    },
    {
        question: "Какой DPI у современных игровых мышей?",
        options: ["До 1,000", "До 10,000", "До 25,600"],
        answer: 2
    },
    {
        question: "Какая мышь помогает предотвратить туннельный синдром?",
        options: ["Игровая", "Вертикальная", "Трекпад"],
        answer: 1
    },
    {
        question: "Какая компания первой внедрила оптическую мышь в массовое производство?",
        options: ["Microsoft", "Logitech", "Apple"],
        answer: 0
    },
    {
        question: "Что означает DPI в контексте мыши?",
        options: ["Dots Per Inch", "Data Precision Index", "Digital Point Input"],
        answer: 0
    }
    
];

function buildQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizData.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <h3>${index + 1}. ${q.question}</h3>
            ${q.options.map((opt, i) => `
                <label>
                    <input type="radio" name="q${index}" value="${i}">
                    ${opt}
                </label>
            `).join('')}
        `;
        quizContainer.appendChild(questionDiv);
    });
}
function showResult() {
    const allQuestions = document.querySelectorAll('.question');
    let score = 0;

    allQuestions.forEach((questionEl, index) => {
        const selected = questionEl.querySelector('input[type="radio"]:checked');
        const existingFeedback = questionEl.querySelector('.answer');
        if (existingFeedback) existingFeedback.remove();

        const answerEl = document.createElement('div');
        answerEl.classList.add('answer');

        if (selected) {
            const isCorrect = parseInt(selected.value) === quizData[index].answer;
            if (isCorrect) {
                answerEl.classList.add('correct');
                answerEl.textContent = "✅ Верно!";
                score++;
            } else {
                answerEl.classList.add('wrong');
                answerEl.textContent = `❌ Неверно.`;
            }
        } else {
            answerEl.classList.add('wrong');
            answerEl.textContent = `❌ Вы не выбрали ответ.`;
        }

        questionEl.appendChild(answerEl);
    });
}


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

buildQuiz();