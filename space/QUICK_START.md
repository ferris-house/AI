# ⚡ 快速启动指南

## 🎮 最快开始方式

### Windows系统
**双击运行：**
```
START_GAME.bat
```

或直接双击 `index.html`

---

### Mac/Linux系统
```bash
# 方法1：直接打开
open index.html

# 方法2：启动本地服务器
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

---

## 🎯 游戏操作说明

### 基础操作
| 操作 | 说明 |
|------|------|
| **鼠标移动** | 控制飞船位置 |
| **输入答案** | 底部输入框输入英文/中文 |
| **回车键** | 提交答案 |
| **F12** | 打开开发者工具查看AI数据 |

### 计分规则
- ✅ **答对加分：**
  - 简单题：10分
  - 中等题：30分
  - 困难题：50分
  - Combo加成：每连击+0.5倍
  - 速度奖励：3秒内答题+10分

- ❌ **答错扣分：**
  - 扣血：-15点生命值
  - 连击清零
  - 敌人飞过也扣血

---

## 🧠 AI功能使用

### 查看学习数据
游戏进行中按 F12 打开控制台，输入：

```javascript
// 查看完整学习报告
aiEngine.getLearningReport()

// 查看学习画像
aiEngine.playerProfile

// 查看答题历史
aiEngine.questionHistory

// 重置学习数据
aiEngine.resetLearningData()
```

### 配置AI API（可选）
```javascript
// 配置Claude API
aiEngine.configureAPI('你的API密钥', 'https://api.anthropic.com/v1/messages')

// 配置其他AI服务
aiEngine.configureAPI('你的API密钥', 'https://your-ai-service.com/api')
```

---

## 🎨 自定义设置

### 修改难度系数
编辑 `game.js` 第373-377行：

```javascript
// 默认每次扣血15，可以改成10（更简单）或20（更难）
game.health -= 15;
```

### 修改题目生成速度
编辑 `game.js` 第603行：

```javascript
// 默认5000ms（5秒），可以改成3000（更快）或8000（更慢）
setInterval(() => { ... }, 5000);
```

### 添加自己的题目
编辑 `ai-engine.js` 第141-200行：

```javascript
const extendedQuestionBank = {
    easy: [
        { question: '你的题目', answer: '答案', hint: '提示' },
        // 添加更多...
    ]
};
```

---

## 🐛 常见问题

### Q1: 游戏画面黑屏？
**解决方案：**
- 检查浏览器是否支持WebGL
- 更新显卡驱动
- 换用Chrome或Edge浏览器
- 检查控制台错误（F12）

### Q2: 3D场景很卡？
**解决方案：**
- 关闭其他占用GPU的程序
- 降低浏览器缩放级别
- 编辑 `game.js` 第137行，减少星星数量：
  ```javascript
  for (let i = 0; i < 5000; i++) { // 原来10000
  ```

### Q3: 输入法切换麻烦？
**建议：**
- 使用搜狗/微软拼音的中英文混输
- 或使用外接键盘的语言切换键

### Q4: 学习数据丢失？
**原因：**
- 清空了浏览器缓存/LocalStorage

**恢复：**
- 学习数据存储在浏览器本地，定期备份：
  ```javascript
  // 备份数据
  const backup = {
      profile: localStorage.getItem('ai_learning_profile'),
      history: localStorage.getItem('ai_question_history')
  };
  console.log(JSON.stringify(backup));

  // 恢复数据
  localStorage.setItem('ai_learning_profile', backup.profile);
  localStorage.setItem('ai_question_history', backup.history);
  ```

### Q5: 音效没有声音？
**检查：**
- 浏览器是否静音
- 系统音量是否打开
- 是否允许网页播放声音

---

## 🔧 开发者模式

### 启用调试信息
在控制台输入：

```javascript
// 显示FPS
game.debug = true;

// 无敌模式
game.health = 999999;

// 跳过到困难难度
game.score = 1000;

// 查看所有敌人
game.enemies

// 立即生成题目
generateQuestion();
```

### 测试特效
```javascript
// 测试爆炸特效
createExplosion(player.position, 0x00ffff);

// 测试粒子
effectsManager.starBurst.create(player.position, 0xff00ff, 20);

// 测试震动
effectsManager.shake.shake(1.0, 0.5);

// 测试飘字
effectsManager.floatingText.create('TEST', player.position, '#ff0', 40);
```

---

## 📦 部署到服务器

### 使用GitHub Pages（免费）

1. **上传到GitHub：**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用户名/space-english.git
   git push -u origin main
   ```

2. **开启GitHub Pages：**
   - 进入仓库 Settings
   - 找到 Pages
   - Source 选择 main 分支
   - 保存

3. **访问：**
   ```
   https://你的用户名.github.io/space-english/
   ```

### 使用Vercel（推荐）

1. **安装Vercel CLI：**
   ```bash
   npm install -g vercel
   ```

2. **部署：**
   ```bash
   cd find_project1
   vercel
   ```

3. **自动获得域名：**
   ```
   https://你的项目名.vercel.app
   ```

---

## 🎓 学习建议

### 如果想深入理解代码

**学习路径：**
1. **JavaScript基础** → 先看 `game.js` 的数据结构
2. **Three.js入门** → 理解场景、相机、渲染器
3. **粒子系统** → 研究 `createExplosion` 函数
4. **AI算法** → 阅读 `ai-engine.js` 的分析逻辑

**推荐资源：**
- Three.js官方文档：https://threejs.org/docs/
- MDN Web文档：https://developer.mozilla.org/
- 我们的代码注释：每个函数都有详细说明

---

## 📞 技术支持

### 遇到问题？

1. **查看README.md** - 详细技术文档
2. **查看DEMO_GUIDE.md** - 黑客松演示指南
3. **检查控制台** - F12查看错误信息
4. **提交Issue** - GitHub仓库提交问题

---

## 🎉 享受游戏吧！

**记住：学习也可以很酷！**

Have fun! 🚀
