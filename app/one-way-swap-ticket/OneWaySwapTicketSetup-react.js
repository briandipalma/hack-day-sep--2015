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
			<label className="OneWaySwapTicketSetupLabel">Near Leg</label>
			<OneWayLegSetup
				{...this.props.currentState.firstLegState}
				currentState={this.props.currentState} />
			<div>
				<button className="OneWaySwapTicketSetupLock">Lock</button>
			</div>
			<label className="OneWaySwapTicketSetupLabel">Far Leg</label>
			<div className="OneWaySecondLegSetup">
				<div className="OneWayLegSetupAmountRow">
					<label>{this.props.currentState.secondLegState.buySell}</label>
					<AmountInput amount={this.props.currentState.secondLegState.amount} />
					<label>{this.props.currentState.dealtCurrency}</label>
				</div>
				<div className="OneWayLegSetupForRow">
					<label>FOR</label>
					<span>{this.props.currentState.contraCurrency}</span>
				</div>
				<div className="OneWayLegSetupOnRow">
					<label>ON</label>
					<FXDateInput
						settlementDate={this.props.currentState.secondLegState.settlementDate}
						tenor={this.props.currentState.secondLegState.tenor} />
				</div>
			</div>
			<hr/>
			<div className="OneWaySwapTicketSetupIntoRow">
				<label>INTO</label>
				<AccountSelector accounts={this.props.currentState.accounts} />
			</div>
		</div>;
	}
}
