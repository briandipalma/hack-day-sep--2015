import React, {Component} from "react";

export default class DealtCurrenyToggle extends Component {
	render() {
		return <button>
			{this.props.dealtCurrency}
		</button>;
	}
}
