import React from "react";
import { connect } from "react-redux";
import { login } from "./actions";
import Loader from "react-loader-spinner";

class Login extends React.Component {
	state = {
		credentials: {
			username: "",
			password: ""
		}
	};

	handleCredChange = e => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[e.target.name]: e.target.value
			}
		});
	};

	login = e => {
		e.preventDefault();
		this.props.login(this.state.credentials).then(res => {
			if (res) {
				this.props.history.push("/protected");
			}
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.login}>
					<input
						type="text"
						name="username"
						value={this.state.credentials.username}
						onChange={this.handleCredChange}
					/>
					<input
						type="password"
						name="password"
						value={this.state.credentials.password}
						onChange={this.handleCredChange}
					/>
					<button>
						{this.props.loggingIn ? (
							<Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
						) : (
							"Log In"
						)}
					</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	error: state.loginReducer.error,
	loggingIn: state.loginReducer.loggingIn
});

export default connect(
	mapStateToProps,
	{ login }
)(Login);
