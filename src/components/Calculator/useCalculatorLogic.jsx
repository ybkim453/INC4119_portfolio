import { useState } from "react";
import { processFactorial, processTrigonometric } from "./AdditionalFeature";

const useCalculatorLogic = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    const calculateResult = () => {
        try {
            let expression = input;
            
            // 팩토리얼 계산
            expression = processFactorial(expression);

            // 삼각함수 계산
            expression = processTrigonometric(expression);

            // 최종 계산
            const calculatedResult = eval(expression).toString();
            setResult(calculatedResult);
        } catch {
            setResult("Error");
        }
    };

    const clearInput = () => {
        setInput("");
        setResult("");
    };

    return { input, result, handleClick, calculateResult, clearInput };
};

export default useCalculatorLogic;