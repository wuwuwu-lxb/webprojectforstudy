# 1. Web 开发环境

## 实验目的

完成 Web 静态站点开发所需的基础环境配置，理解编辑器、Node.js、npm 和构建工具在前端项目中的作用。

## 实验环境

| 项目 | 内容 |
|---|---|
| 操作系统 | Windows 11 |
| 编辑器 | Visual Studio Code |
| 运行环境 | Node.js LTS |
| 包管理工具 | npm |
| 构建工具 | Vite |

## 主要步骤

### 步骤 1：安装 VS Code

安装 VS Code 后，用于编写 HTML、CSS、JavaScript 和 Markdown 文档。建议安装 WSL、Chinese Language Pack、Markdown Preview Enhanced 等插件。

### 步骤 2：安装 Node.js

在 WSL2 Linux 中安装 Node.js 和 npm。Ubuntu 可使用 apt，Arch 可使用 pacman：

Ubuntu / Debian：

```bash
sudo apt update
sudo apt install nodejs npm -y
```

Arch Linux：

```bash
sudo pacman -S nodejs npm
node -v
npm -v
```

### 步骤 3：创建 Vite 项目

```bash
npm create vite@latest software-tools-site -- --template vanilla
cd software-tools-site
npm install
npm run dev
```

## 截图记录

![ad57c4857d2b2421e58bc162e15e6f00 1](/images/ad57c4857d2b2421e58bc162e15e6f00%201.png)

图 1：在 WSL2 Linux 中查看 Node.js 和 npm 版本。

![5841b55f1a8c193678bd220e4d361e31](/images/5841b55f1a8c193678bd220e4d361e31.png)

图 2：使用 `npm run dev` 启动 Vite 本地开发服务器。
## 实验结果

浏览器能够访问 Vite 开发服务器页面，说明 Web 开发环境配置成功。
