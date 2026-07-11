import { marked } from 'marked'
import './style.css'

const docs = [
  { id: 'overview', title: '项目首页', short: '实验目标与成果概览', file: '/docs/00-overview.md' },
  { id: 'web-env', title: '1. Web 开发环境', short: 'VS Code、Node.js、Vite', file: '/docs/01-web-env.md' },
  { id: 'code-git', title: '2. 代码编辑与管理', short: 'Git 初始化、提交、远端仓库', file: '/docs/02-code-git.md' },
  { id: 'wsl', title: '3. WSL2 Ubuntu 安装', short: 'Linux 虚拟环境', file: '/docs/03-wsl.md' },
  { id: 'linux-basic', title: '4. Linux 基本操作', short: '目录、文件、软件包', file: '/docs/04-linux-basic.md' },
  { id: 'linux-user', title: '5. Linux 账户与权限', short: '用户、用户组、目录权限', file: '/docs/05-linux-user.md' },
  { id: 'linux-env', title: '6. Linux 环境配置', short: 'profile、bashrc、环境变量', file: '/docs/06-linux-env.md' },
  { id: 'ssh', title: '7. SSH 远程管理', short: '远程登录、服务状态', file: '/docs/07-ssh.md' },
  { id: 'deploy', title: '8. Web 软件部署', short: '构建、Nginx、访问测试', file: '/docs/08-deploy.md' },
  { id: 'summary', title: '实验总结', short: '问题、收获与分工', file: '/docs/09-summary.md' },
]

const app = document.querySelector('#app')

app.innerHTML = `
  <header class="topbar">
    <div>
      <strong>软件开发工具实践</strong>
      <span>实验报告文档站</span>
    </div>
    <a href="https://github.com/wuwuwu-lxb/webprojectforstudy" target="_blank" rel="noreferrer">GitHub 仓库</a>
  </header>
  <div class="layout">
    <aside class="sidebar">
      <div class="sidebar-title">实验目录</div>
      <nav id="docNav"></nav>
    </aside>
    <main class="content">
      <article class="doc" id="docContent"></article>
    </main>
  </div>
`

const nav = document.querySelector('#docNav')
const docContent = document.querySelector('#docContent')

nav.innerHTML = docs
  .map(
    (doc) => `
      <button class="nav-item" data-id="${doc.id}">
        <span>${doc.title}</span>
        <small>${doc.short}</small>
      </button>
    `,
  )
  .join('')

marked.setOptions({
  gfm: true,
  breaks: true,
})

async function renderDoc(id) {
  const doc = docs.find((item) => item.id === id) || docs[0]

  document.querySelectorAll('.nav-item').forEach((button) => {
    button.classList.toggle('active', button.dataset.id === doc.id)
  })

  docContent.innerHTML = '<p class="loading">正在加载文档...</p>'

  try {
    const response = await fetch(doc.file)
    if (!response.ok) throw new Error('文档加载失败')
    const markdown = await response.text()
    docContent.innerHTML = marked.parse(markdown)
  } catch (error) {
    docContent.innerHTML = `
      <h1>文档加载失败</h1>
      <p>请检查 <code>${doc.file}</code> 是否存在。</p>
    `
  }

  if (window.location.hash !== `#${doc.id}`) {
    window.location.hash = doc.id
  }

  window.scrollTo({ top: 0, behavior: 'smooth' })
}

nav.addEventListener('click', (event) => {
  const button = event.target.closest('.nav-item')
  if (!button) return
  renderDoc(button.dataset.id)
})

window.addEventListener('hashchange', () => {
  renderDoc(window.location.hash.slice(1) || 'overview')
})

renderDoc(window.location.hash.slice(1) || 'overview')
