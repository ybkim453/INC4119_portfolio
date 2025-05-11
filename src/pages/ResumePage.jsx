import React from "react";
import myResume from "../assets/myResume.pdf";

const ResumePage = () => (
  <div className="projects-container">
    <h2>이력서 (PDF 미리보기)</h2>
    <embed
      src={myResume}
      type="application/pdf"
      width="100%"
      height="700px"
      style={{ borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
    />
    <p style={{ marginTop: 16 }}>
      <a href={myResume} download>
        PDF 파일 다운로드
      </a>
    </p>
  </div>
);

export default ResumePage;
