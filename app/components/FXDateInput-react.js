import React, {Component} from "react";

export default class FXDateInput extends Component {
	render() {
		const dateInputValue = this.props.settlementDate + "(" + this.props.tenor + ")";

		return <input
			className="FXDateInput"
			value={dateInputValue} onChange={() => {}}/>;
	}
}
