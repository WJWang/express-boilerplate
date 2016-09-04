import { Router } from 'express';
import Errors from '../../errors/';

const debug = require('debug')('express-boilerplate:public');
const router = new Router();

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    // to someting
    try {
      setTimeout(() => {
        debug('After 3 secs');
        resolve('After 3 secs');
      }, 3000);
    } catch (e) {
      reject(e);
    }
  });
}


router.get('/', async (req, res) => {
  const data = await doSomethingAsync();
  res.json({
    message: data,
    status: 'success',
    error: new Errors.General.Parameter('test'),
  });
});

export default router;
