import React from "react";
import doraImage from "../assets/person.jpg";

const ProfileCard = () => {
  return (
    <div className="profile">
      <img src={doraImage} alt="프로필" />
      <div className="profile-info">
        <div>
          <h2 style={{ display: "inline", marginRight: "10px" }}>이름</h2>
          <h1 style={{ display: "inline" }}>김용빈</h1>
        </div>
        <p style={{ fontSize: "1.2rem", fontWeight: 500 }}>안녕하세요! 저는 인공지능에 관심 있는 개발자입니다. 그래서 다음과 같은 연구에 참여해보았습니다.</p>
        <ul style={{ marginTop: '0.5rem', fontSize: "1.3rem" }}>
          <li style={{ marginTop: '0.5rem'}}>LLM 한국어 성능 향상과 최적화</li>
          <li style={{ marginTop: '0.5rem'}}>독거노인 친화 챗봇 개발</li>
          <li style={{ marginTop: '0.5rem'}}>Chart 기반 Reasoning 연구</li>
          <li style={{ marginTop: '0.5rem'}}>모발 Object Detection Labeling 기법 연구</li>
        </ul>
        <p style={{ fontSize: "1.2rem", fontWeight: 500 }}>저는 대학교 졸업 후, 대학원에 진학하여 인공지능에 대해 더욱 공부해보는 것을 목표로 하고 있습니다.</p>
      </div>
    </div>
  );
};

export default ProfileCard; 