import { Date } from "core-js";

// Y,M,return list
export function GetList(Year,Month){
    let _list = [];
    const lastMonth = new Date(Year,Month-1,0);
    const thisMonth = new Date(Year,Month,0);
    //上月最后一天是星期几 lastMonth.getDay();
    const lastMonth_week  =  lastMonth.getDay();
    //上月有多少天 lastMonth.getDate(); 
    const lastMonth_day = lastMonth.getDate();
    //本月天数thisMonth.getDate();
    const thisMonth_day = thisMonth.getDate();
    //6*7表格还能显示几个下个月
    const nextMonth_day = 42-lastMonth_week-thisMonth_day;
    // console.log(lastMonth_day,lastMonth_week,thisMonth_day,nextMonth_day);
    //计算上月
    for (let i = lastMonth_week,j=lastMonth_day; i >0; i--,j--) {
        _list[i-1] ={
            value:j,
            index:0
        }
    }
    //计算本月
    for(let i=lastMonth_week,j=1;j<=thisMonth_day;i++,j++){
        _list[i] ={
            value:j,
            index:1,
        }
    }
    //计算下月
    for(let i =lastMonth_week+thisMonth_day,j = 1;j<=nextMonth_day;i++,j++ ){
        _list[i] ={
            value:j,
            index:2,
        }
    }
    // console.log(_list);
    return _list;
}

export function getYears(){
    let element=[]
    for (let index = 1950,i=0; index < 2050; index++) {
        element[i++] = index
    }
    return element;
}
export function getMonth(){
    let element=[]
    for (let index = 0; index < 12; index++) {
        element[index] = index+1;
    }
    return element;
}

export function getToday(){
    const date = new Date();
    return {
        year: date.getFullYear(),
        month: date.getMonth()+1,
        day: date.getDate(),
    };

}