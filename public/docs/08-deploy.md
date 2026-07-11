# 8. Web 软件部署

## 实验目的

掌握静态网站构建和 Nginx 部署流程，完成从源码到可访问网站的完整实践。

## 主要步骤

### 步骤 1：安装并启动 Nginx

Ubuntu / Debian：

```bash
sudo apt install nginx -y
sudo service nginx start
sudo service nginx status
```

Arch Linux：

```bash
sudo pacman -S nginx
sudo nginx
ps -ef | grep nginx
```

浏览器访问：

```text
http://localhost
```

如果看到 Nginx 默认页面，说明 Web 服务启动成功。

### 步骤 2：构建 Vite 项目

```bash
npm run build
```

构建完成后会生成 dist 目录。

### 步骤 3：复制网站文件

```bash
sudo mkdir -p /var/www/software-site
sudo cp -r dist/* /var/www/software-site/
ls -l /var/www/software-site
```

### 步骤 4：配置 Nginx 站点

创建配置文件：

```bash
sudo vim /etc/nginx/sites-available/software-site
```

写入配置：

```nginx
server {
    listen 8080;
    server_name localhost;

    root /var/www/software-site;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

启用站点并重启 Nginx：

```bash
sudo ln -s /etc/nginx/sites-available/software-site /etc/nginx/sites-enabled/software-site
sudo nginx -t
sudo service nginx restart
```

### 步骤 5：访问部署结果

浏览器访问：

```text
http://localhost:8080
```


## 实验结果

网站成功部署到 WSL2 Linux 的 Nginx 服务中，并可以通过浏览器访问。
