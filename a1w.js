
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
				let o = { error: null, data: "doc_id=" + doc_id };
				cb( body, err, resp );
			});
		},
	},
};


