import BaseApi from "../BaseApi";

const ProgramUrl = "usr/Program/"


export const ListProgramApi = () => {
    const url = ProgramUrl + "list/"

    return BaseApi(url, "GET")
}

export const UserProgramApi = (name, day = null, numbers = null, time = null, sets = 1) => {
    const url = ProgramUrl + "create/"
    const data = {
        day: day,
        numbers: numbers,
        time_duration: time,
        numbers_sets: sets,
        action: name,
    }

    return BaseApi(url, "POST", data)
}