import React, {Component} from "react";

import TicketHeader from "../components/TicketHeader-react";
import OneWaySwapTicketSetup from "./OneWaySwapTicketSetup-react";
import ExecutableOneWaySwapTicketBody from "./ExecutableOneWaySwapTicketBody-react";

export default class RequestingOneWaySwapTicket extends Component {
	render() {
		return <div className="OneWaySwapTicket">
			<TicketHeader currencyPair={this.props.currentState.currencyPair} />
			<OneWaySwapTicketSetup currentState={this.props.currentState} />
			<ExecutableOneWaySwapTicketBody
				currentState={this.props.currentState}
				executeTrade={this.props.executeTrade}/>
			<div className="OneWayFWDTicketFooter">
				<button
					className="GetStreamButton"
					onClick={this.props.cancelStream}>Cancel</button>
			</div>
		</div>;
	}
}
