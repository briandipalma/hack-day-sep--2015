import React, {Component} from "react";

import BuySellToggle from "../components/BuySellToggle-react";
import AmountInput from "../components/AmountInput-react";
import DealtCurrencyToggle from "../components/DealtCurrencyToggle-react";
import FXDateInput from "../components/FXDateInput-react";
import AccountSelector from "../components/AccountSelector-react";

export default class OneWayFWDTicket extends Component {
	render() {
		return <div>
			<div>
				<BuySellToggle buySell={this.props.currentState.buySell} />
				<AmountInput amount={this.props.currentState.amount} />
				<DealtCurrencyToggle dealtCurrency={this.props.currentState.dealtCurrency} />
			</div>
			<div>
				<label>FOR</label>
				<span>{this.props.currentState.contraCurrency}</span>
			</div>
			<div>
				<label>ON</label>
				<FXDateInput
					settlementDate={this.props.currentState.settlementDate}
					tenor={this.props.currentState.tenor} />
			</div>
			<div>
				<label>INTO</label>
				<AccountSelector accounts={this.props.currentState.accounts}/>
			</div>
		</div>;
	}
}
