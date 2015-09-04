import React, {Component} from "react";

export default class TradePoints extends Component {
	render() {
		return <div className="TradePoints">
			<div className="TradePoints-spotRate">
				<label>Spot Rate</label>
				{this.props.spotRate}
			</div>
			<div className="TradePoints-forwardPoints">
				<label>Forward Points</label>
				{this.props.forwardPoints}
			</div>
		</div>;
	}
}
