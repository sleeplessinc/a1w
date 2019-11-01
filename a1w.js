
// Copyright 2019 Sleepless Software Inc. All Rights Reserved

request = require( "request" );

A1W = {}

if( module !== undefined ) {
	// node

	module.exports = A1W;

	A1W.http_get = function( url, cb ) {
		request( url, ( err, resp, body ) => {
			cb( body, err );
		});
	};

}
else {
	// browser

	A1W.http_get = function( url, cb ) {
		let x = new XMLHttpRequest();
		x.addEventListener( "load", function() {
			cb( x.response, null );
		});
		x.addEventListener( "error", function( evt ) {
			cb( null, evt );
		});
		x.open("GET", url);
		x.send();
	};

}


A1W.google = {
	drive: {
		document: {
			get: function( doc_id, cb ) {
				let url = "https://sleepless.com/api/?cmd=google/drive/document&key=" + doc_id;	// XXX endpoint is not final
				A1W.http_get( url, cb );
			},
		},
		spreadsheet: {
			get: function( doc_id, cb ) {
				let url = "https://sleepless.com/api/?cmd=google/drive/spreadsheet&key=" + doc_id;	// XXX endpoint is not final
				A1W.http_get( url, cb );
			},
		},
	},
};


