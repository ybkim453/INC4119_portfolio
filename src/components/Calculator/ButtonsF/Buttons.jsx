import React from "react";
import "./ButtonsStyle.css";

const Buttons = ({ onButtonClick }) => {
    const buttons = [
        ["!", "sin", "cos", "tan"],
        ["7", "8", "9", "/"],
        ["4", "5", "6", "*"],
        ["1", "2", "3", "-"],
        ["0", ".", "=", "+"],
        ["AC"]
    ];

    return (
        <div className="buttons">
            {/* buttons 배열을 map()을 사용해 행 단위로 렌더링 */}
            {buttons.map((row, rowIndex) => (
                <React.Fragment key={rowIndex}>
                    {row.map((btn) => (
                        <button 
                            key={btn} 
                            className={`button ${btn === "AC" ? "ac" : ""} ${["sin", "cos", "tan", "!"].includes(btn) ? "function" : ""}`}
                            onClick={() => onButtonClick(btn)}
                        >
                            {btn} {/* 버튼 안에 표시될 텍스트 (숫자, 연산 기호 등) */}
                        </button>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Buttons;