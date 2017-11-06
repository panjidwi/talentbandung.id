function greeting(event){
	var nama = event.target.textContent;
	return alert("Halo " + nama);
}

var app = document.getElementsByClassName('greet');

for (var i = 0; i < app.length; i++) {
	app[i].addEventListener('click' , greeting);
}