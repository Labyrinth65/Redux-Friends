import React from "react";
import { Link } from "react-router-dom";
import FriendCard from "../components/FriendCard";

class Friend extends React.Component {
	render() {
		return (
			<div className="friend">
				<Link to={`/friend/${this.props.id}`} className="viewDiv">
					View Friend
				</Link>
				<FriendCard {...this.props} />
			</div>
		);
	}
}

export default Friend;
