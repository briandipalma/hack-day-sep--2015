import React, {Component} from "react";

import BuySellToggle from "../components/BuySellToggle-react";
import AmountInput from "../components/AmountInput-react";
import DealtCurrencyToggle from "../components/DealtCurrencyToggle-react";
import FXDateInput from "../components/FXDateInput-react";
import AccountSelector from "../components/AccountSelector-react";
import OneWayLegSetup from "../one-way-components/OneWayLegSetup-react";

import "./OneWayFWDTicketSetup.css";

export default class OneWayFWDTicketSetup extends Component {
	render() {
		return <div className="OneWayFWDTicketSetup">
			<OneWayLegSetup
				{...this.props.currentState.firstLegState}
				currentState={this.props.currentState} />
			<div className="OneWayFWDTicketSetupIntoRow">
				<label>INTO</label>
				<AccountSelector accounts={this.props.currentState.accounts}/>
			</div>
		</div>;
	}
}
