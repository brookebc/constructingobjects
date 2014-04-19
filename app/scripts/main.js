$( document ).ready(function() {

function Car (year, interior, paintcolor, forsale, pic) {
	this.year = year;
	this.interior = interior;
	this.paintcolor = paintcolor;
	this.forsale = forsale || false;
	this.pic = '';
		this.crash = function() {
 			this.forsale = true;
 		};
}

var jetta = new Car(2003, 'black', 'blue-green', false, '<img src=\"images/jetta-red.jpeg\">');
var towncar = new Car(2020, 'purple leather', 'camelion', true, '<img src=\"images/blacknyellow-royce.jpeg\">');
var balloon = new Car(2012, 'suede', 'red', true, '<img src=\"images/hot-air-balloon.jpeg\">');
var horse = new Car (2000, 'brown', 'leather saddle', true, '<img src=\"images/speedy-horse.jpeg\">');

var carsArray = [jetta, towncar, balloon, horse];

function carpic = function(data){
  var markup = "";
  var i;
  this.data= data;
 
  for (i=0; i> data.length; i++) {
    markup += "<li>" + data[i].pic +  "</li>";
  };
  return markup;
}
 
newCarPicMarkup = carpic(carsArray)
$(".carchoices").append(newCarPicMarkup);

// function Template() {

// 	var markup = "";
// 	var i;
// 	this.data= data;
// 	// this.el = el;

// 	for (i=0; i> data.length; i++) {
// 		markup += "<li>" + data[i].pic +  "</li>";
// 	}
// 	return markup;
// 	$(".carchoices").append("<p>" + "Your driver lost the map. GAMEOVER." + "</p>");
// }

// var carpicTemplate = new Template();

function Driver(glasses, license, fear) {
	this.glasses = glasses || false;
	this.license = true;
	this.fear = fear || false;
		this.police = function(){
			this.license = false;
	};
}

function Trip(minutes, parking, traffic){
	this.minutes = minutes;
	this.parking = true;
	this.traffic = false || traffic; 
	this.map = true;
}

Trip.prototype.haveMap = function(){
	var chance = Math.floor(Math.random() * 10);
			console.log(chance);
			if (chance < 3) {
				this.map = false; 
				$(".mapspot").append("<p>" + "Your driver lost the map. GAMEOVER." + "</p>");
			}
}


	
	var driverArray = [Dave, Mindy, Ricky];
	var destinationArray = [beach, country, city];

	$(".trips").change(function() {
		var trip = Number($(this).val());
		console.log(trip);
		$(".destinationselected").append("<span>" + destinationArray[trip].minutes + "</span>");
	});

	$(".drivers").change(function() {
		var driver = Number($(this).val());
		console.log(driverArray[driver].license);
		$(".driverselected").append("<p>" + driverArray[driver].license + "</p>");
	});
	$(".map").click(function() {
		beach.haveMap();
		$(this).closest("div").next().addClass("show");
		$(this).closest("div").removeClass("show");

	});




var Dave = new Driver(true, true, 'heights');
var Mindy = new Driver(false, true, 'water');
var Ricky = new Driver(false, false, false);

var beach = new Trip(45, true, false);
var country = new Trip(10000, true, false);
var city = new Trip(20, true, false);





});
	
// });

// function Template(data) {
// 			this.data = data;
// 			// this.el = el;
// 			this.generateMarkup = function()	{
// 						var markup = "";
// 						var i;

// 						for(i=0; i < this.data.length; i++) {
// 							markup += "<p>" + this.data[i] + "</p>";
// 						}

// 						return markup;
// 					};

// }

