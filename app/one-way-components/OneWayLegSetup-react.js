import React, {Component} from "react";

import BuySellToggle from "../components/BuySellToggle-react";
import AmountInput from "../components/AmountInput-react";
import DealtCurrencyToggle from "../components/DealtCurrencyToggle-react";
import FXDateInput from "../components/FXDateInput-react";
import "./OneWayLegSetup.css";

export default class OneWayLegSetup extends Component {
	render() {
		return <div className="OneWayLegSetup">
				<div className="OneWayLegSetupAmountRow">
					<div className="BuySellToggleHolder">
						<BuySellToggle
							buySell={this.props.buySell}
							disabled={this.props.disabled} />
					</div>
					<div className="AmountInputHolder">
						<AmountInput
							amount={this.props.amount}
							disabled={this.props.disabled} />
					</div>
					<DealtCurrencyToggle
						dealtCurrency={this.props.currentState.dealtCurrency}
						disabled={this.props.disabled} />
				</div>
				<div className="OneWayLegSetupForRow">
					<label>FOR</label>
					<span>{this.props.currentState.contraCurrency}</span>
				</div>
				<div className="OneWayLegSetupOnRow">
					<label>ON</label>
					<div className="FXDateInputHolder">
						<FXDateInput
							settlementDate={this.props.settlementDate}
							tenor={this.props.tenor}
							disabled={this.props.disabled} />
					</div>
				</div>
			</div>;
	}
}
