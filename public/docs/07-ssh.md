# 7. SSH 远程管理

## 实验目的

掌握 SSH 服务的启动、状态查看和远程登录方法，理解远程管理 Linux 服务器的基本流程。

## 主要步骤

### 步骤 1：安装 SSH 服务

```bash
# 安装 openssh
sudo pacman -S openssh
```

### 步骤 2：启动 SSH 服务

```
# 启动 sshd
sudo /usr/sbin/sshd

# 或者使用 systemd
sudo systemctl start sshd
sudo systemctl enable sshd
```

### 步骤 3：查看 WSL2 Arch IP 地址

```
# 在 Arch WSL2 中执行
ip addr show eth0 | grep "inet\b" | awk '{print $2}' | cut -d/ -f1
```

### 步骤 4：从 Windows 连接 Linux 环境

```bash
ssh -p 2222 用户名@172.26.58.193
```

## 截图记录
![ad57c4857d2b2421e58bc162e15e6f00](/images/ad57c4857d2b2421e58bc162e15e6f00.png)
图 1：查看 SSH 服务运行状态。


图 2：从 Windows 终端通过 SSH 登录 WSL2 Arch。
![Pasted image 20260711231212](/images/Pasted%20image%2020260711231212.png)
## 实验结果

Windows 终端可以通过 SSH 连接 WSL2  Arch，说明远程管理配置成功。
