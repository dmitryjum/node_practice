var http = require('http'),
	flights = require('./data'),
	db = require('./db'),
  argv = require('optimist').argv,
	app = require('./app')(flights, db);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
console.log(argv.destination);
if (argv.flight && argv.destination) {
  flights[argv.flight].data.destination = argv.destination;
};