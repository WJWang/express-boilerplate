import util from 'util';

function Internal(data) {
  this.name = 'InternalError';
  this.message = data || 'Internal Error';
  this.code = 500;
}

util.inherits(Internal, Error);

function NotFound(data) {
  this.name = 'NotFoundError';
  this.message = data || 'Not Found';
  this.code = 404;
}

util.inherits(NotFound, Error);

function Database(data) {
  this.name = 'DatabaseError';
  this.message = data || 'Database Error';
  this.code = 500;
}

util.inherits(Database, Error);

function Parameter(data) {
  this.name = 'ParameterError';
  this.message = data || 'Invalid Parameters';
  this.code = 400;
}

util.inherits(Parameter, Error);

function Existed(data) {
  this.name = 'ExistedError';
  this.message = data || 'Object Existed';
  this.code = 400;
}

util.inherits(Existed, Error);

function Server(data) {
  this.name = 'ServerError';
  this.message = data || 'Server Error';
  this.code = 500;
}

util.inherits(Server, Error);

function APIService(data) {
  this.name = 'APIServiceError';
  this.message = data || 'API Service Error';
  this.code = 400;
}

util.inherits(APIService, Error);


export default {
  NotFound,
  Parameter,
  Database,
  Server,
  APIService,
  Existed,
  Internal,
};
