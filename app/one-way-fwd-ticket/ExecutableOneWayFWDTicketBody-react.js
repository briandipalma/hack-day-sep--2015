import React, {Component} from "react";

import Spinner from "../components/Spinner-react";
import TradePoints from "../components/TradePoints-react";
import ExecuteButton from "../components/ExecuteButton-react";

import "./ExecutableOneWayFWDTicketBody.css";

export default class ExecutableOneWayFWDTicketBody extends Component {
	render() {
		return <div className="ExecutableOneWayFWDTicketBody">
			<TradePoints
				spotRate={this.props.currentState.spotRate}
				forwardPoints={this.props.currentState.forwardPoints} />
			<Spinner
				timeRemaining={this.props.currentState.timeRemaining} />
			<div>
				<ExecuteButton
					buySell={this.props.currentState.firstLegState.buySell}
					dealtCurrency={this.props.currentState.dealtCurrency}
					forwardPoints={this.props.currentState.forwardPoints}
					rate={this.props.currentState.spotRate}
					executeTrade={this.props.executeTrade}/>
			</div>
		</div>;
	}
}
