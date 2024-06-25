import { useState } from "react";

const Calculator = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operator, setOperator] = useState("");
    const [answer, setAnswer] = useState("");

    const handleCalculation = () => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
        let result;

        switch (operator) {
            case "+":
                result = number1 + number2;
                break;
            case "-":
                result = number1 - number2;

                break;
            case "*":
                result = number1 * number2;
                break;
            case "/":
                if (number2 !== 0) {
                    result = number1 / num2;
                } else {
                    throw "error";
                }
                break;
        }
        setAnswer(result);
    };
    return (
        <>
            <h1>Calculate Like a Vulcan</h1>
            <div className="input">
                <label htmlFor="number1">Enter the first number</label> <br />
                <input
                    name="number1"
                    id="num1"
                    type="text"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />
                <br />
                <label htmlFor="number2">Enter the second number</label>
                <br />
                <input
                    name="number2"
                    id="num2"
                    type="text"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                />
                <br />
                <label htmlFor="operator">
                    What kind of Calculation would you like to make
                </label>
                <br />
                <input
                    type="text"
                    name="operator"
                    placeholder="-,+,*,/"
                    id="operator"
                    value={operator}
                    onChange={(e) => setOperator(e.target.value)}
                />
            </div>
            <button onClick={handleCalculation}>Calculate like a Vulcan</button>
            <h2>Answer: {answer}</h2>
        </>
    );
};

export default Calculator;
