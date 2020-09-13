/******************************************************************
*******************************************************************
© Copyright all rights reserved by VORTEX web-development company
SVE7 
SVE7 - Scrolling Visual Effect plugin 7
This plugin was created by this web-development company
General Manager of VORTEX : Mahmudov Abdulaziz
initializing the main scripts by this thing
******************************************************************
******************************************************************/


	function Bsimple(elem,loc,type){
		var loc = elem.offsetTop;
		var doc = document;
		var el = doc.getElementById(elem);
		if(type == "top"){
			el.parentNode.classList.add("elParNode");
			el.classList.add("normalizeY");
		}else if(type == "side" || type == "left" || type == "right"){
			el.classList.add("normalizeX");
		}else if(type == "down"){
			el.parentNode.classList.add("elParNode");
			el.classList.add("normalizeD");
		}
		 function inter(){
		 	var page = pageYOffset;
		 	if(type == "top"){
		 	 if(page>loc){
		 		page++;
		 		el.classList.add("simY_eff_1");
		 		el.classList.remove("normalizeY");
		 	 }else{
		 		el.classList.remove("simY_eff_1");
		 	    el.classList.add("simY_eff_0");
		 	}
		 	}else if(type == "down"){
		 	if(page>loc){ 
		 		page++;
		 		el.classList.add("simD_eff_1");
		 		el.classList.remove("normalizeD");
		 	}else{
		 	    el.classList.remove("simD_eff_1");
		 	    el.classList.add("simD_eff_0");		 		
		 	}
		 	}else if(type == "side" || type == "left" || type == "right"){
		 		if(page>loc){
		 		page++;
		 		el.classList.add("simX_eff_1");
		 		el.classList.remove("normalizeX");
		 	}else{
		 	    el.classList.remove("simX_eff_1");
		 	    el.classList.add("simX_eff_0");
		 	}
		 	}else{
		 		if(page>loc){
		 		page++;
		 		el.classList.add("simY_eff_1");
		 		el.classList.remove("normalizeY");
		 	}else{
		 	    el.classList.remove("simY_eff_1");
		 	    el.classList.add("simY_eff_0");
		 	}
		 	}
		 }
             window.addEventListener("scroll", inter);
	}

		function simple(elem,loc,type){
		var el = document.getElementById(elem);
		if(type == "top"){
			el.parentNode.classList.add("elParNode");
			el.classList.add("normalizeY");
		}else if(type == "side" || type == "left" || type == "right"){
			el.classList.add("normalizeX");
		}else if(type == "down"){
			el.parentNode.classList.add("elParNode");
			el.classList.add("normalizeD");
		}
		if(loc == 0){
		 		setInterval(function(){
		 			el.classList.remove("normalizeY");
		 			el.classList.add("simY_eff_1");
		 		},100);
		}
		 function inter(){
		 	var page = pageYOffset;
		 	if(type == "top"){
		 	 if(page>loc){
		 		page++;
		 		el.classList.add("simY_eff_1");
		 		el.classList.remove("normalizeY");
		 	 }
		 	}else if(type == "down"){
		 	if(page>loc){ 
		 		page++;
		 		el.classList.add("simD_eff_1");
		 		el.classList.remove("normalizeD");
		 	}
		 	}else if(type == "side" || type == "left" || type == "right"){
		 		if(page>loc){
		 		page++;
		 		el.classList.add("simX_eff_1");
		 		el.classList.remove("normalizeX");
		 	}
		 	}else{
		 		if(page>loc){
		 		page++;
		 		el.classList.add("simY_eff_1");
		 		el.classList.remove("normalizeY");
		 	}
		 	}
		 }
             window.addEventListener("scroll", inter);
	}

	function Dmenu(elem,secelem){
		var el = document.getElementById(elem);
		var secel = document.getElementById(secelem);
		el.onclick = function(){
			secel.classList.toggle("Dmenu");
		}
		}

	function Zzoom(elem,loc,time){
		var el = document.getElementById(elem);
		var tim = time*500;
		el.classList.toggle("Zzoom0");
			 function maker(){
		 	   var page = pageYOffset;
		 	   if(page>loc){
		 		  page++;
		 		  var s = setInterval(function(){
		 	      el.classList.add("Zzoom1");
		 		  el.classList.remove("Zzoom0");
		 		 },tim);
		 	}
		 }
             window.addEventListener("scroll", maker);
	}

	function spinRound(elem,loc,time){
		var el = document.getElementById(elem);
		var tim = time*1000/2;
		el.classList.toggle("spinRound0");
			 function maker(){
		 	   var page = pageYOffset;
		 	   if(page>loc){
		 		  page++;
		 		  var s = setInterval(function(){
		 	      el.classList.add("spinRound1");
		 		  el.classList.remove("spinRound0");
		 		 },tim);
		 	}
		 }
             window.addEventListener("scroll", maker);
	}


	



