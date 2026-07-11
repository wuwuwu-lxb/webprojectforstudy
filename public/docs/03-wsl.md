# 3. WSL2 Arch 安装

## 实验目的

使用 WSL2 安装 Arch，模拟 Linux Web 服务器环境，为后续 Linux 配置、SSH 管理和 Nginx 部署做准备。

## 主要步骤

### 步骤 1：检查 WSL 状态

在 Windows PowerShell 中执行：

```bash
wsl --status
```

### 步骤 2：安装 WSL2 和 Arch

```bash
wsl --install
wsl --install -d Arch
```

首次启动 Arch 时，需要设置 Linux 用户名和密码。

### 步骤 3：确认 Arch 使用 WSL2

```bash
wsl -l -v
```

如果 arch 显示 VERSION 为 2，说明当前发行版运行在 WSL2 环境中。

## 截图记录

![89cf02686a621b8c148c169564d6f7c9](/images/89cf02686a621b8c148c169564d6f7c9.png)

图 1：查看 WSL 版本和 arch 运行状态。


图 2：arch 终端正常进入。

![ba04369689f763ab0e3fc8af8e5eeebe](/images/ba04369689f763ab0e3fc8af8e5eeebe.png)
## 实验结果

arch 已成功运行在 WSL2 中，可以作为本实验的 Linux 虚拟服务器环境。
