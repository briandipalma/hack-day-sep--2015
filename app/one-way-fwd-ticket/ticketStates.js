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

export const executeState = () => {
	return Object.assign({}, initialState, {
		spotRate: (1.41802 * Math.random()).toFixed(4),
		forwardPoints: Math.round(117 * Math.random()),
		timeRemaining: Math.round(30 * Math.random())
	});
}

// export const executeState = Object.assign({}, initialState, {
// 	spotRate: "1.41802",
// 	forwardPoints: "117",
// 	timeRemaining: 30
// });

export const executeSentState = Object.assign({}, initialState, {
	message: "Executing"
});

export const tradeConfirmState = Object.assign({}, initialState, {
	selectedAccount: "Coca-Cola",
	executionTime: "04/09/2015 15:26:39",
	tradeID: "LL.1441358799.9.2.1",
	submittedBy: "user1@caplin.com",
	message: "You have bought 500.00 EUR and sold 712.60 USD for settlement on 15/09/2015 (1W)"
});
