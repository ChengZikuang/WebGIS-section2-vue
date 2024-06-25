import  Axios  from "axios";
const request = Axios.create({
    baseURL:"http://project.x-zd.net:3001/apis",
    timeout: 5000,
});
export default request;