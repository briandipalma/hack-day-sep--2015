import React, {Component} from "react";

export default class GetStreamButton extends Component {
	render() {
		return <button onClick={this.props.streamRequested}>Get Stream</button>;
	}
}
