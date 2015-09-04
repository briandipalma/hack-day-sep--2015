import React, {Component} from "react";

import TicketHeader from "../components/TicketHeader-react";
import TicketBubbleMessage from "../components/TicketBubbleMessage-react";
import OneWayFWDTicketConfirmation from "./OneWayFWDTicketConfirmation-react";

export default class TradeConfirmedOneWayFWDTicket extends Component {
	render() {
		return <div className="OneWayFWDTicket TradeConfirmedOneWayFWDTicket">
			<TicketHeader currencyPair={this.props.currentState.currencyPair} />
			<OneWayFWDTicketConfirmation {...this.props.currentState} />
			<div className="TradeConfirmedOneWayFWDTicketMessage">
				<TicketBubbleMessage message={this.props.currentState.message} />
			</div>
			<div className="OneWayFWDTicketFooter">
				<button
				className="GetStreamButton"
				onClick={this.props.newTrade}>
					New Trade
				</button>
				<button
					className="GetStreamButton"
					onClick={() => {}}>
						Print
				</button>
			</div>
		</div>;
	}
}
