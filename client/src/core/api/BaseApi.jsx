import axios from "axios"
import config from "../config";

const BaseApi = async (url, method = 'GET', data = {}, header = true) => {

    const baseUrl = config.baseUrl + url
    if (header) {
        const token = getToken1Storage()
        if(token)
            window.location.href = "/"
    }

    if (method === "GET")
        return await axios.get(baseUrl).then(res => res).catch(err => err);

    if (method === "POST")
        return await axios.post(baseUrl, data).then(res => res).catch(err => err);

    if (method === 'PUT')
        return await axios.put(baseUrl, data).then(res => res).catch(err => err);

    if(method === "DELETE")
        return await axios.delete(baseUrl, data).then(res => res).catch(err => err);

}
export default BaseApi;