import React, { Component } from "react";
import { login, getData } from "./actions";
import { connect } from "react-redux";

export class FriendsList extends Component {
	componentDidMount() {
		this.props.getData();
	}

	render() {
		console.log(this.props);
		return (
			<div>
				Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder
			</div>
		);
	}
}

const mapStateToProps = state => ({
	// friends: state.getData.friends,
	// error: state.getData.error,
	// fetchingFriends: state.getData.fetchingFriends,
	// savingFriends: state.getData.savingFriends,
	// updatingFriend: state.getData.updatingFriend,
	// deletingFriend: state.getData.deletingFriend
});

export default connect(
	mapStateToProps,
	{ getData }
)(FriendsList);
