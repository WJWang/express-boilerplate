import util from 'util';

function NotMatch(data) {
  this.name = 'NotMatchError';
  this.message = data || 'Password Not Match';
  this.code = 400;
}

util.inherits(NotMatch, Error);

function ExpiredToken(data) {
  this.name = 'ExpiredTokenError';
  this.message = data || 'Token Expired';
  this.code = 400;
}

util.inherits(ExpiredToken, Error);

function AccountExisted(data) {
  this.name = 'AccountExistedError';
  this.message = data || 'Account Existed';
  this.code = 401;
}

util.inherits(AccountExisted, Error);

function Permission(data) {
  this.name = 'PermissionDeny';
  this.message = data || 'Can not access.';
  this.code = 400;
}

util.inherits(Permission, Error);

export default {
  NotMatch,
  ExpiredToken,
  AccountExisted,
  Permission,
};
