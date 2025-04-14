import React from "react";
import FeatureCard from "../components/FeatureCard";

const HomePage = () => {
  const features = [
    {
      title: "소개",
      description: "저에 대해 자세히 알아보세요."
    },
    {
      title: "프로젝트",
      description: "제가 만든 프로젝트들을 확인해보세요."
    },
    {
      title: "연락처",
      description: "저에게 연락하는 방법을 알아보세요."
    }
  ];

  return (
    <div className="home-container">
      <h2>환영합니다!</h2>
      <p>이 웹사이트는 React를 사용하여 만든 개인 포트폴리오입니다.</p>
      <div className="features">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage; 