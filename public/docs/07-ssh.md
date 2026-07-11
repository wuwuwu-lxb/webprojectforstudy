# 7. SSH 远程管理

## 实验目的

掌握 SSH 服务的启动、状态查看和远程登录方法，理解远程管理 Linux 服务器的基本流程。

## 主要步骤

### 步骤 1：安装 SSH 服务

```bash
sudo apt install openssh-server -y
```

### 步骤 2：启动 SSH 服务

```bash
sudo service ssh start
sudo service ssh status
```

### 步骤 3：查看 WSL2 Ubuntu IP 地址

```bash
hostname -I
```

### 步骤 4：从 Windows 连接 Linux 环境

```bash
ssh 用户名@WSL_IP地址
```

例如：

```bash
ssh webuser@172.xx.xx.xx
```

## 截图记录

![SSH 服务状态截图](/images/ssh-service-status.png)

图 1：查看 SSH 服务运行状态。

![SSH 登录成功截图](/images/ssh-login-success.png)

图 2：从 Windows 终端通过 SSH 登录 WSL2 Ubuntu。

## 实验结果

Windows 终端可以通过 SSH 连接 WSL2 Ubuntu，说明远程管理配置成功。
