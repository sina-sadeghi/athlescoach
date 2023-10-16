import {SPORT_PLAN_ALERT} from '../actions/alert-action.js';

const initialState = {
    state: ''
}

const AlertReducer = (state = initialState, action) => {
    switch (action.type) {
        case SPORT_PLAN_ALERT:
            return {
                sportPlanState: action.payload.state
            }
        default:
            return ''
    }
}

export default AlertReducer;