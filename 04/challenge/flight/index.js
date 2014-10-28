var log = {
	flightCounter: 0,
	destArr: []
};

var Flight = function () {
	this.data = {
		number: null,
		origin: null,
		destination: null,
		departs: null,
		arrives: null,
		actualDepart: null,
		actualArrive: null
	};


	this.fill = function (info) {
		for(var prop in this.data) {
			if(this.data[prop] !== 'undefined') {
				this.data[prop] = info[prop];
			}
		};
		log.flightCounter++;
		log.destArr.push(info.destination)
	};

	this.triggerDepart = function () {
		this.data.actualDepart = Date.now();
	};

	this.triggerArrive = function () {
		this.data.actualArrive = Date.now();
	};

	this.getInformation = function () {
		return this.data;
	};

	this.getLog = function() {
		return log
	};
};

module.exports = function (info) {
	var instance = new Flight();

	instance.fill(info);

	return instance;
};