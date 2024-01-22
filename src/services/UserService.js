import axios from "axios";
const axiosJWT = axios.create();

// login into account 
const UserLoginSerVice = async (data) => {
    // console.log(`${process.env.REACT_APP_BASE_PRODUCT}`);
    const getApi = await axios.post(`${process.env.REACT_APP_BASE_PRODUCT}user/login`, data)
    return await getApi.data
}
// create user 
const UserSignUpSerVice = async (data) => {
    // console.log(`${process.env.REACT_APP_BASE_PRODUCT}`);
    const getApi = await axios.post(`${process.env.REACT_APP_BASE_PRODUCT}user/signup`, data)
    return await getApi.data
}
// get one user 
const UserDetailSerVice = async (id, access_token) => {
    // console.log("id: ", id, ", accessToken: ", access_token);
    const getApi = await axiosJWT.get(`${process.env.REACT_APP_BASE_PRODUCT}user/detailUser/${id}`, {
        headers: { token: access_token }
    });
    // console.log("result: ", await getApi.data);
    return await getApi.data
}
//get token when token end time.
const Refresh_token = async (refresh_token) => {
    const getApi = await axios.post(`${process.env.REACT_APP_BASE_PRODUCT}user/refreshToken`, {
        headers: { token: refresh_token }, // this prototy it auto send request when token current end time.
        withCredentials: true
    })
    return await getApi.data
}
export { UserDetailSerVice, UserLoginSerVice, UserSignUpSerVice, Refresh_token, axiosJWT }