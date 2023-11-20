import BaseApi from "../BaseApi";

const UserActionUrl = "usr/useraction/"


export const ListUserActionApi = () => {
    const url = UserActionUrl + "list/"

    return BaseApi(url, "GET")
}

export const CreateUserActionApi = (name, number = null, time = null, sets = 1) => {
    const url = UserActionUrl + "create/"
    const data = {
        numbers: number,
        numbers_sets: sets,
        time_duration: time,
        action: name
    }

    return BaseApi(url, "POST", data)
}