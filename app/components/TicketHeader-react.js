import React, {Component} from "react";

export default class TicketHeader extends Component {
	render() {
		return <div>
			{this.props.currencyPair}
			<button>Menu</button>
			<button>Close</button>
		</div>;
	}
}
