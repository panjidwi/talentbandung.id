function greeting(event){
	var nama = event.target.textContent;
	return alert("Halo " + nama);
}

var btn = document.getElementsByClassName('greet');

for (var i = 0; i < btn.length; i++) {
	btn[i].addEventListener('click' , greeting);
}