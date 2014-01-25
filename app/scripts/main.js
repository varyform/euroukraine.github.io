'use strict';

$( '.card' ).click(function(e) {
    e.preventDefault();
    var $this = $( this );
    var url = $this.data( 'url' );

    $this.replaceWith( '<iframe src="' + url + '" class="col-sm-4 card" frameborder="0" scrolling="no" allowfullscreen></iframe>' );
});