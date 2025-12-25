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
    title: { zh: "知了英语", en: "Cicada English" },
    description: {
      zh: "AI驱动的英语阅读训练平台",
      en: "AI-powered English reading skill platform",
    },
    imageUrl:
      "https://placehold.co/600x400/33A9D8/FFFFFF?text=Cicada%20English&font=roboto",
    demoUrl: "https://cicada-english.studioyyh.tech/",
    githubUrl: "https://github.com/phoenixlwpapix/cicada-english",
  },
  {
    title: { zh: "聊聊机", en: "Chat-O-Matic" },
    description: {
      zh: "随问随答的小小智能伙伴。",
      en: "Your little smart buddy, ready to answer anytime.",
    },
    imageUrl:
      "https://placehold.co/600x400/EEDD55/FFFFFF?text=Chat-O-Matic&font=roboto",
    demoUrl: "https://chat.studioyyh.tech/",
    githubUrl: "https://github.com/phoenixlwpapix/chat-o-matic",
  },
  {
    title: { zh: "芝麻问答", en: "Sesame Explainer" },
    description: {
      zh: "智能问答系统，提供详细解答和知识解释。",
      en: "Intelligent Q&A system providing detailed answers and knowledge explanations.",
    },
    imageUrl:
      "https://placehold.co/600x400/9333EA/FFFFFF?text=Sesame%20Explainer&font=roboto",
    demoUrl: "https://sesame-explainer.studioyyh.tech/",
    githubUrl: "https://github.com/phoenixlwpapix/sesame-explainer",
  },
  {
    title: { zh: "Fantasia", en: "Fantasia" },
    description: {
      zh: "AI驱动的智能写作助手",
      en: "AI-driven intelligent writing assistant",
    },

    imageUrl:
      "https://placehold.co/600x400/577B97/FFFFFF?text=Fantasia&font=roboto",
    demoUrl: "https://fantasia.studioyyh.tech/",
    githubUrl: "https://github.com/phoenixlwpapix/fantasia-writer",
  },
  {
    title: { zh: "Hire Lens", en: "Hire Lens" },
    description: {
      zh: "AI智能招聘辅助工具。",
      en: "Hiring tool to help you find your dream job.",
    },
    imageUrl:
      "https://placehold.co/600x400/092c50/FFFFFF?text=Hire%20Lens&font=roboto",
    demoUrl: "https://hire.studioyyh.tech/",
    githubUrl: "",
  },
  {
    title: { zh: "PRD精灵", en: "PRD Genie" },
    description: {
      zh: "帮你更好编写项目产品需求文档并建议技术栈。",
      en: "Help you write better project product requirement documents and suggest tech stacks.",
    },
    imageUrl:
      "https://placehold.co/600x400/FD6F60/FFFFFF?text=PRD%20Genie&font=roboto",
    demoUrl: "https://prd-genie.studioyyh.tech/",
    githubUrl: "https://github.com/phoenixlwpapix/prd-genie",
  },
  {
    title: { zh: "数理化工具箱", en: "Math Toolkit" },
    description: {
      zh: "帮你更好理解数学、物理、化学知识。",
      en: "Help you better understand mathematics, physics, and chemistry.",
    },
    imageUrl:
      "https://placehold.co/600x400/71A9F7/FFFFFF?text=Math%20Toolkit&font=roboto",
    demoUrl: "https://math-toolkit.studioyyh.tech/",
    githubUrl: "https://github.com/phoenixlwpapix/math-toolkit",
  },
  {
    title: { zh: "Chez Liliane", en: "Chez Liliane" },
    description: {
      zh: "一个烘焙爱好者的个人主页。",
      en: "A personal homepage for a baking enthusiast.",
    },
    imageUrl:
      "https://placehold.co/600x400/f07491/FFFFFF?text=Chez%20Liliane&font=roboto",
    demoUrl: "https://bakery.studioyyh.tech/",
    githubUrl: "https://github.com/phoenixlwpapix/phoenixlwpapix.github.io",
  },
  {
    title: { zh: "食旅星球", en: "Recipe Rover" },
    description: {
      zh: "通过智能配料匹配，探索世界各地的美食食谱。",
      en: "Explore global cuisines through intelligent ingredient matching.",
    },
    imageUrl:
      "https://placehold.co/600x400/FFA500/FFFFFF?text=Recipe%20Rover&font=roboto",
    demoUrl: "https://recipe-rover.studioyyh.tech/",
    githubUrl: "https://github.com/phoenixlwpapix/recipe-rover",
  },
];
