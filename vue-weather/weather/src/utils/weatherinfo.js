
import { getIpInfo,getAdcode,getBaseWeatherInfo,getAllWeatherInfo} from "@/api/index.js";

//1.topvue 默认ip-->baseweather
export  const getIpWeather  = async() => {
  let {data} = await getIpInfo()
  let res = await getBaseWeatherInfo(data.adcode)
  return {
    city:res.data.lives[0].city,
    weather:res.data.lives[0].weather,
    temperature:res.data.lives[0].temperature,
    winddirection:res.data.lives[0].winddirection,
    windpower:res.data.lives[0].windpower
  }
}
//2.weathercard getallweather
export async function  getAllWeather (cityname) {
  // getAdcode(cityname).then((res) => {
  //   getAllWeatherInfo(res.data.geocodes[0].adcode).then((res) => {
  //     rt = res.data.forecasts[0].casts;
  //   })
  // });
  let {data} =await getAdcode(cityname)
  let res = await getAllWeatherInfo(data.geocodes[0].adcode)
  return res.data.forecasts[0].casts;
}
//3.homeview/searchview getbaseweather
export async function getNowWeather(cityname) {
  let {data} =await getAdcode(cityname)
  console.log(data,"getnowweather data ");
  let res = await getBaseWeatherInfo(data.geocodes[0].adcode)
  return {
    // city:res.data.lives[0].city,
    weather:res.data.lives[0].weather,
    temperature:res.data.lives[0].temperature,
    winddirection:res.data.lives[0].winddirection,
    windpower:res.data.lives[0].windpower
  }
  // return res.data.forecasts[0].casts;
}