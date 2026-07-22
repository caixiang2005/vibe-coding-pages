# Vibe Coding 页面作品集

这是我个人通过 Vibe Coding 方式整理和生成的一组项目前端样式作品集，主要用于展示不同业务系统的页面视觉、信息布局和交互原型。根目录的 `index.html` 是总览页，每个卡片都会跳转到对应作品入口或补充截图样例，适合直接放到 GitHub 并启用 GitHub Pages 展示。

## 项目内容

- 收录 39 个个人 Vibe Coding 前端样式作品与补充样例，包含业务系统原型、后台管理界面、数据分析平台等类型。
- 为每个作品补充规范化英文 `slug`，避免只依赖原始中文长目录名进行检索。
- 保留原始目录和页面文件，不破坏现有作品内部的相对资源引用。
- 新增统一首页、搜索筛选、页面数量统计、截图目录标识和 GitHub 展示文档。

## 界面展示

![短视频素材剪接合成界面样例](assets/supplemental-samples/short-video-editing-sample.png)

![水利工程合同流程规范管理界面样例](assets/supplemental-samples/water-contract-dashboard-sample.png)

## 目录结构

```text
.
├── index.html                # 统一作品入口页
├── README.md                 # GitHub 项目说明文档
├── assets/
│   ├── app.js                # 作品元数据、搜索与渲染逻辑
│   ├── styles.css            # 首页视觉样式
│   └── supplemental-samples/ # 补充截图样例
└── pages/                    # 原始页面作品目录
    ├── EX-BWLT.../
    └── NBZEX-BWLT.../
```

## 本地预览

方式一：直接双击根目录 `index.html` 打开。

方式二：使用本地静态服务预览：

```bash
python -m http.server 8080
```

然后访问：

```text
http://localhost:8080/
```

## 在线预览

项目发布后可以通过 GitHub Pages 直接访问：

[打开作品集首页](https://caixiang2005.github.io/vibe-coding-pages/)

## GitHub Pages 发布

1. 将整个目录提交到 GitHub 仓库。
2. 进入仓库 `Settings` -> `Pages`。
3. 在 `Build and deployment` 中选择 `Deploy from a branch`。
4. 选择 `main` 分支和 `/root` 目录。
5. 保存后等待部署完成，即可通过 GitHub Pages 地址访问作品集。
