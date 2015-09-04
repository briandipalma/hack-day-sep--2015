import React, {Component} from "react";

import "./TicketHeader.css";

export default class TicketHeader extends Component {
	render() {
		return <div className="TicketHeader">
			<span>{this.props.currencyPair}</span>
			<button>Menu</button>
			<button>Close</button>
		</div>;
	}
}
