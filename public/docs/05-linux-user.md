# 5. Linux 账户与权限管理

## 实验目的

理解 Linux 中用户、用户组和文件权限的基本概念，并完成网站部署目录的权限配置。

## 主要步骤

### 步骤 1：查看当前用户和用户组

```bash
whoami
groups
```

### 步骤 2：创建部署用户

```bash
sudo adduser webuser
sudo usermod -aG sudo webuser
id webuser
```

### 步骤 3：配置部署目录权限

```bash
sudo mkdir -p /var/www/software-site
sudo chown -R $USER:$USER /var/www/software-site
chmod 755 /var/www/software-site
ls -ld /var/www/software-site
```

## 截图记录

![用户信息截图](/images/linux-user-info.png)

图 1：查看当前用户、用户组和新建用户信息。

![目录权限截图](/images/linux-permission.png)

图 2：查看网站部署目录的权限配置。

## 实验结果

完成了 Linux 用户查看、部署用户创建和网站目录权限配置，理解了权限管理在 Web 部署中的作用。
