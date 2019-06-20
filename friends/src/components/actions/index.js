import axios from "axios";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// const token = localStorage.getItem("token");
// const config = { headers: { Authorization: token } };
export const login = creds => dispatch => {
	dispatch({ type: LOGIN_START });
	return axiosWithAuth()
		.post("/api/login", creds)
		.then(res => {
			localStorage.setItem("token", res.data);
			dispatch({ type: LOGIN_SUCCESS });
			return true;
		})
		.catch(err => console.log(err.response));
};

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const getData = () => dispatch => {
	dispatch({ type: FETCH_DATA_START });
	return axiosWithAuth()
		.get("/api/friends")
		.then(res => {
			console.log(res.data);
			dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
		})
		.catch(err => {
			console.log(err.response);
			dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
		});
};
