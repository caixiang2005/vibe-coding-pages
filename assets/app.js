const projects = [
  { code: "EX-BWLT2603070017c", name: "河湖治理施工进度监控系统", slug: "river-lake-construction-progress-monitoring-system", folder: "pages/EX-BWLT2603070017c_河湖治理施工进度监控系统", entry: "项目原型/main.html", pages: 7, screenshots: false, modules: ["工作台", "工程管理", "工程详情", "施工任务", "工期计划", "统计分析"] },
  { code: "EX-BWLT2603070023c", name: "学生心理档案综合管理系统", slug: "student-psychological-archives-management-system", folder: "pages/EX-BWLT2603070023c_学生心理档案综合管理系统", entry: "项目原型/index.html", pages: 11, screenshots: false, modules: ["学生档案", "心理测评", "咨询预约", "危机预警", "团体活动", "登录"] },
  { code: "EX-BWLT2603090004c", name: "短视频素材剪接合成制作管理平台", slug: "short-video-material-editing-production-platform", folder: "pages/EX-BWLT2603090004c_短视频素材剪接合成制作管理平台", entry: "项目原型/dashboard.html", pages: 6, screenshots: false, modules: ["仪表盘", "素材库", "项目管理", "导出管理", "用户管理", "系统设置"] },
  { code: "EX-BWLT2603090006c", name: "水利工程合同流程规范管理系统", slug: "water-conservancy-contract-process-compliance-system", folder: "pages/EX-BWLT2603090006c_水利工程合同流程规范管理系统", entry: "项目原型/main.html", pages: 6, screenshots: false, modules: ["控制台", "合同管理", "流程审批", "规范法规", "统计报表", "系统设置"] },
  { code: "EX-BWLT2603090007c", name: "水利工程质量问题整改督办系统", slug: "water-conservancy-quality-rectification-supervision-system", folder: "pages/EX-BWLT2603090007c_水利工程质量问题整改督办系统", entry: "项目原型/dashboard.html", pages: 6, screenshots: false, modules: ["综合态势", "任务指派", "整改跟踪", "质量统计", "项目分布", "系统安全"] },
  { code: "EX-BWLT2603090008c", name: "水利项目质量验收审核软件", slug: "water-conservancy-project-quality-acceptance-review-software", folder: "pages/EX-BWLT2603090008c_水利项目质量验收审核软件", entry: "项目原型/index.html", pages: 15, screenshots: false, modules: ["控制台", "验收", "图表", "物联监测", "问题整改", "报告", "规范"] },
  { code: "EX-BWLT2603110002c", name: "水利工程数字化勘测设计与建模软件", slug: "water-conservancy-digital-survey-design-modeling-software", folder: "pages/EX-BWLT2603110002c_水利工程数字化勘测设计与建模软件", entry: "项目原型/index.html", pages: 5, screenshots: false, modules: ["勘测方案", "点云质检", "水文分析", "成果归档", "首页"] },
  { code: "EX-BWLT2603110003c", name: "依托人工智能大模型的大学生就业指导服务平台", slug: "ai-college-student-career-guidance-platform", folder: "pages/EX-BWLT2603110003c_依托人工智能大模型的大学生就业指导服务平台", entry: "项目原型/home.html", pages: 15, screenshots: false, modules: ["首页", "AI助手", "职业规划", "职位", "求职状态", "简历优化", "模拟面试"] },
  { code: "EX-BWLT2603120009c", name: "异常财务数据智能报警软件", slug: "abnormal-financial-data-intelligent-alert-software", folder: "pages/EX-BWLT2603120009c_异常财务数据智能报警软件", entry: "main.html", pages: 6, screenshots: false, modules: ["数据监控", "异常报警", "数据可视化", "历史记录", "参数设置", "仪表盘"] },
  { code: "EX-BWLT2603120010c", name: "木质纤维素水热解聚能耗优化系统", slug: "lignocellulose-hydrothermal-depolymerization-energy-optimization-system", folder: "pages/EX-BWLT2603120010c_木质纤维素水热解聚能耗优化系统", entry: "项目原型/index.html", pages: 6, screenshots: false, modules: ["生产概览", "工艺参数", "实时监控", "能耗优化", "历史数据", "登录"] },
  { code: "EX-BWLT2603130003c", name: "中职数学课程辅助学习软件", slug: "vocational-math-course-learning-assistant-software", folder: "pages/EX-BWLT2603130003c_中职数学课程辅助学习软件", entry: "项目原型/home.html", pages: 21, screenshots: false, modules: ["首页", "课程列表", "课程详情", "练习", "错题", "公式", "考试"] },
  { code: "EX-BWLT2603130004c", name: "中职数学课堂成效综合评价系统", slug: "vocational-math-classroom-effectiveness-evaluation-system", folder: "pages/EX-BWLT2603130004c_中职数学课堂成效综合评价系统", entry: "项目原型/index.html", pages: 15, screenshots: false, modules: ["评价首页", "课堂管理", "评价表", "问卷", "分析", "报告", "学生成绩"] },
  { code: "EX-BWLT2603130006c", name: "工业机器人智能定位抓取控制系统", slug: "industrial-robot-intelligent-positioning-grasping-control-system", folder: "pages/EX-BWLT2603130006c_工业机器人智能定位抓取控制系统", entry: "项目原型/main.html", pages: 8, screenshots: false, modules: ["主控台", "视觉定位", "抓取控制", "任务管理", "统计", "维护", "报警"] },
  { code: "EX-BWLT2603130007c", name: "能源全域安全风险管控隐患排查治理平台", slug: "energy-safety-risk-hazard-management-platform", folder: "pages/EX-BWLT2603130007c_能源全域安全风险管控隐患排查治理平台", entry: "项目原型/main.html", pages: 7, screenshots: false, modules: ["风险评估", "风险管控", "隐患登记", "整改跟踪", "风险巡检", "统计"] },
  { code: "EX-BWLT2603140027c", name: "金融市场风险监测数据研判分析软件", slug: "financial-market-risk-monitoring-analysis-software", folder: "pages/EX-BWLT2603140027c_金融市场风险监测数据研判分析软件", entry: "项目原型/index.html", pages: 10, screenshots: false, modules: ["首页", "仪表盘", "市场风险", "信用风险", "流动性风险", "压力测试", "VaR"] },
  { code: "EX-BWLT2603140035c", name: "舞蹈精品剧目资料学习软件", slug: "dance-repertoire-learning-resource-software", folder: "pages/EX-BWLT2603140035c_舞蹈精品剧目资料学习软件", entry: "项目原型/index.html", pages: 14, screenshots: false, modules: ["首页", "剧目", "分类", "详情", "播放器", "学习", "收藏", "考试"] },
  { code: "EX-BWLT2603160003", name: "临床服务质量监督系统", slug: "clinical-service-quality-supervision-system", folder: "pages/EX-BWLT2603160003_临床服务质量监督系统", entry: "index.html", pages: 7, screenshots: true, modules: ["首页", "巡检", "投诉", "整改", "绩效", "统计", "设置"] },
  { code: "EX-BWLT2603160004", name: "临床科研数据中心系统", slug: "clinical-research-data-center-system", folder: "pages/EX-BWLT2603160004_临床科研数据中心系统", entry: "index.html", pages: 6, screenshots: true, modules: ["首页", "项目管理", "数据采集", "质量控制", "统计", "系统设置"] },
  { code: "EX-BWLT2603160005", name: "健康档案综合管理系统", slug: "health-records-integrated-management-system", folder: "pages/EX-BWLT2603160005_健康档案综合管理系统", entry: "项目原型/dashboard.html", pages: 26, screenshots: false, modules: ["健康档案", "居民记录", "慢病管理", "随访", "体检", "统计", "系统设置"] },
  { code: "EX-BWLT2603170004", name: "佳晔新能源物联网终端管控系统", slug: "jiaye-new-energy-iot-terminal-management-system", folder: "pages/EX-BWLT2603170004_佳晔新能源物联网终端管控系统", entry: "index.html", pages: 8, screenshots: true, modules: ["首页", "设备登记", "告警中心", "数据报表", "用户管理", "角色权限", "系统日志"] },
  { code: "EX-BWLT2603170011", name: "车辆行驶轨迹分析系统", slug: "vehicle-trajectory-analysis-system", folder: "pages/EX-BWLT2603170011_车辆行驶轨迹分析系统", entry: "index.html", pages: 8, screenshots: true, modules: ["首页", "车辆", "驾驶员", "行程", "围栏", "告警", "统计", "设置"] },
  { code: "REF-E", name: "E参考", slug: "e-reference", folder: "pages/E参考", entry: "项目原型/index.html", pages: 7, screenshots: false, modules: ["首页", "登录", "设备", "监控", "报警", "效率", "报表"] },
  { code: "REF-E-2", name: "E参考 (2)", slug: "e-reference-2", folder: "pages/E参考 (2)", entry: "项目原型/main.html", pages: 5, screenshots: false, modules: ["主页面", "任务分配", "部门", "历史", "设置"] },
  { code: "NBZEX-BWLT2603020010", name: "软件开发项目需求梳理分析系统", slug: "software-requirements-analysis-system", folder: "pages/NBZEX-BWLT2603020010_软件开发项目需求梳理分析系统", entry: "项目原型/index.html", pages: 8, screenshots: true, modules: ["登录", "项目管理", "项目详情", "需求分析", "协作", "流程建模", "思维导图"] },
  { code: "NBZEX-BWLT2603070011c", name: "自动驾驶决策方案安全校验辅助软件", slug: "autonomous-driving-decision-safety-validation-software", folder: "pages/NBZEX-BWLT2603070011c_自动驾驶决策方案安全校验辅助软件", entry: "项目原型/index.html", pages: 6, screenshots: false, modules: ["首页", "场景库", "SOTIF验证", "合规检查", "数据分析", "系统设置"] },
  { code: "NBZEX-BWLT2603090003", name: "安全主题宣传活动统筹管理系统", slug: "safety-campaign-coordination-management-system", folder: "pages/NBZEX-BWLT2603090003_安全主题宣传活动统筹管理系统", entry: "项目原型/main.html", pages: 7, screenshots: false, modules: ["主控台", "活动管理", "任务", "资源", "知识库", "报告", "设置"] },
  { code: "NBZEX-BWLT2603110008", name: "智能普法多人联机互动学习系统", slug: "intelligent-legal-education-multiplayer-learning-system", folder: "pages/NBZEX-BWLT2603110008_智能普法多人联机互动学习系统", entry: "项目原型/main.html", pages: 6, screenshots: false, modules: ["主页面", "法律法规", "直播", "学习房间", "讨论", "成就"] },
  { code: "NBZEX-BWLT2603110009", name: "云端VR多人协作作业实训平台", slug: "cloud-vr-collaborative-training-platform", folder: "pages/NBZEX-BWLT2603110009_云端VR多人协作作业实训平台", entry: "项目原型/index.html", pages: 14, screenshots: false, modules: ["首页", "资源", "训练", "团队", "预约", "排行榜", "证书"] },
  { code: "NBZEX-BWLT2603120011", name: "家电产品数字化设计与仿真分析软件", slug: "home-appliance-digital-design-simulation-software", folder: "pages/NBZEX-BWLT2603120011_家电产品数字化设计与仿真分析软件", entry: "main.html", pages: 9, screenshots: false, modules: ["主页面", "产品设计", "参数", "结构分析", "热分析", "流体分析", "报告生成"] },
  { code: "NBZEX-BWLT2603120012", name: "智能计量大数据存储与分布式计算平台", slug: "smart-metering-big-data-storage-distributed-computing-platform", folder: "pages/NBZEX-BWLT2603120012_智能计量大数据存储与分布式计算平台", entry: "项目原型/dashboard.html", pages: 5, screenshots: false, modules: ["仪表盘", "数据采集", "存储集群", "计算任务", "计量数据分析"] },
  { code: "NBZEX-BWLT2603120014", name: "在线食品仓储库存动态调配管理系统", slug: "online-food-warehouse-inventory-dispatch-system", folder: "pages/NBZEX-BWLT2603120014_在线食品仓储库存动态调配管理系统", entry: "项目原型/dashboard.html", pages: 6, screenshots: false, modules: ["仪表盘", "库存", "入库", "出库", "调配", "报表"] },
  { code: "NBZEX-BWLT2603130005c", name: "流域水资源供需结构分析计算软件", slug: "basin-water-resource-supply-demand-analysis-software", folder: "pages/NBZEX-BWLT2603130005c_流域水资源供需结构分析计算软件", entry: "项目原型/main.html", pages: 7, screenshots: false, modules: ["主页面", "供水分析", "需水分析", "水量平衡", "平衡校验", "方案比选", "成果输出"] },
  { code: "NBZEX-BWLT2603140028c", name: "桥梁支座健康评估与维护管理软件", slug: "bridge-bearing-health-assessment-maintenance-software", folder: "pages/NBZEX-BWLT2603140028c_桥梁支座健康评估与维护管理软件", entry: "项目原型/main.html", pages: 6, screenshots: false, modules: ["主页面", "巡检", "评估", "维护", "报告", "档案"] },
  { code: "NBZEX-BWLT2603160002c", name: "交易履约流程结算系统", slug: "transaction-fulfillment-settlement-system", folder: "pages/NBZEX-BWLT2603160002c_交易履约流程结算系统", entry: "index.html", pages: 7, screenshots: true, modules: ["首页", "合同", "履约", "对账", "结算", "报表", "设置"] },
  { code: "NBZEX-BWLT2603160007c", name: "气象水文旱情雨情采集监测系统", slug: "meteorological-hydrological-drought-rainfall-monitoring-system", folder: "pages/NBZEX-BWLT2603160007c_气象水文旱情雨情采集监测系统", entry: "项目原型/dashboard.html", pages: 27, screenshots: false, modules: ["仪表盘", "站点", "雨情", "水情", "旱情", "预警", "报表", "设置"] },
  { code: "NBZEX-BWLT2603160011", name: "建筑装饰工程进度智能调度系统", slug: "building-decoration-progress-intelligent-scheduling-system", folder: "pages/NBZEX-BWLT2603160011_建筑装饰工程进度智能调度系统", entry: "项目原型/dashboard.html", pages: 8, screenshots: false, modules: ["仪表盘", "任务", "进度计划", "甘特图", "资源", "人员", "AI预警", "报表"] },
  { code: "NBZEX-BWLT2603170008c", name: "水工结构渗漏趋势监测预警软件", slug: "hydraulic-structure-leakage-trend-monitoring-warning-software", folder: "pages/NBZEX-BWLT2603170008c_水工结构渗漏趋势监测预警软件", entry: "index.html", pages: 12, screenshots: true, modules: ["登录", "首页", "监测点", "数据采集", "趋势分析", "预警管理", "报告"] },
  { code: "SAMPLE-001", name: "短视频素材剪接合成界面样例", slug: "short-video-editing-interface-sample", folder: "assets/supplemental-samples", entry: "short-video-editing-sample.png", pages: 1, screenshots: true, modules: ["媒体库", "项目素材", "视频剪辑", "时间轴", "导出信息", "协作状态"] },
  { code: "SAMPLE-002", name: "水利工程合同流程规范管理界面样例", slug: "water-contract-process-dashboard-sample", folder: "assets/supplemental-samples", entry: "water-contract-dashboard-sample.png", pages: 1, screenshots: true, modules: ["控制台", "合同总览", "执行率", "资金支出", "规范预警", "合同分类"] }
];

const grid = document.querySelector("#projectGrid");
const searchInput = document.querySelector("#searchInput");
const screenshotFilter = document.querySelector("#screenshotFilter");

document.querySelector("#totalProjects").textContent = projects.length;
document.querySelector("#totalPages").textContent = projects.reduce((sum, item) => sum + item.pages, 0);
document.querySelector("#screenshotProjects").textContent = projects.filter((item) => item.screenshots).length;

function projectUrl(project) {
  return encodeURI(`${project.folder}/${project.entry}`);
}

function matches(project, query) {
  const haystack = [project.code, project.name, project.slug, project.folder, project.entry, ...project.modules]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query.trim().toLowerCase());
}

function render() {
  const query = searchInput.value;
  const mode = screenshotFilter.value;
  const list = projects.filter((project) => {
    const screenshotMatched = mode === "all" || (mode === "with" && project.screenshots) || (mode === "without" && !project.screenshots);
    return screenshotMatched && matches(project, query);
  });

  if (!list.length) {
    grid.innerHTML = '<div class="empty">没有找到匹配的作品，请换个关键词试试。</div>';
    return;
  }

  grid.innerHTML = list.map((project, index) => `
    <article class="project-card" style="animation-delay: ${Math.min(index * 0.025, 0.35)}s">
      <div class="project-card__meta">
        <span>${project.code}</span>
        <span class="badge ${project.screenshots ? "" : "badge--muted"}">${project.screenshots ? "含截图" : "原型页面"}</span>
      </div>
      <h3>${project.name}</h3>
      <p class="slug">${project.slug}</p>
      <ul class="modules">${project.modules.map((item) => `<li>${item}</li>`).join("")}</ul>
      <div class="project-card__footer">
        <span>${project.pages} ${project.entry.match(/\.(png|jpe?g|webp)$/i) ? "张截图" : "个 HTML 页面"}</span>
        <a class="open-link" href="${projectUrl(project)}">打开入口</a>
      </div>
    </article>
  `).join("");
}

searchInput.addEventListener("input", render);
screenshotFilter.addEventListener("change", render);
render();
