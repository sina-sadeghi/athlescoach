import BaseApi from "../BaseApi";

const JwtUrl = "api/auth/jwt/"

export const LoginApi = (email, pass) => {
    const url = JwtUrl + "create/"
    const data = {
        email: email,
        password: pass,
    }

    return BaseApi(url, "POST", data, false)
}

export const NewAccessTokenApi = (token) => {
    const url = JwtUrl + "refresh/"
    const data = {
        refresh: token
    }

    return BaseApi(url, "POST", data, false)
}