import { Router } from 'express';
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

router.get('/', (req, res) => {
  async function asyncTest() {
    await doSomethingAsync();
    return 'After doSomethingAsync executed';
  }

  asyncTest()
    .then((data) => {
      res.json({
        message: data,
        status: 'success',
      });
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
