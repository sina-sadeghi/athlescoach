import axios from "axios"

const BaseApi = async (url, method, data) => {

    
    const response = await axios.post(url, data).then(res => res).catch(err => err);
    console.log(response)
    console.log('a')
    return response;

}
export default BaseApi;