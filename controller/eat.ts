import {recipe} from '../model/eat';

export default (date: number, time: number) => {
    const num:number=18;

    

    if(date>=18&&date<=22){
    if (time==1) return date+"일의 조식: "+recipe[date-num].조식;
    else if(time==2) return date+"일의 중식: "+recipe[date-num].중식;
    else if(time==3) return date+"일의 석식: "+recipe[date-num].석식;
    else return "time은 0~2중 정수를 입력하세요";
    }
    else{
        return "date는 18~22중 정수를 입력하세요";
    }
}
