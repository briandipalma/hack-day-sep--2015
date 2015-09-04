import React, {Component} from "react";

import Spinner from "../components/Spinner-react";
import OneWaySwapTicketTradePoints from "./OneWaySwapTicketTradePoints-react";
import SwapExecuteButton from "../components/SwapExecuteButton-react";

export default class ExecutableOneWayFWDTicket extends Component {
	render() {
		return <div>
			<OneWaySwapTicketTradePoints
				spotRate={this.props.currentState.spotRate}
				nearLegPoints={this.props.currentState.nearLegPoints}
				farLegPoints={this.props.currentState.farLegPoints} />
			<Spinner
				timeRemaining={this.props.currentState.timeRemaining} />
			<SwapExecuteButton
				firstLegBuySell={this.props.currentState.firstLegState.buySell}
				secondLegBuySell={this.props.currentState.secondLegState.buySell}
				dealtCurrency={this.props.currentState.dealtCurrency}
				farLegPoints={this.props.currentState.farLegPoints}
				executeTrade={this.props.executeTrade}/>
		</div>;
	}
}
