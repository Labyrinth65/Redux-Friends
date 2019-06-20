import React, { Component } from "react";
import { getData, addFriend } from "./actions";
import { connect } from "react-redux";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import FriendCard from "./FriendCard";
import AddFriend from "./AddFriend";

export class FriendsList extends Component {
	componentDidMount() {
		this.props.getData();
	}

	render() {
		console.log(this.props);
		return (
			<Router>
				<div className="navBar">
					<NavLink exact to="/friendslist" className="navLink">
						Friends List
					</NavLink>
					<NavLink exact to="/addfriend" className="navLink">
						Add Friends
					</NavLink>
				</div>
				<Route
					exact
					path="/friendslist"
					render={props => (
						<div className="friendList">
							{this.props.friends.map(friend => (
								<FriendCard key={friend.id} {...friend} />
							))}
						</div>
					)}
				/>
				<Route
					exact
					path="/addfriend"
					render={props => (
						<AddFriend {...props} addFriend={this.props.addFriend} />
					)}
				/>
			</Router>
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
	{ getData, addFriend }
)(FriendsList);
