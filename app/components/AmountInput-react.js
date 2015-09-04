import React, {Component} from "react";

export default class AmountInput extends Component {
	render() {
		const isDisabled = this.props.disabled ? true : false;

		return <input
			disabled={isDisabled}
			className="AmountInput"
			value={this.props.amount} onChange={() => {}} />;
	}
}
