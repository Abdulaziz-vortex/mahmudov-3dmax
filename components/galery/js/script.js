// <!--
//    __________                _____   ___   ______   ________
//   /  _____   \    \\      //|  _  | || \\ |__  __| ||_______|  \\  //
//  / |   ___|   \    \\    // | | | | ||__\\   ||    ||_____      \\//
// |  |  |___    |     \\__//  | | | | ||\\     ||    ||_____]     //\\
//  \ |______|  /       \  /   | |_| | || \\    ||    ||_______   //  \\
//   \_________/         \/    |_____| ||  \\   ||    ||_______| //    \\

// |(C) 2018 Copyright all rights reserved by VORTEX web-development
 //      _______
 //      |Rules|
 //      +------------------------------------------------------------------------------+
 //      |* Any copy from this page is prohebited !                                     |
 //      |* Any Change in the code, may lead to error in working !                      |
 //      |* If you wnat to apply for us here is our contact we are happy to serve you ! |
 //      +------------------------------------------------------------------------------+

 // --------------------------------------------------------------------------------------
 //      __________
 //      |Contacts|
 //      +------------------+-----------------------------------------------------------+
 //      |# Main programmer:| and Director: MAHMUDOV ABDULAZIZ                          |
 //      |# Author:         | Mahmudov  Abdulaziz                                       |
 //      |# Phone Number    | +998(93) 417-08-86                                        |
 //      |# E-mail:         | abdulaziz.mahmudov_1999@mail.ru                           |
 //      +------------------+-----------------------------------------------------------+

 //    -->

//  item object

var Item = {

	element : document.getElementsByClassName('many_img'),
	holder  : document.getElementsByClassName("many_item_img"),
	overlay : document.getElementsByClassName('item_img_overlay'),
	slides  : document.getElementsByClassName('item_img_slide'),
	left    : document.getElementsByClassName('item_left'),
	right   : document.getElementsByClassName('item_right'),

// parametrs section

	counter : [0],

	width   : document.getElementsByClassName('many_img')[0].offsetWidth+100,

// starting method 

	// move left method

	moveLeft: function(elementNum){
	
		this.counter[elementNum] = this.counter[elementNum] == (this.overlay[elementNum].getElementsByClassName('item_img_slide').length)-1 ? -1 : this.counter[elementNum];

		this.counter[elementNum]++;
		
		this.overlay[elementNum].style.marginLeft = -(this.width*this.counter[elementNum]) + "px";
	
	},

	// Move right method 
	
	moveRight: function(elementNum){
	
		this.counter[elementNum]--;
		
		this.counter[elementNum] = this.counter[elementNum] == -1 ? (this.overlay[elementNum].getElementsByClassName('item_img_slide').length)-1 : this.counter[elementNum];
		
		this.overlay[elementNum].style.marginLeft = -(this.width*this.counter[elementNum]) + "px";
	
	},

	// Constructor part here 
	
	start : function(){
		
		for(var i = 0; i<this.element.length; i++){

			
			this.counter[i] = 0;

			this.overlay[i].style.width = (this.width) * (this.overlay[i].getElementsByClassName('item_img_slide').length) + "px";
			
			for(var b = 0; b<this.overlay[i].getElementsByClassName('item_img_slide').length;b++){

				this.overlay[i].getElementsByClassName('item_img_slide')[b].style.width = this.width+"px";
			
			}

		}

		// Events
		// buttons onclick section 
		
		for(var i = 0; i<Item.left.length;i++){

		(function(item,count){
			item.left[count].onclick = function(){
		item.moveRight(count);
			}
		})(Item,i);

		}

		for(var i = 0; i<Item.left.length;i++){

		(function(item,count){
			item.right[count].onclick = function(){
				item.moveLeft(count);
			}
		})(Item,i);

		}
	}


}

// Galery Object

var Galery = {
	
	// Elements
	
	galery 		 : document.getElementById("Galery"),

	content 	 : document.getElementById("galery_content"),

	subImageHolder : document.getElementById("subImageHolder"),

	subImages      : document.getElementsByClassName("sub_image"),

	img     	   : document.getElementById("galery_content").lastChild,

	currentAdres   : " ",

	imageArray 	   : [],

	subImageNum    : 0,

	subImagePosition : 0,

	// Controls 

	controls : {

		// control elements

		closeBtn : document.getElementById("Galery").getElementsByClassName("close")[0], 
	
		leftBtn  : document.getElementById("Galery").getElementsByClassName("galery_left")[0], 
	
		rightBtn : document.getElementById("Galery").getElementsByClassName("galery_right")[0], 
	
		plus  : document.getElementById("Galery").getElementsByClassName("plus")[0], 
	
		minus : document.getElementById("Galery").getElementsByClassName("minus")[0],

		// controls methods
		// zoom section controls
		
		zoomCounter : 0,

		maxZoom     : 5,

		zoomPlus  : function(){
			Galery.controls.zoomCounter++;
			if(Galery.controls.zoomCounter>Galery.controls.maxZoom)Galery.controls.zoomCounter = Galery.controls.maxZoom;
			else{
				Galery.content.style.transform = "scale(1."+Galery.controls.zoomCounter+")";
			}
		},
		zoomMinus  : function(){
			Galery.controls.zoomCounter--;
			if(Galery.controls.zoomCounter<0)Galery.controls.zoomCounter = 0;
			else{
				Galery.content.style.transform = "scale(1."+Galery.controls.zoomCounter+")";
			}
		},

		// left button 

		imgChangeCount : 0,

		left : function(){
			this.imgChangeCount--;
			if(this.imgChangeCount<0)this.imgChangeCount = 0;
			else{
				Galery.changeImage(Galery.imageArray[this.imgChangeCount]);
				Galery.subImageActive(this.imgChangeCount);
			} 
		},
		right : function(){
			this.imgChangeCount++;
			if(this.imgChangeCount>Galery.subImageNum-1)this.imgChangeCount = Galery.subImageNum-1;
			else{
				Galery.changeImage(Galery.imageArray[this.imgChangeCount]);
				Galery.subImageActive(this.imgChangeCount);
			} 
		} 
	},

 

	// Methods

	preSend : function(){
		for(var i = 0; i<Item.holder.length;i++){
			(function(item,count){
				item.holder[count].onmouseenter = function(){
					for(var d = 0; d<item.slides.length;d++){
						(function(item,d,count){
							item.slides[d].onclick = function(){
								window.Galery.subImageNum = this.parentNode.getElementsByClassName('item_img_slide').length;
								window.Galery.currentAdres = item.slides[d].lastElementChild.src;
								for(var i = 0; i < this.parentNode.getElementsByClassName('item_img_slide').length; i++){
									window.Galery.imageArray[i] = this.parentNode.getElementsByClassName('item_img_slide')[i].lastElementChild.src;
								}
									window.Galery.sendImg(window.Galery.currentAdres,window.Galery.imageArray);
									window.Galery.subImagePosition = item.counter[count];
									window.Galery.controls.imgChangeCount = item.counter[count];
									window.Galery.subImageActive(window.Galery.subImagePosition);
							}
						})(item,d,count);
					}
				}
			})(Item,i);
		}


	},

	sendImg : function(current,full){
		this.img.src = current;
		for(var i = 0; i<this.subImageNum;i++){
			var subImage = document.createElement("div"),
				image  = document.createElement("img");
				subImage.setAttribute("class","sub_image");
				image.setAttribute("src",this.imageArray[i]);
				subImage.appendChild(image);
				this.subImageHolder.appendChild(subImage);
		}

		this.open();
	},

	open : function(){
		this.galery.style.display = "block";
			setTimeout(function(){
				this.Galery.content.style.opacity = 1;
				this.Galery.galery.style.opacity = 1;
			},100);
		this.subImageClick();
	},
	closeGalery : function(){
		Galery.galery.style.opacity = 0;
		Galery.content.style.opacity = 0;

		setTimeout(function(){
			this.Galery.galery.style.display = "none";
		},300);
		for(var i = 0; i<Galery.subImageNum;i++){
			Galery.subImageHolder.removeChild(document.getElementsByClassName('sub_image')[0]);
		}
	},

	subImageClick  : function(){
		for(var i = 0; i < this.subImageNum;i++){
			(function(galery,i){
				galery.subImages[i].onclick = function(){
					galery.subImageActive(i);
					galery.changeImage(galery.subImages[i].lastElementChild.src);
					galery.controls.imgChangeCount = i;
				}
			})(this,i);
		}
	},
	subImageActive : function(num){
		for(var i = 0; i<document.getElementsByClassName("sub_image").length;i++){
			document.getElementsByClassName("sub_image")[i].style.transform = "scale(1)";
			document.getElementsByClassName("sub_image")[i].style.opacity = ".7";
		}
		document.getElementsByClassName("sub_image")[num].style.transform = "scale(1.1)";
		document.getElementsByClassName("sub_image")[num].style.opacity = "1";
	},

	changeImage : function(adres){
		this.content.style.opacity = 0;
		setTimeout(function(){
			this.Galery.img.src = adres;
			this.Galery.content.style.opacity = 1;

		},300);
	},

	start : function(){

		this.preSend();

		// controls section

		// if images more than 1 then put left right buttons else no

		this.controls.closeBtn.onclick = Galery.closeGalery;

		this.controls.plus.onclick = Galery.controls.zoomPlus;

		this.controls.minus.onclick = Galery.controls.zoomMinus;

		this.controls.leftBtn.onclick = function(){
			Galery.controls.left();
		}
		this.controls.rightBtn.onclick = function(){
			Galery.controls.right();
		}


		} 	

};

// main body script section  





Galery.start();
Item.start();










