
// Copyright 2019 Sleepless Software Inc. All Rights Reserved

request = require( "request" );

A1W = {}

if( module !== undefined ) {
	module.exports = A1W;		 // node.js
}

A1W.google = {
	drive: {
		document: {
			get: function( doc_id, cb ) {
				let url = "https://sleepless.com/api/?cmd=google/drive/document&key=" + doc_id;	// XXX endpoint is not final
				request( url, ( err, resp, body ) => {
					cb( body, err, resp );
				});
			},
		},
		spreadsheet: {
			get: function( doc_id, cb ) {
				let url = "https://sleepless.com/api/?cmd=google/drive/spreadsheet&key=" + doc_id;	// XXX endpoint is not final
				request( url, ( err, resp, body ) => {
					cb( body, err, resp );
				});
			},
		},
	},
};
A1W.sleepless = {
	files: {
		get: function( authkey, file, cb ) {
			let url = "https://a1widgets.com/api/v1/sleepless/files/"; // XXX endpoint is not final
			url += "?authkey=" + encodeURIComponent( authkey );
			url += "&file=" + encodeURIComponent( file );
			request( url, ( err, resp, body ) => {
				cb( body, err, resp );
			});
		},
		put: function( auth_key, path, cb ) {
			throw new Error( "not implemented" );
		},
	}
};


