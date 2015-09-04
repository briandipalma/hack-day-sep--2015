import React, {Component} from "react";

export default class AccountSelector extends Component {
	render() {
		const accounts = this.props.accounts
			.map(account => <option key={account.value} value={account.value}>{account.label}</option>);
		const isDisabled = this.props.disabled ? true : false;

		return <select disabled={isDisabled} name="select">
			{accounts}
		</select>;
	}
}
