import React, {Component} from "react";

import TicketBubbleMessage from "../components/TicketBubbleMessage-react";

export default class OneWayFWDTicketMessageBody extends Component {
	render() {
		return <div>
			<TicketBubbleMessage message={this.props.message}/>
		</div>;
	}
}
