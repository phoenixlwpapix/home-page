// src/data/footprints.ts
export interface Footprint {
  title: { zh: string; en: string };
  description: { zh: string; en: string };
  imageUrl: string;
  location: { zh: string; en: string };
}

export const footprints: Footprint[] = [
  {
    title: { zh: "巴厘岛 Ayana Resort", en: "Bali Ayana Resort" },
    description: {
      zh: "热带度假村的宁静与奢华",
      en: "Tranquility and luxury of a tropical resort",
    },
    imageUrl: "/images/footprints/bali_ayana.webp",
    location: { zh: "巴厘岛, 印尼", en: "Bali, Indonesia" },
  },
  {
    title: { zh: "巴厘岛 乌布", en: "Bali Ubud" },
    description: {
      zh: "艺术之岛的稻田与寺庙",
      en: "Rice fields and temples of the art island",
    },
    imageUrl: "/images/footprints/bali_ubud.webp",
    location: { zh: "乌布, 巴厘岛", en: "Ubud, Bali" },
  },
  {
    title: { zh: "巴厘岛 乌鲁瓦图", en: "Bali Uluwatu" },
    description: {
      zh: "悬崖边的日落与海浪",
      en: "Sunset and waves by the cliff",
    },
    imageUrl: "/images/footprints/bali_uluwatu.webp",
    location: { zh: "乌鲁瓦图, 巴厘岛", en: "Uluwatu, Bali" },
  },
  {
    title: { zh: "巴黎 迪士尼乐园", en: "Paris Disneyland" },
    description: {
      zh: "童话世界的魔法与欢乐",
      en: "Magic and joy of a fairy tale world",
    },
    imageUrl: "/images/footprints/paris_disneyland.webp",
    location: { zh: "巴黎, 法国", en: "Paris, France" },
  },
  {
    title: { zh: "巴黎 埃菲尔铁塔", en: "Paris Eiffel Tower" },
    description: {
      zh: "浪漫之都的标志性建筑",
      en: "Iconic landmark of the romantic capital",
    },
    imageUrl: "/images/footprints/paris_eiffel_tower.webp",
    location: { zh: "巴黎, 法国", en: "Paris, France" },
  },
  {
    title: { zh: "马尔代夫 Faarufushi岛", en: "Maldives Faarufushi Island" },
    description: {
      zh: "水上屋与珊瑚礁的梦幻天堂",
      en: "Dream paradise of overwater bungalows and coral reefs",
    },
    imageUrl: "/images/footprints/maldives_faarufushi.webp",
    location: {
      zh: "Faarufushi岛, 马尔代夫",
      en: "Faarufushi Island, Maldives",
    },
  },
  {
    title: { zh: "瑞士 因特拉肯", en: "Switzerland Interlaken" },
    description: {
      zh: "阿尔卑斯山脚下的湖光山色",
      en: "Lake and mountain scenery at the foot of the Alps",
    },
    imageUrl: "/images/footprints/switzerland_interlaken.webp",
    location: { zh: "因特拉肯, 瑞士", en: "Interlaken, Switzerland" },
  },
  {
    title: { zh: "瑞士 少女峰", en: "Switzerland Jungfrau" },
    description: {
      zh: "欧洲之巅的冰川与雪山",
      en: "Glaciers and snow mountains at the top of Europe",
    },
    imageUrl: "/images/footprints/switzerland_jungfrau.webp",
    location: { zh: "少女峰, 瑞士", en: "Jungfrau, Switzerland" },
  },
  {
    title: { zh: "北京 网球场", en: "Beijing Tennis Court" },
    description: {
      zh: "现代都市的运动与活力",
      en: "Sports and vitality of the modern city",
    },
    imageUrl: "/images/footprints/pekin_tennis.webp",
    location: { zh: "北京, 中国", en: "Beijing, China" },
  },
  {
    title: { zh: "北京 跆拳道馆", en: "Beijing Taekwondo Hall" },
    description: {
      zh: "武术之都的传统与现代",
      en: "Tradition and modernity of the martial arts capital",
    },
    imageUrl: "/images/footprints/pekin_taekwongdo.webp",
    location: { zh: "北京, 中国", en: "Beijing, China" },
  },
  {
    title: { zh: "越南 芽庄", en: "Vietnam Nha Trang" },
    description: {
      zh: "南海之滨的美丽海滩",
      en: "Beautiful beaches by the South China Sea",
    },
    imageUrl: "/images/footprints/vietnam_Nha_Trang.webp",
    location: { zh: "芽庄, 越南", en: "Nha Trang, Vietnam" },
  },
  {
    title: { zh: "巴厘岛 仓古", en: "Bali Canggu" },
    description: {
      zh: "冲浪天堂的海滩与活力",
      en: "Beach and vitality of the surfing paradise",
    },
    imageUrl: "/images/footprints/bali_canggu.webp",
    location: { zh: "仓古, 巴厘岛", en: "Canggu, Bali" },
  },
];
