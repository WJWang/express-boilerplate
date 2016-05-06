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
    request : req.body,
    status : "success"
  });
});

module.exports = router;
