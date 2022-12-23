window.addEventListener('load', function () {
	var d = new Date();
	var spot = document.getElementById("date");
	spot.innerHTML = d.getFullYear();
	
	var header = document.getElementById("header");
	var fakeHeader = document.getElementById("fakeHeader");
	fakeHeader.innerHTML = header.innerHTML;
})
