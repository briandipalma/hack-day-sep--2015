/* eslint-disable func-style*/
import React, {Component} from "react";

import InitialOneWayFWDTicket from "./InitialOneWayFWDTicket-react";
import RequestingOneWayFWDTicket from "./RequestingOneWayFWDTicket-react";
import ExecutableOneWayFWDTicket from "./ExecutableOneWayFWDTicket-react";
import TradeConfirmedOneWayFWDTicket from "./TradeConfirmedOneWayFWDTicket-react";

import {initialState, requestState, executeState, executeSentState} from "./ticketStates";

export default class OneWayFWDTicket extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentState: "initial"
		};
	}

	render() {
		const cancelStream = () => this.setState({currentState: "initial"});

		if (this.state.currentState === "initial") {
			const streamRequested = () => this.setState({currentState: "requesting"});

			return <InitialOneWayFWDTicket currentState={initialState} streamRequested={streamRequested}/>;
		} else if (this.state.currentState === "requesting") {
			setTimeout(() => this.setState({currentState: "executable"}), 1000);

			return <RequestingOneWayFWDTicket currentState={requestState} cancelStream={cancelStream}/>;
		} else if (this.state.currentState === "executable") {
			const executeTrade = () => this.setState({currentState: "executesent"});

			return <ExecutableOneWayFWDTicket
				currentState={executeState}
				cancelStream={cancelStream}
				executeTrade={executeTrade}/>;
		} else if (this.state.currentState === "executesent") {
			setTimeout(() => this.setState({currentState: "tradeconfirmed"}), 1000);

			return <RequestingOneWayFWDTicket currentState={executeSentState} cancelStream={cancelStream}/>;
		} else if (this.state.currentState === "tradeconfirmed") {
			return <TradeConfirmedOneWayFWDTicket currentState={initialState} newTrade={cancelStream}/>
		}
	}
}
