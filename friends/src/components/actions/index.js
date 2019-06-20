// import axios from "axios";
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
			localStorage.setItem("token", res.data.payload);
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
	axiosWithAuth()
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

export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const ADD_FRIEND_FAIL = "ADD_FRIEND_FAIL";
export const addFriend = friend => dispatch => {
	axiosWithAuth()
		.post("/api/friends", friend)
		.then(res => {
			console.log(res.data);
			dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data });
		})
		.catch(err => {
			console.log(err.response);
			dispatch({ type: ADD_FRIEND_FAIL, payload: err.response });
		});
};

export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS";
export const DELETE_FRIEND_FAIL = "DELETE_FRIEND_FAIL";

export const UPDATE_FRIEND_START = "UPDATE_FRIEND_START";
export const UPDATE_FRIEND_SUCCESS = "UPDATE_FRIEND_SUCCESS";
export const UPDATE_FRIEND_FAIL = "UPDATE_FRIEND_FAIL";
