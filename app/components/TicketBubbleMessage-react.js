import React, {Component} from "react";

export default class TicketBubbleMessage extends Component {
	render() {
		return <span>{this.props.message}</span>;
	}
}
