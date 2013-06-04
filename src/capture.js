// screenshot
// I've seen a odd things with setting the viewport
// PhantomJS comes with a default viewport size of 400x300,
// and CasperJS doesn't override it by default.

var casper = require( 'casper' ).create( {
	viewportSize: { width: 1440, height: 900 }
} );

casper.start( 'http://ksl.com/', function() {
	this.capture( 'ksl.com' );
} );

casper.then( function() {
	this.captureSelector( 'header.png', '#headBlock' );
} );

casper.run();
