# 2. 代码编辑与管理

## 实验目的

掌握使用 VS Code 编辑项目文件，并通过 Git 管理项目版本、提交记录和远端仓库。

## 主要步骤

### 步骤 1：初始化 Git 仓库

```bash
git init
```

### 步骤 2：配置 Git 用户信息

```bash
git config user.name "wuwuwu-lxb"
git config user.email "wuwuwu-lxb@users.noreply.github.com"
```

### 步骤 3：提交项目代码

```bash
git add .
git commit -m "初始化实验报告文档站"
```

### 步骤 4：关联 GitHub 远端仓库

```bash
git remote add origin https://github.com/wuwuwu-lxb/webprojectforstudy.git
git branch -M main
git push -u origin main
```

## 截图记录

![6cd87969347d4e0a7cb111ec5792fd3b](/images/6cd87969347d4e0a7cb111ec5792fd3b.png)
图 1：查看 Git 工作区状态。

![0d2bb8c66c786222b4ea9ebc9d0711d7](/images/0d2bb8c66c786222b4ea9ebc9d0711d7.png)
图 2：项目代码推送到 GitHub 远端仓库。

## 实验结果

项目代码已纳入 Git 管理，并推送到 GitHub 远端仓库，便于团队协作和项目提交。
