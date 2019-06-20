import React from "react";
// import { Link } from "react-router-dom";

class AddFriend extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "",
			age: "",
			email: ""
		};
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		console.log(this.props);
		return (
			<div>
				{/* <Link to={`/friendslist`} className="toHome">
				<button>Back to List</button>
			</Link> */}
				<form
					onSubmit={e => {
						e.preventDefault();
						const newFriend = {
							name: this.state.name,
							age: parseInt(this.state.age),
							email: this.state.email
						};
						this.props.addFriend(newFriend);
						this.props.history.push("/friendslist");
					}}
					className="friendAdd"
				>
					<label htmlFor="name">Name</label>
					<input
						onChange={this.handleChange}
						name="name"
						id="name"
						placeholder="Enter Name"
						value={this.props.name}
						type="text"
						className="addElement"
						required
					/>
					<label htmlFor="age">Age</label>
					<input
						onChange={this.handleChange}
						name="age"
						id="age"
						placeholder="Enter Age"
						value={this.props.age}
						type="number"
						className="addElement"
						required
					/>
					<label htmlFor="email">Email</label>
					<input
						onChange={this.handleChange}
						name="email"
						id="email"
						placeholder="Enter Email"
						value={this.props.email}
						type="email"
						className="addElement"
						required
					/>
					<button>Add Friend</button>
				</form>
			</div>
		);
	}
}

export default AddFriend;
