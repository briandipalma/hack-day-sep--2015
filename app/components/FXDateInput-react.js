import React, {Component} from "react";

export default class FXDateInput extends Component {
	render() {
		const isDisabled = this.props.disabled ? true : false;
		const dateInputValue = this.props.settlementDate + " (" + this.props.tenor + ")";

		return <input
			disabled={isDisabled}
			className="FXDateInput"
			value={dateInputValue} onChange={() => {}}/>;
	}
}
