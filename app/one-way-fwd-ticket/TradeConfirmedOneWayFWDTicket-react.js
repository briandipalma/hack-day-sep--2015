import React, {Component} from "react";

import TicketHeader from "../components/TicketHeader-react";
import TicketConfirmation from "../components/TicketConfirmation-react";

export default class TradeConfirmedOneWayFWDTicket extends Component {
	render() {
		return <div className="OneWayFWDTicket">
			<TicketHeader currencyPair={this.props.currentState.currencyPair} />
			<TicketConfirmation />
			<button onClick={this.props.newTrade}>New Trade</button>
			<button onClick={() => {}}>Print</button>
		</div>;
	}
}
