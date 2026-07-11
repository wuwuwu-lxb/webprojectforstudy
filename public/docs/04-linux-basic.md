# 4. Linux 基本操作

## 实验目的

熟悉 Linux 命令行中的文件导航、目录管理、软件包安装和服务查看等基础操作。
本步骤记录 Linux 基本命令，并根据发行版选择 apt 或 pacman 安装软件。

## 常用命令

| 命令 | 作用 |
|---|---|
| pwd | 查看当前目录 |
| ls | 查看目录内容 |
| cd | 切换目录 |
| mkdir | 创建目录 |
| cp | 复制文件 |
| mv | 移动或重命名文件 |
| rm | 删除文件 |
| sudo apt install / sudo pacman -S | 安装软件包 |

## 主要步骤

### 步骤 1：查看当前目录

```bash
pwd
ls -la
```

### 步骤 2：创建网站部署目录

```bash
sudo mkdir -p /var/www/software-site
ls -ld /var/www/software-site
```

### 步骤 3：安装基础工具

Ubuntu / Debian：

```bash
sudo apt update
sudo apt install git curl vim nginx openssh-server -y
```

Arch Linux：

```bash
sudo pacman -Syu
sudo pacman -S git curl vim nginx openssh
```

## 截图记录

![e858503a39dbaba0dc794b467de13813](/images/e858503a39dbaba0dc794b467de13813.png)

图 1：执行目录查看和文件管理命令。

![fdc579c76a43a2e0f0310be2da9cfc0b](/images/fdc579c76a43a2e0f0310be2da9cfc0b.png)

图 2：使用 pacman 安装基础工具。

## 实验结果

能够使用 Linux 命令完成目录查看、文件操作和软件安装，为后续部署提供基础。
