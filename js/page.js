var fixed_head = document.getElementById('fixed_head');
var boundry = 300;

document.body.onscroll = function(){
	var py = pageYOffset;
	if(py >= boundry){
		fixed_head.style.top = "0px";
	}else{
		fixed_head.style.top = "-120px";
	}
}
