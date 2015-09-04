import React, {Component} from "react";

import "./GetStreamButton.css";

export default class GetStreamButton extends Component {
	render() {
		return <button
			className="GetStreamButton"
			onClick={this.props.streamRequested}>Get Stream
		</button>;
	}
}
