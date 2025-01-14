const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let currentInput = "";
let lastOperator = null;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;

        if (button.id === "clear") {
            // Clear the display
            currentInput = "";
            display.value = "0";
        } else if (button.id === "backspace") {
            // Remove the last character
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput || "0";
        } else if (button.id === "equals") {
            try {
                currentInput = eval(currentInput.replace(/÷/g, "/").replace(/×/g, "*"));
                display.value = currentInput;
            } catch (error) {
                display.value = "Error";
            }
        } else {
            if (currentInput === "0" && !isNaN(value)) {
                currentInput = value;
            } else {
                currentInput += value;
            }
            display.value = currentInput;
        }
    });
});
