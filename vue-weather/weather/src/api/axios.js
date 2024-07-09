import Axios from "axios"
const request = Axios.create({
    baseURL:"https://restapi.amap.com/v3",
    timeout:5000,
})
export default request;
