// 팩토리얼 계산 함수
export const calculateFactorial = (num) => {
    if (num < 0 || !Number.isInteger(num)) {
        throw new Error("Invalid input for factorial");
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
};

// 팩토리얼 수식 처리
export const processFactorial = (expression) => {
    while (expression.includes("!")) {
        const factRegex = /(\d+)!/;
        const match = expression.match(factRegex);
        if (!match) break;
        
        const number = parseInt(match[1]);
        const factorial = calculateFactorial(number);
        expression = expression.replace(match[0], factorial.toString());
    }
    return expression;
};

// 삼각함수 수식 처리
export const processTrigonometric = (expression) => {
    while (expression.includes("sin") || expression.includes("cos") || expression.includes("tan")) {
        const trigRegex = /(sin|cos|tan)(\d+)/;
        const match = expression.match(trigRegex);
        if (!match) break;

        const func = match[1];
        const number = parseFloat(match[2]);
        const radians = number * (Math.PI / 180);
        let trigResult;

        switch(func) {
            case "sin":
                trigResult = Math.sin(radians).toFixed(8);
                break;
            case "cos":
                trigResult = Math.cos(radians).toFixed(8);
                break;
            case "tan":
                trigResult = Math.tan(radians).toFixed(8);
                break;
            default:
                break;
        }

        expression = expression.replace(match[0], trigResult);
    }
    return expression;
}; 