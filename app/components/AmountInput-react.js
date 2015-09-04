import React, {Component} from "react";

export default class AmountInput extends Component {
	render() {
		return <input
			className="AmountInput"
			value={this.props.amount} onChange={() => {}} />;
	}
}
