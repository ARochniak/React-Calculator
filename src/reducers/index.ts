interface State {
	display: string;
}
// need to fix !Number.isInteger(+symbol) if set type action as Action
interface Action {
	type: string;
	symbol?: string;
}

export default function reducer (initialState: State = {display: ""}, action: any) {
	let display = initialState.display;

	switch (action.type) {
		case "ADD SYMBOL": 
			const symbol = action.symbol,
				prevSymbol = display.slice(-1);
			if (display==="" && !Number.isInteger(+symbol)) return initialState;
			if ( !Number.isInteger(+symbol) && !Number.isInteger(+prevSymbol)) {
				display = display.slice(0,-1);
			}
			return {display: display + action.symbol};

		case "REMOVE LAST SYMBOL":
			return {display: initialState.display.slice(0,-1)};

		case "CLEAR":
			return {display: ""};

		case "BACKSPACE":
			if (initialState.display === "") return initialState;
			return {display: initialState.display.slice(0, -1)};

		case "PLUSMINUS":
			if (display.search(/\(-\d+$/) + 1) {
				display = display.replace(/\(-(\d+$)/, "$1");
				return {display: display};
			}
			display = display.replace(/(\d+)$/,"(-$1");
			return {display: display};

		case "RESULT":
			let expression = initialState.display;
			let res;
			if (!Number.isInteger(+expression.slice(-1))) {
				expression = expression.slice(0, -1);
			}
			if ( expression.search(/\([^\)]*$/) + 1) expression = expression + ")";
			try {res = eval(expression) } catch {
				alert("The expresion isn't correct!");
				res = expression;
			};
			return {display: "" + res};

		default:
			return initialState;
	}
}