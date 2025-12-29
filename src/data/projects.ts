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
      "https://placehold.co/600x400/4F9DFF/FFFFFF?text=Cicada%20English&font=roboto",
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
      "https://placehold.co/600x400/FF9F1C/FFFFFF?text=Chat-O-Matic&font=roboto",
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
      "https://placehold.co/600x400/2EC4B6/FFFFFF?text=Sesame%20Explainer&font=roboto",
    demoUrl: "https://sesame-explainer.studioyyh.tech/",
    githubUrl: "https://github.com/phoenixlwpapix/sesame-explainer",
  },
  {
    title: { zh: "灵犀", en: "LingXi" },
    description: {
      zh: "一个智能员工关系助手",
      en: "An intelligent employee relationship assistant",
    },
    imageUrl:
      "https://placehold.co/600x400/FFB703/FFFFFF?text=LingXi&font=roboto",
    demoUrl: "https://lingxi.studioyyh.tech/",
    githubUrl: "",
  },
  {
    title: { zh: "Hire Lens", en: "Hire Lens" },
    description: {
      zh: "AI智能招聘辅助工具。",
      en: "Hiring tool to help you find your dream job.",
    },
    imageUrl:
      "https://placehold.co/600x400/4DD6B6/FFFFFF?text=Hire%20Lens&font=roboto",
    demoUrl: "https://hire.studioyyh.tech/",
    githubUrl: "",
  },
  {
    title: { zh: "Fantasia", en: "Fantasia" },
    description: {
      zh: "AI驱动的智能写作助手",
      en: "AI-driven intelligent writing assistant",
    },

    imageUrl:
      "https://placehold.co/600x400/9B5DE5/FFFFFF?text=Fantasia&font=roboto",
    demoUrl: "https://fantasia.studioyyh.tech/",
    githubUrl: "https://github.com/phoenixlwpapix/fantasia-writer",
  },
  {
    title: { zh: "简面", en: "JianMian" },
    description: {
      zh: "一个AI智能简历和面试助手",
      en: "An AI intelligent resume and interview assistant",
    },
    imageUrl:
      "https://placehold.co/600x400/FF6B6B/FFFFFF?text=JianMian&font=roboto",
    demoUrl: "https://jianmian.studioyyh.tech/",
    githubUrl: "",
  },

  {
    title: { zh: "Chez Liliane", en: "Chez Liliane" },
    description: {
      zh: "一个烘焙爱好者的个人主页。",
      en: "A personal homepage for a baking enthusiast.",
    },
    imageUrl:
      "https://placehold.co/600x400/FF8FAB/FFFFFF?text=Chez%20Liliane&font=roboto",
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
      "https://placehold.co/600x400/6C63FF/FFFFFF?text=Recipe%20Rover&font=roboto",
    demoUrl: "https://recipe-rover.studioyyh.tech/",
    githubUrl: "https://github.com/phoenixlwpapix/recipe-rover",
  },
];
