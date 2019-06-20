import React, { Component } from "react";
import PropTypes from "prop-types";

export class CardRender extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cardName: this.props.name,
			cardAge: this.props.age,
			cardEmail: this.props.email
		};
	}

	handleUpdate = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	formSubmit = e => {
		const updatedFriend = {
			name: this.state.cardName,
			age: parseInt(this.state.cardAge),
			email: this.state.cardEmail
		};
		this.props.updateFriend(e, this.props.id, updatedFriend);
		this.props.updateState();
	};

	render() {
		if (this.props.updating === false) {
			return (
				<div>
					<div className="cardElement">{this.props.name}</div>
					<div className="cardElement">{this.props.age}</div>
					<div className="cardElement">{this.props.email}</div>
				</div>
			);
		} else
			return (
				<form onSubmit={this.formSubmit} className="updateForm">
					<div>
						<input
							onChange={this.handleUpdate}
							name="cardName"
							placeholder="Enter Name"
							value={this.state.cardName}
							type="text"
							className="cardElement"
							required
						/>
						<input
							onChange={this.handleUpdate}
							name="cardAge"
							placeholder="Enter Age"
							value={this.state.cardAge}
							type="number"
							className="cardElement"
							required
						/>
						<input
							onChange={this.handleUpdate}
							name="cardEmail"
							placeholder="Enter Email"
							value={this.state.cardEmail}
							type="email"
							className="cardElement"
							required
						/>
					</div>
					<button>Submit Update</button>
				</form>
			);
	}
}

CardRender.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	email: PropTypes.string.isRequired
};

export default CardRender;
