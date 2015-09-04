import React, {Component} from "react";

export default class OneWaySwapTicketTradePoints extends Component {
	render() {
		return <div>
			<div>Spot Rate {this.props.spotRate}</div>
			<div>Near Leg Points {this.props.nearLegPoints}</div>
			<div>Far Leg Points {this.props.farLegPoints}</div>
		</div>;
	}
}
