import React, {Component} from "react";

import "./TicketHeader.css";

export default class TicketHeader extends Component {
	render() {
		return <div className="TicketHeader">
			{this.props.currencyPair}
			<button>Menu</button>
			<button>Close</button>
		</div>;
	}
}
