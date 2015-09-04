import React, {Component} from "react";

import TicketHeader from "../components/TicketHeader-react";
import GetStreamButton from "../components/GetStreamButton-react";
import OneWayFWDTicketSetup from "./OneWayFWDTicketSetup-react";
import TicketBubbleMessage from "../components/TicketBubbleMessage-react";

export default class InitialOneWayFWDTicket extends Component {
	render() {
		return <div className="OneWayFWDTicket">
			<TicketHeader currencyPair={this.props.currentState.currencyPair} />
			<OneWayFWDTicketSetup currentState={this.props.currentState} />
			<div className="OneWayFWDTicketBody">
				<TicketBubbleMessage message={this.props.currentState.message} />
			</div>
			<div className="OneWayFWDTicketFooter">
				<GetStreamButton streamRequested={this.props.streamRequested}/>
			</div>
		</div>;
	}
}
