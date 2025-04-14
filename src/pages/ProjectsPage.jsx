import React from "react";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  const projects = [
    {
      title: "나의 프로젝트1",
      description: "React를 사용하여 만든 계산기 애플리케이션"
    },
    {
      title: "나의 프로젝트2",
      description: "캡스톤 프로젝트에서의 딥러닝 기반 영상 분류 시스템"
    },
    {
      title: "나의 프로젝트3",
      description: "나만의 맛집 저장리스트 ~~"
    }
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
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage; 