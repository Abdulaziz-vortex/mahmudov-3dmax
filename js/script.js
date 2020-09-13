var py = window.pageYOffset;

function Spin(elem, style){
	this.element = document.getElementById(elem);
	this.style   = style;
	this.styleList = ['top','left','right','bottom'];
	this.start = function(page){
		if(page>=((this.element.offsetTop)-(window.innerHeight-400))){
			this.element.style.opacity = '1';
			this.element.style.transform = "translateY(0px)"; 
		}else{
//			this.element.style.opacity = '0'; 
		}
	}
}

var elem = new Spin('about','top');
var elem2 = new Spin('service','top');
var elem3 = new Spin('projects','top');
var elem4 = new Spin('lessons','top');
var elem5 = new Spin('treed','top');
var elem6 = new Spin('service_inter','top');

document.body.onscroll = function(e){
	elem.start(pageYOffset);
	elem2.start(pageYOffset);
	elem3.start(pageYOffset);
	elem4.start(pageYOffset);
	elem5.start(pageYOffset);
	elem6.start(pageYOffset);
}


// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat:41.2888455, lng: 69.2429566};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 13, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

var hidden = document.getElementById('course_name_hidden');
var order = document.getElementsByClassName("order");
var course_name = document.getElementById('course_name');
for(var i = 0; i<order.length; i++){
	(function(hidden,course_name,order,i){
			order[i].onclick = function(){
				var course_heading = this.parentNode.parentNode.parentNode.firstElementChild.innerHTML; 
				console.log(course_heading);
				course_name.innerText = course_heading;
				hidden.value = course_heading;
			}
		})(hidden,course_name,order,i)
}


var burger = document.getElementById('burger');
var side   = document.getElementById('side');
var counter = 1;

burger.onclick = function(){
	counter++;
	if(counter%2==0){
		side.style.transform = "translateX(0%)";
	}else{
		side.style.transform = "translateX(-100%)";
	}
}