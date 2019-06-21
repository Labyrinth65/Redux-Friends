import React, { Component } from "react";
import { getData } from "./actions";
import { connect } from "react-redux";
import FriendCard from "./FriendCard";

export class FriendsList extends Component {
	componentDidMount() {
		this.props.getData();
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<div className="friendList">
					{this.props.friends.map(friend => (
						<FriendCard key={friend.id} {...friend} />
					))}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	friends: state.fetchDataReducer.friends,
	error: state.fetchDataReducer.error,
	fetchingFriends: state.fetchDataReducer.fetchingFriends,
	updatingFriend: state.fetchDataReducer.updatingFriend
});

export default connect(
	mapStateToProps,
	{ getData }
)(FriendsList);
