import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import {
	appReduser,
	userReducer,
	usersReduser,
	postReduser,
	postsReducer,
} from './reducers';

const reducer = combineReducers({
	app: appReduser,
	user: userReducer,
	users: usersReduser,
	post: postReduser,
	posts: postsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
