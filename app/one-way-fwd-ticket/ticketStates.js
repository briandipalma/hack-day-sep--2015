export const initialState = {
	currencyPair: "EURUSD",
	buySell: "BUY",
	amount: 500,
	dealtCurrency: "EUR",
	contraCurrency: "USD",
	settlementDate: "09/09/2015",
	tenor: "SPOT",
	accounts: [
		{value: "coca-cola", label: "Coca-Cola"},
		{value: "sony", label: "Sony"}
	],
	message: "You can buy 500.00 EUR against USD for settlement on 09/09/2015 (SPOT)"
};

export const requestState = Object.assign({}, initialState, {
	message: "Requesting stream"
});

const executableState = Object.assign({}, initialState, {
	spotRate: "1.41802",
	forwardPoints: "117",
	timeRemaining: 30
});

// export const executeState = {
// 	spotRate: "1.41802",
// 	forwardPoints: "117",
// 	timeRemaining: 30
// };

export const executeSentState = Object.assign({}, initialState, {
	message: "Executing"
});

// const executeSentState = {
// 	message: "Executing"
// };
