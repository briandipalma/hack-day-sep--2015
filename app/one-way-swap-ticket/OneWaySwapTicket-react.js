/* eslint-disable func-style*/
import React, {Component} from "react";

import InitialOneWaySwapTicket from "./InitialOneWaySwapTicket-react";
import RequestingOneWaySwapTicket from "./RequestingOneWaySwapTicket-react";
import ExecutableOneWaySwapTicket from "./ExecutableOneWaySwapTicket-react";
// import TradeConfirmedOneWayFWDTicket from "./TradeConfirmedOneWayFWDTicket-react";
import "./OneWaySwapTicket.css";

import {initialState, requestState, executeState, executeSentState} from "./ticketStates";

export default class OneWaySwapTicket extends Component {
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

			return <InitialOneWaySwapTicket currentState={initialState} streamRequested={streamRequested}/>;
		} else if (this.state.currentState === "requesting") {
			setTimeout(() => this.setState({currentState: "executable"}), 1000);

			return <RequestingOneWaySwapTicket currentState={requestState} cancelStream={cancelStream}/>;
		} else if (this.state.currentState === "executable") {
			const executeTrade = () => this.setState({currentState: "executesent"});

			return <ExecutableOneWaySwapTicket
				currentState={executeState}
				cancelStream={cancelStream}
				executeTrade={executeTrade}/>;
		}
	}
}
