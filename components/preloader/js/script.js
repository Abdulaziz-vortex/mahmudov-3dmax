// Preloader section

document.body.onload = function(){
	var content = document.getElementById("PRELOADER");
		content.style.opacity = 0;
		setTimeout(function(){
			content.style.display = "none";
		},400);
}
