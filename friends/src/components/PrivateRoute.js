import React from "react";
import { Route, Redirect, NavLink } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={props => {
				if (localStorage.getItem("token")) {
					return (
						<>
							<div className="navBar">
								<NavLink exact to="/friendslist" className="navLink">
									Friends List
								</NavLink>
								<NavLink exact to="/addfriend" className="navLink">
									Add Friends
								</NavLink>
							</div>
							<Component {...props} />
						</>
					);
				}
				return <Redirect to="/login" />;
			}}
		/>
	);
}
