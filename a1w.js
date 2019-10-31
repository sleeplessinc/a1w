
// Copyright 2019 Sleepless Software Inc. All Rights Reserved

request = require( "request" );

A1W = {}

if( module !== undefined ) {
	module.exports = A1W;		 // node.js
}

A1W.google = {
	drive: {
		document: function( doc_id, cb ) {
			let url = "https://sleepless.com/api/?cmd=google/drive/document&key=" + doc_id;	// XXX
			request( url, ( err, resp, body ) => {
				//let o = { error: null, data: "doc_id=" + doc_id };
				cb( body, err, resp );
			});
		},
	},
	sleepless: {
		files: {
			get: function( authkey, file, cb ) {
				let args = { authkey, file };
				request.get( "https://a1widgets.com/api/v1/sleepless/files/", args,  ( err, resp, body ) => {
					cb( body, err, resp );
				});
			},
			put: function( auth_key, path, cb ) {
				throw new Error( "not implemented" );
			},
		}
	}
};


