//UNFINISH

import db from '../libs/db';
import { debug as Deug } from '../libs/Utils';
const debug = Debug('Model:CommonModel');

import {
  Auth as AuthErrors,
  General as GeneralErrors
} from '../errors/Errors';

import CommonModel from './CommonModel';

const tableName = 'member';

class Member extends CommonModel {
  constructor(options) {
    super('members');
    this.id = options.id;
    this.name = options.name;
    this.account = options.account;
    this.password = options.password;
  }


}

Member.getAll = (cb) => {
  CommonModel.getAll(tableName, Member, function(err, memberList) {
    if (err) {
      cb(err);
    } else {
      cb(memberList);
    }
  });
}

export default Member;
