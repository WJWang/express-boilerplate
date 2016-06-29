import {
  express,
  debug as Debug,
  _
} from '../libs/Utils';

const debug = Debug('Boilerplate:Route-Public');
const router = express.Router();

function doSomethingAsync() {
  return new Promise(function(resolve, reject) {
    //to someting
    setTimeout(() => {
      console.log("After 3 secs");
      resolve("After 3 secs");
    }, 3000);
  });
}

router.get('/', (req, res) => {
  async function asyncTest() {
    await doSomethingAsync();
    return "After doSomethingAsync executed"
  }

  asyncTest()
    .then((data) => {
      res.json({
        message : data,
        status : "success"
      });
    })
    .catch((err) => res.status(400).end());

});

module.exports = router;
