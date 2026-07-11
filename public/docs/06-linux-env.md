# 6. Linux 环境配置

## 实验目的

了解 Linux 用户环境配置文件的作用，并通过配置环境变量记录当前项目名称。

## 配置文件说明

| 文件 | 作用 | 生效范围 |
|---|---|---|
| ~/.bashrc | 用户级 Shell 配置 | 当前用户 |
| /etc/profile | 系统级环境配置 | 所有用户 |

## 主要步骤

### 步骤 1：写入项目环境变量

```bash
echo 'export SITE_NAME="software-tools-site"' >> ~/.bashrc
```

### 步骤 2：让配置生效

```bash
source ~/.bashrc
```

### 步骤 3：查看环境变量

```bash
echo $SITE_NAME
```

## 截图记录

![21514cb78c244f041c8e6c8d6228e507](/images/21514cb78c244f041c8e6c8d6228e507.png)
图 1：向 ~/.bashrc 写入项目环境变量，并读取环境变量 SITE_NAME 的值。

## 实验结果

成功通过 ~/.bashrc 配置用户级环境变量，并在终端中读取变量值。
