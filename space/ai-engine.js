// ========================================
// AI智能题目生成引擎
// ========================================

class AIQuestionEngine {
    constructor() {
        this.apiKey = null; // 用户可配置API Key
        this.playerProfile = {
            weakPoints: [], // 薄弱知识点
            strongPoints: [], // 强项
            learningSpeed: 1.0, // 学习速度系数
            preferredDifficulty: 'medium'
        };
        this.questionHistory = [];
        this.useLocalBank = true; // 默认使用本地题库
    }

    // 配置AI API
    configureAPI(apiKey, endpoint = 'https://api.anthropic.com/v1/messages') {
        this.apiKey = apiKey;
        this.endpoint = endpoint;
        this.useLocalBank = false;
    }

    // 分析玩家表现，更新学习画像
    analyzePerformance(question, isCorrect, responseTime) {
        this.questionHistory.push({
            question,
            isCorrect,
            responseTime,
            timestamp: Date.now()
        });

        // 分析薄弱点
        if (!isCorrect) {
            const topic = this.extractTopic(question);
            if (!this.playerProfile.weakPoints.includes(topic)) {
                this.playerProfile.weakPoints.push(topic);
            }
        } else {
            const topic = this.extractTopic(question);
            if (!this.playerProfile.strongPoints.includes(topic)) {
                this.playerProfile.strongPoints.push(topic);
            }
        }

        // 计算学习速度
        const recentQuestions = this.questionHistory.slice(-10);
        const recentAccuracy = recentQuestions.filter(q => q.isCorrect).length / recentQuestions.length;

        if (recentAccuracy > 0.8) {
            this.playerProfile.learningSpeed = Math.min(this.playerProfile.learningSpeed + 0.1, 2.0);
        } else if (recentAccuracy < 0.5) {
            this.playerProfile.learningSpeed = Math.max(this.playerProfile.learningSpeed - 0.1, 0.5);
        }

        this.saveLearningData();
    }

    // 提取题目主题
    extractTopic(question) {
        // 简单的关键词提取
        const questionText = typeof question === 'string' ? question : question.question;
        if (!questionText) return 'general';

        if (questionText.includes('翻译')) return 'translation';
        if (questionText.includes('意思') || questionText.includes('中文')) return 'vocabulary';
        if (questionText.includes('语法')) return 'grammar';
        return 'general';
    }

    // 生成个性化题目
    async generateQuestion(difficulty) {
        if (this.useLocalBank || !this.apiKey) {
            return this.generateLocalQuestion(difficulty);
        }

        try {
            return await this.generateAIQuestion(difficulty);
        } catch (error) {
            console.error('AI生成失败，使用本地题库:', error);
            return this.generateLocalQuestion(difficulty);
        }
    }

    // 使用本地题库生成题目
    generateLocalQuestion(difficulty) {
        const bank = questionBank[difficulty] || questionBank.easy;

        // 智能选择：优先选择薄弱点相关的题目
        let selectedQuestion;
        if (this.playerProfile.weakPoints.length > 0 && Math.random() < 0.7) {
            // 70%概率针对薄弱点出题
            const weakTopic = this.playerProfile.weakPoints[
                Math.floor(Math.random() * this.playerProfile.weakPoints.length)
            ];
            const relevantQuestions = bank.filter(q =>
                this.extractTopic(q.question) === weakTopic
            );
            selectedQuestion = relevantQuestions.length > 0
                ? relevantQuestions[Math.floor(Math.random() * relevantQuestions.length)]
                : bank[Math.floor(Math.random() * bank.length)];
        } else {
            selectedQuestion = bank[Math.floor(Math.random() * bank.length)];
        }

        return selectedQuestion;
    }

    // 使用AI API生成题目
    async generateAIQuestion(difficulty) {
        const prompt = this.buildPrompt(difficulty);

        const response = await fetch(this.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': this.apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-3-5-sonnet-20241022',
                max_tokens: 200,
                messages: [{
                    role: 'user',
                    content: prompt
                }]
            })
        });

        const data = await response.json();
        return this.parseAIResponse(data);
    }

    // 构建AI提示词
    buildPrompt(difficulty) {
        const weakPointsStr = this.playerProfile.weakPoints.join(', ') || '无';
        const strongPointsStr = this.playerProfile.strongPoints.join(', ') || '无';

        return `请生成一道${difficulty}难度的英语学习题目（适合中国学生）。

玩家学习画像：
- 薄弱点: ${weakPointsStr}
- 强项: ${strongPointsStr}
- 最近正确率: ${this.getRecentAccuracy()}%

要求：
1. 题目类型：单词翻译、词义理解或短语用法
2. 难度: ${difficulty} (easy/medium/hard)
3. 适合游戏场景，答案简短（1-3个词）
4. 优先针对薄弱点出题

请以JSON格式返回，格式：
{
    "question": "题目内容",
    "answer": "正确答案",
    "hint": "提示信息"
}`;
    }

    // 解析AI返回的内容
    parseAIResponse(data) {
        try {
            const content = data.content[0].text;
            const jsonMatch = content.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                return JSON.parse(jsonMatch[0]);
            }
        } catch (error) {
            console.error('解析AI响应失败:', error);
        }

        // 失败时返回默认题目
        return this.generateLocalQuestion('easy');
    }

    // 获取最近正确率
    getRecentAccuracy() {
        if (this.questionHistory.length === 0) return 100;

        const recent = this.questionHistory.slice(-10);
        const correct = recent.filter(q => q.isCorrect).length;
        return Math.round((correct / recent.length) * 100);
    }

    // 获取学习报告
    getLearningReport() {
        const totalQuestions = this.questionHistory.length;
        const correctAnswers = this.questionHistory.filter(q => q.isCorrect).length;
        const accuracy = totalQuestions > 0 ? (correctAnswers / totalQuestions * 100).toFixed(1) : 0;

        // 计算平均响应时间
        const avgResponseTime = totalQuestions > 0
            ? (this.questionHistory.reduce((sum, q) => sum + q.responseTime, 0) / totalQuestions / 1000).toFixed(1)
            : 0;

        // 难度分布
        const difficultyStats = {
            easy: this.questionHistory.filter(q => q.question && q.question.difficulty === 'easy').length,
            medium: this.questionHistory.filter(q => q.question && q.question.difficulty === 'medium').length,
            hard: this.questionHistory.filter(q => q.question && q.question.difficulty === 'hard').length
        };

        return {
            totalQuestions,
            correctAnswers,
            accuracy,
            avgResponseTime,
            weakPoints: this.playerProfile.weakPoints,
            strongPoints: this.playerProfile.strongPoints,
            learningSpeed: this.playerProfile.learningSpeed,
            difficultyStats,
            recentPerformance: this.questionHistory.slice(-20)
        };
    }

    // 保存学习数据到本地存储
    saveLearningData() {
        try {
            localStorage.setItem('ai_learning_profile', JSON.stringify(this.playerProfile));
            localStorage.setItem('ai_question_history', JSON.stringify(this.questionHistory.slice(-100)));
        } catch (error) {
            console.warn('保存学习数据失败:', error);
        }
    }

    // 加载学习数据
    loadLearningData() {
        try {
            const profile = localStorage.getItem('ai_learning_profile');
            const history = localStorage.getItem('ai_question_history');

            if (profile) {
                this.playerProfile = JSON.parse(profile);
            }
            if (history) {
                this.questionHistory = JSON.parse(history);
            }
        } catch (error) {
            console.warn('加载学习数据失败:', error);
        }
    }

    // 重置学习数据
    resetLearningData() {
        this.playerProfile = {
            weakPoints: [],
            strongPoints: [],
            learningSpeed: 1.0,
            preferredDifficulty: 'medium'
        };
        this.questionHistory = [];
        localStorage.removeItem('ai_learning_profile');
        localStorage.removeItem('ai_question_history');
    }

    // 获取推荐难度
    getRecommendedDifficulty() {
        const recentAccuracy = this.getRecentAccuracy();

        if (recentAccuracy >= 80) {
            // 正确率高，提升难度
            if (this.playerProfile.preferredDifficulty === 'easy') {
                this.playerProfile.preferredDifficulty = 'medium';
            } else if (this.playerProfile.preferredDifficulty === 'medium') {
                this.playerProfile.preferredDifficulty = 'hard';
            }
        } else if (recentAccuracy < 50) {
            // 正确率低，降低难度
            if (this.playerProfile.preferredDifficulty === 'hard') {
                this.playerProfile.preferredDifficulty = 'medium';
            } else if (this.playerProfile.preferredDifficulty === 'medium') {
                this.playerProfile.preferredDifficulty = 'easy';
            }
        }

        return this.playerProfile.preferredDifficulty;
    }
}

// 扩展的题库
const extendedQuestionBank = {
    easy: [
        { question: '翻译：苹果', answer: 'apple', hint: '一种水果' },
        { question: '翻译：猫', answer: 'cat', hint: '喵喵叫的动物' },
        { question: '翻译：狗', answer: 'dog', hint: '汪汪叫的动物' },
        { question: '翻译：书', answer: 'book', hint: '可以阅读' },
        { question: '翻译：水', answer: 'water', hint: 'H2O' },
        { question: '翻译：太阳', answer: 'sun', hint: '白天发光' },
        { question: '翻译：月亮', answer: 'moon', hint: '晚上发光' },
        { question: '翻译：星星', answer: 'star', hint: '夜空中闪烁' },
        { question: '翻译：爱', answer: 'love', hint: '一种情感' },
        { question: '翻译：家', answer: 'home', hint: '温暖的地方' },
        { question: '翻译：学校', answer: 'school', hint: '学习的地方' },
        { question: '翻译：老师', answer: 'teacher', hint: '教书育人' },
        { question: '翻译：学生', answer: 'student', hint: '在校学习者' },
        { question: '翻译：朋友', answer: 'friend', hint: '好伙伴' },
        { question: '翻译：音乐', answer: 'music', hint: '美妙的声音' }
    ],
    medium: [
        { question: 'beautiful的意思', answer: '美丽', hint: '形容词' },
        { question: 'computer的中文', answer: '计算机', hint: '电子设备' },
        { question: '翻译：勇敢的', answer: 'brave', hint: '不害怕' },
        { question: '翻译：快乐', answer: 'happy', hint: '心情好' },
        { question: 'friend的中文', answer: '朋友', hint: '关系词' },
        { question: '翻译：学习', answer: 'study', hint: '动词' },
        { question: 'important的意思', answer: '重要', hint: '形容词' },
        { question: '翻译：知识', answer: 'knowledge', hint: '学到的东西' },
        { question: 'creative的中文', answer: '创造性的', hint: '形容词' },
        { question: '翻译：努力', answer: 'effort', hint: '名词' },
        { question: 'achieve的意思', answer: '达成', hint: '动词' },
        { question: '翻译：梦想', answer: 'dream', hint: '理想' },
        { question: 'challenge的中文', answer: '挑战', hint: '名词' },
        { question: '翻译：成功', answer: 'success', hint: '达成目标' },
        { question: 'experience的意思', answer: '经验', hint: '名词' }
    ],
    hard: [
        { question: 'accomplish的中文', answer: '完成', hint: '达成目标' },
        { question: '翻译：坚持不懈', answer: 'perseverance', hint: '一种品质' },
        { question: 'extraordinary的意思', answer: '非凡的', hint: '超出寻常' },
        { question: '翻译：机遇', answer: 'opportunity', hint: '名词' },
        { question: 'magnificent的中文', answer: '壮丽的', hint: '形容词' },
        { question: '翻译：哲学', answer: 'philosophy', hint: '学科' },
        { question: 'ambitious的意思', answer: '有野心的', hint: '形容词' },
        { question: '翻译：创新', answer: 'innovation', hint: '名词' },
        { question: 'sophisticated的中文', answer: '复杂的', hint: '形容词' },
        { question: '翻译：卓越', answer: 'excellence', hint: '名词' },
        { question: 'entrepreneur的意思', answer: '企业家', hint: '职业' },
        { question: '翻译：可持续', answer: 'sustainable', hint: '形容词' },
        { question: 'fundamental的中文', answer: '基本的', hint: '形容词' },
        { question: '翻译：洞察力', answer: 'insight', hint: '名词' },
        { question: 'paradigm的意思', answer: '范式', hint: '名词' }
    ]
};

// 更新全局题库
if (typeof questionBank !== 'undefined') {
    Object.assign(questionBank, extendedQuestionBank);
}

// 导出AI引擎实例
const aiEngine = new AIQuestionEngine();

// 页面加载时恢复学习数据
if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
        aiEngine.loadLearningData();
    });
}
