import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import AddFriend from "./components/AddFriend";

// add routes to individual friends/cards
function App() {
	return (
		<Router>
			<div className="App">
				<Route exact path="/" component={Login} />
				<PrivateRoute exact path="/friendslist" component={FriendsList} />
				<PrivateRoute exact path="/addfriend" component={AddFriend} />
			</div>
		</Router>
	);
}

export default App;
