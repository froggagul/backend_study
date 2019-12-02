# express 2주차 writeup
* request 
1. req.param
주소에 포함된 변수를 담는다. 예를 들어 https://okky.com/post/12345 라는 주소가 있다면 12345를 담는다
2. req.query
주소 바깥, ? 이후의 변수를 담는다. 예를 들어 https://okky.com/post?q=Node.js 일 경우 Node.js를 담는다
3. req.body
XML, JSON, Multi Form 등의 데이터를 담는다. 당연히 주소에선 확인할 수 없다.

* mongoose

* mongoose.connect
```js
export default function mongo_connect() {
  const db = "mongodb://localhost/diet";    //localhost이기 때문에 id, passwd가 필요없다.
  mongoose.connect(db, {
    useNewUrlParser: true       //useNewUrlParser: true는 
  }).then(() => {
    console.log('Connected to MONGODB');
  }).catch(async (err:any) => {
    console.log('ERROR: ', err);
    await setTimeout(mongo_connect, 3000);
  });
}
```
* controller 부분
```js
export async function getDiet(month: number, date: number, daytime: Daytime) {
    const ans = await DietModel.findOne({month: month, date: date, daytime: daytime})
    if(!ans) return "No Menu";
    else return ans.menus;
}
```

```js
//model/diet.ts
export const DietModel = mongoose.model<Diet>('diet', schema);
```