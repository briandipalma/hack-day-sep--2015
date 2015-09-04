import React, {Component} from "react";

export default class SwapExecuteButton extends Component {
	render() {
		const action = this.props.firstLegBuySell + "/" + this.props.secondLegBuySell + " " + this.props.dealtCurrency;

		return <button onClick={this.props.executeTrade}>
			<div>{action}</div>
			{this.props.farLegPoints}
		</button>;
	}
}
