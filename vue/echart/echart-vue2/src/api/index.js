import request from "./axios.js";


export const getReportData = () => {
    return request.get("/reportdata");
}