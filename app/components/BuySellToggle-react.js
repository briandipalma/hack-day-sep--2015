import React, {Component} from "react";

export default class BuySellToogle extends Component {
	render() {
		return <button>
			{this.props.buySell}
		</button>;
	}
}
