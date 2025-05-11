import React from "react";
import "./DisplayStyle.css";

const Display = ({ input, result }) => {
    return (
        <div className="display">
            {/* 사용자가 입력한 값 (숫자, 연산자 등) 표시 */}
            {/* Input 비어 있으면 기본값으로 "0"을 표시 */}
            <div className="expression">{input || "0"}</div>

            {/* 계산 결과 값 비어 있으면 기본값으로 "0"을 표시 */}
            <div className="result">{result || "0"}</div>
        </div>
    );
};

export default Display;