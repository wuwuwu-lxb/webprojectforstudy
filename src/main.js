import './style.css'

const STORAGE_KEY = 'mini-game-best-time'

const app = document.querySelector('#app')

let gameState = 'idle'
let timerId = null
let startTime = 0
let bestTime = Number(localStorage.getItem(STORAGE_KEY)) || null

app.innerHTML = `
  <header class="hero">
    <nav class="nav">
      <span class="brand">Web Mini Game Lab</span>
      <a href="#game">开始游戏</a>
      <a href="#about">项目说明</a>
      <a href="#team">小组分工</a>
    </nav>
    <section class="hero-content">
      <p class="tag">Vite + JavaScript + localStorage</p>
      <h1>反应速度小游戏</h1>
      <p class="intro">这是一个简单的静态网站项目，通过浏览器本地存储保存最佳成绩，适合用于课程实验展示、部署和报告截图。</p>
    </section>
  </header>

  <main>
    <section class="panel game-panel" id="game">
      <div class="section-title">
        <p>Game</p>
        <h2>反应速度测试</h2>
      </div>
      <div class="score-board">
        <div>
          <span>本次成绩</span>
          <strong id="currentScore">-- ms</strong>
        </div>
        <div>
          <span>最佳成绩</span>
          <strong id="bestScore">${bestTime ? `${bestTime} ms` : '-- ms'}</strong>
        </div>
      </div>
      <button class="reaction-box idle" id="reactionBox">点击开始</button>
      <p class="hint" id="hint">点击上方区域开始游戏，等待颜色变绿后立即点击。</p>
      <div class="actions">
        <button id="resetBest">清空最佳成绩</button>
      </div>
    </section>

    <section class="grid" id="about">
      <article class="card">
        <h3>项目功能</h3>
        <p>实现反应速度测试、成绩统计、最佳成绩保存和清空本地数据功能。</p>
      </article>
      <article class="card">
        <h3>技术要点</h3>
        <p>使用 Vite 管理项目，使用 JavaScript 编写交互逻辑，使用 localStorage 保存浏览器本地数据。</p>
      </article>
      <article class="card">
        <h3>部署方式</h3>
        <p>项目构建后生成 dist 目录，可部署到 WSL2 Ubuntu 中的 Nginx 静态网站目录。</p>
      </article>
    </section>

    <section class="panel" id="team">
      <div class="section-title">
        <p>Team</p>
        <h2>小组分工</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>成员</th>
            <th>分工</th>
            <th>任务内容</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>成员 A</td>
            <td>前端开发</td>
            <td>页面结构、样式设计、游戏交互</td>
          </tr>
          <tr>
            <td>成员 B</td>
            <td>环境配置</td>
            <td>Node.js、Git、WSL2 Ubuntu 环境</td>
          </tr>
          <tr>
            <td>成员 C</td>
            <td>部署测试</td>
            <td>Nginx 部署、SSH 远程管理、截图整理</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>

  <footer>
    <p>软件开发工具实践课程项目 · 静态站点部署实验</p>
  </footer>
`

const reactionBox = document.querySelector('#reactionBox')
const hint = document.querySelector('#hint')
const currentScore = document.querySelector('#currentScore')
const bestScore = document.querySelector('#bestScore')
const resetBest = document.querySelector('#resetBest')

function updateBestScore(score) {
  if (!bestTime || score < bestTime) {
    bestTime = score
    localStorage.setItem(STORAGE_KEY, String(score))
    bestScore.textContent = `${score} ms`
  }
}

function resetGame() {
  clearTimeout(timerId)
  gameState = 'idle'
  reactionBox.className = 'reaction-box idle'
  reactionBox.textContent = '点击开始'
  hint.textContent = '点击上方区域开始游戏，等待颜色变绿后立即点击。'
}

function startGame() {
  gameState = 'waiting'
  reactionBox.className = 'reaction-box waiting'
  reactionBox.textContent = '请等待...'
  hint.textContent = '不要提前点击，等它变成绿色。'

  const delay = Math.floor(Math.random() * 2500) + 1500
  timerId = setTimeout(() => {
    gameState = 'ready'
    startTime = Date.now()
    reactionBox.className = 'reaction-box ready'
    reactionBox.textContent = '现在点击！'
    hint.textContent = '尽快点击绿色区域。'
  }, delay)
}

reactionBox.addEventListener('click', () => {
  if (gameState === 'idle') {
    startGame()
    return
  }

  if (gameState === 'waiting') {
    resetGame()
    reactionBox.textContent = '太早了，重新开始'
    hint.textContent = '提前点击不计成绩，请重新开始。'
    return
  }

  if (gameState === 'ready') {
    const score = Date.now() - startTime
    currentScore.textContent = `${score} ms`
    updateBestScore(score)
    resetGame()
    reactionBox.textContent = '再玩一次'
    hint.textContent = `本次反应时间：${score} ms。`
  }
})

resetBest.addEventListener('click', () => {
  localStorage.removeItem(STORAGE_KEY)
  bestTime = null
  bestScore.textContent = '-- ms'
})
