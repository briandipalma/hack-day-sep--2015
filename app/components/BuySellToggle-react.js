import React, {Component} from "react";

import "./BuySellToogle.css";

export default class BuySellToogle extends Component {
	render() {
		return <button className="BuySellToogle">
			{this.props.buySell}
		</button>;
	}
}
