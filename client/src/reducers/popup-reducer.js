import {SPORT_PLAN_POPUP} from '../actions/popup-action.js';
import {ACTIVITY_REGISTRATION_POPUP} from '../actions/popup-action.js';

const initialState = {
    state: ''
}

const PopupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SPORT_PLAN_POPUP:
            return {
                sportPlanState: action.payload.state
            }
        case ACTIVITY_REGISTRATION_POPUP:
            return {
                activityRegistrationState: action.payload.state
            }
        default:
            return ''
    }
}

export default PopupReducer;