export const initialState = {
	dealtCurrency: "EUR",
	currencyPair: "EURUSD",
	firstLegState: {
		amount: 500,
		tenor: "SPOT",
		buySell: "BUY",
		settlementDate: "09/09/2015"
	},
	contraCurrency: "USD",
	accounts: [
		{value: "coca-cola", label: "Coca-Cola"},
		{value: "sony", label: "Sony"}
	],
	message: "You can buy 500.00 EUR against USD for settlement on 09/09/2015 (SPOT)"
};

export const requestState = Object.assign({}, initialState, {
	message: "Requesting stream"
});

export const executeState = Object.assign({}, initialState, {
	spotRate: "1.41802",
	forwardPoints: "117",
	timeRemaining: 30
});

export const executeSentState = Object.assign({}, initialState, {
	message: "Executing"
});
