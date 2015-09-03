export const initialState = {
	dealtCurrency: "EUR",
	currencyPair: "EURUSD",
	firstLegState: {
		amount: 500,
		tenor: "SPOT",
		buySell: "BUY",
		settlementDate: "09/09/2015"
	},
	secondLegState: {
		amount: 500,
		tenor: "1W",
		buySell: "SELL",
		settlementDate: "16/09/2015"
	},
	contraCurrency: "USD",
	accounts: [
		{value: "coca-cola", label: "Coca-Cola"},
		{value: "sony", label: "Sony"}
	],
	message: "You can B/S 500.00 EUR against USD for settlement on 09/09/2015 (SPOT) and 15/09/2015 (1W)"
};
