# Web Mini Game Lab

本项目是软件开发工具实践课程的静态网站项目，使用 Vite、HTML、CSS 和 JavaScript 开发，实现了一个简单的反应速度小游戏。

## 项目功能

- 反应速度测试
- 本次成绩统计
- 最佳成绩保存
- localStorage 本地数据持久化
- 小组分工展示
- 部署说明展示

## 技术栈

- Vite
- HTML
- CSS
- JavaScript
- localStorage
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
