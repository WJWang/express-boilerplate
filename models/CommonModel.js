//UNFINISH
import db from '../libs/db';
import { debug as Deug } from '../libs/Utils';
const debug = Debug('Model:CommonModel');

import {
  Auth as AuthErrors,
  General as GeneralErrors
} from '../errors/Errors';

class CommonModel {
  constructor(dbTableName) {
    this.tableName = dbTableName;
  }

  get(model, cb) {
    db.select()
      .from(this.tableName)
      .map(function(result) {
        return new model(result);
      })
      .then(function(resultList) {
        cb(null, resultList);
      })
      .catch(function(err) {
        console.log(err);
        cb(new GeneralErrors.Database());
      });
  }
}

CommonModel.getAll(tableName, model, cb) {
  db.select()
    .from(tableName)
    .map(function(result) {
      return new model(result);
    })
    .then(function(resultList) {
      cb(null, resultList);
    })
    .catch(function(err) {
      console.log(err);
      cb(new GeneralErrors.Database());
    });
}

export default CommonModel;
