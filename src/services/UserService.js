import axios from "axios"



const UserLoginSerVice = async (data) => {
    console.log(`${process.env.REACT_APP_BASE_PRODUCT}`);
    const getApi = await axios.post(`${process.env.REACT_APP_BASE_PRODUCT}user/login`, data)
    return await getApi.data
}
const UserSignUpSerVice = async (data) => {
    console.log(`${process.env.REACT_APP_BASE_PRODUCT}`);
    const getApi = await axios.post(`${process.env.REACT_APP_BASE_PRODUCT}user/signup`, data)
    return await getApi.data
}
const UserDetailSerVice = async (id, access_token) => {
    console.log("id: ", id, ", accessToken: ", access_token);
    const getApi = await axios.get(`${process.env.REACT_APP_BASE_PRODUCT}user/detailUser/${id}`, {
        headers: { token: access_token }
    })
    return await getApi.data
}
export { UserDetailSerVice, UserLoginSerVice, UserSignUpSerVice }
