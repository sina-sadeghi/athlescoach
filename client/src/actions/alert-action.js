export const SPORT_PLAN_ALERT = "SPORT_PLAN_ALERT";

export const SportPlanAlert = state => {
    return {
        type: SPORT_PLAN_ALERT,
        payload: {
            state: state
        },
    };
}
