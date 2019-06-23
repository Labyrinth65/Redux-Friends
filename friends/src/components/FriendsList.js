import React from "react";
import { connect } from "react-redux";
import Friend from "./Friend";
import Loader from "react-loader-spinner";

const FriendsList = props => {
	console.log(props);
	if (props.fetchingFriends) {
		return (
			<div className="loadingIcon">
				<Loader type="TailSpin" color="#1f2a38" height="100" width="100" />
			</div>
		);
	}

	return (
		<div>
			<div className="friendList">
				{props.friends.map(friend => (
					<Friend key={friend.id} {...friend} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	friends: state.fetchDataReducer.friends,
	error: state.fetchDataReducer.error,
	fetchingFriends: state.fetchDataReducer.fetchingFriends
});

export default connect(
	mapStateToProps,
	null
)(FriendsList);
