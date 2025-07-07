// ===== DADOS DAS PERGUNTAS =====
const questionsData = {
    matematica: [
        {
            question: "Qual é o resultado de 15 + 28?",
            options: ["41", "43", "45", "47"],
            correct: 1,
            explanation: "15 + 28 = 43"
        },
        {
            question: "Se um triângulo tem ângulos de 60°, 60° e 60°, ele é:",
            options: ["Escaleno", "Isósceles", "Equilátero", "Retângulo"],
            correct: 2,
            explanation: "Um triângulo com todos os ângulos iguais a 60° é equilátero."
        },
        {
            question: "Qual é a raiz quadrada de 144?",
            options: ["10", "11", "12", "13"],
            correct: 2,
            explanation: "√144 = 12, pois 12 × 12 = 144"
        },
        {
            question: "Se x + 5 = 12, qual é o valor de x?",
            options: ["5", "6", "7", "8"],
            correct: 2,
            explanation: "x + 5 = 12, então x = 12 - 5 = 7"
        },
        {
            question: "Qual é a área de um retângulo com base 8 e altura 6?",
            options: ["42", "46", "48", "50"],
            correct: 2,
            explanation: "Área = base × altura = 8 × 6 = 48"
        },
        {
            question: "Quanto é 25% de 200?",
            options: ["25", "50", "75", "100"],
            correct: 1,
            explanation: "25% de 200 = 0,25 × 200 = 50"
        },
        {
            question: "Qual é o perímetro de um quadrado com lado 7 cm?",
            options: ["21 cm", "28 cm", "35 cm", "49 cm"],
            correct: 1,
            explanation: "Perímetro do quadrado = 4 × lado = 4 × 7 = 28 cm"
        },
        {
            question: "Se 3x = 21, qual é o valor de x?",
            options: ["6", "7", "8", "9"],
            correct: 1,
            explanation: "3x = 21, então x = 21 ÷ 3 = 7"
        },
        {
            question: "Qual é o resultado de 8²?",
            options: ["16", "32", "64", "128"],
            correct: 2,
            explanation: "8² = 8 × 8 = 64"
        },
        {
            question: "Em uma fração 3/4, qual é o denominador?",
            options: ["3", "4", "7", "12"],
            correct: 1,
            explanation: "Na fração 3/4, o denominador é 4 (número de baixo)."
        }
    ],
    geografia: [
        {
            question: "Qual é a capital do Brasil?",
            options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
            correct: 2,
            explanation: "Brasília é a capital federal do Brasil desde 1960."
        },
        {
            question: "Qual é o maior país do mundo em extensão territorial?",
            options: ["China", "Estados Unidos", "Canadá", "Rússia"],
            correct: 3,
            explanation: "A Rússia é o maior país do mundo com mais de 17 milhões de km²."
        },
        {
            question: "Em qual continente fica o Egito?",
            options: ["Ásia", "África", "Europa", "Oceania"],
            correct: 1,
            explanation: "O Egito está localizado no continente africano."
        },
        {
            question: "Qual é o rio mais longo do mundo?",
            options: ["Amazonas", "Nilo", "Mississippi", "Yangtzé"],
            correct: 1,
            explanation: "O Rio Nilo, com cerca de 6.650 km, é considerado o mais longo do mundo."
        },
        {
            question: "Quantos continentes existem?",
            options: ["5", "6", "7", "8"],
            correct: 2,
            explanation: "Existem 7 continentes: África, Antártida, Ásia, Europa, América do Norte, América do Sul e Oceania."
        },
        {
            question: "Qual é a capital da França?",
            options: ["Londres", "Madrid", "Paris", "Roma"],
            correct: 2,
            explanation: "Paris é a capital da França."
        },
        {
            question: "Qual é a montanha mais alta do mundo?",
            options: ["K2", "Monte Everest", "Kilimanjaro", "Mont Blanc"],
            correct: 1,
            explanation: "O Monte Everest, com 8.848 metros, é a montanha mais alta do mundo."
        },
        {
            question: "Em qual oceano fica a Ilha de Madagascar?",
            options: ["Atlântico", "Pacífico", "Índico", "Ártico"],
            correct: 2,
            explanation: "Madagascar está localizada no Oceano Índico, próxima à costa da África."
        },
        {
            question: "Qual país tem a maior população do mundo?",
            options: ["Índia", "China", "Estados Unidos", "Indonésia"],
            correct: 1,
            explanation: "A China tem a maior população do mundo, com mais de 1,4 bilhão de habitantes."
        },
        {
            question: "Qual é o menor país do mundo?",
            options: ["Mônaco", "Vaticano", "San Marino", "Liechtenstein"],
            correct: 1,
            explanation: "O Vaticano é o menor país do mundo, com apenas 0,44 km²."
        }
    ],
    historia: [
        {
            question: "Em que ano o Brasil foi descoberto pelos portugueses?",
            options: ["1498", "1500", "1502", "1504"],
            correct: 1,
            explanation: "O Brasil foi descoberto por Pedro Álvares Cabral em 22 de abril de 1500."
        },
        {
            question: "Quem foi o primeiro presidente do Brasil?",
            options: ["Getúlio Vargas", "Deodoro da Fonseca", "Floriano Peixoto", "Prudente de Morais"],
            correct: 1,
            explanation: "Deodoro da Fonseca foi o primeiro presidente do Brasil (1889-1891)."
        },
        {
            question: "Em que ano começou a Segunda Guerra Mundial?",
            options: ["1937", "1938", "1939", "1940"],
            correct: 2,
            explanation: "A Segunda Guerra Mundial começou em 1939 com a invasão da Polônia pela Alemanha."
        },
        {
            question: "Qual civilização construiu as pirâmides de Gizé?",
            options: ["Romana", "Grega", "Egípcia", "Mesopotâmica"],
            correct: 2,
            explanation: "As pirâmides de Gizé foram construídas pelos antigos egípcios."
        },
        {
            question: "Em que ano foi proclamada a Independência do Brasil?",
            options: ["1820", "1821", "1822", "1823"],
            correct: 2,
            explanation: "A Independência do Brasil foi proclamada em 7 de setembro de 1822."
        },
        {
            question: "Quem foi Napoleão Bonaparte?",
            options: ["Rei da França", "Imperador da França", "Presidente da França", "Duque da França"],
            correct: 1,
            explanation: "Napoleão Bonaparte foi Imperador da França de 1804 a 1814."
        },
        {
            question: "Em que século ocorreu o Renascimento?",
            options: ["Século XIII", "Século XIV", "Século XV", "Século XVI"],
            correct: 2,
            explanation: "O Renascimento ocorreu principalmente nos séculos XV e XVI."
        },
        {
            question: "Qual foi a primeira capital do Brasil?",
            options: ["Rio de Janeiro", "São Paulo", "Salvador", "Brasília"],
            correct: 2,
            explanation: "Salvador foi a primeira capital do Brasil, de 1549 a 1763."
        },
        {
            question: "Em que ano caiu o Muro de Berlim?",
            options: ["1987", "1988", "1989", "1990"],
            correct: 2,
            explanation: "O Muro de Berlim caiu em 9 de novembro de 1989."
        },
        {
            question: "Quem descobriu o Brasil?",
            options: ["Vasco da Gama", "Pedro Álvares Cabral", "Cristóvão Colombo", "Fernão de Magalhães"],
            correct: 1,
            explanation: "Pedro Álvares Cabral descobriu o Brasil em 1500."
        }
    ]
};

// ===== CONFIGURAÇÕES E CONSTANTES =====
const subjectNames = {
    matematica: "Matemática",
    geografia: "Geografia",
    historia: "História"
};

// ===== VARIÁVEIS DE ESTADO =====
let currentSubject = '';
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let questions = [];
let isAnswered = false;

// ===== ELEMENTOS DOM =====
const elements = {
    // Páginas
    homePage: document.getElementById('home-page'),
    quizPage: document.getElementById('quiz-page'),
    resultPage: document.getElementById('result-page'),
    
    // Quiz
    quizTitle: document.getElementById('quiz-title'),
    questionCounter: document.getElementById('question-counter'),
    scoreDisplay: document.getElementById('score-display'),
    progressFill: document.getElementById('progress-fill'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    explanationCard: document.getElementById('explanation-card'),
    resultIcon: document.getElementById('result-icon'),
    resultTitle: document.getElementById('result-title'),
    explanationText: document.getElementById('explanation-text'),
    nextBtn: document.getElementById('next-btn'),
    
    // Resultado
    finalScore: document.getElementById('final-score'),
    percentage: document.getElementById('percentage'),
    scoreMessage: document.getElementById('score-message'),
    
    // Botões de navegação
    homeBtn: document.getElementById('home-btn'),
    homeResultBtn: document.getElementById('home-result-btn'),
    retryBtn: document.getElementById('retry-btn')
};

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Quiz iniciado!');
    initializeEventListeners();
    showPage('home');
});

// ===== EVENT LISTENERS =====
function initializeEventListeners() {
    // Botões de iniciar quiz
    document.querySelectorAll('.subject-card').forEach(card => {
        card.addEventListener('click', function() {
            const subject = this.dataset.subject;
            console.log(`Iniciando quiz de ${subject}`);
            startQuiz(subject);
        });
    });

    // Botões de navegação
    elements.homeBtn?.addEventListener('click', () => {
        console.log('Voltando para home');
        goHome();
    });
    
    elements.homeResultBtn?.addEventListener('click', () => {
        console.log('Voltando para home do resultado');
        goHome();
    });
    
    elements.retryBtn?.addEventListener('click', () => {
        console.log('Tentando novamente');
        retryQuiz();
    });
    
    elements.nextBtn?.addEventListener('click', () => {
        console.log('Próxima pergunta');
        nextQuestion();
    });
}

// ===== FUNÇÕES PRINCIPAIS =====
function startQuiz(subject) {
    try {
        // Validar matéria
        if (!questionsData[subject]) {
            console.error(`Matéria ${subject} não encontrada`);
            return;
        }

        // Resetar estado
        currentSubject = subject;
        questions = [...questionsData[subject]];
        currentQuestionIndex = 0;
        score = 0;
        selectedAnswer = null;
        isAnswered = false;

        // Embaralhar perguntas para variedade
        shuffleArray(questions);

        // Atualizar interface
        elements.quizTitle.textContent = `Quiz de ${subjectNames[subject]}`;
        
        // Mostrar página do quiz
        showPage('quiz');
        
        // Carregar primeira pergunta
        loadQuestion();
        
        console.log(`Quiz de ${subject} iniciado com ${questions.length} perguntas`);
    } catch (error) {
        console.error('Erro ao iniciar quiz:', error);
    }
}

function loadQuestion() {
    try {
        const question = questions[currentQuestionIndex];
        
        if (!question) {
            console.error('Pergunta não encontrada');
            return;
        }

        // Resetar estado da pergunta
        selectedAnswer = null;
        isAnswered = false;

        // Atualizar informações do progresso
        elements.questionCounter.textContent = 
            `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;
        elements.scoreDisplay.textContent = 
            `Pontuação: ${score}/${currentQuestionIndex}`;
        
        // Atualizar barra de progresso
        const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
        elements.progressFill.style.width = `${progress}%`;
        
        // Carregar pergunta
        elements.questionText.textContent = question.question;
        
        // Carregar opções
        loadOptions(question);
        
        // Resetar interface
        elements.nextBtn.disabled = true;
        elements.explanationCard.classList.add('hidden');
        
        console.log(`Pergunta ${currentQuestionIndex + 1} carregada`);
    } catch (error) {
        console.error('Erro ao carregar pergunta:', error);
    }
}

function loadOptions(question) {
    try {
        elements.optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option;
            optionElement.setAttribute('data-index', index);
            optionElement.addEventListener('click', () => selectAnswer(index));
            
            // Adicionar acessibilidade
            optionElement.setAttribute('role', 'button');
            optionElement.setAttribute('tabindex', '0');
            optionElement.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    selectAnswer(index);
                }
            });
            
            elements.optionsContainer.appendChild(optionElement);
        });
    } catch (error) {
        console.error('Erro ao carregar opções:', error);
    }
}

function selectAnswer(answerIndex) {
    try {
        if (isAnswered) {
            console.log('Pergunta já respondida');
            return;
        }

        const question = questions[currentQuestionIndex];
        const options = document.querySelectorAll('.option');
        
        // Marcar como respondida
        isAnswered = true;
        selectedAnswer = answerIndex;
        
        // Desabilitar todas as opções
        options.forEach(option => {
            option.classList.add('disabled');
            option.style.pointerEvents = 'none';
        });
        
        // Marcar resposta selecionada
        options[answerIndex].classList.add('selected');
        
        // Mostrar resposta correta
        options[question.correct].classList.add('correct');
        
        // Se errou, marcar como incorreta
        if (answerIndex !== question.correct) {
            options[answerIndex].classList.add('incorrect');
        }
        
        // Mostrar explicação
        const isCorrect = answerIndex === question.correct;
        showExplanation(isCorrect);
        
        // Habilitar botão próxima
        elements.nextBtn.disabled = false;
        
        console.log(`Resposta selecionada: ${answerIndex}, Correta: ${question.correct}, Acertou: ${isCorrect}`);
    } catch (error) {
        console.error('Erro ao selecionar resposta:', error);
    }
}

function showExplanation(isCorrect) {
    try {
        const question = questions[currentQuestionIndex];
        
        // Configurar ícone e título
        if (isCorrect) {
            elements.resultIcon.className = 'fas fa-check-circle';
            elements.resultIcon.parentElement.classList.remove('incorrect');
            elements.resultTitle.textContent = 'Correto!';
            score++;
        } else {
            elements.resultIcon.className = 'fas fa-times-circle';
            elements.resultIcon.parentElement.classList.add('incorrect');
            elements.resultTitle.textContent = 'Incorreto!';
        }
        
        // Mostrar explicação
        elements.explanationText.textContent = question.explanation;
        elements.explanationCard.classList.remove('hidden');
        
        // Scroll suave para a explicação
        setTimeout(() => {
            elements.explanationCard.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest' 
            });
        }, 100);
        
        console.log(`Explicação mostrada. Pontuação atual: ${score}`);
    } catch (error) {
        console.error('Erro ao mostrar explicação:', error);
    }
}

function nextQuestion() {
    try {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            showResults();
        }
    } catch (error) {
        console.error('Erro ao avançar pergunta:', error);
    }
}

function showResults() {
    try {
        // Calcular porcentagem
        const percentValue = Math.round((score / questions.length) * 100);
        
        // Atualizar elementos
        elements.finalScore.textContent = `${score}/${questions.length}`;
        elements.percentage.textContent = `${percentValue}% de acertos`;
        
        // Mensagem baseada na performance
        const message = getScoreMessage(percentValue);
        elements.scoreMessage.textContent = message;
        
        // Mostrar página de resultado
        showPage('result');
        
        console.log(`Quiz finalizado. Pontuação: ${score}/${questions.length} (${percentValue}%)`);
    } catch (error) {
        console.error('Erro ao mostrar resultados:', error);
    }
}

function getScoreMessage(percentage) {
    if (percentage >= 90) return 'Perfeito! Você é um expert no assunto! 🏆';
    if (percentage >= 80) return 'Excelente! Você domina o assunto! 🌟';
    if (percentage >= 70) return 'Muito bem! Bom conhecimento! 👏';
    if (percentage >= 60) return 'Bom trabalho! Continue estudando! 📚';
    if (percentage >= 40) return 'Razoável. Há espaço para melhorar! 💪';
    return 'Precisa estudar mais. Não desista! 🎯';
}

function retryQuiz() {
    try {
        if (currentSubject) {
            startQuiz(currentSubject);
        } else {
            console.error('Nenhuma matéria selecionada para retry');
            goHome();
        }
    } catch (error) {
        console.error('Erro ao tentar novamente:', error);
        goHome();
    }
}

function goHome() {
    try {
        // Resetar estado
        currentSubject = '';
        currentQuestionIndex = 0;
        score = 0;
        selectedAnswer = null;
        questions = [];
        isAnswered = false;
        
        // Mostrar página inicial
        showPage('home');
        
        console.log('Voltou para a página inicial');
    } catch (error) {
        console.error('Erro ao voltar para home:', error);
    }
}

function showPage(pageId) {
    try {
        // Esconder todas as páginas
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // Mostrar página específica
        const targetPage = document.getElementById(`${pageId}-page`);
        if (targetPage) {
            targetPage.classList.add('active');
            
            // Scroll para o topo
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            console.log(`Página ${pageId} exibida`);
        } else {
            console.error(`Página ${pageId} não encontrada`);
        }
    } catch (error) {
        console.error('Erro ao mostrar página:', error);
    }
}

// ===== FUNÇÕES UTILITÁRIAS =====
function shuffleArray(array) {
    try {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    } catch (error) {
        console.error('Erro ao embaralhar array:', error);
        return array;
    }
}

// ===== TRATAMENTO DE ERROS GLOBAIS =====
window.addEventListener('error', function(e) {
    console.error('Erro global capturado:', e.error);
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Promise rejeitada não tratada:', e.reason);
});

// ===== LOG DE INICIALIZAÇÃO =====
console.log('Script do Quiz carregado com sucesso!');
console.log('Matérias disponíveis:', Object.keys(questionsData));
console.log('Total de perguntas por matéria:', Object.values(questionsData).map(q => q.length));