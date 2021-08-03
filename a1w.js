
// Copyright 2019 Sleepless Software Inc. All Rights Reserved

A1W = {}

if( typeof process !== 'undefined' ) {
	// node

	module.exports = A1W;

	let request = require( "request" );

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

	A1W.http_get_obj = function( url, cb ) {
		A1W.http_get( url, ( json, err ) => {
			if( err ) {
				cb( null, err );
			}
			else {
				let obj = JSON.parse( json );
				if( obj.error ) {
					cb( null, obj.error );
				}
				else {
					cb( obj.data, null );
				}
			}
		} );
	};

}


A1W.google = {
	drive: {
		document: {
			get: function( doc_id, cb ) {
				let url = "https://sleepless.com/api/?cmd=google/drive/document&key=" + doc_id;	// XXX endpoint is not final
				A1W.http_get_obj( url, cb );
			},
		},
		spreadsheet: {
			get: function( doc_id, cb ) {
				let url = "https://sleepless.com/api/?cmd=google/drive/spreadsheet&key=" + doc_id;	// XXX endpoint is not final
				A1W.http_get_obj( url, cb );
			},
		},
	},

	cloud: {
		storage: {
			firestore: {
			},
		},
	},
};


