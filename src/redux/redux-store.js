import { combineReducers, createStore } from 'redux';
import dialogsReducer from "./dialogs-reducer";
import publishedReducer from "./published-reducer";

let reducers = combineReducers({
    published: publishedReducer,
    dialogs: dialogsReducer
})

let store = createStore(reducers);

export default store;
