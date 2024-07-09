import request from "./axios";
const key = "518458abe37e00f3f72380be0fa44f7d";
export function getIpInfo() {
  return request.get(`/ip?key=${key}`);
}

export function getAdcode(cityname) {
  return request.get(`/geocode/geo?address=${cityname}&key=${key}`);
}

export function getBaseWeatherInfo(adcode) {
  return request.get(
    `/weather/weatherInfo?city=${adcode}&key=${key}&extensions=base`
  );
}
export function getAllWeatherInfo(adcode) {
  return request.get(
    `/weather/weatherInfo?city=${adcode}&key=${key}&extensions=all`
  );
}
