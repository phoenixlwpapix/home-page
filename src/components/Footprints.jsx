// src/components/Footprints.jsx
import React from "react";

const footprints = [
  {
    title: "东京之旅",
    description: "探索现代与传统的融合",
    imageUrl:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop",
    location: "东京, 日本",
  },
  {
    title: "京都古都",
    description: "千年古都的宁静与美",
    imageUrl:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop",
    location: "京都, 日本",
  },
  {
    title: "北海道雪景",
    description: "纯净的白雪世界",
    imageUrl:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&h=400&fit=crop",
    location: "北海道, 日本",
  },
  {
    title: "巴黎塞纳河",
    description: "浪漫之都的灵魂",
    imageUrl:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&h=400&fit=crop",
    location: "巴黎, 法国",
  },
  {
    title: "瑞士阿尔卑斯",
    description: "壮丽的山脉与湖泊",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    location: "瑞士阿尔卑斯",
  },
  {
    title: "纽约天际线",
    description: "不夜城的活力与梦想",
    imageUrl:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop",
    location: "纽约, 美国",
  },
];

const PhotoCard = ({ title, description, imageUrl, location }) => (
  <div className="block group rounded-xl overflow-hidden bg-secondary dark:bg-secondary shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
    <img
      src={imageUrl}
      alt={title}
      className="w-full aspect-video object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-primary dark:text-primary">
        {title}
      </h3>
      <p className="text-sm text-primary/60 dark:text-primary/60 mb-2">
        {location}
      </p>
      <p className="text-primary/70 dark:text-primary/70">{description}</p>
    </div>
  </div>
);

const Footprints = () => {
  return (
    <section
      id="footprints"
      className="py-20 bg-secondary dark:bg-secondary/50"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary dark:text-primary">
          我的足迹
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {footprints.map((footprint, index) => (
            <PhotoCard key={index} {...footprint} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footprints;
