import DietModel,{ Diet, Daytime } from '../model/diet';

export async function getDiet(month: number, date: number, daytime: Daytime) {
    const ans = await DietModel.findOne({month:month,date:date});
    console.log(ans);
    if(!ans) return "No Menu";
    else {
        if(daytime="morning") return ans.morning;
        else if(daytime="afternoon") return ans.morning;
        else if(daytime="evening") return ans.morning;
    }
}

