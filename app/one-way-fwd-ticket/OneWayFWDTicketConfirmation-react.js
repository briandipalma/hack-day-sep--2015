import React, {Component} from "react";

import "./OneWayFWDTicketConfirmation.css";

export default class OneWayFWDTicketConfirmation extends Component {
	render() {
		return <div className="OneWayFWDTicketConfirmation">
			<table>
				<tbody>
					<tr>
						<td>Account:</td>
						<td>Execution Time:</td>
					</tr>
					<tr>
						<td>{this.props.selectedAccount}</td>
						<td>{this.props.executionTime}</td>
					</tr>
					<tr>
						<td>Trade ID:</td>
						<td>Submitted by:</td>
					</tr>
					<tr>
						<td>{this.props.tradeID}</td>
						<td>{this.props.submittedBy}</td>
					</tr>
				</tbody>
			</table>

			<table>
				<tbody>
					<tr>
						<td>You Bought:</td>
						<td>You Sold:</td>
					</tr>
					<tr>
						<td>{this.props.selectedAccount}</td>
						<td>{this.props.executionTime}</td>
					</tr>
					<tr>
						<td>Spot Rate:</td>
						<td>Forward Points:</td>
					</tr>
					<tr>
						<td>{this.props.tradeID}</td>
						<td>{this.props.submittedBy}</td>
					</tr>
					<tr>
						<td>Value Date:</td>
						<td>All-In Rate:</td>
					</tr>
					<tr>
						<td>{this.props.tradeID}</td>
						<td>{this.props.submittedBy}</td>
					</tr>
					<tr>
						<td>Currency Pair:</td>
					</tr>
					<tr>
						<td>{this.props.tradeID}</td>
					</tr>
				</tbody>
			</table>

			<table>
				<tbody>
					<tr>
						<td>Regulatory ID:</td>
					</tr>
					<tr>
						<td>{this.props.selectedAccount}</td>
					</tr>
				</tbody>
			</table>
		</div>;
	}
}
