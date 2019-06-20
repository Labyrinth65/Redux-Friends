import React, { Component } from "react";
import { getData } from "./actions";
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
	friends: state.fetchDataReducer.friends,
	error: state.fetchDataReducer.error,
	fetchingFriends: state.fetchDataReducer.fetchingFriends,
	savingFriends: state.fetchDataReducer.savingFriends,
	updatingFriend: state.fetchDataReducer.updatingFriend,
	deletingFriend: state.fetchDataReducer.deletingFriend
});

export default connect(
	mapStateToProps,
	{ getData }
)(FriendsList);
