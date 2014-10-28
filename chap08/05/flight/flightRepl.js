#!/usr/bin/env node
var repl = require('repl');
var flight = require('./index.js');
var prompt = repl.start({prompt: 'flight> '});
prompt.context.flight = flight;
