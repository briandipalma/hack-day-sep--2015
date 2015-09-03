import React, {Component} from "react";

import TicketHeader from "../components/TicketHeader-react";
import OneWayFWDTicketSetup from "./OneWayFWDTicketSetup-react";
import ExecutableOneWayFWDTicketBody from "./ExecutableOneWayFWDTicketBody-react";

export default class ExecutableOneWayFWDTicket extends Component {
	render() {
		return <div>
			<TicketHeader currencyPair={this.props.currentState.currencyPair} />
			<OneWayFWDTicketSetup currentState={this.props.currentState} />
			<ExecutableOneWayFWDTicketBody
				currentState={this.props.currentState}
				executeTrade={this.props.executeTrade}/>
			<button onClick={this.props.cancelStream}>Cancel</button>
		</div>;
	}
}