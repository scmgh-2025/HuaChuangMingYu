/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BusinessUnit {
  id: number;
  title: string;
  code?: string;
  badge?: string;
  metrics?: { label: string; value: string; unit?: string }[];
  description: string;
}

export interface InfrastructurePoint {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  principles?: string[];
}

export interface CoreAchievement {
  id: number;
  title: string;
  badge: string;
  summary: string;
  stats?: { value: string; label: string }[];
  details: string;
}

export interface AgentMatrixItem {
  id: string; // "01", "02", "03"
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  metrics: { label: string; value: string }[];
  techStack: string[];
}

export interface CoOpMode {
  id: number;
  title: string;
  description: string;
  details: string[];
}

export interface RoadmapStage {
  id: number;
  phase: string;
  title: string;
  description: string;
  duration: string;
}

export const HUACHUANG_INTRO = {
  name: "华创云信数字技术股份有限公司",
  abbreviation: "华创云信",
  stockCode: "600155.SH",
  overview: "华创云信数字技术股份有限公司（简称 “华创云信”，股票代码：600155.SH）是上海证券交易所上市企业，系国资、员工集体持股主导的多元融合混合所有制公司。公司现已构建证券金融、数字科技、数字化交易市场服务三大核心业务板块。",
  structureIntro: "公司已形成证券金融业务、数字科技、数字化交易市场服务三大业务板块。",
  recentBreakthrough: "2024年，由贵州旅游产业发展集团与华创云信组建贵旅数网公司，按照贵州省委、省政府指导要求，紧扣大数据赋能文旅产业高质量发展的战略部署，推动建设了覆盖“吃、住、行、游、购、娱”全链条的全省一站式旅游智能服务总入口“多彩黄小西”，形成涵盖景区、酒店、餐饮、个人、游客等涉旅场景的智能体体系。"
};

export const BUSINESS_UNITS: BusinessUnit[] = [
  {
    id: 1,
    title: "证券金融业务",
    badge: "行业领军",
    metrics: [
      { label: "总资产", value: "502", unit: "亿元" },
      { label: "净资产", value: "168", unit: "亿元" },
      { label: "管理资产规模", value: "3000+", unit: "亿元" }
    ],
    description: "公司全资控股华创证券，系全国A类A级综合证券金融机构，中国经济社会理事会理事，中国证券业协会理事、证券信息科技专业委员会顾问，上海证券交易所理事会科技发展委员会委员。"
  },
  {
    id: 2,
    title: "数字科技业务",
    badge: "核心技术",
    description: "华创云信基于多年对AI技术、数联网建设和金融服务生态的研究与探索，联合云码通、思特奇（股票代码：SZ.300608）、联合天成、证联支付等机构，构建了覆盖人工智能、云计算、大数据、数字支付及区块链的技术矩阵。目前，智能体及相关解决方案已在贵州、海南、广西多地落地应用。"
  },
  {
    id: 3,
    title: "数字化交易市场业务",
    badge: "新型生态",
    description: "该业务由贵州白酒交易所股份有限公司承担，贵州白酒交易所是经贵州省人民政府批准设立的国家级白酒要素交易场所，承担了贵州白酒数字化市场的建设，通过建立市场通识标准、完善价格形成机制、优化市场运营模式、支持诚实劳动者和小微企业就业创业等，致力于构建相生共荣的白酒市场新生态。"
  }
];

export const INFRASTRUCTURE_POINTS: InfrastructurePoint[] = [
  {
    id: 1,
    title: "战略契合",
    subtitle: "锚定西部领军，重塑智能根基",
    content: "联合规划架构：构建统一数据湖与AI中台，彻底打通内部数据壁垒，实现数据资产化。\n\n重塑组织流程：设立“AI策略岗”，建立跨部门协同机制，自上而下培育全员AI驱动文化。\n\n沉淀通用能力：将通用算法与模型封装为可复用服务，赋能各业务场景快速创新。"
  },
  {
    id: 2,
    title: "双轨协同",
    subtitle: "顶层设计引领，场景落地深耕",
    content: "自上而下统筹：由集团总部牵头制定统一的AI战略蓝图与技术标准，确保基础设施建设方向一致、资源集约。\n\n自下而上突破：鼓励各业务单元聚焦实际痛点，开展小步快跑的试点项目，快速验证、迭代优化，反哺顶层设计。"
  },
  {
    id: 3,
    title: "共同目标",
    subtitle: "打造行业AI智能化标杆",
    content: "科学规划实施：坚持“总体规划、分布实施”原则，分阶段、分步骤推进，有效控制技术与业务风险。\n\n打造明宇模式：从局部试点到全面覆盖，稳步实现技术落地与价值转化，形成可复制、可推广的“明宇AI智能化模式”，树立行业典范。"
  }
];

export const CORE_ACHIEVEMENTS: CoreAchievement[] = [
  {
    id: 1,
    title: "“多彩黄小西”平台",
    badge: "全省文旅服务总入口",
    summary: "打造一站式旅游智能服务体系，整合全省文旅资源，为用户提供便捷、智能的吃住行游购娱全场景体验。",
    stats: [
      { value: "100%", label: "文旅资源覆盖率" },
      { value: "一站式", label: "吃住行游购娱体验" }
    ],
    details: "整合千余级文旅资源要素，形成全省智能化网格化文旅服务新型枢纽。"
  },
  {
    id: 2,
    title: "酒店智能体应用",
    badge: "赋能千余家住宿商户",
    summary: "AI酒店智能体已接入超1500家酒店，覆盖贵州9个地市州（如贵州饭店、花溪迎宾馆、天怡豪生大酒店等），实现服务自动化与个性化，显著提升运营效率与用户满意度。",
    stats: [
      { value: "1500+", label: "已接入酒店数量" },
      { value: "9个", label: "地市州全覆盖" }
    ],
    details: "全方位赋能单体酒店及连锁集团，在贵州饭店、花溪迎宾馆、天怡豪生等标杆酒店验证了极高商业价值。"
  }
];

export const AGENT_MATRIX: AgentMatrixItem[] = [
  {
    id: "01",
    title: "面向住客",
    subtitle: "全流程智能体验",
    description: "集成智能问答、客房服务、周边推荐等一站式功能，配备天气助手、行程伴侣等专属智能体，精准捕捉并满足住客多样化、个性化的出行与住宿需求，重塑入住全流程体验。",
    features: ["智能问答与迎宾", "无感智能客房控制", "周边文旅精细推荐", "全天候出行天气助手", "专属定制行程伴侣"],
    metrics: [
      { label: "服务响应速度", value: "<1秒" },
      { label: "住客好评率提高", value: "35%" }
    ],
    techStack: ["多模态大模型", "自然语言理解", "意图识别引擎"]
  },
  {
    id: "02",
    title: "面向员工",
    subtitle: "运营提质提效",
    description: "通过自动化流程处理客房工单、住客反馈与行李寄存，AI辅助前台完成记事与交班工作，有效简化重复操作，让员工聚焦高价值服务，保障酒店服务的连续性与专业性。",
    features: ["自动化客房工单派发", "实时住客反馈智能追踪", "AI行李寄存管家", "AI前台极速记事本", "智能交班自动汇总"],
    metrics: [
      { label: "工单流转效率", value: "+45%" },
      { label: "前台交接时间缩短", value: "70%" }
    ],
    techStack: ["RPA流程自动化", "智能任务路由", "语音转文字(ASR)"]
  },
  {
    id: "03",
    title: "面向管理",
    subtitle: "经营与收益双赢",
    description: "提供多维度运营数据洞察，配备房价竞价、活动策划等智能化经营工具，并对接融资匹配服务，为管理者提供科学决策依据，助力酒店优化运营策略，实现长期稳健的收益增长。",
    features: ["多维度全景运营看板", "自适应房价竞价系统", "智能化假日营销策划", "数联网金融融资推荐", "收益最大化决策大屏"],
    metrics: [
      { label: "RevPar(均房收益)增长", value: "12%+" },
      { label: "综合运营成本下降", value: "20%" }
    ],
    techStack: ["预测算法引擎", "实时竞价博弈模型", "金融数联网服务"]
  }
];

export const COOP_MODES: CoOpMode[] = [
  {
    id: 1,
    title: "模式一：战略签约，试点先行",
    description: "签订战略合作协议，选取1-2家标杆酒店作为试点项目，通过小范围实践验证技术价值与业务适配性，为后续推广积累经验。",
    details: [
      "设立专属先行示范区",
      "单体酒店敏捷突破与试错",
      "全流程商业模型精细跑通",
      "集团全域稳健有序复制"
    ]
  },
  {
    id: 2,
    title: "模式二：驻场协作，深度共建",
    description: "华创云信派驻专业技术与业务团队，与明宇运营团队联合办公、协同作业，确保技术方案精准贴合业务流程，实现系统功能与实际运营场景的深度融合与迭代优化。",
    details: [
      "专家级顶层架构深度梳理",
      "两方研发团队每日站会研讨",
      "零距离深入酒店现实场景攻坚",
      "联合知识产权与资产沉淀"
    ]
  }
];

export const ROADMAP_STAGES: RoadmapStage[] = [
  {
    id: 1,
    phase: "第一阶段",
    title: "局部试点落地",
    duration: "3-6个月",
    description: "聚焦核心高频业务场景，快速部署系统功能，以“快速见效”为核心目标，验证技术方案的可行性与业务价值，树立内部信心。"
  },
  {
    id: 2,
    phase: "第二阶段",
    title: "系统深度融合",
    duration: "6-12个月",
    description: "打通业务系统与数据链路，深度整合业务流程与技术工具，优化交互细节，全面提升运营效率与客户服务体验，实现管理精细化。"
  },
  {
    id: 3,
    phase: "第三阶段",
    title: "全域推广成型",
    duration: "12-24个月",
    description: "将成功经验复制推广至全集团，构建标准化、智能化的运营体系，沉淀数据资产，驱动业务模式创新，实现长期可持续的业绩增长。"
  }
];
