import React from "react";
import { connect } from "react-redux";
import FriendCard from "./FriendCard";
import Loader from "react-loader-spinner";

const FriendLink = props => {
	if (props.fetchingFriends) {
		return (
			<div className="loadingIcon">
				<Loader type="TailSpin" color="#1f2a38" height="100" width="100" />
			</div>
		);
	}

	return (
		<div className="friend">
			{props.friends
				.filter(friend => friend.id === parseInt(props.match.params.id, 10))
				.map(friend => (
					<FriendCard {...friend} {...props} key={friend.id} />
				))}
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
)(FriendLink);
