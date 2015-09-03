import React, {Component} from "react";

import BuySellToggle from "../components/BuySellToggle-react";
import AmountInput from "../components/AmountInput-react";
import DealtCurrencyToggle from "../components/DealtCurrencyToggle-react";
import FXDateInput from "../components/FXDateInput-react";

export default class OneWayLegSetup extends Component {
	render() {
		return <div className="OneWayLegSetup">
				<div>
					<BuySellToggle buySell={this.props.buySell} />
					<AmountInput amount={this.props.amount} />
					<DealtCurrencyToggle dealtCurrency={this.props.currentState.dealtCurrency} />
				</div>
				<div>
					<label>FOR</label>
					<span>{this.props.currentState.contraCurrency}</span>
				</div>
				<div>
					<label>ON</label>
					<FXDateInput
						settlementDate={this.props.settlementDate}
						tenor={this.props.tenor} />
				</div>
			</div>;
	}
}
