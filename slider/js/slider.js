// (C)Copyright vortex.inc 2019 all rights reserved
// Slider by vortex.inc 
// Slider object script 
// Autor : Mahmudov Abdulaziz

var Slider = {

	// Object items
	
	slider     : document.getElementById("SLIDER"),
	overlay    : document.getElementById("overlay"),
	slides     : document.getElementsByClassName("slides"),
	text       : document.getElementsByClassName('inner_text'),
	sldTxtCont : document.getElementsByClassName("slides")[0].lastElementChild.lastElementChild,
	left	   : document.getElementById("left"),
	right  	   : document.getElementById("right"),
	sldbtns    : document.getElementsByClassName("sldbtns"),
	media      : window.innerWidth,

	// Parametsrs
	// window and slider size parametrs

	width      : document.body.clientWidth,
	heighth    : document.body.clientHright,

	// counter parametrs

	counter    : 0,

	// autoplay parametrs

	autoplay   		 : true,
	autoplayInterval : 1500, // insert in microseconds (1 second = 1000)

	// end of configuration part

// ==================================================================
	
	// IIFE - Immidiately Invoked Function Expression 
	// methods will work when slider runs
	// start point

	start   : function(){

		// overlay size change section

		this.overlay.style.width = (this.width * (this.slides.length)) + 1 +"px";

		// main slider conteyner width change
		
		this.slider.style.opacity = 1; // fade up 

		this.slider.style.width = (this.width) +"px"; // slider width change
		
		this.slider.style.height = (window.Slider.heighth) +"px"; // slider height change

		// slides auto size corrector 

		for(var i = 0; i<this.slides.length;i++){
 
			this.slides[i].style.width = this.width+"px";

		}

		setTimeout(function(){
			window.Slider.text[window.Slider.counter].style.opacity = "1";
//			window.Slider.text[window.Slider.counter].style.transform = "translate(0%, -6px)";
		},500);

		// Creates the slider bottombuttons dynamicly
		
		this.Indicator.createButton();
		
		this.Indicator.indicatorOnclick();

		this.sldbtns[this.counter].classList = "sldbtns sldbtns_active";

		// Slider autoplay 

		this.autoplayStart(); 

		// auto start

		(function(slider){
			// console.log  (slider);
		})(this);

	},

	// Methods

	// Autoplay method

	autoplayStart : function(){

		if(Slider.autoplay){

			setInterval(function(){
			
				Slider.moveLeft();
			
			},Slider.autoplayInterval);
		
		}

	},

	// slides left method
	
	moveLeft : function(){

		this.counter = this.counter==(this.slides.length-1) ? -1: this.counter;

		this.counter++;

		this.Indicator.indicatorInteract(this.counter);

		this.overlay.style.transform = "translateX(-"+ (this.counter) * (this.width) +"px)";

		if(this.media < 1100){
		setTimeout(function(){
				window.Slider.text[window.Slider.counter].style.opacity = "1";
			},500);

		this.text[this.counter-1].style.opacity = "0";
		}else{
		setTimeout(function(){
				window.Slider.text[window.Slider.counter].style.opacity = "1";
				window.Slider.text[window.Slider.counter].style.transform = "translate(0%, 6px)";
			},500);

		this.text[this.counter-1].style.opacity = "0";
		this.text[this.counter-1].style.transform = "translate(0%, 0%)";
		}

	},

	// Slides right side move
	
	moveRight : function(){

		this.counter--;

		this.counter = this.counter==-1 ? (this.slides.length-1) : this.counter;
		
		this.Indicator.indicatorInteract(this.counter);

		this.overlay.style.transform = "translateX(-"+(this.counter) * (this.width)+"px)";

		if(this.media < 1100){
		setTimeout(function(){
				window.Slider.text[window.Slider.counter].style.opacity = "1";
			},500);

		this.text[this.counter+1].style.opacity = "0";
		}else{
		setTimeout(function(){
				window.Slider.text[window.Slider.counter].style.opacity = "1";
				window.Slider.text[window.Slider.counter].style.transform = "translate(0%, 6px)";
			},500);

		this.text[this.counter+1].style.opacity = "0";
		this.text[this.counter+1].style.transform = "translate(0%, 0%)";
		}


	},

	// creating buttons of slider dynamicly [method]

	Indicator : {

	createButton : function(){

		var buttonHolder = document.createElement("div");

			buttonHolder.classList = "buttonHolder";

			for(var i = 0; i<Slider.slides.length; i++){

				var sldButton = document.createElement("div");

					sldButton.setAttribute("class","sldbtns");

					buttonHolder.appendChild(sldButton);

			}

			Slider.slider.appendChild(buttonHolder);

	},

	indicatorInteract : function(num){

		for(var i = 0; i<Slider.sldbtns.length;i++){

			Slider.sldbtns[i].classList = "sldbtns";

		}

		Slider.sldbtns[num].classList = "sldbtns sldbtns_active";

	},

	indicatorOnclick : function(){

		for(var i = 0; i<Slider.sldbtns.length;i++){

			(function(slider,count){

				slider.sldbtns[count].onclick = function(){

					slider.counter = count;

					slider.Indicator.indicatorInteract(count);

					slider.overlay.style.transform = "translateX(-"+(count) * (slider.width)+"px)";
				}

			})(Slider,i);
		}
	}

	}


}

// ============================================================================================

// Main execution part

 // initializing the parametrs : width of slider

Slider.autoplay = false;

Slider.height = 600;

Slider.autoplayInterval = 3000; // 1000 ml/seconds = equal to 1 second


Slider.start(); // slider start method is used for turning on the slider


// Slider right button event

Slider.right.onclick = function(event){

	Slider.moveLeft();

	}

// Slider left button event

Slider.left.onclick = function(event){

	Slider.moveRight();

	}

