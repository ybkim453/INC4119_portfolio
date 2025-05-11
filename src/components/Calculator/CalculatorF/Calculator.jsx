import React from "react";
import useCalculatorLogic from "../useCalculatorLogic";
import Display from "../DisplayF/Display";
import Buttons from "../ButtonsF/Buttons";
import "./CalculatorStyle.css";

const Calculator = () => {
    const { input, result, handleClick, calculateResult, clearInput } = 
    useCalculatorLogic();

    return (
        <div className="calculator">
            <Display input={input} result={result} />
            <Buttons onButtonClick={
                (value) => {
                    value === "="
                    ? calculateResult()
                    : value === "AC"
                    ? clearInput()
                    : handleClick(value);
                }
            } />
        </div>
    );
};

export default Calculator;