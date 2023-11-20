import BaseApi from "../BaseApi";

const ActionUrl = "usr/action/"


export const CreateActionApi = (name) => {
    const url = ActionUrl + "create/"
    const data = {
        name: name,
    }

    return BaseApi(url, "POST", data)
}