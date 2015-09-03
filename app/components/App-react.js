import React, {Component} from "react";

import OneWayFWDTicket from "../one-way-fwd-ticket/OneWayFWDTicket-react";
import OneWaySwapTicket from "../one-way-swap-ticket/OneWaySwapTicket-react";
import TimeOptionTicket from "../time-option-ticket/TimeOptionTicket-react";
import TwoWayFWDTicket from "../two-way-fwd-ticket/TwoWayFWDTicket-react";
import TwoWaySwapTicket from "../two-way-swap-ticket/TwoWaySwapTicket-react";

export default class App extends Component {
	render() {
		return <div>
			<h2>All the tickets.</h2>
			<div>OneWayFWDTicket</div>
			<OneWayFWDTicket />
			<div>OneWaySwapTicket</div>
			<OneWaySwapTicket />
		</div>;
		// <TimeOptionTicket name={this.props.name} />
		// <TwoWayFWDTicket name={this.props.name} />
		// <TwoWaySwapTicket name={this.props.name} />
	}
}
