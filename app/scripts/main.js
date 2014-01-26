/* jshint loopfunc: true */
'use strict';

// Thanks, Stack Overflow Driven Development!
var replaceTargetWith = function( targetID, html ) {
    /// find our target
    var i, div, elm, last, target = document.getElementById(targetID);

    /// create a temporary div
    div = document.createElement('div');

    /// fill that div with our html, this generates our children
    div.innerHTML = html;

    /// step through the temporary div's children and insertBefore our target
    i = div.childNodes.length;

    /// the insertBefore method was more complicated than I first thought so I 
    /// have improved it. Have to be careful when dealing with child lists as they 
    /// are counted as live lists and so will update as and when you make changes.
    /// This is why it is best to work backwards when moving children around, 
    /// and why I'm assigning the elements I'm working with to `elm` and `last`
    last = target;
    while(i--){
        target.parentNode.insertBefore((elm = div.childNodes[i]), last);
        last = elm;
    }

    /// remove the target.
    target.parentNode.removeChild(target);
};

// Handler
var els = document.getElementsByClassName( 'card' );

for( var i = 0; i < els.length; i++ ) {
    els[ i ].onclick = function( e ) {
        e.preventDefault();
        var url = this.getAttribute( 'data-url' );

        replaceTargetWith( this.id, '<iframe src="' + url + '" class="col-sm-4 card" frameborder="0" scrolling="no" allowfullscreen></iframe>' );
    };
}