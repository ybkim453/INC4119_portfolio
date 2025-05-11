import React from "react";
import ProjectCard from "../components/ProjectCard";
import projImage1 from "../assets/ChildAbuseDetection.png";
import projImage2 from "../assets/acofood.png";
import Calculator from "../components/Calculator/CalculatorF/Calculator";

/**
 * 프로젝트 페이지 컴포넌트
 * 사용자의 프로젝트들을 카드 형태로 보여주는 페이지
 */
const ProjectsPage = () => {
  const projects = [
    {
      title: "나의 프로젝트1",
      description: "React를 사용하여 만든 계산기 애플리케이션",
      component: <Calculator />,
    },
    {
      title: "나의 프로젝트2",
      description: "2024년 아코톤 프로젝트 (학식 구매 어플)",
      image: projImage1,
    },
    {
      title: "나의 프로젝트3",
      description: "아동학대발굴 시스템 개발 프로젝트",
      image: projImage2,
    },
  ];

  return (
    <div className="projects-container">
      <h2>프로젝트</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            component={project.component}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
