// src/data/devProjects.ts
export interface DevProject {
  title: { zh: string; en: string };
  description: { zh: string; en: string };
  color: string;
  githubUrl?: string;
}

export const devProjects: DevProject[] = [
  {
    title: { zh: "AI辩论擂台", en: "AI Debate Arena" },
    description: {
      zh: "多个 LLM 模型围绕用户定义的话题展开角色辩论并评分",
      en: "LLM models debate user-defined topics with role-based discourse and scoring",
    },
    color: "#E63946",
  },
  {
    title: { zh: "品牌锻造炉", en: "Brand Forge" },
    description: {
      zh: "由 Google Genai 驱动的品牌设计生成工具",
      en: "Brand design generation tool powered by Google Genai",
    },
    color: "#457B9D",
  },
  {
    title: { zh: "咖啡世界", en: "Coze Coffee World" },
    description: {
      zh: "基于 Coze 平台构建的咖啡主题 Web 应用",
      en: "Coffee-themed web app built on the Coze platform",
    },
    color: "#6D4C41",
  },
  {
    title: { zh: "晶语秘境", en: "Crystal Realm" },
    description: {
      zh: "收录约 496 种水晶的中文百科，支持按功效与属性筛选",
      en: "Chinese crystal encyclopedia featuring ~496 crystals with metaphysical & physical filters",
    },
    color: "#9B59B6",
  },
  {
    title: { zh: "魔方实验室", en: "Cube Lab" },
    description: {
      zh: "基于 React Three Fiber 的 3D 可视化与建模实验室",
      en: "3D visualization lab using React Three Fiber and Three.js",
    },
    color: "#00B4D8",
  },
  {
    title: { zh: "家庭财富", en: "FamFi" },
    description: {
      zh: "追踪家庭资产、收入与实时市场数据的综合理财系统",
      en: "Family financial system tracking assets, income & real-time market data",
    },
    color: "#2ECC71",
  },
  {
    title: { zh: "口语精灵", en: "Fluent Genie" },
    description: {
      zh: "由 Google Genai 驱动的 AI 英语口语练习教练",
      en: "AI English speaking coach powered by Google Genai",
    },
    color: "#E91E63",
  },
  {
    title: { zh: "专注工作台", en: "Focus Desk" },
    description: {
      zh: "支持拖拽看板的现代项目管理与客户任务追踪工具",
      en: "Modern project management with drag-and-drop Kanban and client task tracking",
    },
    color: "#1565C0",
  },
  {
    title: { zh: "语法助手", en: "Grammarly" },
    description: {
      zh: "由 Google Gemini 驱动的文本语法与写作优化工具",
      en: "Grammar and writing improvement tool powered by Google Gemini",
    },
    color: "#27AE60",
  },
  {
    title: { zh: "中国历史", en: "History of China" },
    description: {
      zh: "交互式中国历史时间轴与百科，本地数据持久化",
      en: "Interactive Chinese history timeline & encyclopedia with local data persistence",
    },
    color: "#C0392B",
  },
  {
    title: { zh: "脉冲聊天", en: "Pulse Chat" },
    description: {
      zh: "支持访客认证、频道、在线状态与输入提示的实时聊天应用",
      en: "Real-time chat with guest auth, channels, presence & typing indicators",
    },
    color: "#2C3E50",
  },
  {
    title: { zh: "阅读精灵", en: "Readly" },
    description: {
      zh: "带 AI 摘要功能的现代 RSS 阅读器，由 Gemini 驱动",
      en: "Modern RSS reader with AI-powered article summarization via Gemini",
    },
    color: "#FF7043",
  },
  {
    title: { zh: "简历魔方", en: "Resumaker" },
    description: {
      zh: "无需登录、轻量级、支持多模板的简历在线编辑器",
      en: "Lightweight resume editor with flexible templates and no login required",
    },
    color: "#546E7A",
  },
];
