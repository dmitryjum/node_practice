var flight = require('./flight');

var pdxlax = {
	number: 847,
	origin: 'PDX',
	destination: 'LAX'
};

var pl = flight(pdxlax);

pl.triggerDepart();

console.log(pl.getInformation());

var ausdca = {
	number: 382,
	origin: 'AUS',
	destination: 'DCA'
};

var ad = flight(ausdca);

var br = flight({number: 999, origin: 'JFK', destination: 'SFO'})

console.log(ad.getInformation());

console.log(pl.getInformation());
console.log(br.getInformation());
console.log(ad.getLog());
