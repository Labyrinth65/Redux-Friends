import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { getData } from "./components/actions";
import { connect } from "react-redux";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import AddFriend from "./components/AddFriend";
import FriendLink from "./components/FriendLink";

// add routes to individual friends/cards
class App extends React.Component {
	componentDidMount() {
		this.props.getData();
	}

	render() {
		console.log(this.props);
		return (
			<Router>
				<div className="App">
					<Route exact path="/" component={Login} />
					<PrivateRoute exact path="/friendslist" component={FriendsList} />
					<PrivateRoute exact path="/addfriend" component={AddFriend} />
					<PrivateRoute exact path="/friend/:id" component={FriendLink} />
				</div>
			</Router>
		);
	}
}

const mapStateToProps = state => ({
	error: state.fetchDataReducer.error,
	fetchingFriends: state.fetchDataReducer.fetchingFriends
});

export default connect(
	mapStateToProps,
	{ getData }
)(App);
