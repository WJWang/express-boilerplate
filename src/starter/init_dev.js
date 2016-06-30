import config from '../../config/config.js';
import { createServer } from 'http';
const debug = require('debug')('express-boilerplate:server');
import app from '../server.js';
const server = createServer(app);

function normalizePort(val) {
  const portNumber = parseInt(val, 10);
  if (isNaN(portNumber)) {
    // named pipe
    return val;
  }

  if (portNumber >= 0) {
    // portNumber number
    return portNumber;
  }

  return false;
}

const port = normalizePort(config.express.port);
app.set('port', port);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof (port === 'string') ? `Pipe ${port}` : `Port ${port}`;
  switch (error.code) {
    case 'EACCES':
      debug(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      debug(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof (addr === 'string') ? `Pipe ${addr}` : `Port ${addr.port}`;
  debug(`Listening on ${bind}`);
  // console.log('Listening on ' + bind);
}

server.listen(port).on('error', onError).on('listening', onListening);
