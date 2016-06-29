import {
  express,
  debug as Debug,
  Promise,
  _
} from '../libs/Utils';

const debug = Debug('Boilerplate:Route-Public');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message : "Hi, There",
    status : "success"
  });
});

module.exports = router;
