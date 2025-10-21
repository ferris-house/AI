// ========================================
// 3D太空英语冒险 - 核心游戏引擎
// ========================================

// 游戏状态
const GameState = {
    MENU: 'menu',
    PLAYING: 'playing',
    PAUSED: 'paused',
    GAMEOVER: 'gameover'
};

// 全局游戏对象
const game = {
    state: GameState.MENU,
    score: 0,
    combo: 0,
    health: 100,
    totalQuestions: 0,
    correctAnswers: 0,
    currentQuestion: null,
    difficulty: 'easy',
    enemies: [],
    particles: [],
    projectiles: [],
    stars: []
};

// 鼠标目标位置
const mouseTarget = {
    x: 0,
    y: 0
};

// Three.js 核心对象
let scene, camera, renderer, player;
let clock = new THREE.Clock();
let effectsManager = null;
let postProcessing = null; // 后处理系统
let nebulaSystem = null; // 星云系统
let volumetricNebula = null; // 3D体积星云
let hologramUI = null; // 全息UI系统
let hologramElements = {}; // 全息UI元素存储
let playerShield = null; // 玩家护盾
let pulseShield = null; // 脉冲护盾

// AI题库系统（后续可接入真实AI API）
const questionBank = {
    easy: [
        { question: '翻译：苹果', answer: 'apple', hint: '一种水果' },
        { question: '翻译：猫', answer: 'cat', hint: '喵喵叫的动物' },
        { question: '翻译：狗', answer: 'dog', hint: '汪汪叫的动物' },
        { question: '翻译：书', answer: 'book', hint: '可以阅读' },
        { question: '翻译：水', answer: 'water', hint: 'H2O' },
        { question: '翻译：太阳', answer: 'sun', hint: '白天发光' },
        { question: '翻译：月亮', answer: 'moon', hint: '晚上发光' },
        { question: '翻译：星星', answer: 'star', hint: '夜空中闪烁' }
    ],
    medium: [
        { question: 'beautiful的意思', answer: '美丽', hint: '形容词' },
        { question: 'computer的中文', answer: '计算机', hint: '电子设备' },
        { question: '翻译：勇敢的', answer: 'brave', hint: '不害怕' },
        { question: '翻译：快乐', answer: 'happy', hint: '心情好' },
        { question: 'friend的中文', answer: '朋友', hint: '关系词' },
        { question: '翻译：学习', answer: 'study', hint: '动词' },
        { question: 'important的意思', answer: '重要', hint: '形容词' }
    ],
    hard: [
        { question: 'accomplish的中文', answer: '完成', hint: '达成目标' },
        { question: '翻译：坚持不懈', answer: 'perseverance', hint: '一种品质' },
        { question: 'extraordinary的意思', answer: '非凡的', hint: '超出寻常' },
        { question: '翻译：机遇', answer: 'opportunity', hint: '名词' },
        { question: 'magnificent的中文', answer: '壮丽的', hint: '形容词' }
    ]
};

// ========================================
// 初始化Three.js场景
// ========================================
function initThreeJS() {
    // 创建场景
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.0003);

    // 创建相机
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        10000
    );
    camera.position.z = 50;
    camera.position.y = 10;

    // 创建渲染器
    const canvas = document.getElementById('gameCanvas');
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;

    // 添加环境光
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    // 添加定向光
    const directionalLight = new THREE.DirectionalLight(0x00ffff, 1);
    directionalLight.position.set(50, 50, 50);
    scene.add(directionalLight);

    // 添加点光源（霓虹效果）
    const pointLight1 = new THREE.PointLight(0xff00ff, 2, 100);
    pointLight1.position.set(-30, 20, 20);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x00ffff, 2, 100);
    pointLight2.position.set(30, 20, 20);
    scene.add(pointLight2);

    // 创建星空背景
    createStarfield();

    // 创建玩家飞船
    createPlayer();

    // 初始化特效管理器
    if (typeof EffectsManager !== 'undefined') {
        effectsManager = new EffectsManager(scene, camera, renderer);

        // 添加动态环境光
        effectsManager.lighting.addPulsingLight(new THREE.Vector3(-30, 20, 0), 0xff00ff, 2);
        effectsManager.lighting.addPulsingLight(new THREE.Vector3(30, 20, 0), 0x00ffff, 2);
    }

    // 🌟 初始化后处理系统
    if (typeof PostProcessingManager !== 'undefined') {
        postProcessing = new PostProcessingManager(renderer, scene, camera);
        console.log('✨ Bloom 辉光效果已启用！');
    }

    // 🌌 初始化星云系统
    if (typeof NebulaSystem !== 'undefined') {
        nebulaSystem = new NebulaSystem(scene);
        volumetricNebula = new VolumetricNebula(scene);
        console.log('🌌 程序化星云背景已启用！');
    }

    // 🎭 初始化全息UI系统
    if (typeof HologramUI !== 'undefined') {
        hologramUI = new HologramUI(scene, camera);
        // 创建初始全息元素
        createHologramHUD();
        console.log('🎭 全息投影UI已启用！');
    }

    // 🛡️ 初始化能量护盾系统
    if (typeof EnergyShield !== 'undefined' && player) {
        playerShield = new EnergyShield(scene, player);
        pulseShield = new PulseShield(scene);
        console.log('🛡️ 能量护盾系统已启用！');
    }

    // 窗口大小调整
    window.addEventListener('resize', onWindowResize);
}

// ========================================
// 创建星空背景
// ========================================
function createStarfield() {
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.7,
        transparent: true
    });

    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        starVertices.push(x, y, z);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);
    game.stars.push(stars);
}

// ========================================
// 创建玩家飞船
// ========================================
function createPlayer() {
    const group = new THREE.Group();

    // 主体（金字塔形状）
    const bodyGeometry = new THREE.ConeGeometry(2, 5, 4);
    const bodyMaterial = new THREE.MeshPhongMaterial({
        color: 0x00ffff,
        emissive: 0x00ffff,
        emissiveIntensity: 0.5,
        shininess: 100
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.rotation.x = Math.PI;
    group.add(body);

    // 引擎光效
    const engineGeometry = new THREE.SphereGeometry(0.8, 16, 16);
    const engineMaterial = new THREE.MeshBasicMaterial({
        color: 0xff00ff,
        transparent: true,
        opacity: 0.8
    });
    const engine = new THREE.Mesh(engineGeometry, engineMaterial);
    engine.position.y = -2.5;
    group.add(engine);

    // 添加发光光环
    const glowGeometry = new THREE.RingGeometry(2.5, 3, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.rotation.x = Math.PI / 2;
    group.add(glow);

    group.position.set(0, 0, 0);
    scene.add(group);
    player = group;

    // 添加鼠标移动控制
    document.addEventListener('mousemove', onMouseMove);
}

// ========================================
// 创建全息HUD
// ========================================
function createHologramHUD() {
    if (!hologramUI) return;

    // 在玩家飞船周围创建全息数据框（浮动在场景中）
    hologramElements.scoreRing = hologramUI.createRingIndicator(
        new THREE.Vector3(-15, 8, 20),
        1.5,
        { color: 0x00ffff }
    );

    hologramElements.comboRing = hologramUI.createRingIndicator(
        new THREE.Vector3(15, 8, 20),
        1.5,
        { color: 0xffff00 }
    );

    console.log('🎭 全息HUD元素已创建');
}

// ========================================
// 玩家飞船移动控制
// ========================================
function onMouseMove(event) {
    if (game.state !== GameState.PLAYING) return;

    // 更新鼠标目标位置（归一化坐标）
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

    // 设置目标位置
    mouseTarget.x = mouseX * 30;
    mouseTarget.y = mouseY * 20;
}

// ========================================
// 更新玩家飞船位置（平滑跟随）
// ========================================
function updatePlayerPosition() {
    if (!player || game.state !== GameState.PLAYING) return;

    // 平滑插值系数（0.1 = 较慢，0.5 = 较快）
    const smoothness = 0.15;

    // 计算当前位置到目标位置的差值
    const dx = mouseTarget.x - player.position.x;
    const dy = mouseTarget.y - player.position.y;

    // 平滑移动
    player.position.x += dx * smoothness;
    player.position.y += dy * smoothness;

    // 根据移动方向添加倾斜效果
    const velocityX = dx * smoothness;
    const velocityY = dy * smoothness;

    // 倾斜角度（基于速度）
    player.rotation.z = -velocityX * 2;
    player.rotation.x = -velocityY * 1.5;

    // 限制倾斜角度
    player.rotation.z = Math.max(-0.5, Math.min(0.5, player.rotation.z));
    player.rotation.x = Math.max(-0.3, Math.min(0.3, player.rotation.x));
}

// ========================================
// 创建敌人飞船
// ========================================
function createEnemy(question) {
    const group = new THREE.Group();

    // 敌人飞船（八面体）
    const geometry = new THREE.OctahedronGeometry(2);
    const material = new THREE.MeshPhongMaterial({
        color: 0xff0000,
        emissive: 0xff0000,
        emissiveIntensity: 0.3,
        shininess: 100
    });
    const mesh = new THREE.Mesh(geometry, material);
    group.add(mesh);

    // 添加文字标签（使用Canvas纹理）
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, 512, 128);
    ctx.fillStyle = '#0ff';
    ctx.font = 'bold 40px Orbitron, Arial';
    ctx.textAlign = 'center';
    ctx.fillText(question.question, 256, 80);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(10, 2.5, 1);
    sprite.position.y = 4;
    group.add(sprite);

    // 随机位置
    group.position.x = (Math.random() - 0.5) * 60;
    group.position.y = (Math.random() - 0.5) * 40;
    group.position.z = -200;

    scene.add(group);

    game.enemies.push({
        mesh: group,
        question: question,
        speed: 0.15 + Math.random() * 0.15, // 降低速度：原来0.3-0.6，现在0.15-0.3
        rotationSpeed: 0.02
    });
}

// ========================================
// 生成新题目（使用AI引擎）
// ========================================
async function generateQuestion() {
    // 使用AI引擎推荐难度
    game.difficulty = aiEngine ? aiEngine.getRecommendedDifficulty() : 'easy';

    // 根据分数微调难度
    if (game.score > 500) {
        game.difficulty = 'hard';
    } else if (game.score > 200 && game.difficulty === 'easy') {
        game.difficulty = 'medium';
    }

    // 使用AI引擎生成题目
    let question;
    if (aiEngine) {
        question = await aiEngine.generateQuestion(game.difficulty);
    } else {
        const questions = questionBank[game.difficulty];
        question = questions[Math.floor(Math.random() * questions.length)];
    }

    question.difficulty = game.difficulty;
    question.startTime = Date.now(); // 记录开始时间
    game.currentQuestion = question;
    game.totalQuestions++;

    // 显示题目
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('question-display').style.display = 'block';

    const badge = document.getElementById('difficulty-badge');
    badge.textContent = game.difficulty;
    badge.className = 'difficulty-badge difficulty-' + game.difficulty;

    // 创建敌人
    createEnemy(question);

    // 激活输入框
    document.getElementById('answer-container').classList.add('active');
    document.getElementById('answer-input').focus();
}

// ========================================
// 检查答案
// ========================================
function checkAnswer(userAnswer) {
    const correctAnswer = game.currentQuestion.answer.toLowerCase().trim();
    const answer = userAnswer.toLowerCase().trim();

    if (answer === correctAnswer) {
        // 答对了！
        handleCorrectAnswer();
    } else {
        // 答错了
        handleWrongAnswer();
    }

    // 清空输入框
    document.getElementById('answer-input').value = '';

    // 生成下一题
    setTimeout(() => {
        if (game.state === GameState.PLAYING) {
            generateQuestion();
        }
    }, 1500);
}

// ========================================
// 处理正确答案
// ========================================
function handleCorrectAnswer() {
    game.correctAnswers++;
    game.combo++;

    // 计算响应时间
    const responseTime = Date.now() - game.currentQuestion.startTime;

    // 通知AI引擎分析表现
    if (aiEngine) {
        aiEngine.analyzePerformance(game.currentQuestion, true, responseTime);
    }

    // 计算分数（combo加成）
    const baseScore = game.difficulty === 'hard' ? 50 : game.difficulty === 'medium' ? 30 : 10;
    const comboBonus = Math.floor(game.combo * 0.5);
    const speedBonus = responseTime < 3000 ? 10 : 0; // 3秒内答题额外加分
    game.score += baseScore + comboBonus + speedBonus;

    // 摧毁敌人（找到当前题目对应的敌人）
    const enemyIndex = game.enemies.findIndex(e => e.question === game.currentQuestion);
    if (enemyIndex !== -1) {
        const enemy = game.enemies[enemyIndex];

        // 发射激光子弹
        fireLaser(player.position, enemy.mesh.position, () => {
            // 激光命中后执行
            createExplosion(enemy.mesh.position, 0x00ffff);

            // 触发高级特效
            if (effectsManager) {
                effectsManager.triggerCorrectEffect(enemy.mesh.position, baseScore + comboBonus + speedBonus);

                if (game.combo > 1 && game.combo % 5 === 0) {
                    effectsManager.triggerComboEffect(player.position, game.combo);
                }
            }

            scene.remove(enemy.mesh);
            game.enemies.splice(enemyIndex, 1);
        });
    }

    // 更新UI
    updateUI();

    // 显示combo特效
    showComboEffect();

    // 🛡️ 激活能量护盾（答对时的奖励效果）
    if (playerShield) {
        const shieldColor = game.combo >= 5 ? 0xffff00 : 0x00ffff; // 高连击用金色
        playerShield.activate(1.5, shieldColor);
    }

    // 脉冲护盾扩散效果
    if (pulseShield && player) {
        pulseShield.createPulse(player.position, 0x00ffff, 10);
    }

    // 播放音效
    playSound('correct');
}

// ========================================
// 处理错误答案
// ========================================
function handleWrongAnswer() {
    game.combo = 0;
    game.health -= 15;

    // 计算响应时间
    const responseTime = Date.now() - game.currentQuestion.startTime;

    // 通知AI引擎分析表现
    if (aiEngine) {
        aiEngine.analyzePerformance(game.currentQuestion, false, responseTime);
    }

    if (game.health <= 0) {
        game.health = 0;
        gameOver();
    }

    updateUI();

    // 创建红色特效
    createExplosion(player.position, 0xff0000);

    // 播放音效
    playSound('wrong');

    // 触发高级特效
    if (effectsManager) {
        effectsManager.triggerWrongEffect(player.position);
    }
}

// ========================================
// 发射激光子弹
// ========================================
function fireLaser(startPos, targetPos, onHitCallback) {
    const startPosition = new THREE.Vector3(startPos.x, startPos.y, startPos.z);
    const targetPosition = new THREE.Vector3(targetPos.x, targetPos.y, targetPos.z);
    const direction = new THREE.Vector3().subVectors(targetPosition, startPosition);
    const distance = direction.length();

    // 创建激光束
    const geometry = new THREE.CylinderGeometry(0.2, 0.2, distance, 8);
    const material = new THREE.MeshBasicMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0.9,
        emissive: 0x00ffff,
        emissiveIntensity: 1
    });

    const laser = new THREE.Mesh(geometry, material);

    // 定位激光
    const midPoint = new THREE.Vector3().addVectors(startPosition, targetPosition).multiplyScalar(0.5);
    laser.position.copy(midPoint);

    // 旋转激光使其指向目标
    laser.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        direction.normalize()
    );

    // 添加外发光效果
    const glowGeometry = new THREE.CylinderGeometry(0.4, 0.4, distance, 8);
    const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    laser.add(glow);

    scene.add(laser);

    // 激光动画
    let laserLife = 0;
    const laserSpeed = 0.1;

    const animateLaser = () => {
        laserLife += laserSpeed;

        if (laserLife >= 1) {
            // 激光到达目标
            scene.remove(laser);
            if (onHitCallback) onHitCallback();
        } else {
            // 激光飞行中
            laser.material.opacity = 0.9 - laserLife * 0.5;
            glow.material.opacity = 0.3 - laserLife * 0.2;
            requestAnimationFrame(animateLaser);
        }
    };

    animateLaser();

    // 播放激光音效
    playLaserSound();
}

// ========================================
// 激光音效
// ========================================
function playLaserSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // 激光"嗖"的声音
        oscillator.frequency.setValueAtTime(1000, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.2);

        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
    } catch (error) {
        // 静默失败
    }
}

// ========================================
// 创建爆炸粒子特效
// ========================================
function createExplosion(position, color) {
    const particleCount = 100; // 增加粒子数量
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const velocities = [];

    for (let i = 0; i < particleCount; i++) {
        positions.push(position.x, position.y, position.z);
        velocities.push(
            (Math.random() - 0.5) * 3, // 增加速度
            (Math.random() - 0.5) * 3,
            (Math.random() - 0.5) * 3
        );
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
        color: color,
        size: 1.2, // 增大粒子尺寸
        transparent: true,
        opacity: 1,
        blending: THREE.AdditiveBlending // 添加发光混合
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    game.particles.push({
        mesh: particles,
        velocities: velocities,
        life: 1.0
    });

    // 添加中心闪光效果
    const flashGeometry = new THREE.SphereGeometry(3, 16, 16);
    const flashMaterial = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 1,
        blending: THREE.AdditiveBlending
    });
    const flash = new THREE.Mesh(flashGeometry, flashMaterial);
    flash.position.copy(position);
    scene.add(flash);

    // 闪光淡出动画
    let flashLife = 1.0;
    const flashFade = () => {
        flashLife -= 0.1;
        flash.scale.multiplyScalar(1.2);
        flash.material.opacity = flashLife;

        if (flashLife > 0) {
            requestAnimationFrame(flashFade);
        } else {
            scene.remove(flash);
        }
    };
    flashFade();

    // 播放爆炸音效
    playExplosionSound();
}

// ========================================
// 爆炸音效
// ========================================
function playExplosionSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();

        // 低频爆炸声
        const oscillator1 = audioContext.createOscillator();
        const gainNode1 = audioContext.createGain();

        oscillator1.connect(gainNode1);
        gainNode1.connect(audioContext.destination);

        oscillator1.type = 'sawtooth';
        oscillator1.frequency.setValueAtTime(100, audioContext.currentTime);
        oscillator1.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 0.3);

        gainNode1.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode1.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

        oscillator1.start(audioContext.currentTime);
        oscillator1.stop(audioContext.currentTime + 0.3);

        // 高频碎片声
        const oscillator2 = audioContext.createOscillator();
        const gainNode2 = audioContext.createGain();

        oscillator2.connect(gainNode2);
        gainNode2.connect(audioContext.destination);

        oscillator2.type = 'triangle';
        oscillator2.frequency.setValueAtTime(2000, audioContext.currentTime);
        oscillator2.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.2);

        gainNode2.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);

        oscillator2.start(audioContext.currentTime);
        oscillator2.stop(audioContext.currentTime + 0.2);
    } catch (error) {
        // 静默失败
    }
}

// ========================================
// 显示Combo特效
// ========================================
function showComboEffect() {
    if (game.combo > 1) {
        const comboDisplay = document.getElementById('combo-display');
        comboDisplay.textContent = `${game.combo}x COMBO!`;
        comboDisplay.style.animation = 'none';
        setTimeout(() => {
            comboDisplay.style.animation = 'comboAnim 1s ease-out';
        }, 10);
    }
}

// ========================================
// 更新粒子系统
// ========================================
function updateParticles() {
    for (let i = game.particles.length - 1; i >= 0; i--) {
        const particle = game.particles[i];
        const positions = particle.mesh.geometry.attributes.position.array;

        for (let j = 0; j < positions.length; j += 3) {
            positions[j] += particle.velocities[j];
            positions[j + 1] += particle.velocities[j + 1];
            positions[j + 2] += particle.velocities[j + 2];
        }

        particle.mesh.geometry.attributes.position.needsUpdate = true;
        particle.life -= 0.02;
        particle.mesh.material.opacity = particle.life;

        if (particle.life <= 0) {
            scene.remove(particle.mesh);
            game.particles.splice(i, 1);
        }
    }
}

// ========================================
// 更新敌人位置
// ========================================
function updateEnemies() {
    for (let i = game.enemies.length - 1; i >= 0; i--) {
        const enemy = game.enemies[i];
        enemy.mesh.position.z += enemy.speed;
        enemy.mesh.rotation.y += enemy.rotationSpeed;

        // 如果敌人飞过玩家
        if (enemy.mesh.position.z > 50) {
            scene.remove(enemy.mesh);
            game.enemies.splice(i, 1);

            // 扣血
            game.health -= 10;
            if (game.health <= 0) {
                game.health = 0;
                gameOver();
            }
            updateUI();
        }
    }
}

// ========================================
// 更新UI显示
// ========================================
function updateUI() {
    document.getElementById('score').textContent = game.score;
    document.getElementById('combo').textContent = game.combo + 'x';
    document.getElementById('health-fill').style.width = game.health + '%';

    const accuracy = game.totalQuestions > 0
        ? Math.round((game.correctAnswers / game.totalQuestions) * 100)
        : 100;
    document.getElementById('accuracy').textContent = accuracy + '%';
}

// ========================================
// 窗口大小调整
// ========================================
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // 更新后处理尺寸
    if (postProcessing) {
        postProcessing.resize(window.innerWidth, window.innerHeight);
    }
}

// ========================================
// 游戏主循环
// ========================================
function animate() {
    requestAnimationFrame(animate);

    if (game.state === GameState.PLAYING) {
        const delta = clock.getDelta();

        // 更新玩家飞船位置（平滑跟随鼠标）
        updatePlayerPosition();

        // 更新敌人
        updateEnemies();

        // 更新粒子
        updateParticles();

        // 更新高级特效
        if (effectsManager) {
            effectsManager.updateAll(delta);
        }

        // 旋转星空
        game.stars.forEach(star => {
            star.rotation.y += 0.0001;
        });

        // 🌌 更新星云系统
        const elapsedTime = clock.getElapsedTime();
        if (nebulaSystem) {
            nebulaSystem.update(elapsedTime);
        }
        if (volumetricNebula) {
            volumetricNebula.update(elapsedTime);
        }

        // 🎭 更新全息UI
        if (hologramUI) {
            hologramUI.update(elapsedTime);
        }

        // 🛡️ 更新能量护盾
        if (playerShield) {
            playerShield.update(elapsedTime);
        }

        // 玩家飞船动画
        if (player) {
            player.children[1].rotation.y += 0.1; // 引擎旋转
            player.children[2].rotation.z += 0.05; // 光环旋转

            // 添加飞船拖尾效果
            if (effectsManager && Math.random() < 0.3) {
                effectsManager.trail.addTrail(player.position, 0x00ffff, 2);
            }
        }
    }

    // 🌟 使用后处理渲染（如果可用）
    if (postProcessing) {
        postProcessing.render(clock.getDelta());
    } else {
        renderer.render(scene, camera);
    }
}

// ========================================
// 开始游戏
// ========================================
function startGame() {
    game.state = GameState.PLAYING;
    game.score = 0;
    game.combo = 0;
    game.health = 100;
    game.totalQuestions = 0;
    game.correctAnswers = 0;

    document.getElementById('start-screen').classList.add('hidden');
    updateUI();

    // 生成第一个题目
    generateQuestion();

    // 设置题目生成间隔
    setInterval(() => {
        if (game.state === GameState.PLAYING && game.enemies.length < 3) {
            generateQuestion();
        }
    }, 5000);
}

// ========================================
// 重新开始游戏
// ========================================
function restartGame() {
    // 清理所有敌人
    game.enemies.forEach(enemy => scene.remove(enemy.mesh));
    game.enemies = [];

    // 清理所有粒子
    game.particles.forEach(particle => scene.remove(particle.mesh));
    game.particles = [];

    document.getElementById('gameover-screen').classList.remove('active');
    document.getElementById('answer-container').classList.remove('active');
    document.getElementById('question-display').style.display = 'none';

    startGame();
}

// ========================================
// 游戏结束
// ========================================
function gameOver() {
    game.state = GameState.GAMEOVER;

    document.getElementById('answer-container').classList.remove('active');
    document.getElementById('question-display').style.display = 'none';

    const accuracy = game.totalQuestions > 0
        ? Math.round((game.correctAnswers / game.totalQuestions) * 100)
        : 0;

    document.getElementById('final-stats-container').innerHTML = `
        <p class="final-stats">最终分数: ${game.score}</p>
        <p class="final-stats">回答题目: ${game.totalQuestions}</p>
        <p class="final-stats">正确答案: ${game.correctAnswers}</p>
        <p class="final-stats">正确率: ${accuracy}%</p>
        <p class="final-stats">最高连击: ${game.combo}</p>
    `;

    // 显示学习建议
    if (aiEngine) {
        const report = aiEngine.getLearningReport();
        let learningHTML = '<div style="color: #0ff; margin-top: 20px; padding: 20px; background: rgba(0,255,255,0.1); border-radius: 10px;">';
        learningHTML += '<h3 style="margin-bottom: 10px;">🎯 学习建议</h3>';

        if (report.weakPoints.length > 0) {
            learningHTML += `<p style="color: #ff0;">需要加强: ${report.weakPoints.join(', ')}</p>`;
        }
        if (report.strongPoints.length > 0) {
            learningHTML += `<p style="color: #0f0;">掌握较好: ${report.strongPoints.join(', ')}</p>`;
        }

        learningHTML += `<p>平均答题时间: ${report.avgResponseTime}秒</p>`;
        learningHTML += '</div>';

        document.getElementById('learning-report').innerHTML = learningHTML;
    }

    document.getElementById('gameover-screen').classList.add('active');
}

// ========================================
// 显示学习分析
// ========================================
function showLearningAnalytics() {
    if (!aiEngine) return;

    const report = aiEngine.getLearningReport();
    const content = document.getElementById('analytics-content');

    let html = '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">';

    // 总体统计
    html += `
        <div style="background: rgba(0,255,255,0.1); padding: 25px; border-radius: 15px; border: 2px solid #0ff;">
            <h2 style="color: #0ff; margin-bottom: 20px;">📈 总体统计</h2>
            <p style="font-size: 18px; margin: 10px 0;">总题数: <span style="color: #fff; font-weight: bold;">${report.totalQuestions}</span></p>
            <p style="font-size: 18px; margin: 10px 0;">正确数: <span style="color: #0f0; font-weight: bold;">${report.correctAnswers}</span></p>
            <p style="font-size: 18px; margin: 10px 0;">正确率: <span style="color: #ff0; font-weight: bold;">${report.accuracy}%</span></p>
            <p style="font-size: 18px; margin: 10px 0;">平均用时: <span style="color: #f0f; font-weight: bold;">${report.avgResponseTime}秒</span></p>
        </div>
    `;

    // 学习速度
    const speedText = report.learningSpeed > 1.2 ? '🚀 快速进步' : report.learningSpeed < 0.8 ? '🐢 需要加油' : '⚡ 稳步提升';
    html += `
        <div style="background: rgba(255,0,255,0.1); padding: 25px; border-radius: 15px; border: 2px solid #f0f;">
            <h2 style="color: #f0f; margin-bottom: 20px;">⚡ 学习速度</h2>
            <p style="font-size: 32px; text-align: center; margin: 20px 0;">${speedText}</p>
            <p style="font-size: 18px; text-align: center;">速度系数: ${report.learningSpeed.toFixed(2)}x</p>
        </div>
    `;

    // 难度分布
    html += `
        <div style="background: rgba(255,255,0,0.1); padding: 25px; border-radius: 15px; border: 2px solid #ff0;">
            <h2 style="color: #ff0; margin-bottom: 20px;">📊 难度分布</h2>
            <p style="font-size: 18px; margin: 10px 0;">简单: <span style="color: #0f0;">${report.difficultyStats.easy || 0}题</span></p>
            <p style="font-size: 18px; margin: 10px 0;">中等: <span style="color: #ff0;">${report.difficultyStats.medium || 0}题</span></p>
            <p style="font-size: 18px; margin: 10px 0;">困难: <span style="color: #f00;">${report.difficultyStats.hard || 0}题</span></p>
        </div>
    `;

    html += '</div>';

    // 知识点分析
    html += '<div style="margin-top: 40px; background: rgba(0,255,255,0.05); padding: 30px; border-radius: 15px;">';
    html += '<h2 style="color: #0ff; margin-bottom: 20px;">🎯 知识点分析</h2>';

    if (report.weakPoints.length > 0) {
        html += '<div style="margin: 20px 0;">';
        html += '<h3 style="color: #f00; margin-bottom: 10px;">❌ 需要加强</h3>';
        report.weakPoints.forEach(point => {
            html += `<span style="display: inline-block; background: rgba(255,0,0,0.2); color: #f00; padding: 8px 16px; margin: 5px; border-radius: 20px; border: 1px solid #f00;">${point}</span>`;
        });
        html += '</div>';
    }

    if (report.strongPoints.length > 0) {
        html += '<div style="margin: 20px 0;">';
        html += '<h3 style="color: #0f0; margin-bottom: 10px;">✅ 掌握较好</h3>';
        report.strongPoints.forEach(point => {
            html += `<span style="display: inline-block; background: rgba(0,255,0,0.2); color: #0f0; padding: 8px 16px; margin: 5px; border-radius: 20px; border: 1px solid #0f0;">${point}</span>`;
        });
        html += '</div>';
    }

    html += '</div>';

    // 最近表现
    if (report.recentPerformance.length > 0) {
        html += '<div style="margin-top: 40px; background: rgba(255,0,255,0.05); padding: 30px; border-radius: 15px;">';
        html += '<h2 style="color: #f0f; margin-bottom: 20px;">📝 最近答题记录</h2>';
        html += '<div style="max-height: 400px; overflow-y: auto;">';

        report.recentPerformance.reverse().forEach((record, idx) => {
            const statusColor = record.isCorrect ? '#0f0' : '#f00';
            const statusIcon = record.isCorrect ? '✅' : '❌';
            const timeStr = (record.responseTime / 1000).toFixed(1);

            html += `
                <div style="background: rgba(0,0,0,0.3); padding: 15px; margin: 10px 0; border-radius: 10px; border-left: 4px solid ${statusColor};">
                    <span style="color: ${statusColor}; font-size: 20px;">${statusIcon}</span>
                    <span style="color: #fff; margin-left: 10px;">${record.question.question}</span>
                    <span style="color: #888; float: right;">${timeStr}秒</span>
                </div>
            `;
        });

        html += '</div></div>';
    }

    content.innerHTML = html;
    document.getElementById('analytics-screen').style.display = 'block';
}

// ========================================
// 关闭学习分析
// ========================================
function closeAnalytics() {
    document.getElementById('analytics-screen').style.display = 'none';
}

// ========================================
// 音效系统（简易版）
// ========================================
function playSound(type) {
    // 使用Web Audio API创建简易音效
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    if (type === 'correct') {
        oscillator.frequency.value = 800;
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    } else if (type === 'wrong') {
        oscillator.frequency.value = 200;
        oscillator.type = 'sawtooth';
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    }

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

// ========================================
// 键盘输入监听
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const answerInput = document.getElementById('answer-input');

    answerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && game.state === GameState.PLAYING) {
            const answer = answerInput.value.trim();
            if (answer) {
                checkAnswer(answer);
            }
        }
    });
});

// ========================================
// 初始化游戏
// ========================================
window.addEventListener('load', () => {
    initThreeJS();
    animate();
});
