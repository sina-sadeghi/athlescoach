import {combineReducers, createStore} from "redux";
import PopupReducer from "./reducers/popup-reducer";
import AlertReducer from "./reducers/alert-reducer";

// Root Reducers
const rootReducer = combineReducers({
    popupReducer: PopupReducer,
    alertReducer: AlertReducer,
});
// Store
export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);