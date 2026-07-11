# 软件开发工具实践实验报告文档站

本项目是软件开发工具实践课程的静态网站项目，使用 Vite、HTML、CSS、JavaScript 和 Markdown 渲染实现一个实验报告文档站。

## 项目功能

- 实验报告首页
- 左侧 Wiki 风格实验目录
- 每个实验步骤独立 Markdown 文件
- Markdown 内容渲染
- 代码块、表格、截图占位展示
- GitHub 仓库入口

## 项目结构

```text
software-tools-site/
├─ public/
│  ├─ docs/      # 每个实验步骤的 Markdown 文档
│  └─ images/    # 实验截图目录
├─ src/
│  ├─ main.js    # 文档加载和 Markdown 渲染逻辑
│  └─ style.css  # 页面样式
└─ README.md
```

## 修改文档

每个实验步骤对应一个 Markdown 文件，例如：

```text
public/docs/01-web-env.md
public/docs/02-code-git.md
public/docs/08-deploy.md
```

修改对应文件后，网站会渲染新的内容。

## 添加截图

将截图放入：

```text
public/images/
```

然后在 Markdown 文件中引用：

```markdown
![截图说明](/images/图片文件名.png)
```

## 实验内容

网站包含以下实验记录页面：

1. Web 开发环境
2. 代码编辑与管理
3. WSL2 Ubuntu 安装
4. Linux 基本操作
5. Linux 账户与权限管理
6. Linux 环境配置
7. SSH 远程管理
8. Web 软件部署

## 技术栈

- Vite
- HTML
- CSS
- JavaScript
- marked
- Git
- WSL2 Ubuntu
- Nginx

## 本地运行

```bash
npm install
npm run dev
```

## 构建项目

```bash
npm run build
```

## 部署说明

构建后会生成 `dist` 目录，可将其中内容复制到 Nginx 站点目录。

```bash
sudo cp -r dist/* /var/www/software-site/
sudo service nginx restart
```

浏览器访问：

```text
http://localhost:8080
```
