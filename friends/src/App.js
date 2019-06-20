import React from "react";
import "./App.scss";
import {
	BrowserRouter as Router,
	Route,
	Link,
	NavLink
} from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

function App() {
	return (
		<Router>
			<div className="App">
				<div className="navBar">
					<NavLink exact to="/login" className="navLink">
						Login
					</NavLink>
					<NavLink exact to="/friendslist" className="navLink">
						Friends List
					</NavLink>
				</div>
				<Route path="/login" component={Login} />
				<PrivateRoute exact path="/friendslist" component={FriendsList} />
			</div>
		</Router>
	);
}

export default App;
