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
├── EX-BWLT.../               # 原始作品目录
└── NBZEX-BWLT.../            # 原始作品目录
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

## GitHub Pages 发布

1. 将整个目录提交到 GitHub 仓库。
2. 进入仓库 `Settings` -> `Pages`。
3. 在 `Build and deployment` 中选择 `Deploy from a branch`。
4. 选择 `main` 分支和 `/root` 目录。
5. 保存后等待部署完成，即可通过 GitHub Pages 地址访问作品集。

## 作品清单

| # | 编号 | 项目名称 | slug | 入口 | 页面数 | 截图 |
|---:|---|---|---|---|---:|---|
| 1 | EX-BWLT2603070017c | 河湖治理施工进度监控系统 | `river-lake-construction-progress-monitoring-system` | `项目原型/main.html` | 7 | 否 |
| 2 | EX-BWLT2603070023c | 学生心理档案综合管理系统 | `student-psychological-archives-management-system` | `项目原型/index.html` | 11 | 否 |
| 3 | EX-BWLT2603090004c | 短视频素材剪接合成制作管理平台 | `short-video-material-editing-production-platform` | `项目原型/dashboard.html` | 6 | 否 |
| 4 | EX-BWLT2603090006c | 水利工程合同流程规范管理系统 | `water-conservancy-contract-process-compliance-system` | `项目原型/main.html` | 6 | 否 |
| 5 | EX-BWLT2603090007c | 水利工程质量问题整改督办系统 | `water-conservancy-quality-rectification-supervision-system` | `项目原型/dashboard.html` | 6 | 否 |
| 6 | EX-BWLT2603090008c | 水利项目质量验收审核软件 | `water-conservancy-project-quality-acceptance-review-software` | `项目原型/index.html` | 15 | 否 |
| 7 | EX-BWLT2603110002c | 水利工程数字化勘测设计与建模软件 | `water-conservancy-digital-survey-design-modeling-software` | `项目原型/index.html` | 5 | 否 |
| 8 | EX-BWLT2603110003c | 依托人工智能大模型的大学生就业指导服务平台 | `ai-college-student-career-guidance-platform` | `项目原型/home.html` | 15 | 否 |
| 9 | EX-BWLT2603120009c | 异常财务数据智能报警软件 | `abnormal-financial-data-intelligent-alert-software` | `main.html` | 6 | 否 |
| 10 | EX-BWLT2603120010c | 木质纤维素水热解聚能耗优化系统 | `lignocellulose-hydrothermal-depolymerization-energy-optimization-system` | `项目原型/index.html` | 6 | 否 |
| 11 | EX-BWLT2603130003c | 中职数学课程辅助学习软件 | `vocational-math-course-learning-assistant-software` | `项目原型/home.html` | 21 | 否 |
| 12 | EX-BWLT2603130004c | 中职数学课堂成效综合评价系统 | `vocational-math-classroom-effectiveness-evaluation-system` | `项目原型/index.html` | 15 | 否 |
| 13 | EX-BWLT2603130006c | 工业机器人智能定位抓取控制系统 | `industrial-robot-intelligent-positioning-grasping-control-system` | `项目原型/main.html` | 8 | 否 |
| 14 | EX-BWLT2603130007c | 能源全域安全风险管控隐患排查治理平台 | `energy-safety-risk-hazard-management-platform` | `项目原型/main.html` | 7 | 否 |
| 15 | EX-BWLT2603140027c | 金融市场风险监测数据研判分析软件 | `financial-market-risk-monitoring-analysis-software` | `项目原型/index.html` | 10 | 否 |
| 16 | EX-BWLT2603140035c | 舞蹈精品剧目资料学习软件 | `dance-repertoire-learning-resource-software` | `项目原型/index.html` | 14 | 否 |
| 17 | EX-BWLT2603160003 | 临床服务质量监督系统 | `clinical-service-quality-supervision-system` | `index.html` | 7 | 是 |
| 18 | EX-BWLT2603160004 | 临床科研数据中心系统 | `clinical-research-data-center-system` | `index.html` | 6 | 是 |
| 19 | EX-BWLT2603160005 | 健康档案综合管理系统 | `health-records-integrated-management-system` | `项目原型/dashboard.html` | 26 | 否 |
| 20 | EX-BWLT2603170004 | 佳晔新能源物联网终端管控系统 | `jiaye-new-energy-iot-terminal-management-system` | `index.html` | 8 | 是 |
| 21 | EX-BWLT2603170011 | 车辆行驶轨迹分析系统 | `vehicle-trajectory-analysis-system` | `index.html` | 8 | 是 |
| 22 | REF-E | E参考 | `e-reference` | `项目原型/index.html` | 7 | 否 |
| 23 | REF-E-2 | E参考 (2) | `e-reference-2` | `项目原型/main.html` | 5 | 否 |
| 24 | NBZEX-BWLT2603020010 | 软件开发项目需求梳理分析系统 | `software-requirements-analysis-system` | `项目原型/index.html` | 8 | 是 |
| 25 | NBZEX-BWLT2603070011c | 自动驾驶决策方案安全校验辅助软件 | `autonomous-driving-decision-safety-validation-software` | `项目原型/index.html` | 6 | 否 |
| 26 | NBZEX-BWLT2603090003 | 安全主题宣传活动统筹管理系统 | `safety-campaign-coordination-management-system` | `项目原型/main.html` | 7 | 否 |
| 27 | NBZEX-BWLT2603110008 | 智能普法多人联机互动学习系统 | `intelligent-legal-education-multiplayer-learning-system` | `项目原型/main.html` | 6 | 否 |
| 28 | NBZEX-BWLT2603110009 | 云端VR多人协作作业实训平台 | `cloud-vr-collaborative-training-platform` | `项目原型/index.html` | 14 | 否 |
| 29 | NBZEX-BWLT2603120011 | 家电产品数字化设计与仿真分析软件 | `home-appliance-digital-design-simulation-software` | `main.html` | 9 | 否 |
| 30 | NBZEX-BWLT2603120012 | 智能计量大数据存储与分布式计算平台 | `smart-metering-big-data-storage-distributed-computing-platform` | `项目原型/dashboard.html` | 5 | 否 |
| 31 | NBZEX-BWLT2603120014 | 在线食品仓储库存动态调配管理系统 | `online-food-warehouse-inventory-dispatch-system` | `项目原型/dashboard.html` | 6 | 否 |
| 32 | NBZEX-BWLT2603130005c | 流域水资源供需结构分析计算软件 | `basin-water-resource-supply-demand-analysis-software` | `项目原型/main.html` | 7 | 否 |
| 33 | NBZEX-BWLT2603140028c | 桥梁支座健康评估与维护管理软件 | `bridge-bearing-health-assessment-maintenance-software` | `项目原型/main.html` | 6 | 否 |
| 34 | NBZEX-BWLT2603160002c | 交易履约流程结算系统 | `transaction-fulfillment-settlement-system` | `index.html` | 7 | 是 |
| 35 | NBZEX-BWLT2603160007c | 气象水文旱情雨情采集监测系统 | `meteorological-hydrological-drought-rainfall-monitoring-system` | `项目原型/dashboard.html` | 27 | 否 |
| 36 | NBZEX-BWLT2603160011 | 建筑装饰工程进度智能调度系统 | `building-decoration-progress-intelligent-scheduling-system` | `项目原型/dashboard.html` | 8 | 否 |
| 37 | NBZEX-BWLT2603170008c | 水工结构渗漏趋势监测预警软件 | `hydraulic-structure-leakage-trend-monitoring-warning-software` | `index.html` | 12 | 是 |
| 38 | SAMPLE-001 | 短视频素材剪接合成界面样例 | `short-video-editing-interface-sample` | `assets/supplemental-samples/short-video-editing-sample.png` | 1 | 是 |
| 39 | SAMPLE-002 | 水利工程合同流程规范管理界面样例 | `water-contract-process-dashboard-sample` | `assets/supplemental-samples/water-contract-dashboard-sample.png` | 1 | 是 |
