import mongoose from 'mongoose';
import {recipe} from './eat'
export type Daytime = 'morning' | 'afternoon' | 'evening';  //type 지정 가능

export interface Diet extends mongoose.Document {
    month: number,
    date: number,
    morning: string,
    afternoon: string,
    evening: string
}

// mongoose schema: https://mongoosejs.com/docs/api/schema.html#schema_Schema
const schema = new mongoose.Schema({
    month: {
        required: true,
        type: Number
    },
    date: {
        required: true,
        type: Number
    },
    morning: {
        required: true,
        type: String
    },
    afternoon: {
        required: true,
        type: String
    },
    evening: {
        required: true,
        type: String
    },
})

// mongoose model: https://mongoosejs.com/docs/models.html
const DietModel = mongoose.model<Diet>('diet', schema);
recipe.map((daymenus, idx) => {
    DietModel.create({
        month: 11,
        date: 18 + idx,
        menu: daymenus[0],
        afternoon: daymenus[1],
        evening: daymenus[2]
    })
})
console.log(DietModel)

export default DietModel;
