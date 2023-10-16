export const SPORT_PLAN_POPUP = "SPORT_PLAN_POPUP";
export const ACTIVITY_REGISTRATION_POPUP = "ACTIVITY_REGISTRATION_POPUP";

export const SportPlanPopup = state => {
    return {
        type: SPORT_PLAN_POPUP,
        payload: {
            state: state
        },
    };
}

export const ActivityRegistrationPopup = state => {
    return {
        type: ACTIVITY_REGISTRATION_POPUP,
        payload: {
            state: state
        },
    };
}
