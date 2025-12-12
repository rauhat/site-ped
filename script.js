// Test questions data
const questions = [
    {
        id: 1,
        question: "Студенттердің ғылыми-зерттеу жұмысы (СҒЗЖ) нені қалыптастыруға бағытталған жүйелі әрекеттер жиынтығы болып табылады?",
        options: {
            "А": "Тек қана эксперимент жүргізу дағдысын.",
            "Ә": "Тек теориялық білімді тереңдетуді.",
            "Б": "Студенттің ғылыми ойлауын, зерттеу мәдениетін және ғылыми проблемаларды шешу қабілетін.",
            "В": "Кәсіби қызметтегі басқару дағдыларын.",
            "Г": "Тек қана ақпарат жинауды."
        },
        correctAnswer: "Б"
    },
    {
        id: 2,
        question: "СҒЗЖ процесі студенттің қандай әрекеттерінен тұрады?",
        options: {
            "А": "Тек лекция материалдарын қайталау.",
            "Ә": "Қатысушылармен әңгімелесу арқылы деректер жинау.",
            "Б": "Ақпаратты тек жинау және оны жүйелеу.",
            "В": "Ғылыми әдебиеттерді талдау, мәселені анықтау, зерттеу әдістерін қолдану, эксперимент жүргізу және ғылыми қорытынды жасау.",
            "Г": "Тек қана курстық жұмыс жазу."
        },
        correctAnswer: "В"
    },
    {
        id: 3,
        question: "СҒЗЖ-ның негізгі мақсаты не?",
        options: {
            "А": "Тек дипломдық жұмысқа материал жинақтау.",
            "Ә": "Қажетті құжаттарды сауатты рәсімдеуді үйрету.",
            "Б": "Тек ғылыми мақала жазу.",
            "В": "Студенттің зерттеушілік қабілетін, ғылыми ойлауын және кәсіби құзыреттілігін дамыту.",
            "Г": "Тек қана ұпай жинау."
        },
        correctAnswer: "В"
    },
    {
        id: 4,
        question: "Төмендегілердің қайсысы СҒЗЖ-ның міндетіне жатпайды?",
        options: {
            "А": "Зерттеу жүргізудің ғылыми әдістерін меңгерту.",
            "Ә": "Теориялық білімді тәжірибеде қолдану.",
            "Б": "Ғылыми тұжырым мен қорытынды жасай білуге дағдыландыру.",
            "В": "Күнделікті тұрмыстық мәселелерді шешу.",
            "Г": "Ғылыми проблеманы анықтауды үйрету."
        },
        correctAnswer: "В"
    },
    {
        id: 5,
        question: "СҒЗЖ түрлерінің ішіндегі \"Оқу-ғылыми жұмыстар\" санатына не жатады?",
        options: {
            "А": "Ғылыми үйірмелер мен стартаптар.",
            "Ә": "Зертханалық эксперимент жүргізу.",
            "Б": "Ғылыми жарыстарға қатысу.",
            "В": "Рефераттар, баяндамалар, курстық және дипломдық жұмыстар.",
            "Г": "Ғылыми-практикалық жобалар."
        },
        correctAnswer: "В"
    },
    {
        id: 6,
        question: "Аудиториядан тыс СҒЗЖ жұмыстарына не кіреді?",
        options: {
            "А": "Курстық және дипломдық жұмыстар.",
            "Ә": "Рефераттар жазу.",
            "Б": "Зертханалық талдау жасау.",
            "В": "Ғылыми үйірмелер, семинарлар, конференциялар, жобалар, стартаптар.",
            "Г": "Тек қана есеп беру жұмыстары."
        },
        correctAnswer: "В"
    },
    {
        id: 7,
        question: "Ғылыми-зерттеу жұмыстарына қойылатын негізгі талаптардың бірі не?",
        options: {
            "А": "Тек көп деректер жинақтау.",
            "Ә": "Зерттеудің қарапайым және жеңіл болуы.",
            "Б": "Ғылыми әдебиеттерді қолданбау.",
            "В": "Зерттеу мақсаты мен міндеттерінің нақтылығы, өзектіліктің және ғылыми жаңалықтың дәлелденуі.",
            "Г": "Тек қана иллюстрациялық материалдар."
        },
        correctAnswer: "В"
    },
    {
        id: 8,
        question: "Ғылыми-зерттеу жұмысында жол берілмейтін этикалық талап не?",
        options: {
            "А": "Деректердің шынайылығын сақтау.",
            "Ә": "Әдебиеттерді дұрыс рәсімдеу.",
            "Б": "Зерттеу этикасын сақтау.",
            "В": "Плагиатқа жол беру.",
            "Г": "Ғылыми нәтижелерді дәл ұсыну."
        },
        correctAnswer: "В"
    },
    {
        id: 9,
        question: "Б.М. Кедровтың пікірі бойынша, студенттің ғылыми ойлауын қалыптастырудың шешуші факторы не?",
        options: {
            "А": "Тек көп кітап оқу.",
            "Ә": "Зерттеу тақырыбын ерте таңдау.",
            "Б": "Тек қана жоғары баға алу.",
            "В": "Студенттің ғылыми-зерттеу жұмысына ерте араласуы.",
            "Г": "Курс бағдарламасын тез меңгеру."
        },
        correctAnswer: "В"
    },
    {
        id: 10,
        question: "Б.М. Кедровтың көзқарасы бойынша, студент ғылыми қызметті қалай түсінуі тиіс?",
        options: {
            "А": "Тек ақпарат жинау ретінде.",
            "Ә": "Тек тәжірибелік жұмыстарды орындау ретінде.",
            "Б": "Ғылыми әдебиеттерді оқу ретінде.",
            "В": "Ғылыми проблема қою, оны дәлелді түрде зерттеу және ғылыми қорытынды жасау процесі ретінде.",
            "Г": "Тек қана оқытушының тапсырмасын орындау ретінде."
        },
        correctAnswer: "В"
    }
];

let currentQuestionIndex = 0;
let userAnswers = [];

// Start test function
function startTest() {
    window.location.href = 'test.html';
}

// Initialize test page
function initializeTest() {
    if (!window.location.pathname.includes('test.html')) return;
    
    userAnswers = new Array(questions.length).fill(null);
    currentQuestionIndex = 0;
    displayQuestion();
}

// Display current question
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    const container = document.getElementById('questionContainer');
    
    let optionsHTML = '';
    for (const [key, value] of Object.entries(question.options)) {
        const checked = userAnswers[currentQuestionIndex] === key ? 'checked' : '';
        optionsHTML += `
            <li class="option-item">
                <input type="radio" name="answer" value="${key}" id="option${key}" class="option-input" ${checked} onchange="saveAnswer('${key}')">
                <label for="option${key}" class="option-label">
                    <span class="option-text"><strong>${key})</strong> ${value}</span>
                </label>
            </li>
        `;
    }
    
    container.innerHTML = `
        <h2 class="question-text">${question.id}. ${question.question}</h2>
        <ul class="options-list">
            ${optionsHTML}
        </ul>
    `;
    
    updateProgress();
    updateNavigationButtons();
}

// Save user answer
function saveAnswer(answer) {
    userAnswers[currentQuestionIndex] = answer;
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = questions.length;
}

// Update navigation buttons
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
}

// Next question
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

// Previous question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// Submit test
function submitTest() {
    const unanswered = userAnswers.filter(a => a === null).length;
    if (unanswered > 0) {
        if (!confirm(`Сізде ${unanswered} жауапсыз сұрақ қалды. Тестті аяқтағыңыз келе ме?`)) {
            return;
        }
    }
    
    localStorage.setItem('testResults', JSON.stringify({
        answers: userAnswers,
        questions: questions
    }));
    
    window.location.href = 'result.html';
}

// Initialize result page
function initializeResults() {
    if (!window.location.pathname.includes('result.html')) return;
    
    const data = JSON.parse(localStorage.getItem('testResults'));
    if (!data) {
        window.location.href = 'index.html';
        return;
    }
    
    const { answers, questions } = data;
    let correctCount = 0;
    
    // Calculate score
    answers.forEach((answer, index) => {
        if (answer === questions[index].correctAnswer) {
            correctCount++;
        }
    });
    
    const incorrectCount = questions.length - correctCount;
    const percentage = Math.round((correctCount / questions.length) * 100);
    
    // Update result message
    let message = '';
    let icon = '';
    if (percentage >= 90) {
        message = 'Өте жақсы нәтиже! Керемет білім деңгейі!';
        icon = '🎉';
    } else if (percentage >= 70) {
        message = 'Жақсы нәтиже! Білім деңгейіңіз жоғары!';
        icon = '🎓';
    } else if (percentage >= 50) {
        message = 'Жақсы әрекет! Одан әрі жақсартуға болады.';
        icon = '📚';
    } else {
        message = 'Материалды қайта оқып шығу керек.';
        icon = '📖';
    }
    
    document.getElementById('resultIcon').textContent = icon;
    document.getElementById('resultMessage').textContent = message;
    
    // Animate score
    setTimeout(() => {
        document.getElementById('scoreNumber').textContent = correctCount;
        document.getElementById('correctCount').textContent = correctCount;
        document.getElementById('incorrectCount').textContent = incorrectCount;
        document.getElementById('percentageValue').textContent = percentage + '%';
        
        // Animate circle
        const circle = document.getElementById('scoreCircle');
        const circumference = 2 * Math.PI * 90;
        const offset = circumference - (percentage / 100) * circumference;
        circle.style.strokeDashoffset = offset;
        
        // Change color based on percentage
        if (percentage >= 70) {
            circle.style.stroke = '#4CAF50';
        } else if (percentage >= 50) {
            circle.style.stroke = '#FFC107';
        } else {
            circle.style.stroke = '#f44336';
        }
    }, 300);
    
    // Display detailed results
    const detailedContainer = document.getElementById('detailedResults');
    let detailedHTML = '<h3 style="margin-bottom: 20px; color: #333;">Толық нәтижелер:</h3>';
    
    questions.forEach((question, index) => {
        const userAnswer = answers[index] || 'Жауап берілмеген';
        const isCorrect = userAnswer === question.correctAnswer;
        
        detailedHTML += `
            <div class="detail-item ${isCorrect ? 'correct' : 'incorrect'}">
                <div class="detail-question">${index + 1}. ${question.question}</div>
                <div class="detail-answer ${isCorrect ? 'correct' : 'incorrect'}">
                    Сіздің жауабыңыз: <strong>${userAnswer}</strong> ${isCorrect ? '✓' : '✗'}
                </div>
                ${!isCorrect ? `<div class="detail-answer correct">Дұрыс жауап: <strong>${question.correctAnswer}</strong></div>` : ''}
            </div>
        `;
    });
    
    detailedContainer.innerHTML = detailedHTML;
}

// Restart test
function restartTest() {
    localStorage.removeItem('testResults');
    window.location.href = 'test.html';
}

// Go to home
function goHome() {
    localStorage.removeItem('testResults');
    window.location.href = 'index.html';
}

// Initialize appropriate page
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        initializeTest();
        initializeResults();
    });
} else {
    initializeTest();
    initializeResults();
}