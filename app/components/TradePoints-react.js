import React, {Component} from "react";

export default class TradePoints extends Component {
	render() {
		return <div>
			<div>Spot Rate {this.props.spotRate}</div>
			<div>Forward Points {this.props.forwardPoints}</div>
		</div>;
	}
}
