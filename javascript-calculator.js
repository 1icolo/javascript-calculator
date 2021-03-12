//add overflow and scrollbar

// Selecting stuff from DOM
const displayMain = document.querySelector(".display-main");
const displayOperations = document.querySelector(".display-operations");
const allButtons = document.querySelectorAll(".button");
const body = document.querySelector("body");

// CE Function
function clearEntry() {
	// if (displayMain.innerHTML.charAt(1) !== "")
	// 	displayMain.innerHTML = displayMain.innerHTML.slice(0, -1);
	// else displayMain.innerHTML = "0";
	displayMain.innerHTML = "0";

	if (displayOperations.innerHTML.charAt(1) !== "")
		displayOperations.innerHTML = displayOperations.innerHTML.slice(0, -1);
	else displayOperations.innerHTML = "0";

	// 	if (
	// 		isNaN(
	// 			displayOperations.innerHTML.charAt(displayOperations.innerHTML.length - 1)
	// 		)
	// 	)
	// 		forOperator();
	// 	else forNumber();

	// 	function forOperator() {
	// 		console.log("operator");
	// 		if (displayOperations.innerHTML.charAt(1) !== "")
	// 			displayOperations.innerHTML = displayOperations.innerHTML.slice(0, -1);
	// 		else displayOperations.innerHTML = "0";
	// 	}

	// 	function forNumber() {
	// 		console.log("number");
	// 		for (let i = displayOperations.innerHTML.length - 1; i > 0; i--) {
	// 			if (isNaN(displayOperations.innerHTML.charAt(i))) {
	// 				displayOperations.innerHTML = displayOperations.innerHTML.slice(0, -1);
	// 			}
	// 			console.log(i);
	// 		}
	// 		if (displayOperations.innerHTML.charAt(1) !== "")
	// 			displayOperations.innerHTML = displayOperations.innerHTML.slice(0, -1);
	// 		else displayOperations.innerHTML = "0";
	// 	}
}

// AC Function
function allClear() {
	displayMain.innerHTML = "0";
	displayOperations.innerHTML = "0";
}

// Equals Function
function evaluate() {
	displayMain.innerHTML = eval(displayOperations.innerHTML);
	// if (displayMain.innerHTML.length > 10)
	// 	displayMain.innerHTML = displayMain.innerHTML.substring(0, 10) + "...";
}

// Any button pressed that has .button class in it
allButtons.forEach((btn) => {
	btn.addEventListener("click", function () {
		let button = this.innerHTML;
		console.log(button);

		// All Clear Button
		if (button === "ac") {
			allClear();
		}

		// Clear Entry Button
		if (button === "ce") {
			clearEntry();
		}

		// Equal Button
		if (button === "=") evaluate();

		// Any Number Button
		if ((parseInt(button) >= 0 && parseInt(button) < 10) || button === ".") {
			if (displayMain.innerHTML != 0) displayMain.innerHTML += button;
			else displayMain.innerHTML = button;
			if (displayOperations.innerHTML != 0)
				displayOperations.innerHTML += button;
			else displayOperations.innerHTML = button;
		}

		// Any Operator Button
		if (button === "/" || button === "*" || button === "-" || button === "+") {
			displayMain.innerHTML = button;
			displayOperations.innerHTML += button;
		}
	});
});

// On the whole body, not just the keypad on the calculator
// For Keyboard support
body.addEventListener("keydown", function (e) {
	let pressedKey = e.key;
	console.log("Keyboard: " + pressedKey);
	if (
		(pressedKey > -1 && pressedKey < 10) ||
		pressedKey === "/" ||
		pressedKey === "+" ||
		pressedKey === "-" ||
		pressedKey === "*" ||
		pressedKey === "."
	) {
		if (displayMain.innerHTML != 0) displayMain.innerHTML += pressedKey;
		else displayMain.innerHTML = pressedKey;
		if (displayOperations.innerHTML != 0)
			displayOperations.innerHTML += pressedKey;
		else displayOperations.innerHTML = pressedKey;
	}
	if (pressedKey === "End" || pressedKey === "Delete" || pressedKey === "=") {
		if (pressedKey === "=") evaluate();
		if (pressedKey === "End") clearEntry();
		if (pressedKey === "Delete") allClear();
	}
});
