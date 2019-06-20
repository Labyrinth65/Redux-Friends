import { combineReducers } from "redux";
import {
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	FETCH_DATA_START,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAILURE,
	ADD_FRIEND_SUCCESS,
	ADD_FRIEND_FAIL
} from "../actions";

const initialState = {
	friends: [],
	loggingIn: false,
	fetchingFriends: false,
	updatingFriend: false,
	error: null
};

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_START:
			return {
				...state,
				loggingIn: true,
				error: null
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				loggingIn: false,
				error: null
			};
		case LOGIN_FAILURE:
			return {
				...state,
				loggingIn: false,
				error: action.payload
			};
		default:
			return state;
	}
};

const fetchDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DATA_START:
			return {
				...state,
				error: null,
				fetchingFriends: true
			};
		case FETCH_DATA_SUCCESS:
			return {
				...state,
				fetchingFriends: false,
				friends: action.payload,
				error: null
			};
		case FETCH_DATA_FAILURE:
			return {
				...state,
				fetchingFriends: false,
				error: action.payload
			};
		case ADD_FRIEND_SUCCESS:
			return {
				...state,
				friends: action.payload
			};
		case ADD_FRIEND_FAIL:
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
};

const friendReducer = combineReducers({
	loginReducer,
	fetchDataReducer
});

export default friendReducer;
