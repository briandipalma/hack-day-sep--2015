import React, {Component} from "react";

import "./BuySellToogle.css";

export default class BuySellToogle extends Component {
	render() {
		const isDisabled = this.props.disabled ? true : false;

		return <button disabled={isDisabled} className="BuySellToogle">
			{this.props.buySell}
		</button>;
	}
}
