import React, {Component} from "react";

import BuySellToggle from "../components/BuySellToggle-react";
import AmountInput from "../components/AmountInput-react";
import DealtCurrencyToggle from "../components/DealtCurrencyToggle-react";
import FXDateInput from "../components/FXDateInput-react";
import AccountSelector from "../components/AccountSelector-react";
import OneWayLegSetup from "../one-way-components/OneWayLegSetup-react";

import "./OneWaySwapTicketSetup.css";

export default class OneWaySwapTicketSetup extends Component {
	render() {
		return <div className="OneWaySwapTicketSetup">
			<h2>Near Leg</h2>
			<OneWayLegSetup
				{...this.props.currentState.firstLegState}
				currentState={this.props.currentState} />
			<button>Lock</button>
			<h2>Far Leg</h2>
			<div>
				<div>
					<label>{this.props.currentState.secondLegState.buySell}</label>
					<AmountInput amount={this.props.currentState.secondLegState.amount} />
					<label>{this.props.currentState.dealtCurrency}</label>
				</div>
				<div>
					<label>FOR</label>
					<span>{this.props.currentState.contraCurrency}</span>
				</div>
				<div>
					<label>ON</label>
					<FXDateInput
						settlementDate={this.props.currentState.secondLegState.settlementDate}
						tenor={this.props.currentState.secondLegState.tenor} />
				</div>
			</div>
			<div>
				<label>INTO</label>
				<AccountSelector accounts={this.props.currentState.accounts} />
			</div>
		</div>;
	}
}
