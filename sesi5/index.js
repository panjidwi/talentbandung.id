//list taman
var listTaman = $('.daftar-taman.grid-layout');
	$.get ('https://www.ariona.net/talentbandung/', function(data, status){
		for (var i=0; i<data.length; i++) {
			var taman = '<div class="grid-item">'+'<article class="taman">'+'<figure>'+'<img src="'+data[i].image.thumbnail+'"/>'+'</figure>'+'<div class="taman-detail">'+'<h2>'+'<span class="title">'+data[i].nama+'</span>'+'</h2>'+'<p>'+data[i].alamat+'</p>'+'</div>'+'</artcle>'+'</div>';
			listTaman.append(taman);
		}
    })
//filter
var filter = $('#filter');
filter.keyup(filtertaman);

function filtertaman(){
    var taman = $('.taman');
    for (var i = 0; i < taman.length; i++) {
        var item = $(taman[i]).text().toLowerCase();
        if (item.indexOf(filter.val().toLowerCase()) != -1) {
            $(taman[i]).slideDown();
        }else {
            $(taman[i]).slideUp();
        }
    }
}