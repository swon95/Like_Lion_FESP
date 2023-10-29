function log(target, level, message) {
  const now = new Date();
  console.log(`[${now.getHours()}:${now.getMinutes()}] [${target}] [${level}] ${message}`);
}
log('console', 'DEBUG', 'debug message...');
log('console', 'DEBUG', 'debug message2...');
log('console', 'ERROR', 'some error...');

var logger = _.curry(log);
logger('console')('DEBUG')('hello');

var mylog = logger('network');
mylog.debug = mylog('DEBUG');
mylog.info = mylog('INFO');

mylog.info('server started on port 1234');
mylog.debug('server test ... OK');
