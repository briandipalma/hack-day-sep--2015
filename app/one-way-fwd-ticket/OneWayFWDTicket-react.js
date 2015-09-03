import React, {Component} from "react";

import TicketHeader from "../components/TicketHeader-react";
import BuySellToggle from "../components/BuySellToggle-react";
import AmountInput from "../components/AmountInput-react";
import DealtCurrencyToggle from "../components/DealtCurrencyToggle-react";
import FXDateInput from "../components/FXDateInput-react";
import AccountSelector from "../components/AccountSelector-react";
import TicketBubbleMessage from "../components/TicketBubbleMessage-react";
import GetStreamButton from "../components/GetStreamButton-react";

const initialState = {
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

let currentState = initialState;

export default class OneWayFWDTicket extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentState: "initial"
		};
	}

	render() {
		return <div>
			<TicketHeader currencyPair={currentState.currencyPair} />
			<div>
				<BuySellToggle buySell={currentState.buySell} />
				<AmountInput amount={currentState.amount} />
				<DealtCurrencyToggle dealtCurrency={currentState.dealtCurrency} />
			</div>
			<div>
				<label>FOR</label>
				<span>{currentState.contraCurrency}</span>
			</div>
			<div>
				<label>ON</label>
				<FXDateInput settlementDate={currentState.settlementDate} tenor={currentState.tenor} />
			</div>
			<div>
				<label>INTO</label>
				<AccountSelector accounts={currentState.accounts}/>
			</div>
			<div>
				<TicketBubbleMessage message={currentState.message}/>
			</div>
			<div>
				<GetStreamButton streamRequested={() => this.setState({currentState: "requesting"})}/>
			</div>
		</div>;
	}
}
