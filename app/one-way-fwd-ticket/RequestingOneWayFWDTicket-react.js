import React, {Component} from "react";

import TicketHeader from "../components/TicketHeader-react";
import OneWayFWDTicketSetup from "./OneWayFWDTicketSetup-react";
import TicketBubbleMessage from "../components/TicketBubbleMessage-react";

export default class RequestingOneWayFWDTicket extends Component {
	render() {
		return <div className="OneWayFWDTicket">
			<TicketHeader currencyPair={this.props.currentState.currencyPair} />
			<OneWayFWDTicketSetup
				currentState={this.props.currentState}
				disabledInputs={true} />
			<div className="OneWayFWDTicketBody">
				<TicketBubbleMessage message={this.props.currentState.message} />
			</div>
			<div className="OneWayFWDTicketFooter">
						<button
							className="GetStreamButton"
							onClick={this.props.cancelStream}>
							Cancel
						</button>
			</div>
		</div>;
	}
}
