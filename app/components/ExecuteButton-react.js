import React, {Component} from "react";

export default class ExecuteButton extends Component {
	render() {
		const action = this.props.buySell + " " + this.props.dealtCurrency;

		return <button onClick={this.props.executeTrade}>
			<div>{action}</div>
			<div>{this.props.rate}</div>
			{this.props.forwardPoints}
		</button>;
	}
}
