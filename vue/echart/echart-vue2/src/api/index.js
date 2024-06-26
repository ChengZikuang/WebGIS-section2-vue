import request from "./axios.js";

export const getReportData = () => {
  return request.get("/reportdata");
};

export const getSaleData = () => {
  return request.get("/saledata");
};

export const getKeywordData = () => {
  return request.get("/keyworddata");
};