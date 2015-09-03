import React, {Component} from "react";

export default class TicketBubbleMessage extends Component {
	render() {
		return <div>
			<span>{this.props.message}</span>
		</div>;
	}
}
