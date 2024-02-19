import axios from "axios";
const axiosJWT = axios.create();

const getAllPrd = async () => {
    const getApi = await axiosJWT.get(`${process.env.REACT_APP_BASE_PRODUCT}product/getallProduct`
    );
    return await getApi.data
}