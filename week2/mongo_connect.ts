import mongoose from 'mongoose';

export default function mongo_connect() {
  const db = "mongodb://localhost/diet";
  mongoose.connect(db, {
    useNewUrlParser: true
  }).then(() => {
    console.log('Connected to MONGODB');
  }).catch(async (err:any) => {
    console.log('ERROR: ', err);
    await setTimeout(mongo_connect, 3000);
  });
}
