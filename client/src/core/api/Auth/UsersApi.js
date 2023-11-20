import BaseApi from "../BaseApi";

const UserUrl = "api/auth/users/"


export const RegisterationApi = (email, name, pass) => {
    const url = UserUrl
    const data = {
        email: email,
        name: name,
        password: pass,
        re_password: pass
    }

    return BaseApi(url, "POST", data, false)
}

export const ActivationApi = (token) => {
    const url = UserUrl + "activation/"
    const data = {
        uid: 'Mg',
        token: token
    }

    return BaseApi(url, "POST", data, false)
}

export const ChangePasswordApi = (prevPassword, newPassword) => {
    const url = UserUrl + "set_password/"
    const data = {
        new_password: newPassword,
        re_new_password: newPassword,
        current_password: prevPassword
    }

    return BaseApi(url, "POST", data)
}

export const DeleteUserApi = (password) => {
    const url = UserUrl + "me/"
    const data = {
        Authorization: password,
    }

    return BaseApi(url, "DELETE", data)
}

export const PasswordResetConfirmApi = (token, newPassword) => {
    const url = UserUrl + "reset_password_confirm/"
    const data = {
        uid: "Mg",
        token: token,
        new_password: newPassword,
        re_new_password: newPassword,
    }

    return BaseApi(url, "POST", data)
}

export const ResetPasswordApi = (email) => {
    const url = UserUrl + "reset_password/"
    const data = {
        email: email
    }

    return BaseApi(url, "POST", data, false)
}

export const UpdateUserDataApi = (name) => {
    const url = UserUrl + "me/"
    const data = {
        name: name
    }

    return BaseApi(url, "PUT", data)
}

export const UserDataApi = () => {
    const url = UserUrl + "me/"

    return BaseApi(url, "GET")
}
