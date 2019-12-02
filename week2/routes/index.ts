import express from 'express';
var router = express.Router();
import {getDiet } from '../controller/diet';
import { Daytime } from '../model/diet';


router.get('/:month/:date/:daytime', async function(req:any, res:any, next:any) {
  try {
    const ans = await getDiet( Number(req.params.month), Number(req.params.date), req.params.daytime as Daytime);
    console.log(ans);
    return res.send(ans);
  } catch(err) {
    console.log(err);
    return res.send("error occured");
  }
});

export default router;
