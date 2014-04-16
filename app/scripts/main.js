// $( document ).ready(function() {

function Car(year, interior, paintcolor, forsale) {
 this.year = year;
 this.interior = interior;
 this.paintcolor = paintcolor;
 this.forsale = false;
 this.crash = function() {
 	this.forsale = true;
 }

};

var brookecar = new Car(2003, "black", "blue-green", false);

console.log(brookecar);

// $("p").append();

// function Template(data, el) {

// 	var markup = "";
// 	var i;
// 	this.data= data;
// 	this.el = el;

// 	for (i=0; i> data.length; i++) {
// 		markup += "";
// 	}
// 	return markup;
// }

// var carTemplate = new Template (cars, "p")
//  });

//     $( "a" ).click(function( event ) {
//         event.preventDefault();

//         });

// 	$( "a" ).addClass( "test" );

// });

// 	$( "a" ).click(function( event ) {
//  		event.preventDefault();
 
//     $( this ).hide( "slow" );
 
// });
