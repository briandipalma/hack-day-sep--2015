import React, {Component} from "react";

import OneWayFWDTicket from "../one-way-fwd-ticket/OneWayFWDTicket-react";
import OneWaySwapTicket from "../one-way-swap-ticket/OneWaySwapTicket-react";
import TimeOptionTicket from "../time-option-ticket/TimeOptionTicket-react";
import TwoWayFWDTicket from "../two-way-fwd-ticket/TwoWayFWDTicket-react";
import TwoWaySwapTicket from "../two-way-swap-ticket/TwoWaySwapTicket-react";

export default class App extends Component {
	render() {
		return <div style={{display: "flex"}}>
			<div style={{marginRight: "30px"}}>
				<div style={{marginBottom: "10px"}}>OneWayFWDTicket</div>
				<OneWayFWDTicket />
			</div>
			<div>
				<div style={{marginBottom: "10px"}}>OneWaySwapTicket</div>
				<OneWaySwapTicket />
			</div>
		</div>;
		// <TimeOptionTicket name={this.props.name} />
		// <TwoWayFWDTicket name={this.props.name} />
		// <TwoWaySwapTicket name={this.props.name} />
	}
}
