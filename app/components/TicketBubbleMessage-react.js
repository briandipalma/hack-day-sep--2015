import React, {Component} from "react";

import "./TicketBubbleMessage.css";

export default class TicketBubbleMessage extends Component {
	render() {
		return <div className="TicketBubbleMessage">
			<span>{this.props.message}</span>
		</div>;
	}
}
