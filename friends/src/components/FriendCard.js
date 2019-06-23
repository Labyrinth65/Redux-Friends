import React, { Component } from "react";
import CardRender from "./CardRender";
import { deleteFriend, updateFriend } from "./actions";
import { connect } from "react-redux";

export class FriendCard extends Component {
	constructor() {
		super();
		this.state = {
			updating: false
		};
	}

	updateState = e => {
		if (this.state.updating === false) {
			this.setState({
				updating: true
			});
		} else {
			this.setState({
				updating: false
			});
		}
	};

	render() {
		console.log(this.props);
		console.log(this.props.match);
		return (
			<div className="friendCard">
				<div className="cardElement buttonDiv">
					<div onClick={this.updateState} className="updateButton">
						<i className="far fa-edit" />
					</div>
					<div
						onClick={e => {
							e.preventDefault();
							this.props.deleteFriend(this.props.id);
							return this.props.match === undefined
								? null
								: this.props.history.push("/friendslist");
						}}
						className="deleteButton"
					>
						<i className="far fa-trash-alt" />
					</div>
				</div>
				<CardRender
					{...this.props}
					{...this.state}
					updateFriend={this.props.updateFriend}
					updateState={this.updateState}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	error: state.fetchDataReducer.error,
	updatingFriend: state.fetchDataReducer.updatingFriend
});

export default connect(
	mapStateToProps,
	{ updateFriend, deleteFriend }
)(FriendCard);
