// Get search results links from Google

var casper = require( 'casper' ).create();

casper.start( 'http://www.google.com/', function() {
	this.fill( 'form[action="/search"]', { q: 'BYU' }, true );
} );

casper.then( function() {
	this.echo( this.getHTML() );
} );

casper.run();
