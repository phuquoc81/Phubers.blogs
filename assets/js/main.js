// Main JavaScript for Phubers.blogs

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Initialize page-specific functionality
    initPageFunctions();
});

function initPageFunctions() {
    // AI Solver functionality
    if (document.getElementById('aiSolver')) {
        initAISolver();
    }
    
    // Optimizer functionality
    if (document.getElementById('optimizer')) {
        initOptimizer();
    }
    
    // Phubers functionality
    if (document.getElementById('phubers')) {
        initPhubers();
    }
    
    // YouTube functionality
    if (document.getElementById('youtube')) {
        initYouTube();
    }
}

// AI Solver Functions
function initAISolver() {
    const solveBtn = document.getElementById('solveBtn');
    const problemInput = document.getElementById('problemInput');
    const problemType = document.getElementById('problemType');
    const language = document.getElementById('language');
    const resultBox = document.getElementById('result');
    
    if (solveBtn) {
        solveBtn.addEventListener('click', async function() {
            const problem = problemInput.value.trim();
            const type = problemType.value;
            const lang = language.value;
            
            if (!problem) {
                showResult('Please enter a problem to solve.', 'error');
                return;
            }
            
            solveBtn.disabled = true;
            solveBtn.innerHTML = '<span class="loading"></span> Solving...';
            
            try {
                const solution = await solveProblem(problem, type, lang);
                showResult(solution, 'success');
            } catch (error) {
                showResult('Error: ' + error.message, 'error');
            } finally {
                solveBtn.disabled = false;
                solveBtn.textContent = 'Solve Problem';
            }
        });
    }
}

async function solveProblem(problem, type, language) {
    // Simulate AI processing
    await sleep(1500);
    
    let solution = '';
    
    switch(type) {
        case 'math':
            solution = solveMathProblem(problem, language);
            break;
        case 'physics':
            solution = solvePhysicsProblem(problem, language);
            break;
        case 'astronomy':
            solution = solveAstronomyProblem(problem, language);
            break;
        case 'puzzle':
            solution = solvePuzzle(problem, language);
            break;
        case 'prediction':
            solution = makePrediction(problem, language);
            break;
        default:
            solution = getGeneralResponse(problem, language);
    }
    
    return solution;
}

function solveMathProblem(problem, lang) {
    const responses = {
        en: `Mathematical Analysis:\n\nProblem: ${problem}\n\nSolution Approach:\n1. Identify the mathematical concepts involved\n2. Apply relevant formulas and theorems\n3. Perform step-by-step calculations\n4. Verify the result\n\nNote: This is a demonstration. For complex problems, integrate with a real AI service.`,
        vi: `Phân tích Toán học:\n\nVấn đề: ${problem}\n\nPhương pháp giải:\n1. Xác định các khái niệm toán học liên quan\n2. Áp dụng công thức và định lý phù hợp\n3. Tính toán từng bước\n4. Xác minh kết quả\n\nLưu ý: Đây là bản demo. Đối với các bài toán phức tạp, hãy tích hợp với dịch vụ AI thực tế.`,
        es: `Análisis Matemático:\n\nProblema: ${problem}\n\nEnfoque de solución:\n1. Identificar los conceptos matemáticos involucrados\n2. Aplicar fórmulas y teoremas relevantes\n3. Realizar cálculos paso a paso\n4. Verificar el resultado\n\nNota: Esta es una demostración. Para problemas complejos, integre con un servicio de IA real.`
    };
    
    return responses[lang] || responses.en;
}

function solvePhysicsProblem(problem, lang) {
    const responses = {
        en: `Physics Analysis:\n\nProblem: ${problem}\n\nSolution:\n1. Identify physical principles (Newton's laws, thermodynamics, etc.)\n2. Define variables and known values\n3. Apply relevant equations\n4. Calculate and interpret results\n\nThis demonstrates the physics solving capability of Phu AI.`,
        vi: `Phân tích Vật lý:\n\nVấn đề: ${problem}\n\nGiải pháp:\n1. Xác định các nguyên lý vật lý (định luật Newton, nhiệt động lực học, v.v.)\n2. Định nghĩa biến số và giá trị đã biết\n3. Áp dụng các phương trình phù hợp\n4. Tính toán và giải thích kết quả\n\nĐây là demo khả năng giải quyết vấn đề vật lý của Phu AI.`,
        es: `Análisis de Física:\n\nProblema: ${problem}\n\nSolución:\n1. Identificar principios físicos (leyes de Newton, termodinámica, etc.)\n2. Definir variables y valores conocidos\n3. Aplicar ecuaciones relevantes\n4. Calcular e interpretar resultados\n\nEsto demuestra la capacidad de resolución de física de Phu AI.`
    };
    
    return responses[lang] || responses.en;
}

function solveAstronomyProblem(problem, lang) {
    const responses = {
        en: `Astronomy Analysis:\n\nQuery: ${problem}\n\nInsight:\nExploring celestial phenomena, orbital mechanics, and cosmic events.\n\nKey considerations:\n- Distance scales in astronomy\n- Gravitational interactions\n- Light-year measurements\n- Planetary movements\n\nPhu AI provides comprehensive astronomical insights.`,
        vi: `Phân tích Thiên văn học:\n\nCâu hỏi: ${problem}\n\nNhận định:\nKhám phá hiện tượng thiên thể, cơ học quỹ đạo và các sự kiện vũ trụ.\n\nCác yếu tố chính:\n- Thang đo khoảng cách trong thiên văn học\n- Tương tác hấp dẫn\n- Đo lường năm ánh sáng\n- Chuyển động hành tinh\n\nPhu AI cung cấp cái nhìn toàn diện về thiên văn học.`,
        es: `Análisis de Astronomía:\n\nConsulta: ${problem}\n\nPerspectiva:\nExplorando fenómenos celestiales, mecánica orbital y eventos cósmicos.\n\nConsideraciones clave:\n- Escalas de distancia en astronomía\n- Interacciones gravitacionales\n- Mediciones de años luz\n- Movimientos planetarios\n\nPhu AI proporciona información astronómica completa.`
    };
    
    return responses[lang] || responses.en;
}

function solvePuzzle(problem, lang) {
    const responses = {
        en: `Puzzle Solution:\n\nPuzzle: ${problem}\n\nStrategy:\n1. Analyze the puzzle structure\n2. Identify patterns and constraints\n3. Apply logical reasoning\n4. Test potential solutions\n5. Verify the answer\n\nPhu AI excels at solving various types of puzzles including logic puzzles, riddles, and brain teasers.`,
        vi: `Giải đố:\n\nCâu đố: ${problem}\n\nChiến lược:\n1. Phân tích cấu trúc câu đố\n2. Xác định các mẫu và ràng buộc\n3. Áp dụng lý luận logic\n4. Kiểm tra các giải pháp tiềm năng\n5. Xác minh câu trả lời\n\nPhu AI xuất sắc trong việc giải quyết nhiều loại câu đố bao gồm câu đố logic, câu đố vui và trò chơi trí tuệ.`,
        es: `Solución de Acertijo:\n\nAcertijo: ${problem}\n\nEstrategia:\n1. Analizar la estructura del acertijo\n2. Identificar patrones y restricciones\n3. Aplicar razonamiento lógico\n4. Probar soluciones potenciales\n5. Verificar la respuesta\n\nPhu AI sobresale en resolver varios tipos de acertijos incluyendo acertijos lógicos, adivinanzas y rompecabezas.`
    };
    
    return responses[lang] || responses.en;
}

function makePrediction(problem, lang) {
    const responses = {
        en: `Future Prediction:\n\nQuery: ${problem}\n\nPrediction Analysis:\nBased on current trends, historical data, and pattern recognition:\n\n- Short-term outlook: Analyzing immediate patterns\n- Long-term projection: Considering broader trends\n- Confidence level: Moderate to High\n- Key factors influencing the prediction\n\nNote: Predictions are probabilistic and based on available data. Always consider multiple scenarios.`,
        vi: `Dự đoán Tương lai:\n\nCâu hỏi: ${problem}\n\nPhân tích Dự đoán:\nDựa trên xu hướng hiện tại, dữ liệu lịch sử và nhận dạng mẫu:\n\n- Triển vọng ngắn hạn: Phân tích các mẫu trước mắt\n- Dự báo dài hạn: Xem xét xu hướng rộng hơn\n- Mức độ tin cậy: Trung bình đến Cao\n- Các yếu tố chính ảnh hưởng đến dự đoán\n\nLưu ý: Dự đoán mang tính xác suất và dựa trên dữ liệu có sẵn. Luôn xem xét nhiều kịch bản.`,
        es: `Predicción Futura:\n\nConsulta: ${problem}\n\nAnálisis de Predicción:\nBasado en tendencias actuales, datos históricos y reconocimiento de patrones:\n\n- Perspectiva a corto plazo: Análisis de patrones inmediatos\n- Proyección a largo plazo: Consideración de tendencias más amplias\n- Nivel de confianza: Moderado a Alto\n- Factores clave que influyen en la predicción\n\nNota: Las predicciones son probabilísticas y se basan en datos disponibles. Siempre considere múltiples escenarios.`
    };
    
    return responses[lang] || responses.en;
}

function getGeneralResponse(problem, lang) {
    const responses = {
        en: `General Analysis:\n\nQuery: ${problem}\n\nResponse:\nPhu AI has analyzed your query. For more specific results, please select an appropriate problem type.\n\nAvailable capabilities:\n- Mathematics problem solving\n- Physics calculations\n- Astronomy queries\n- Puzzle solving\n- Future predictions\n- Multi-language support`,
        vi: `Phân tích Chung:\n\nCâu hỏi: ${problem}\n\nPhản hồi:\nPhu AI đã phân tích câu hỏi của bạn. Để có kết quả cụ thể hơn, vui lòng chọn loại vấn đề phù hợp.\n\nKhả năng có sẵn:\n- Giải quyết vấn đề toán học\n- Tính toán vật lý\n- Câu hỏi thiên văn học\n- Giải đố\n- Dự đoán tương lai\n- Hỗ trợ đa ngôn ngữ`,
        es: `Análisis General:\n\nConsulta: ${problem}\n\nRespuesta:\nPhu AI ha analizado su consulta. Para obtener resultados más específicos, seleccione un tipo de problema apropiado.\n\nCapacidades disponibles:\n- Resolución de problemas matemáticos\n- Cálculos de física\n- Consultas de astronomía\n- Resolución de acertijos\n- Predicciones futuras\n- Soporte multiidioma`
    };
    
    return responses[lang] || responses.en;
}

function showResult(message, type = 'success') {
    const resultBox = document.getElementById('result');
    if (resultBox) {
        resultBox.className = `result-box ${type}`;
        resultBox.textContent = message;
        resultBox.style.display = 'block';
    }
}

// Optimizer Functions
function initOptimizer() {
    const analyzeBtn = document.getElementById('analyzeBtn');
    const codeInput = document.getElementById('codeInput');
    
    if (analyzeBtn) {
        analyzeBtn.addEventListener('click', async function() {
            const code = codeInput.value.trim();
            
            if (!code) {
                showOptimizerResult('Please enter code to analyze.', 'error');
                return;
            }
            
            analyzeBtn.disabled = true;
            analyzeBtn.innerHTML = '<span class="loading"></span> Analyzing...';
            
            try {
                await analyzeCode(code);
                updateMetrics();
            } catch (error) {
                showOptimizerResult('Error: ' + error.message, 'error');
            } finally {
                analyzeBtn.disabled = false;
                analyzeBtn.textContent = 'Analyze Code';
            }
        });
    }
    
    // Initialize metrics
    updateMetrics();
}

async function analyzeCode(code) {
    await sleep(2000);
    
    // Simulate code analysis
    const lines = code.split('\n').length;
    const complexity = Math.min(10, Math.floor(lines / 10) + Math.floor(Math.random() * 5));
    const performance = Math.max(1, 10 - complexity + Math.floor(Math.random() * 3));
    
    const result = `Code Analysis Results:
    
Lines of Code: ${lines}
Complexity Score: ${complexity}/10
Performance Score: ${performance}/10

Suggestions:
- Consider breaking down large functions
- Look for opportunities to optimize loops
- Review variable naming conventions
- Check for unused imports or variables

PhuOptimizer 81 has identified potential improvements in your code.`;
    
    showOptimizerResult(result, 'success');
}

function updateMetrics() {
    const metrics = {
        performance: Math.floor(Math.random() * 30) + 70,
        efficiency: Math.floor(Math.random() * 25) + 75,
        quality: Math.floor(Math.random() * 20) + 80,
        optimizations: Math.floor(Math.random() * 100) + 50
    };
    
    const perfEl = document.getElementById('performanceScore');
    const effEl = document.getElementById('efficiencyScore');
    const qualEl = document.getElementById('qualityScore');
    const optEl = document.getElementById('optimizationCount');
    
    if (perfEl) perfEl.textContent = metrics.performance + '%';
    if (effEl) effEl.textContent = metrics.efficiency + '%';
    if (qualEl) qualEl.textContent = metrics.quality + '%';
    if (optEl) optEl.textContent = metrics.optimizations;
}

function showOptimizerResult(message, type = 'success') {
    const resultBox = document.getElementById('optimizerResult');
    if (resultBox) {
        resultBox.className = `result-box ${type}`;
        resultBox.textContent = message;
        resultBox.style.display = 'block';
    }
}

// Phubers Functions
function initPhubers() {
    loadUsers();
    
    const refreshBtn = document.getElementById('refreshUsers');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', loadUsers);
    }
}

async function loadUsers() {
    const userGrid = document.getElementById('userGrid');
    if (!userGrid) return;
    
    userGrid.innerHTML = '<p class="text-center">Loading users...</p>';
    
    await sleep(1000);
    
    // Generate sample users
    const users = generateSampleUsers(12);
    
    userGrid.innerHTML = '';
    users.forEach(user => {
        const userCard = createUserCard(user);
        userGrid.appendChild(userCard);
    });
}

function generateSampleUsers(count) {
    const names = ['Alex Chen', 'Maria Garcia', 'John Smith', 'Yuki Tanaka', 'Ahmed Ali', 'Sophie Martin',
                   'Carlos Silva', 'Emma Wilson', 'Li Wei', 'Sarah Johnson', 'Miguel Rodriguez', 'Anna Kowalski'];
    const bios = [
        'Full-stack developer passionate about AI',
        'Data scientist exploring machine learning',
        'Software engineer building scalable systems',
        'Frontend developer with an eye for design',
        'Backend specialist focusing on performance',
        'DevOps engineer automating everything',
        'Mobile developer creating amazing apps',
        'Security researcher protecting systems',
        'Cloud architect designing solutions',
        'AI researcher pushing boundaries',
        'UX designer crafting experiences',
        'Tech enthusiast learning daily'
    ];
    
    const users = [];
    for (let i = 0; i < count; i++) {
        users.push({
            name: names[i],
            bio: bios[i],
            avatar: names[i].split(' ').map(n => n[0]).join(''),
            posts: Math.floor(Math.random() * 100) + 10,
            followers: Math.floor(Math.random() * 1000) + 50,
            following: Math.floor(Math.random() * 500) + 20
        });
    }
    
    return users;
}

function createUserCard(user) {
    const card = document.createElement('div');
    card.className = 'user-card';
    card.innerHTML = `
        <div class="user-avatar">${user.avatar}</div>
        <div class="user-name">${user.name}</div>
        <div class="user-bio">${user.bio}</div>
        <div class="user-stats">
            <div class="user-stat">
                <div class="user-stat-value">${user.posts}</div>
                <div class="user-stat-label">Posts</div>
            </div>
            <div class="user-stat">
                <div class="user-stat-value">${user.followers}</div>
                <div class="user-stat-label">Followers</div>
            </div>
            <div class="user-stat">
                <div class="user-stat-value">${user.following}</div>
                <div class="user-stat-label">Following</div>
            </div>
        </div>
    `;
    return card;
}

// YouTube Functions
function initYouTube() {
    loadVideos();
}

async function loadVideos() {
    const videoGrid = document.getElementById('videoGrid');
    if (!videoGrid) return;
    
    videoGrid.innerHTML = '<p class="text-center">Loading videos...</p>';
    
    await sleep(1000);
    
    // Sample video data (in a real implementation, use YouTube Data API)
    const videos = [
        {
            title: 'Introduction to Phu AI',
            id: 'dQw4w9WgXcQ',
            description: 'Learn about the powerful capabilities of Phu AI and how it can help solve complex problems.'
        },
        {
            title: 'PhuOptimizer 81 Tutorial',
            id: 'dQw4w9WgXcQ',
            description: 'Step-by-step guide to optimizing your code with PhuOptimizer 81.'
        },
        {
            title: 'Building with Phubers',
            id: 'dQw4w9WgXcQ',
            description: 'Explore the Phubers community platform and its social features.'
        },
        {
            title: 'Advanced AI Techniques',
            id: 'dQw4w9WgXcQ',
            description: 'Deep dive into advanced AI problem-solving techniques.'
        },
        {
            title: 'Code Optimization Best Practices',
            id: 'dQw4w9WgXcQ',
            description: 'Learn the best practices for writing optimized and efficient code.'
        },
        {
            title: 'Community Highlights',
            id: 'dQw4w9WgXcQ',
            description: 'Showcasing amazing projects from the Phubers community.'
        }
    ];
    
    videoGrid.innerHTML = '';
    videos.forEach(video => {
        const videoCard = createVideoCard(video);
        videoGrid.appendChild(videoCard);
    });
}

function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.innerHTML = `
        <div class="video-thumbnail">
            <iframe 
                src="https://www.youtube.com/embed/${video.id}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
        <div class="video-info">
            <div class="video-title">${video.title}</div>
            <div class="video-description">${video.description}</div>
        </div>
    `;
    return card;
}

// Utility Functions
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
