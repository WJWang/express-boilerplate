import express from 'express';
import Debug from 'debug';
import Promise from 'bluebird';
import _ from 'lodash';

const debug = Debug('Boilerplate:Route-Public');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    request : req.body,
    status : "success"
  });
});

module.exports = router;
