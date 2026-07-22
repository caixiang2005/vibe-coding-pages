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

作品清单中的“在线预览”链接会直接打开对应页面或截图样例。

## GitHub Pages 发布

1. 将整个目录提交到 GitHub 仓库。
2. 进入仓库 `Settings` -> `Pages`。
3. 在 `Build and deployment` 中选择 `Deploy from a branch`。
4. 选择 `main` 分支和 `/root` 目录。
5. 保存后等待部署完成，即可通过 GitHub Pages 地址访问作品集。

## 作品清单

| # | 编号 | 项目名称 | slug | 入口 | 页面数 | 截图 | 在线预览 |
|---:|---|---|---|---|---:|---|---|
| 1 | EX-BWLT2603070017c | 河湖治理施工进度监控系统 | `river-lake-construction-progress-monitoring-system` | `项目原型/main.html` | 7 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/EX-BWLT2603070017c_%E6%B2%B3%E6%B9%96%E6%B2%BB%E7%90%86%E6%96%BD%E5%B7%A5%E8%BF%9B%E5%BA%A6%E7%9B%91%E6%8E%A7%E7%B3%BB%E7%BB%9F/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/main.html) |
| 2 | EX-BWLT2603070023c | 学生心理档案综合管理系统 | `student-psychological-archives-management-system` | `项目原型/index.html` | 11 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/EX-BWLT2603070023c_%E5%AD%A6%E7%94%9F%E5%BF%83%E7%90%86%E6%A1%A3%E6%A1%88%E7%BB%BC%E5%90%88%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/index.html) |
| 3 | EX-BWLT2603090004c | 短视频素材剪接合成制作管理平台 | `short-video-material-editing-production-platform` | `项目原型/dashboard.html` | 6 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/EX-BWLT2603090004c_%E7%9F%AD%E8%A7%86%E9%A2%91%E7%B4%A0%E6%9D%90%E5%89%AA%E6%8E%A5%E5%90%88%E6%88%90%E5%88%B6%E4%BD%9C%E7%AE%A1%E7%90%86%E5%B9%B3%E5%8F%B0/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/dashboard.html) |
| 4 | EX-BWLT2603090006c | 水利工程合同流程规范管理系统 | `water-conservancy-contract-process-compliance-system` | `项目原型/main.html` | 6 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/EX-BWLT2603090006c_%E6%B0%B4%E5%88%A9%E5%B7%A5%E7%A8%8B%E5%90%88%E5%90%8C%E6%B5%81%E7%A8%8B%E8%A7%84%E8%8C%83%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/main.html) |
| 5 | EX-BWLT2603090007c | 水利工程质量问题整改督办系统 | `water-conservancy-quality-rectification-supervision-system` | `项目原型/dashboard.html` | 6 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/EX-BWLT2603090007c_%E6%B0%B4%E5%88%A9%E5%B7%A5%E7%A8%8B%E8%B4%A8%E9%87%8F%E9%97%AE%E9%A2%98%E6%95%B4%E6%94%B9%E7%9D%A3%E5%8A%9E%E7%B3%BB%E7%BB%9F/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/dashboard.html) |
| 6 | EX-BWLT2603090008c | 水利项目质量验收审核软件 | `water-conservancy-project-quality-acceptance-review-software` | `项目原型/index.html` | 15 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/EX-BWLT2603090008c_%E6%B0%B4%E5%88%A9%E9%A1%B9%E7%9B%AE%E8%B4%A8%E9%87%8F%E9%AA%8C%E6%94%B6%E5%AE%A1%E6%A0%B8%E8%BD%AF%E4%BB%B6/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/index.html) |
| 7 | EX-BWLT2603110002c | 水利工程数字化勘测设计与建模软件 | `water-conservancy-digital-survey-design-modeling-software` | `项目原型/index.html` | 5 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/EX-BWLT2603110002c_%E6%B0%B4%E5%88%A9%E5%B7%A5%E7%A8%8B%E6%95%B0%E5%AD%97%E5%8C%96%E5%8B%98%E6%B5%8B%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%BB%BA%E6%A8%A1%E8%BD%AF%E4%BB%B6/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/index.html) |
| 8 | EX-BWLT2603110003c | 依托人工智能大模型的大学生就业指导服务平台 | `ai-college-student-career-guidance-platform` | `项目原型/home.html` | 15 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/EX-BWLT2603110003c_%E4%BE%9D%E6%89%98%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%A4%A7%E6%A8%A1%E5%9E%8B%E7%9A%84%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%B0%B1%E4%B8%9A%E6%8C%87%E5%AF%BC%E6%9C%8D%E5%8A%A1%E5%B9%B3%E5%8F%B0/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/home.html) |
| 9 | EX-BWLT2603120009c | 异常财务数据智能报警软件 | `abnormal-financial-data-intelligent-alert-software` | `main.html` | 6 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/EX-BWLT2603120009c_%E5%BC%82%E5%B8%B8%E8%B4%A2%E5%8A%A1%E6%95%B0%E6%8D%AE%E6%99%BA%E8%83%BD%E6%8A%A5%E8%AD%A6%E8%BD%AF%E4%BB%B6/main.html) |
| 10 | EX-BWLT2603120010c | 木质纤维素水热解聚能耗优化系统 | `lignocellulose-hydrothermal-depolymerization-energy-optimization-system` | `项目原型/index.html` | 6 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/EX-BWLT2603120010c_%E6%9C%A8%E8%B4%A8%E7%BA%A4%E7%BB%B4%E7%B4%A0%E6%B0%B4%E7%83%AD%E8%A7%A3%E8%81%9A%E8%83%BD%E8%80%97%E4%BC%98%E5%8C%96%E7%B3%BB%E7%BB%9F/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/index.html) |
| 11 | EX-BWLT2603130003c | 中职数学课程辅助学习软件 | `vocational-math-course-learning-assistant-software` | `项目原型/home.html` | 21 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/EX-BWLT2603130003c_%E4%B8%AD%E8%81%8C%E6%95%B0%E5%AD%A6%E8%AF%BE%E7%A8%8B%E8%BE%85%E5%8A%A9%E5%AD%A6%E4%B9%A0%E8%BD%AF%E4%BB%B6/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/home.html) |
| 12 | EX-BWLT2603130004c | 中职数学课堂成效综合评价系统 | `vocational-math-classroom-effectiveness-evaluation-system` | `项目原型/index.html` | 15 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/EX-BWLT2603130004c_%E4%B8%AD%E8%81%8C%E6%95%B0%E5%AD%A6%E8%AF%BE%E5%A0%82%E6%88%90%E6%95%88%E7%BB%BC%E5%90%88%E8%AF%84%E4%BB%B7%E7%B3%BB%E7%BB%9F/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/index.html) |
| 13 | EX-BWLT2603130006c | 工业机器人智能定位抓取控制系统 | `industrial-robot-intelligent-positioning-grasping-control-system` | `项目原型/main.html` | 8 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/EX-BWLT2603130006c_%E5%B7%A5%E4%B8%9A%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%99%BA%E8%83%BD%E5%AE%9A%E4%BD%8D%E6%8A%93%E5%8F%96%E6%8E%A7%E5%88%B6%E7%B3%BB%E7%BB%9F/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/main.html) |
| 14 | EX-BWLT2603130007c | 能源全域安全风险管控隐患排查治理平台 | `energy-safety-risk-hazard-management-platform` | `项目原型/main.html` | 7 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/EX-BWLT2603130007c_%E8%83%BD%E6%BA%90%E5%85%A8%E5%9F%9F%E5%AE%89%E5%85%A8%E9%A3%8E%E9%99%A9%E7%AE%A1%E6%8E%A7%E9%9A%90%E6%82%A3%E6%8E%92%E6%9F%A5%E6%B2%BB%E7%90%86%E5%B9%B3%E5%8F%B0/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/main.html) |
| 15 | EX-BWLT2603140027c | 金融市场风险监测数据研判分析软件 | `financial-market-risk-monitoring-analysis-software` | `项目原型/index.html` | 10 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/EX-BWLT2603140027c_%E9%87%91%E8%9E%8D%E5%B8%82%E5%9C%BA%E9%A3%8E%E9%99%A9%E7%9B%91%E6%B5%8B%E6%95%B0%E6%8D%AE%E7%A0%94%E5%88%A4%E5%88%86%E6%9E%90%E8%BD%AF%E4%BB%B6/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/index.html) |
| 16 | EX-BWLT2603140035c | 舞蹈精品剧目资料学习软件 | `dance-repertoire-learning-resource-software` | `项目原型/index.html` | 14 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/EX-BWLT2603140035c_%E8%88%9E%E8%B9%88%E7%B2%BE%E5%93%81%E5%89%A7%E7%9B%AE%E8%B5%84%E6%96%99%E5%AD%A6%E4%B9%A0%E8%BD%AF%E4%BB%B6/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/index.html) |
| 17 | EX-BWLT2603160003 | 临床服务质量监督系统 | `clinical-service-quality-supervision-system` | `index.html` | 7 | 是 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/EX-BWLT2603160003_%E4%B8%B4%E5%BA%8A%E6%9C%8D%E5%8A%A1%E8%B4%A8%E9%87%8F%E7%9B%91%E7%9D%A3%E7%B3%BB%E7%BB%9F/index.html) |
| 18 | EX-BWLT2603160004 | 临床科研数据中心系统 | `clinical-research-data-center-system` | `index.html` | 6 | 是 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/EX-BWLT2603160004_%E4%B8%B4%E5%BA%8A%E7%A7%91%E7%A0%94%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E7%B3%BB%E7%BB%9F/index.html) |
| 19 | EX-BWLT2603160005 | 健康档案综合管理系统 | `health-records-integrated-management-system` | `项目原型/dashboard.html` | 26 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/EX-BWLT2603160005_%E5%81%A5%E5%BA%B7%E6%A1%A3%E6%A1%88%E7%BB%BC%E5%90%88%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/dashboard.html) |
| 20 | EX-BWLT2603170004 | 佳晔新能源物联网终端管控系统 | `jiaye-new-energy-iot-terminal-management-system` | `index.html` | 8 | 是 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/EX-BWLT2603170004_%E4%BD%B3%E6%99%94%E6%96%B0%E8%83%BD%E6%BA%90%E7%89%A9%E8%81%94%E7%BD%91%E7%BB%88%E7%AB%AF%E7%AE%A1%E6%8E%A7%E7%B3%BB%E7%BB%9F/index.html) |
| 21 | EX-BWLT2603170011 | 车辆行驶轨迹分析系统 | `vehicle-trajectory-analysis-system` | `index.html` | 8 | 是 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/EX-BWLT2603170011_%E8%BD%A6%E8%BE%86%E8%A1%8C%E9%A9%B6%E8%BD%A8%E8%BF%B9%E5%88%86%E6%9E%90%E7%B3%BB%E7%BB%9F/index.html) |
| 22 | REF-E | E参考 | `e-reference` | `项目原型/index.html` | 7 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/E%E5%8F%82%E8%80%83/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/index.html) |
| 23 | REF-E-2 | E参考 (2) | `e-reference-2` | `项目原型/main.html` | 5 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/E%E5%8F%82%E8%80%83%20(2)/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/main.html) |
| 24 | NBZEX-BWLT2603020010 | 软件开发项目需求梳理分析系统 | `software-requirements-analysis-system` | `项目原型/index.html` | 8 | 是 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/NBZEX-BWLT2603020010_%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91%E9%A1%B9%E7%9B%AE%E9%9C%80%E6%B1%82%E6%A2%B3%E7%90%86%E5%88%86%E6%9E%90%E7%B3%BB%E7%BB%9F/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/index.html) |
| 25 | NBZEX-BWLT2603070011c | 自动驾驶决策方案安全校验辅助软件 | `autonomous-driving-decision-safety-validation-software` | `项目原型/index.html` | 6 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/NBZEX-BWLT2603070011c_%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B6%E5%86%B3%E7%AD%96%E6%96%B9%E6%A1%88%E5%AE%89%E5%85%A8%E6%A0%A1%E9%AA%8C%E8%BE%85%E5%8A%A9%E8%BD%AF%E4%BB%B6/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/index.html) |
| 26 | NBZEX-BWLT2603090003 | 安全主题宣传活动统筹管理系统 | `safety-campaign-coordination-management-system` | `项目原型/main.html` | 7 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/NBZEX-BWLT2603090003_%E5%AE%89%E5%85%A8%E4%B8%BB%E9%A2%98%E5%AE%A3%E4%BC%A0%E6%B4%BB%E5%8A%A8%E7%BB%9F%E7%AD%B9%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/main.html) |
| 27 | NBZEX-BWLT2603110008 | 智能普法多人联机互动学习系统 | `intelligent-legal-education-multiplayer-learning-system` | `项目原型/main.html` | 6 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/NBZEX-BWLT2603110008_%E6%99%BA%E8%83%BD%E6%99%AE%E6%B3%95%E5%A4%9A%E4%BA%BA%E8%81%94%E6%9C%BA%E4%BA%92%E5%8A%A8%E5%AD%A6%E4%B9%A0%E7%B3%BB%E7%BB%9F/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/main.html) |
| 28 | NBZEX-BWLT2603110009 | 云端VR多人协作作业实训平台 | `cloud-vr-collaborative-training-platform` | `项目原型/index.html` | 14 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/NBZEX-BWLT2603110009_%E4%BA%91%E7%AB%AFVR%E5%A4%9A%E4%BA%BA%E5%8D%8F%E4%BD%9C%E4%BD%9C%E4%B8%9A%E5%AE%9E%E8%AE%AD%E5%B9%B3%E5%8F%B0/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/index.html) |
| 29 | NBZEX-BWLT2603120011 | 家电产品数字化设计与仿真分析软件 | `home-appliance-digital-design-simulation-software` | `main.html` | 9 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/NBZEX-BWLT2603120011_%E5%AE%B6%E7%94%B5%E4%BA%A7%E5%93%81%E6%95%B0%E5%AD%97%E5%8C%96%E8%AE%BE%E8%AE%A1%E4%B8%8E%E4%BB%BF%E7%9C%9F%E5%88%86%E6%9E%90%E8%BD%AF%E4%BB%B6/main.html) |
| 30 | NBZEX-BWLT2603120012 | 智能计量大数据存储与分布式计算平台 | `smart-metering-big-data-storage-distributed-computing-platform` | `项目原型/dashboard.html` | 5 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/NBZEX-BWLT2603120012_%E6%99%BA%E8%83%BD%E8%AE%A1%E9%87%8F%E5%A4%A7%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A8%E4%B8%8E%E5%88%86%E5%B8%83%E5%BC%8F%E8%AE%A1%E7%AE%97%E5%B9%B3%E5%8F%B0/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/dashboard.html) |
| 31 | NBZEX-BWLT2603120014 | 在线食品仓储库存动态调配管理系统 | `online-food-warehouse-inventory-dispatch-system` | `项目原型/dashboard.html` | 6 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/NBZEX-BWLT2603120014_%E5%9C%A8%E7%BA%BF%E9%A3%9F%E5%93%81%E4%BB%93%E5%82%A8%E5%BA%93%E5%AD%98%E5%8A%A8%E6%80%81%E8%B0%83%E9%85%8D%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/dashboard.html) |
| 32 | NBZEX-BWLT2603130005c | 流域水资源供需结构分析计算软件 | `basin-water-resource-supply-demand-analysis-software` | `项目原型/main.html` | 7 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/NBZEX-BWLT2603130005c_%E6%B5%81%E5%9F%9F%E6%B0%B4%E8%B5%84%E6%BA%90%E4%BE%9B%E9%9C%80%E7%BB%93%E6%9E%84%E5%88%86%E6%9E%90%E8%AE%A1%E7%AE%97%E8%BD%AF%E4%BB%B6/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/main.html) |
| 33 | NBZEX-BWLT2603140028c | 桥梁支座健康评估与维护管理软件 | `bridge-bearing-health-assessment-maintenance-software` | `项目原型/main.html` | 6 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/NBZEX-BWLT2603140028c_%E6%A1%A5%E6%A2%81%E6%94%AF%E5%BA%A7%E5%81%A5%E5%BA%B7%E8%AF%84%E4%BC%B0%E4%B8%8E%E7%BB%B4%E6%8A%A4%E7%AE%A1%E7%90%86%E8%BD%AF%E4%BB%B6/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/main.html) |
| 34 | NBZEX-BWLT2603160002c | 交易履约流程结算系统 | `transaction-fulfillment-settlement-system` | `index.html` | 7 | 是 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/NBZEX-BWLT2603160002c_%E4%BA%A4%E6%98%93%E5%B1%A5%E7%BA%A6%E6%B5%81%E7%A8%8B%E7%BB%93%E7%AE%97%E7%B3%BB%E7%BB%9F/index.html) |
| 35 | NBZEX-BWLT2603160007c | 气象水文旱情雨情采集监测系统 | `meteorological-hydrological-drought-rainfall-monitoring-system` | `项目原型/dashboard.html` | 27 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/NBZEX-BWLT2603160007c_%E6%B0%94%E8%B1%A1%E6%B0%B4%E6%96%87%E6%97%B1%E6%83%85%E9%9B%A8%E6%83%85%E9%87%87%E9%9B%86%E7%9B%91%E6%B5%8B%E7%B3%BB%E7%BB%9F/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/dashboard.html) |
| 36 | NBZEX-BWLT2603160011 | 建筑装饰工程进度智能调度系统 | `building-decoration-progress-intelligent-scheduling-system` | `项目原型/dashboard.html` | 8 | 否 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/NBZEX-BWLT2603160011_%E5%BB%BA%E7%AD%91%E8%A3%85%E9%A5%B0%E5%B7%A5%E7%A8%8B%E8%BF%9B%E5%BA%A6%E6%99%BA%E8%83%BD%E8%B0%83%E5%BA%A6%E7%B3%BB%E7%BB%9F/%E9%A1%B9%E7%9B%AE%E5%8E%9F%E5%9E%8B/dashboard.html) |
| 37 | NBZEX-BWLT2603170008c | 水工结构渗漏趋势监测预警软件 | `hydraulic-structure-leakage-trend-monitoring-warning-software` | `index.html` | 12 | 是 | [打开](https://caixiang2005.github.io/vibe-coding-pages/pages/NBZEX-BWLT2603170008c_%E6%B0%B4%E5%B7%A5%E7%BB%93%E6%9E%84%E6%B8%97%E6%BC%8F%E8%B6%8B%E5%8A%BF%E7%9B%91%E6%B5%8B%E9%A2%84%E8%AD%A6%E8%BD%AF%E4%BB%B6/index.html) |
| 38 | SAMPLE-001 | 短视频素材剪接合成界面样例 | `short-video-editing-interface-sample` | `short-video-editing-sample.png` | 1 | 是 | [打开](https://caixiang2005.github.io/vibe-coding-pages/assets/supplemental-samples/short-video-editing-sample.png) |
| 39 | SAMPLE-002 | 水利工程合同流程规范管理界面样例 | `water-contract-process-dashboard-sample` | `water-contract-dashboard-sample.png` | 1 | 是 | [打开](https://caixiang2005.github.io/vibe-coding-pages/assets/supplemental-samples/water-contract-dashboard-sample.png) |
