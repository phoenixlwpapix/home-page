// src/data/projects.ts
export interface Project {
  title: { zh: string; en: string };
  description: { zh: string; en: string };
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: { zh: "Voce", en: "Voce" },
    description: {
      zh: "沉浸式多语言个人词汇笔记本，支持英、法、西、日生词积累与智能复习。",
      en: "A quiet multilingual vocabulary notebook for English, French, Spanish, and Japanese.",
    },
    imageUrl:
      "https://placehold.co/600x400/E63946/FFFFFF?text=Voce&font=roboto",
    demoUrl: "https://voce.studioyyh.com/",
    githubUrl: "https://github.com/phoenixlwpapix/voce",
  },
  {
    title: { zh: "海豚英语", en: "Dolphin English" },
    description: {
      zh: "AI驱动的英语精读练习平台",
      en: "AI-driven English reading practice platform",
    },
    imageUrl:
      "https://placehold.co/600x400/4CC9F0/FFFFFF?text=Dolphin%20English&font=roboto",
    demoUrl: "https://dolphin.studioyyh.com/",
    githubUrl: "",
  },
  {
    title: { zh: "ConjuGO", en: "ConjuGO" },
    description: {
      zh: "四种语言动词变位练习应用，支持时态、主语与即时反馈训练。",
      en: "Four-language verb conjugation practice app with tense, subject, and instant feedback drills.",
    },
    imageUrl:
      "https://placehold.co/600x400/14B8A6/FFFFFF?text=ConjuGO&font=roboto",
    demoUrl: "https://conjugo.studioyyh.com/",
    githubUrl: "https://github.com/phoenixlwpapix/conjugo",
  },
  {
    title: { zh: "聊聊机", en: "Chat-O-Matic" },
    description: {
      zh: "随问随答的小小智能伙伴。",
      en: "Your little smart buddy, ready to answer anytime.",
    },
    imageUrl:
      "https://placehold.co/600x400/F72585/FFFFFF?text=Chat-O-Matic&font=roboto",
    demoUrl: "https://chat.studioyyh.com/",
    githubUrl: "https://github.com/phoenixlwpapix/chat-o-matic",
  },
  {
    title: { zh: "Vocably", en: "Vocably" },
    description: {
      zh: "小学英语单词学练系统，拼写练习与语境填空双模式。",
      en: "Elementary English vocabulary learning system with spelling and context-fill exercises.",
    },
    imageUrl:
      "https://placehold.co/600x400/6366F1/FFFFFF?text=Vocably&font=roboto",
    demoUrl: "https://vocab.studioyyh.com/",
    githubUrl: "https://github.com/phoenixlwpapix/vocably",
  },
  {
    title: { zh: "知了英语", en: "Cicada English" },
    description: {
      zh: "AI驱动的英语阅读训练平台",
      en: "AI-powered English reading skill platform",
    },
    imageUrl:
      "https://placehold.co/600x400/4361EE/FFFFFF?text=Cicada%20English&font=roboto",
    demoUrl: "https://cicada.studioyyh.com/",
    githubUrl: "https://github.com/phoenixlwpapix/cicada-english",
  },
  {
    title: { zh: "芝麻问答", en: "Sesame Explainer" },
    description: {
      zh: "智能问答系统，提供详细解答和知识解释。",
      en: "Intelligent Q&A system providing detailed answers and knowledge explanations.",
    },
    imageUrl:
      "https://placehold.co/600x400/4895EF/FFFFFF?text=Sesame%20Explainer&font=roboto",
    demoUrl: "https://sesame.studioyyh.com/",
    githubUrl: "https://github.com/phoenixlwpapix/sesame-explainer",
  },
  {
    title: { zh: "灵犀", en: "LingXi" },
    description: {
      zh: "一个智能员工关系助手",
      en: "An intelligent employee relationship assistant",
    },
    imageUrl:
      "https://placehold.co/600x400/F77F00/FFFFFF?text=LingXi&font=roboto",
    demoUrl: "https://lingxi.studioyyh.com/",
    githubUrl: "",
  },
  {
    title: { zh: "聘才透镜", en: "Hire Lens" },
    description: {
      zh: "AI智能招聘辅助工具。",
      en: "Hiring tool to help you find your dream job.",
    },
    imageUrl:
      "https://placehold.co/600x400/7209B7/FFFFFF?text=Hire%20Lens&font=roboto",
    demoUrl: "https://hire.studioyyh.com/",
    githubUrl: "",
  },
  {
    title: { zh: "Fantasia", en: "Fantasia" },
    description: {
      zh: "AI驱动的智能写作助手",
      en: "AI-driven intelligent writing assistant",
    },
    imageUrl:
      "https://placehold.co/600x400/8338EC/FFFFFF?text=Fantasia&font=roboto",
    demoUrl: "https://fantasia.studioyyh.com/",
    githubUrl: "https://github.com/phoenixlwpapix/fantasia-writer",
  },
  {
    title: { zh: "简面", en: "JianMian" },
    description: {
      zh: "一个AI智能简历和面试助手",
      en: "An AI intelligent resume and interview assistant",
    },
    imageUrl:
      "https://placehold.co/600x400/FF006E/FFFFFF?text=JianMian&font=roboto",
    demoUrl: "https://jianmian.studioyyh.com/",
    githubUrl: "",
  },
  {
    title: { zh: "Chez Liliane", en: "Chez Liliane" },
    description: {
      zh: "一个烘焙爱好者的个人主页。",
      en: "A personal homepage for a baking enthusiast.",
    },
    imageUrl:
      "https://placehold.co/600x400/FB5607/FFFFFF?text=Chez%20Liliane&font=roboto",
    demoUrl: "https://bakery.studioyyh.com/",
    githubUrl: "https://github.com/phoenixlwpapix/phoenixlwpapix.github.io",
  },
  {
    title: { zh: "食旅星球", en: "Recipe Rover" },
    description: {
      zh: "通过智能配料匹配，探索世界各地的美食食谱。",
      en: "Explore global cuisines through intelligent ingredient matching.",
    },
    imageUrl:
      "https://placehold.co/600x400/FFBE0B/FFFFFF?text=Recipe%20Rover&font=roboto",
    demoUrl: "https://recipe.studioyyh.com/",
    githubUrl: "https://github.com/phoenixlwpapix/recipe-rover",
  },
  {
    title: { zh: "任务统御者3000", en: "Task Master 3000" },
    description: {
      zh: "Neo Brutalism风格的待办列表任务管理器。",
      en: "Neo Brutalism style todo list task manager.",
    },
    imageUrl:
      "https://placehold.co/600x400/3F37C9/FFFFFF?text=Task%20Master%203000&font=roboto",
    demoUrl: "https://todo.studioyyh.com/",
    githubUrl: "",
  },
  {
    title: { zh: "报价大师", en: "Quote Master" },
    description: {
      zh: "生成并管理报价单的项目。",
      en: "A project for generating and managing quotes.",
    },
    imageUrl:
      "https://placehold.co/600x400/10B981/FFFFFF?text=Quote%20Master&font=roboto",
    demoUrl: "https://quote.studioyyh.com/",
    githubUrl: "",
  },
  {
    title: { zh: "代码金库", en: "Snip Vault" },
    description: {
      zh: "保存常用代码片段的应用。",
      en: "An app for saving commonly used code snippets.",
    },
    imageUrl:
      "https://placehold.co/600x400/06D6A0/FFFFFF?text=Snip%20Vault&font=roboto",
    demoUrl: "https://snip.studioyyh.com/",
    githubUrl: "",
  },
];
