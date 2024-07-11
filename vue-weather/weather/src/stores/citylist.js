import { ref } from "vue";
import { defineStore } from "pinia";
import { getNowWeather } from "@/utils/weatherinfo";

export const useCityListStore = defineStore("citylist", () => {
  //[{cityname:cityname,nowtemp}]
  const citylist = ref([]);

  async function addlist(cityname) {
    let res = await getNowWeather(cityname);
    window.localStorage.setItem(cityname, res.temperature);
    formattercitylist();
  }
  function deletelist(cityname) {
    window.localStorage.removeItem(cityname);
    formattercitylist();
  }
  //
  function inList(_cityname) {
    formattercitylist();
    return citylist.value.some(item=>item.cityname === _cityname)
  }
  function formattercitylist() {
    let cityname = { ...localStorage };
    let arr = [];
    Object.entries(cityname).forEach(async ([key,value]) => {
      arr.push({
        cityname: key,
        nowtemp: value,
      });
    });
    citylist.value = arr;
    
  }
  return { citylist, addlist, deletelist, inList,formattercitylist };
});
