import React, {Component} from "react";

export default class DealtCurrenyToggle extends Component {
	render() {
		const isDisabled = this.props.disabled ? true : false;

		return <button disabled={isDisabled}>
			{this.props.dealtCurrency}
		</button>;
	}
}
