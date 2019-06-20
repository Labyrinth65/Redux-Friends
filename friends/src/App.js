import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

function App() {
	return (
		<Router>
			<div className="App">
				<Route exact path="/" component={Login} />
				<PrivateRoute exact path="/friendslist" component={FriendsList} />
			</div>
		</Router>
	);
}

export default App;
