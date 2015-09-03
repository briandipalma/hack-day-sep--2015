import React, {Component} from "react";

import TicketHeader from "../components/TicketHeader-react";
import OneWayFWDTicketSetup from "./OneWayFWDTicketSetup-react";
import OneWayFWDTicketMessageBody from "./OneWayFWDTicketMessageBody-react";

export default class RequestingOneWayFWDTicket extends Component {
	render() {
		return <div>
			<TicketHeader currencyPair={this.props.currentState.currencyPair} />
			<OneWayFWDTicketSetup currentState={this.props.currentState} />
			<OneWayFWDTicketMessageBody message={this.props.currentState.message} />
			<button onClick={this.props.cancelStream}>Cancel</button>
		</div>;
	}
}
