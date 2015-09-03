import React, {Component} from "react";

import InitialOneWayFWDTicket from "./InitialOneWayFWDTicket-react";
import RequestingOneWayFWDTicket from "./RequestingOneWayFWDTicket-react";
import ExecutableOneWayFWDTicket from "./ExecutableOneWayFWDTicket-react";

const initialState = {
	currencyPair: "EURUSD",
	buySell: "BUY",
	amount: 500,
	dealtCurrency: "EUR",
	contraCurrency: "USD",
	settlementDate: "09/09/2015",
	tenor: "SPOT",
	accounts: [
		{value: "coca-cola", label: "Coca-Cola"},
		{value: "sony", label: "Sony"}
	],
	message: "You can buy 500.00 EUR against USD for settlement on 09/09/2015 (SPOT)"
};

const requestState = {
	message: "Requesting stream"
};

const executeState = {
	spotRate: "1.41802",
	forwardPoints: "117",
	timeRemaining: 30
};

let currentState = initialState;

export default class OneWayFWDTicket extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentState: "initial"
		};
	}

	render() {
		if (this.state.currentState === "initial") {
			const streamRequested = () => this.setState({currentState: "requesting"});

			return <InitialOneWayFWDTicket currentState={initialState} streamRequested={streamRequested}/>;
		} else if (this.state.currentState === "requesting") {
			const cancelStream = () => this.setState({currentState: "initial"});
			const requestingState = Object.assign({}, initialState, requestState);
			setTimeout(() => this.setState({currentState: "executable"}), 1000);

			return <RequestingOneWayFWDTicket currentState={requestingState} cancelStream={cancelStream}/>;
		} else if (this.state.currentState === "executable") {
			const cancelStream = () => this.setState({currentState: "initial"});
			const executeTrade = () => this.setState({currentState: "executesent"});
			const executableState = Object.assign({}, initialState, executeState);

			return <ExecutableOneWayFWDTicket
				currentState={executableState}
				cancelStream={cancelStream}
				executeTrade={executeTrade}/>;
		}
	}
}
