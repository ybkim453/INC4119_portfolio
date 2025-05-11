import React from "react";
import ProfileCard from "../components/ProfileCard";
import SkillsList from "../components/SkillsList";

const AboutPage = () => {
  const skills = ["HTML/CSS", "JavaScript", "React", "Node.js", "Python", "C", "C++"];

  return (
    <div className="about-container">
      <h1>자기소개</h1>
      <ProfileCard />
      <SkillsList skills={skills} />
    </div>
  );
};

export default AboutPage; 